import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
import { Document } from "@contentful/rich-text-types"
import { contentfulClient } from "@/utils"
import { Experience } from "../Experience/Experience"
import { Link } from "@/components/"

type EducationSectionFields = {
  title: string
  institution: string
  url: string
  grade: string
  startDate: string
  endDate: string
  content: Document
}

type EducationSectionSkeleton = {
  fields: EducationSectionFields
  contentTypeId: "education"
}

async function getEducationSection(): Promise<EducationSectionFields[] | null> {
  try {
    const res = await contentfulClient.getEntries<EducationSectionSkeleton>({
      content_type: "education",
    })

    if (res.items.length > 0) {
      const entries = res.items
      return entries.map((entry) => ({
        title: entry.fields.title,
        institution: entry.fields.institution,
        url: entry.fields.url,
        grade: entry.fields.grade,
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

export const EducationSection = async () => {
  const educationEntry = await getEducationSection()

  if (!educationEntry) {
    return (
      <section className="education-section">
        <Typography id="education" type="heading-2">
          Education
        </Typography>
        <Typography type="body">Unable to load education section.</Typography>
      </section>
    )
  }

  return (
    <section className="education-section">
      <Typography id="education" type="heading-2">
        Education
      </Typography>
      <ul className="education-list">
        {educationEntry.map((item) => (
          <Experience
            key={item.title.replace(/\s+/g, "-").toLowerCase()}
            title={item.title}
            subtitle={item.institution}
            url={item.url}
            skills={item.grade ? [item.grade] : []}
            startDate={item.startDate}
            endDate={item.endDate}
            content={item.content}
          />
        ))}
      </ul>
      <Link href="/resume">View my full resume</Link>
    </section>
  )
}
