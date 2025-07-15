import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

type BreadcrumbProps = {
  children?: React.ReactNode
  href: string
}

export const Breadcrumb = ({ children, href }: BreadcrumbProps) => {
  return (
    <Link href={href} className="breadcrumb group/breadcrumb">
      <FontAwesomeIcon icon={faChevronLeft} className="breadcrumb-icon" />
      <Typography className="breadcrumb-text" type="body">
        {children}
      </Typography>
    </Link>
  )
}
