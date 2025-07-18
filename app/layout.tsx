import type { Metadata } from "next"
import "@/globalcss" // Import global CSS
import { Container } from "@/components/Container/Container"
import { Inter } from "next/font/google"
import { MouseGradient } from "@/components"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Daniel Holmes | Frontend Developer",
  description:
    "Portfolio of Daniel Holmes, a frontend developer specializing in creating engaging and user-friendly web applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-bg-primary min-h-screen scroll-smooth ${inter.variable}`}
    >
      <MouseGradient />
      <body className={`flex antialiased justify-center ${inter.className}`}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
