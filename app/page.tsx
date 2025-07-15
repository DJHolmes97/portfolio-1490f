import "./page.css"
import {
  IconLink,
  IconLinkGroup,
  Title,
  Typography,
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
      <main className="flex h-full w-full flex-col">
        <div className="flex h-full w-full flex-row gap-10 relative max-md:flex-col max-md:gap-5">
          <LeftColumn>
            <Title />
            <Typography type="heading-2">Frontend Engineer</Typography>
            <Typography type="body">
              Crafting Seamless Interfaces with Precision and Purpose.
            </Typography>
            <Navigation />
            <IconLinkGroup>
              <IconLink
                icon={faGithub}
                href="https://github.com/DJHolmes97"
                label="Github Repo"
              />
              <IconLink
                icon={faLinkedin}
                href="https://www.linkedin.com/in/djholmes97/"
                label="LinkedIn Profile"
              />
              <IconLink
                icon={faFile}
                download="Daniel_Holmes_CV.pdf"
                href="/Daniel_Holmes_CV.pdf"
                label="Resume"
              />
            </IconLinkGroup>
          </LeftColumn>
          <RightColumn>
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectSection limit={5} />
          </RightColumn>
        </div>
        <footer className="p-2">
          <Typography type="caption" className="footer-text">
            © {new Date().getFullYear()} Daniel Holmes. All rights reserved.
            Built with Next.js, TypeScript, and Contentful. Heavily inspired by
            the portfolio of{" "}
            <a
              href="https://www.brittanychiang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-link-primary-hover"
            >
              Brittany Chiang
            </a>
            . Source code available on{" "}
            <a
              href="https://github.com/DJHolmes97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-link-primary-hover"
            >
              GitHub
            </a>
            .
          </Typography>
        </footer>
      </main>
    </div>
  )
}
