import React from "react"
import "./main.css"
import ChevronLeft from "@/icons/chevron-icon.svg"
import { Typography } from "../Typography/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

type BreadcrumbProps = {
  children?: React.ReactNode
}

export const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb group/breadcrumb">
      <FontAwesomeIcon icon={faChevronLeft} className="breadcrumb-icon" />
      <Typography className="breadcrumb-text" type="body">
        {children}
      </Typography>
    </nav>
  )
}
