// components/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    setErrors({});

    if (!validate()) {
      setSubmitMessage("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || "Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission network error:", error);
      setSubmitMessage("Network error: Could not reach the server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = submitMessage?.includes("successfully");

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="p-8 rounded-lg shadow-xl max-w-lg mx-auto"
    >
      <h3 className="text-3xl font-bold text-center text-byteops-primary dark:text-byteops-secondary mb-8">
        Send Us a Message
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="floating-label-group relative">
          <Input
            id="name"
            type="text"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "peer pt-6 pb-2",
              errors.name && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          <Label
            htmlFor="name"
            className="absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-byteops-primary peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1"
          >
            Name
          </Label>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="floating-label-group relative">
          <Input
            id="email"
            type="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "peer pt-6 pb-2",
              errors.email && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          <Label
            htmlFor="email"
            className="absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-byteops-primary peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1"
          >
            Email
          </Label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="mb-4 floating-label-group relative">
        <Input
          id="subject"
          type="text"
          placeholder=" "
          value={formData.subject}
          onChange={handleChange}
          className={cn(
            "peer pt-6 pb-2",
            errors.subject && "border-red-500 focus-visible:ring-red-500"
          )}
        />
        <Label
          htmlFor="subject"
          className="absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-byteops-primary peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1"
        >
          Subject
        </Label>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div className="mb-6 floating-label-group relative">
        <Textarea
          id="message"
          placeholder=" "
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={cn(
            "peer pt-6 pb-2 resize-y",
            errors.message && "border-red-500 focus-visible:ring-red-500"
          )}
        />
        <Label
          htmlFor="message"
          className="absolute left-3 top-4 text-sm text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-byteops-primary peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1"
        >
          Message
        </Label>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-byteops-primary to-byteops-magenta hover:from-byteops-magenta hover:to-byteops-primary text-white font-semibold py-3 px-8 text-lg rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
        ) : (
          "Send Message"
        )}
      </Button>

      <AnimatePresence>
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 flex items-center justify-center gap-2 text-sm ${isSuccess ? "text-green-500" : "text-red-500"}`}
          >
            {isSuccess && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <CheckCircle2 size={18} />
              </motion.div>
            )}
            <span>{submitMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}