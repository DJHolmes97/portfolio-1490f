import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
type DateProps = {
  from: string
  to: string
}

export const Date = ({ from, to }: DateProps) => {
  return (
    <span className="date-container">
      <Typography type="caption" className="date-text">
        {from}
      </Typography>
      <Typography type="caption" className="date-text">
        {to}
      </Typography>
    </span>
  )
}
