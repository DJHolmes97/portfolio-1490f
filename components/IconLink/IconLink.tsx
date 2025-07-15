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
}

export const IconLink = ({
  icon,
  href,
  className,
  download,
}: IconLinkProps) => {
  return (
    <Link href={href} className={`icon-link ${className}`} download={download}>
      <FontAwesomeIcon icon={icon} className="icon-image" />
    </Link>
  )
}
