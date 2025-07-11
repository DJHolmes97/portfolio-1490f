import Link from "next/link"
import "./main.css"

type NavLinkProps = {
  href: string
  className?: string
  children?: React.ReactNode
}

export const NavLink = ({ href, className, children }: NavLinkProps) => {
  return (
    <Link href={href} className={`nav-link group/nav-link ${className}`}>
      <span className="nav-link-text">{children}</span>
    </Link>
  )
}
