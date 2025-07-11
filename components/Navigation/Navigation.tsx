import React from "react"
import "./main.css"

type NavigationProps = {
  children?: React.ReactNode
}

export const Navigation = ({ children }: NavigationProps) => {
  return <nav className="navigation">{children}</nav>
}
