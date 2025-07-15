"use client"
import React from "react"
import "./main.css"
import { NavLink } from "../NavLink/NavLink"
import { useActiveSection } from "@/hooks/useActiveSelection"

type NavigationProps = {}

export const Navigation = ({}: NavigationProps) => {
  const sectionIds = ["about", "experience", "education", "projects"]

  const [activeId, setActiveId] = useActiveSection(sectionIds)

  const onClick = (id: string) => {
    setActiveId(id)
  }
  return (
    <nav className="navigation">
      {sectionIds.map((id) => (
        <NavLink
          key={id}
          href={`#${id}`}
          isActive={activeId === id}
          onClick={() => onClick(id)}
        >
          {id.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  )
}
