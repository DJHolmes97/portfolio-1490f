import "./page.css"
import {
  IconLink,
  IconLinkGroup,
  Title,
  Typography,
  NavLink,
  Navigation,
  AboutSection,
  ExperienceSection,
  EducationSection,
  ProjectSection,
} from "@/components"

import { faFile } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

type ColumnProps = {
  children?: React.ReactNode
}

const LeftColumn = ({ children }: ColumnProps) => {
  return <div className="left-column">{children}</div>
}

const RightColumn = ({ children }: ColumnProps) => {
  return <div className="right-column">{children}</div>
}

export default function Home() {
  return (
    <div className="h-full w-full">
      <main className="flex h-full w-full flex-row gap-10 relative max-md:flex-col max-md:gap-5">
        <LeftColumn>
          <Title />
          <Typography type="heading-2">Frontend Engineer</Typography>
          <Typography type="body">
            Crafting Seamless Interfaces with Precision and Purpose.
          </Typography>
          <Navigation>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#experience">EXPERIENCE</NavLink>
            <NavLink href="#education">EDUCATION</NavLink>
            <NavLink href="#projects">PROJECTS</NavLink>
          </Navigation>
          <IconLinkGroup>
            <IconLink icon={faGithub} href="https://github.com/DJHolmes97" />
            <IconLink
              icon={faLinkedin}
              href="https://www.linkedin.com/in/djholmes97/"
            />
            <IconLink
              icon={faFile}
              download="Daniel_Holmes_CV.pdf"
              href="/Daniel_Holmes_CV.pdf"
            />
          </IconLinkGroup>
        </LeftColumn>
        <RightColumn>
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectSection limit={5} />
        </RightColumn>
      </main>
      <footer className=""></footer>
    </div>
  )
}
