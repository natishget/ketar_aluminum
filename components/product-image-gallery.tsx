"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2, Maximize2 } from "lucide-react"
import Image from "next/image"

interface ProductImage {
  id: number
  src: string
  alt: string
  title: string
  category: string
}

interface ProductImageGalleryProps {
  productName: string
  images: ProductImage[]
}

export function ProductImageGallery({ productName, images }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
    setIsZoomed(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsZoomed(false)
  }

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = images[selectedImageIndex].src
    link.download = `${productName}-${images[selectedImageIndex].title}.jpg`
    link.click()
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${productName} - ${images[selectedImageIndex].title}`,
          text: `Check out this ${productName} image`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isModalOpen) return

    switch (e.key) {
      case "Escape":
        closeModal()
        break
      case "ArrowLeft":
        goToPrevious()
        break
      case "ArrowRight":
        goToNext()
        break
      case "z":
      case "Z":
        toggleZoom()
        break
    }
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Gallery</h3>
          <p className="text-gray-600">Click any image to view in full size</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
              onClick={() => openModal(index)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <ZoomIn className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <Badge className="bg-green-100 text-green-800 text-xs mb-2">{image.category}</Badge>
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{image.title}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Modal Content */}
          <div className="relative max-w-6xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold">{images[selectedImageIndex].title}</h3>
                  <p className="text-sm opacity-80">
                    {selectedImageIndex + 1} of {images.length}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleDownload} className="text-white hover:bg-white/20">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleShare} className="text-white hover:bg-white/20">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={toggleZoom} className="text-white hover:bg-white/20">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={closeModal} className="text-white hover:bg-white/20">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative h-[80vh] flex items-center justify-center">
              <div
                className={`relative transition-transform duration-300 ${
                  isZoomed ? "scale-150 cursor-move" : "cursor-zoom-in"
                }`}
                onClick={toggleZoom}
              >
                <Image
                  src={images[selectedImageIndex].src || "/placeholder.svg"}
                  alt={images[selectedImageIndex].alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="lg"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <div className="flex justify-center space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === selectedImageIndex ? "border-green-500" : "border-transparent hover:border-white/50"
                    }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Example usage component
export function ExampleProductGallery() {
  const sampleImages: ProductImage[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Aluminum sheet sample",
      title: "Premium Aluminum Sheet",
      category: "Sheets",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Custom aluminum extrusion",
      title: "Custom Extrusion Profile",
      category: "Extrusions",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Anodized aluminum finish",
      title: "Anodized Finish Sample",
      category: "Finishes",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Aluminum tube cutting",
      title: "Precision Cut Tubes",
      category: "Tubes",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Welded aluminum assembly",
      title: "Custom Welded Assembly",
      category: "Fabrication",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Powder coated aluminum",
      title: "Powder Coated Parts",
      category: "Finishes",
    },
  ]

  return <ProductImageGallery productName="Premium Aluminum Products" images={sampleImages} />
}
