"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Plataforma E-commerce de iPhones",
    category: "E-commerce",
    description:
      "Loja virtual completa com gestão de estoque, múltiplos meios de pagamento e integração com transportadoras.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "App de Gestão de Projetos",
    category: "SaaS",
    description:
      "Sistema completo para gerenciamento de projetos com dashboards, relatórios e colaboração em tempo real.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Dashboard de Análise de Dados",
    category: "Plataforma Digital",
    description: "Painel de business intelligence com visualizações interativas e relatórios automatizados.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Landing Pages para Advogados",
    category: "Landing Page",
    description: "Páginas de alta conversão para escritórios de advocacia, otimizadas para Google Ads.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el, index) => {
      ;(el as HTMLElement).style.animationDelay = `${index * 100}ms`
      el.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
    })
  }, [])

  return (
    <section id="projetos" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4">
            Portfólio
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Nossos <span className="gradient-text">Projetos em Destaque</span>
          </h2>
          <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-purple-400 mb-2">{project.category}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              {/* Default overlay for touch devices */}
              <div className="p-6 md:hidden">
                <span className="text-xs font-medium text-purple-400 mb-2 block">{project.category}</span>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
