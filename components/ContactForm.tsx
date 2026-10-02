"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email.";
    if (!formData.subject.trim()) e.subject = "Subject is required.";
    if (!formData.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    if (!validate()) {
      setSubmitMessage("Please correct the errors in the form.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitMessage(data.message || "Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitMessage("Network error: could not reach the server. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = !!submitMessage?.toLowerCase().includes("success");

  const field = (id: string, label: string, auto: string, type = "text") => (
    <div>
      <Label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={formData[id as keyof typeof formData]}
        onChange={handleChange}
        autoComplete={auto}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        placeholder={label === "Message" ? undefined : `Your ${label.toLowerCase()}`}
        className={cn(errors[id] && "border-red-500 focus-visible:ring-red-500")}
      />
      {errors[id] && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="mx-auto w-full max-w-lg">
      <h3 className="font-display mb-6 text-center text-2xl font-bold text-byteops-base-dark">Send us a message</h3>
      <fieldset disabled={isSubmitting} className="space-y-4">
        <legend className="sr-only">Your details and message</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {field("name", "Name", "name")}
          {field("email", "Email", "email", "email")}
        </div>
        {field("subject", "Subject", "off")}
        <div>
          <Label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
            Message
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            autoComplete="off"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="How can we help? (training, website, AI automation…)"
            className={cn("resize-y", errors.message && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </fieldset>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 w-full rounded-full bg-gradient-to-r from-byteops-primary to-byteops-magenta py-5 text-base font-semibold text-white hover:shadow-lg"
      >
        {isSubmitting ? (
          <span aria-hidden="true" className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          "Send Message"
        )}
      </Button>

      <AnimatePresence>
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-live="polite"
            className={cn(
              "mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium",
              isSuccess ? "text-green-700" : "text-red-600"
            )}
          >
            {isSuccess && <CheckCircle2 size={18} aria-hidden="true" />}
            <span>{submitMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
