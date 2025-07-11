import React from "react"
import "./main.css"
import { ReactComponent as LinkIcon } from "./assets/link-icon.svg"
import NextLink from "next/link"

type LinkProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export const Link = ({ children, href, className }: LinkProps) => {
  return (
    <NextLink href={href} className={`link group/link ${className}`}>
      {children}
      <span className="link-icon">
        <LinkIcon />
      </span>
    </NextLink>
  )
}
