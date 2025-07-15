import { Breadcrumb, ProjectSection, Typography } from "@/components"

export default function Projects() {
  return (
    <div className="h-full w-full">
      <main className="flex h-full w-full flex-col gap-2 relative max-md:gap-1">
        <Typography type="heading-1" className="projects-title">
          Projects
        </Typography>
        <Breadcrumb href="/">Back to home</Breadcrumb>
        <ProjectSection hideLink />
      </main>
      <footer className=""></footer>
    </div>
  )
}
