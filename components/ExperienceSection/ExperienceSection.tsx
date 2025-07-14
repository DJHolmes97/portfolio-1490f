import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
import { Document } from "@contentful/rich-text-types"
import { contentfulClient } from "@/utils"
import { Experience } from "../Experience/Experience"

type ExperienceSectionFields = {
  title: string
  url: string
  skills: string[]
  startDate: string
  endDate: string
  content: Document
}

type ExperienceSectionSkeleton = {
  fields: ExperienceSectionFields
  contentTypeId: "experience"
}

async function getExperienceSection(): Promise<
  ExperienceSectionFields[] | null
> {
  try {
    const res = await contentfulClient.getEntries<ExperienceSectionSkeleton>({
      content_type: "experience",
    })

    if (res.items.length > 0) {
      const entries = res.items
      return entries.map((entry) => ({
        title: entry.fields.title,
        url: entry.fields.url,
        skills: entry.fields.skills,
        startDate: entry.fields.startDate,
        endDate: entry.fields.endDate,
        content: entry.fields.content,
      }))
    }
    return null
  } catch (error) {
    console.error("Error fetching About section:", error)
    return null
  }
}

export const ExperienceSection = async () => {
  const experienceEntry = await getExperienceSection()

  if (!experienceEntry) {
    return (
      <section className="experience-section">
        <Typography id="experience" type="heading-2">
          Experience
        </Typography>
        <Typography type="body">Unable to load experience section.</Typography>
      </section>
    )
  }

  return (
    <section className="experience-section">
      <Typography id="experience" type="heading-2">
        Experience
      </Typography>
      <ul className="experience-list">
        {experienceEntry.reverse().map((item) => (
          <Experience
            key={item.title.replace(/\s+/g, "-").toLowerCase()}
            title={item.title}
            url={item.url}
            skills={item.skills}
            startDate={item.startDate}
            endDate={item.endDate}
            content={item.content}
          />
        ))}
      </ul>
    </section>
  )
}
