import React from "react"
import "./main.css"
import { ReactComponent as ChevronLeft } from "./assets/chevron-left-solid.svg"
import { Typography } from "../Typography/Typography"

type BreadcrumbProps = {
  children?: React.ReactNode
}

export const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb group/breadcrumb">
      <ChevronLeft className="breadcrumb-chevron" />
      <Typography className="breadcrumb-text" type="body">
        {children}
      </Typography>
    </nav>
  )
}
