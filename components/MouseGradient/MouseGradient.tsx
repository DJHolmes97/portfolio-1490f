"use client"
import { useEffect } from "react"

export const MouseGradient = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Add scroll offsets to account for page scroll
      const scrollX = window.scrollX || window.pageXOffset
      const scrollY = window.scrollY || window.pageYOffset

      // Calculate absolute position relative to the document
      const absoluteX = clientX + scrollX
      const absoluteY = clientY + scrollY
      // Set CSS custom properties for mouse position
      document.documentElement.style.setProperty("--mouse-x", `${absoluteX}px`)
      document.documentElement.style.setProperty("--mouse-y", `${absoluteY}px`)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return null
}
