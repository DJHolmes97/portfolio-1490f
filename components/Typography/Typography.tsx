import React from "react"
import "./main.css"
type TypographyProps = {
  children: React.ReactNode
  type: "heading-1" | "heading-2" | "body" | "caption"
  className?: string
  id?: string
}

export const Typography = ({
  children,
  type,
  className,
  id,
}: TypographyProps) => {
  switch (type) {
    case "heading-1":
      return (
        <h1 id={id} className={`heading-1 ${className}`}>
          {children}
        </h1>
      )
    case "heading-2":
      return (
        <h2 id={id} className={`heading-2 ${className}`}>
          {children}
        </h2>
      )
    case "body":
      return (
        <p id={id} className={`body ${className}`}>
          {children}
        </p>
      )
    case "caption":
      return (
        <span id={id} className={`caption ${className}`}>
          {children}
        </span>
      )
    default:
      return null
  }
}
