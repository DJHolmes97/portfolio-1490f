import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
import { Document, BLOCKS } from "@contentful/rich-text-types"
import { contentfulClient } from "@/utils"
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer"

type AboutSectionFields = {
  name: string
  content: Document
}

type AboutSectionSkeleton = {
  fields: AboutSectionFields
  contentTypeId: "aboutSection"
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography type="body">{children}</Typography>
    ),
  },
}

async function getAboutSection(): Promise<AboutSectionFields | null> {
  try {
    const res = await contentfulClient.getEntries<AboutSectionSkeleton>({
      content_type: "aboutSection",
      limit: 1,
    })

    if (res.items.length > 0) {
      const entry = res.items[0]
      return {
        name: entry.fields.name,
        content: entry.fields.content,
      }
    }
    return null
  } catch (error) {
    console.error("Error fetching About section:", error)
    return null
  }
}

export const AboutSection = async () => {
  const aboutEntry = await getAboutSection()

  if (!aboutEntry) {
    return (
      <section className="about-section">
        <Typography id="about" type="heading-2">
          About
        </Typography>
        <p>Unable to load about section.</p>
      </section>
    )
  }

  return (
    <section className="about-section">
      <Typography id="about" type="heading-2">
        About
      </Typography>
      {documentToReactComponents(aboutEntry.content, options)}
    </section>
  )
}
