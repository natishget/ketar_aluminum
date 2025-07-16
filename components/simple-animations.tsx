"use client"

export function SimpleAnimations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Very subtle floating shapes - reduced opacity and slower animations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-5" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-lg opacity-8 transform -rotate-12" />
      <div className="absolute bottom-20 left-1/4 w-40 h-2 bg-gradient-to-r from-green-200 to-transparent opacity-15" />
      <div
        className="absolute bottom-40 right-1/3 w-28 h-28 border border-red-200 rounded-full opacity-8 animate-spin"
        style={{ animationDuration: "60s" }}
      />

      {/* Subtle hexagon pattern - no blinking */}
      <div className="absolute top-1/3 right-10 opacity-3">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            opacity="0.3"
          />
          <polygon
            points="50,15 75,30 75,70 50,85 25,70 25,30"
            fill="none"
            stroke="#ef4444"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Very subtle grid pattern */}
      <div className="absolute bottom-10 left-10 opacity-2">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <pattern id="simple-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#simple-grid)" />
        </svg>
      </div>

      {/* Subtle background gradient - no animation */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-50 to-red-50 rounded-full opacity-3 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}
