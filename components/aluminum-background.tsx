"use client"

import { useEffect, useRef } from "react"

export function AluminumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Reduced particle system for subtlety
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create fewer particles with lower opacity
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.1 + 0.05,
        color: Math.random() > 0.5 ? "#10b981" : "#ef4444",
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Draw very subtle connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(156, 163, 175, ${0.05 * (1 - distance / 80)})`
              ctx.lineWidth = 0.3
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.2 }} />
}

// Simplified professional shapes - no footer background shapes
export function AluminumShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Very subtle floating geometric shapes - only in hero areas */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-5" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-lg opacity-8 transform -rotate-12" />
      <div className="absolute bottom-20 left-1/4 w-40 h-2 bg-gradient-to-r from-green-200 to-transparent opacity-10" />

      {/* Subtle hexagon pattern - no animation */}
      <div className="absolute top-1/3 right-10 opacity-5">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  )
}
