"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ato Bekele Tadesse",
    title: "Construction Manager",
    company: "Ethiopian Construction Corp",
    avatar: "BT",
    rating: 5,
    text: "Ketar Aluminum has been our trusted partner for over 8 years. Their anodized profiles are of exceptional quality and their technical services are unmatched in Ethiopia.",
    color: "green",
  },
  {
    id: 2,
    name: "W/ro Meron Haile",
    title: "Project Director",
    company: "Addis Development",
    avatar: "MH",
    rating: 5,
    text: "The curtain wall systems provided by Ketar transformed our commercial building project. Professional installation and excellent customer service throughout.",
    color: "red",
  },
  {
    id: 3,
    name: "Ato Samuel Girma",
    title: "Operations Manager",
    company: "Modern Buildings Ltd",
    avatar: "SG",
    rating: 5,
    text: "Outstanding quality aluminum doors and windows. Ketar's attention to detail and commitment to deadlines makes them our preferred supplier.",
    color: "green",
  },
  {
    id: 4,
    name: "W/ro Hanan Ahmed",
    title: "Architect",
    company: "Design Studio Ethiopia",
    avatar: "HA",
    rating: 5,
    text: "Ketar's powder coating finishes are beautiful and durable. They understand architectural requirements and deliver exactly what we need.",
    color: "red",
  },
  {
    id: 5,
    name: "Ato Dawit Mekonnen",
    title: "Facility Manager",
    company: "Ethiopian Airlines",
    avatar: "DM",
    rating: 5,
    text: "Reliable, professional, and always delivers on time. Ketar Aluminum has been instrumental in our facility upgrade projects.",
    color: "green",
  },
]

export function InteractiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()

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
                <div className="flex items-center mb-6">
                  <Quote
                    className={`h-8 w-8 mr-3 ${testimonial.color === "green" ? "text-green-500" : "text-red-500"}`}
                  />
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${
                      testimonial.color === "green" ? "from-green-500 to-green-600" : "from-red-500 to-red-600"
                    } rounded-full flex items-center justify-center mr-4`}
                  >
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
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
                index === currentIndex ? "bg-green-600" : "bg-gray-300 hover:bg-gray-400"
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
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
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
  )
}
