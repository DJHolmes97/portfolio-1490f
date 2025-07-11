import React, { ReactNode } from "react"
import Link from "next/link"

type IconLinkProps = {
  icon: ReactNode
  href: string
  className?: string
}

export const IconLink = ({ icon, href, className }: IconLinkProps) => {
  return (
    <Link href={href} className={`icon-link ${className}`}>
      {icon}
    </Link>
  )
}
