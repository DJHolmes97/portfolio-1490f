import Link from "next/link"
import "./main.css"

type NavLinkProps = {
  href: string
  className?: string
  children?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export const NavLink = ({
  href,
  className,
  children,
  isActive,
  onClick,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`nav-link group/nav-link ${
        isActive ? "nav-link--active" : ""
      } ${className}`}
      onClick={onClick}
    >
      <span className="nav-link-text">{children}</span>
    </Link>
  )
}
