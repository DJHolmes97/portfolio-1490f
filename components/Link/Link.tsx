import React from "react"
import "./main.css"
import NextLink from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

type LinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  download?: string
}

export const Link = ({ children, href, className, download }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`link group/link ${className}`}
      download={download}
    >
      {children}
      <span className="link-icon">
        <FontAwesomeIcon icon={faLink} />
      </span>
    </NextLink>
  )
}
