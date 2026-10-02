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
  const rafRef = useRef(0);
  const [enabled, setEnabled] = useState(false);

  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * -height,
      length: Math.random() * 16 + 8,
      speed: Math.random() * 2.2 + 1.4,
      opacity: Math.random() * 0.35 + 0.08,
      width: Math.random() * 1.5 + 0.8,
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = window.innerWidth < 640 ? 55 : 90;
    const resize = () => {
      canvas.width = canvas.offsetWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height = canvas.offsetHeight * Math.min(window.devicePixelRatio, 2);
      ctx.setTransform(Math.min(window.devicePixelRatio, 2), 0, 0, Math.min(window.devicePixelRatio, 2), 0, 0);
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(canvas.offsetWidth, canvas.offsetHeight)
      );
    };
    resize();

    let visible = true;
    const onVis = () => {
      visible = !document.hidden;
      if (visible) rafRef.current = requestAnimationFrame(tick);
    };
    const onResize = () => resize();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", onResize);

    const tick = () => {
      if (!visible) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        p.y += p.speed;
        if (p.y > h) {
          p.y = -p.length;
          p.x = Math.random() * w;
        }
        const g = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
        g.addColorStop(0, "rgba(59,156,255,0)");
        g.addColorStop(1, `rgba(59,156,255,${p.opacity})`);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.length);
        ctx.strokeStyle = g;
        ctx.lineWidth = p.width;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, createParticle]);

  if (!enabled) return null;
  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}
