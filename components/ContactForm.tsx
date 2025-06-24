// components/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"; // Assuming you have cn utility from shadcn

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
    // Clear error for the field as user types
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
    setSubmitMessage(null); // Clear any previous submission messages
    setErrors({}); // Clear all errors

    if (!validate()) {
      setSubmitMessage("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true); // Disable button during submission
    try {
      const response = await fetch('/api/contact', { // Target your new API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const data = await response.json(); // Parse the JSON response from the API route

      if (response.ok) { // Check if the response status is 2xx
        setSubmitMessage(data.message || "Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
      } else {
        // Handle server-side validation errors or other API errors
        setSubmitMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission network error:", error);
      setSubmitMessage("Network error: Could not reach the server. Please check your connection.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="bg-byteops-bg-light dark:bg-[hsl(220_30%_10%)] p-8 rounded-lg shadow-xl max-w-lg mx-auto border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-3xl font-bold text-center text-byteops-primary dark:text-byteops-secondary mb-8">
        Send Us a Message
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="name" className="text-byteops-text-dark dark:text-byteops-text-light">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-byteops-text-dark dark:text-byteops-text-light">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="subject" className="text-byteops-text-dark dark:text-byteops-text-light">Subject</Label>
        <Input
          id="subject"
          type="text"
          placeholder="Subject of your message"
          value={formData.subject}
          onChange={handleChange}
          className={cn(errors.subject && "border-red-500 focus-visible:ring-red-500")}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div className="mb-6">
        <Label htmlFor="message" className="text-byteops-text-dark dark:text-byteops-text-light">Message</Label>
        <Textarea
          id="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={cn(errors.message && "border-red-500 focus-visible:ring-red-500 resize-y")}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-byteops-primary hover:bg-byteops-primary/90 text-byteops-text-light font-semibold py-3 px-8 text-lg rounded-lg shadow-md transition-all"
        disabled={isSubmitting} // Disable button while submitting
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitMessage && (
        <p className={`mt-4 text-center text-sm ${submitMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
          {submitMessage}
        </p>
      )}
    </motion.form>
  );
}