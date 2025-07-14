import React from "react"
import "./main.css"
import { Typography } from "../Typography/Typography"
import { Document } from "@contentful/rich-text-types"
import { contentfulClient } from "@/utils"
import { ProjectItem } from "../ProjectItem/ProjectItem"
import { Asset } from "contentful"
import { Link } from "../Link/Link"

type ProjectSectionFields = {
  title: string
  githubLink: string
  siteLink: string
  image: Asset
  postBody: Document
  techTags: string[]
}

type ProjectSectionSkeleton = {
  fields: ProjectSectionFields
  contentTypeId: "projects"
}

async function getProjectSection(): Promise<ProjectSectionFields[] | null> {
  try {
    const res = await contentfulClient.getEntries<ProjectSectionSkeleton>({
      content_type: "projects",
    })

    if (res.items.length > 0) {
      const entries = res.items
      return entries.map((entry) => ({
        title: entry.fields.title,
        githubLink: entry.fields.githubLink,
        siteLink: entry.fields.siteLink,
        image: entry.fields.image,
        postBody: entry.fields.postBody,
        techTags: entry.fields.techTags,
      }))
    }
    return null
  } catch (error) {
    console.error("Error fetching About section:", error)
    return null
  }
}

export const ProjectSection = async () => {
  const projectEntry = await getProjectSection()

  if (!projectEntry) {
    return (
      <section className="project-section">
        <Typography id="projects" type="heading-2">
          Projects
        </Typography>
        <Typography type="body">Unable to load project section.</Typography>
      </section>
    )
  }

  return (
    <section className="project-section">
      <Typography id="projects" type="heading-2">
        Projects
      </Typography>
      <ul className="project-list">
        {projectEntry.reverse().map((item) => (
          <ProjectItem
            key={item.title.replace(/\s+/g, "-").toLowerCase()}
            title={item.title}
            githubLink={item.githubLink}
            siteLink={item.siteLink}
            image={item.image}
            postBody={item.postBody}
            techTags={item.techTags}
          />
        ))}
      </ul>
      <Link href="/resume">View all my projects</Link>
    </section>
  )
}
