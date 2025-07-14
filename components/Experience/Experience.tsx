import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
import { Document, BLOCKS, INLINES } from "@contentful/rich-text-types"
import { Date } from "../Date/Date"
import { PillGroup } from "../PillGroup/PillGroup"
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

type ExperienceProps = {
  title: string
  subtitle?: string
  url: string
  skills: string[]
  startDate: string
  endDate: string
  content: Document
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography type="body">{children}</Typography>
    ),
  },
}

export const Experience = ({
  title,
  subtitle,
  url,
  skills,
  startDate,
  endDate,
  content,
}: ExperienceProps) => {
  return (
    <li className="experience-item">
      <a href={url} className="experience-link group/experience">
        <div className="date-column">
          <Date from={startDate} to={endDate} />
        </div>
        <div className="details-column">
          <span className="title-container">
            <Typography type="heading-2" className="title">
              {title}
            </Typography>

            <span className="title-icon">
              <FontAwesomeIcon icon={faLink} />
            </span>
          </span>
          {subtitle && (
            <Typography type="body" className="subtitle">
              {subtitle}
            </Typography>
          )}
          {documentToReactComponents(content, options)}
          <PillGroup pills={skills} />
        </div>
      </a>
    </li>
  )
}
