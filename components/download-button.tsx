"use client"

import { useState } from "react"

export function DownloadButton() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => {
        // Replace with actual download link when available
        window.location.href = "#download"
      }}
      className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-lg inline-flex items-center gap-2 relative overflow-hidden group"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download Now
      {isHovering && <span className="ml-2 text-sm opacity-75">14 MB</span>}
    </button>
  )
}
