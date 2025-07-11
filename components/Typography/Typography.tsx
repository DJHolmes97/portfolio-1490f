type TypographyProps = {
  children: React.ReactNode
  type: "heading-1" | "heading-2" | "body" | "caption"
  className?: string
}
export const Typography = ({ children, type, className }: TypographyProps) => {
  switch (type) {
    case "heading-1":
      return <h1 className={`heading-1 ${className}`}>{children}</h1>
    case "heading-2":
      return <h2 className={`heading-2 ${className}`}>{children}</h2>
    case "body":
      return <p className={`body ${className}`}>{children}</p>
    case "caption":
      return <span className={`caption ${className}`}>{children}</span>
    default:
      return null
  }
}
