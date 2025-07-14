import React, { ReactNode } from "react"
import Link from "next/link"
import "./main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type IconLinkProps = {
  icon: string
  href: string
  className?: string
}

export const IconLink = ({ icon, href, className }: IconLinkProps) => {
  return (
    <Link href={href} className={`icon-link ${className}`}>
      <FontAwesomeIcon icon={icon} className="icon-image" />
    </Link>
  )
}
