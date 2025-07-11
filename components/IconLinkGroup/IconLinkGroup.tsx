import React from "react"
import "./main.css"

type IconLinkGroupProps = {
  children?: React.ReactNode
}

export const IconLinkGroup = ({ children }: IconLinkGroupProps) => {
  return <div className="icon-link-group">{children}</div>
}
