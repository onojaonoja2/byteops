"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
}

export function RainfallEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollSpeedRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const animationFrameRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * -height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      width: Math.random() * 2 + 1,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });

      particlesRef.current = Array.from({ length: 150 }, () => createParticle(width, height));
    };

    updateDimensions();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeedRef.current = Math.abs(currentScrollY - lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;
    };

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollMultiplier = 1 + scrollSpeedRef.current * 0.1;
      scrollSpeedRef.current *= 0.95;

      particlesRef.current.forEach((particle) => {
        particle.y += particle.speed * scrollMultiplier;

        if (particle.y > canvas.height) {
          particle.y = -particle.length;
          particle.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createLinearGradient(
          particle.x,
          particle.y,
          particle.x,
          particle.y + particle.length
        );
        gradient.addColorStop(0, `rgba(0, 123, 255, 0)`);
        gradient.addColorStop(1, `rgba(0, 123, 255, ${particle.opacity})`);

        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x, particle.y + particle.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = particle.width;
        ctx.lineCap = "round";
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: dimensions.width, height: dimensions.height }}
    />
  );
}
