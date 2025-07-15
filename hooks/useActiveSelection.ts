import { useEffect, useState, useRef } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("")
  const rafRef = useRef<number>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateActiveSection = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const activeZoneTop = scrollY // Top of the viewport
      const activeZoneBottom = scrollY + windowHeight * 0.2 // Small zone at top (20% of screen height)

      let closestSection = ""
      let closestDistance = Infinity

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollY
          const elementBottom = elementTop + rect.height

          // Check if section intersects with active zone
          if (elementBottom > activeZoneTop && elementTop < activeZoneBottom) {
            const distanceFromCenter = Math.abs(
              (elementTop + elementBottom) / 2 -
                (activeZoneTop + activeZoneBottom) / 2
            )

            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter
              closestSection = id
            }
          }
        }
      })

      if (closestSection && closestSection !== activeId) {
        setActiveId(closestSection)
      }
    }

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      rafRef.current = requestAnimationFrame(updateActiveSection)
    }

    // Initial check
    updateActiveSection()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [sectionIds, activeId])

  return [activeId, setActiveId] as const
}
