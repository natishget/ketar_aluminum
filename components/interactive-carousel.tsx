"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Play,
  Pause,
} from "lucide-react";

import acwoLogo from "@/assets/home/our-clients/acwo.jpg";
import tsdeyLogo from "@/assets/home/our-clients/tseday-bank.jpg";
import ecwoLogo from "@/assets/home/our-clients/ecwo.png";
import getusLogo from "@/assets/home/our-clients/getus.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ato Bekele Tadesse",
    title: "Construction Manager",
    company: "Amhara Construction Works Organization",
    avatar: "BT",
    rating: 5,
    text: "Ketar Aluminum has been our trusted partner for over 8 years. Their anodized profiles are of exceptional quality and their technical services are unmatched in Ethiopia.",
    color: "green",
    companyLogo: acwoLogo,
  },
  {
    id: 2,
    name: "W/ro Meron Haile",
    title: "Project Director",
    company: "Tsedey Bank",
    avatar: "MH",
    rating: 5,
    text: "The curtain wall systems provided by Ketar transformed our commercial building project. Professional installation and excellent customer service throughout.",
    color: "red",
    companyLogo: tsdeyLogo,
  },
  {
    id: 3,
    name: "Ato Samuel Girma",
    title: "Getus Real Estate",
    company: "Modern Buildings Ltd",
    avatar: "SG",
    rating: 5,
    text: "Outstanding quality aluminum doors and windows. Ketar's attention to detail and commitment to deadlines makes them our preferred supplier.",
    color: "green",
    companyLogo: getusLogo,
  },
  {
    id: 4,
    name: "W/ro Hanan Ahmed",
    title: "Architect",
    company: "Ethiopian Construction Works Organization",
    avatar: "HA",
    rating: 5,
    text: "Ketar's powder coating finishes are beautiful and durable. They understand architectural requirements and deliver exactly what we need.",
    color: "red",
    companyLogo: ecwoLogo,
  },
];

export function InteractiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="grid md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${currentIndex}`}
              className={`bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 transform ${
                index === 1 ? "md:scale-105 md:z-10" : "md:scale-95"
              }`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col justify-center items-center text-center gap-y-14">
                  <Image
                    src={testimonial.companyLogo}
                    alt=""
                    className="w-32 h-32 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-500">
                    {testimonial.company}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dot Indicators */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-green-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="w-12 h-12 rounded-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Play/Pause Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full border-gray-400 text-gray-600 hover:bg-gray-50 bg-transparent ml-4"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-green-600 h-1 rounded-full transition-all duration-100"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
