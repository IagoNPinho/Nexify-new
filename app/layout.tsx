import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexify | Desenvolvimento Web & Soluções Digitais Sob Medida",
  description:
    "A Nexify oferece desenvolvimento web profissional, landing pages de alta conversão, e-commerce, automação de processos e inteligência artificial. Transforme sua presença digital com soluções sob medida.",
  keywords: [
    "desenvolvimento web",
    "criação de sites profissionais",
    "landing pages",
    "e-commerce",
    "automação de processos",
    "software sob medida",
    "inteligência artificial",
    "SaaS",
  ],
  authors: [{ name: "Nexify" }],
  creator: "Nexify",
  openGraph: {
    title: "Nexify | Desenvolvimento Web & Soluções Digitais Sob Medida",
    description:
      "Transforme sua presença digital com soluções sob medida. Desenvolvimento web, landing pages, e-commerce e automação.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
