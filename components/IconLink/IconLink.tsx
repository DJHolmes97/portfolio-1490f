import React from "react"
import Link from "next/link"
import "./main.css"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

type IconLinkProps = {
  icon: FontAwesomeIconProps["icon"]
  href: string
  className?: string
  download?: string
  label: string
}

export const IconLink = ({
  icon,
  href,
  className,
  download,
  label,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={`icon-link ${className}`}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} className="icon-image" />
      <span className="icon-text">{label}</span>
    </Link>
  )
}
