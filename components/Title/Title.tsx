import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"

export const Title = () => {
  return (
    <span className="title-container">
      <Typography
        type="heading-1"
        className="title-left"
      >
        Daniel
      </Typography>
      <Typography
        type="heading-1"
      >
        Holmes
      </Typography>
    </span>
  )
}
