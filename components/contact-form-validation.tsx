"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export function ContactFormValidation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const cleanedPhone = phone.replace(/[\s\-]/g, "");
    const phoneRegex = /^(\+?\d{7,16})$/;
    return phoneRegex.test(cleanedPhone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      const myMessage = `service request: %0A - Full Name: ${formData.name}%0A - Email: ${formData.email}%0A - Phone: ${formData.phone}%0A - Company Name: ${formData.company}%0A - Subject: ${formData.subject}%0A - Message: ${formData.message}%0A%0A%0A Powered By ByteForge!!`;

      const token = process.env.NEXT_PUBLIC_TELEGRAM_BOTTOKEN;
      const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${myMessage}&parse_mode=html`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-xl border-0">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for contacting K & M Aluminum. We'll get back to you
            within 24 hours.
          </p>
          <Badge className="bg-green-100 text-green-800">
            Response within 24 hours
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-xl border-0">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
          Get In Touch
        </CardTitle>
        <p className="text-lg text-gray-600">
          Ready to discuss your aluminum needs? Send us a message and we'll
          respond promptly.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                }`}
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                }`}
                placeholder="+251-900-00-0000"
              />
              {errors.phone && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.subject
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500 focus:border-green-500"
              }`}
            >
              <option value="">Select a subject</option>
              <option value="quote">Request Quote</option>
              <option value="custom-fabrication">Custom Fabrication</option>
              <option value="aluminum-extrusions">Aluminum Extrusions</option>
              <option value="surface-treatments">Surface Treatments</option>
              <option value="general-inquiry">General Inquiry</option>
              <option value="support">Technical Support</option>
            </select>
            {errors.subject && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.subject}
              </div>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500 focus:border-green-500"
              }`}
              placeholder="Tell us about your aluminum needs, project requirements, or any questions you have..."
            />
            <div className="flex justify-between items-center mt-2">
              {errors.message ? (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.message}
                </div>
              ) : (
                <div></div>
              )}
              <div className="text-sm text-gray-500">
                {formData.message.length}/500 characters
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg font-semibold shadow-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-center text-sm text-gray-600">
            By submitting this form, you agree to our privacy policy and terms
            of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
