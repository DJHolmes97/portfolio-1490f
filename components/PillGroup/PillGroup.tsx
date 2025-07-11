import React from "react"
import "./main.css"

type PillProps = {
  children: React.ReactNode
}

type PillGroupProps = {
  pills: string[]
}

const Pill = ({ children }: PillProps) => {
  return <li className="pill">{children}</li>
}

export const PillGroup = ({ pills }: PillGroupProps) => {
  return (
    <ul className="pill-group">
      {pills.map((pill, index) => (
        <Pill key={index}>{pill}</Pill>
      ))}
    </ul>
  )
}
