import { Document, BLOCKS, INLINES } from "@contentful/rich-text-types"
import "./main.css"
import { Asset } from "contentful"
import { IconLinkGroup } from "../IconLinkGroup/IconLinkGroup"
import { IconLink } from "../IconLink/IconLink"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { PillGroup } from "../PillGroup/PillGroup"
import { Typography } from "../Typography/Typography"
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer"

type ProjectItemProps = {
  title: string
  githubLink: string
  siteLink: string
  image: Asset
  postBody: Document
  techTags: string[]
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography type="body">{children}</Typography>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="inline-link">
          {children}
        </a>
      )
    },
  },
}

export const ProjectItem = ({
  title,
  githubLink,
  siteLink,
  image,
  postBody,
  techTags,
}: ProjectItemProps) => {
  const imageUrl = image?.fields?.file?.url
  return (
    <li className="project-item">
      <div className="image-wrapper">
        <img
          className="project-image"
          src={imageUrl as string}
          alt={`${title} project screenshot`}
        />
      </div>
      <div className="project-details">
        <div className="project-header">
          <Typography type="heading-2">{title}</Typography>
          <IconLinkGroup>
            <IconLink href={githubLink} icon={faGithub} />
            <IconLink href={siteLink} icon={faLink} />
          </IconLinkGroup>
        </div>
        <div className="project-description">
          {documentToReactComponents(postBody, options)}
        </div>
        <PillGroup pills={techTags} />
      </div>
    </li>
  )
}
