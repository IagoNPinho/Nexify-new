"use client"

import { useEffect, useRef } from "react"
import { Globe, Rocket, ShoppingCart, Cog, Brain, Layers, Cloud } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Sites institucionais modernos e responsivos que transmitem credibilidade e geram resultados para sua empresa.",
  },
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas otimizadas para converter visitantes em leads qualificados, com design persuasivo e performance máxima.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Profissional",
    description: "Lojas virtuais completas e escaláveis, com checkout otimizado e integrações de pagamento seguras.",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description:
      "Elimine tarefas repetitivas e aumente a produtividade com automações inteligentes e integrações de sistemas.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Soluções com IA para chatbots, análise de dados, processamento de linguagem natural e muito mais.",
  },
  {
    icon: Layers,
    title: "Plataformas Digitais",
    description: "Sistemas web personalizados para gerenciar seu negócio, desde CRMs até portais de clientes.",
  },
  {
    icon: Cloud,
    title: "SaaS (Software as a Service)",
    description: "Desenvolvimento de produtos SaaS escaláveis, desde a concepção até o lançamento no mercado.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el, index) => {
      ;(el as HTMLElement).style.animationDelay = `${index * 100}ms`
      el.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
    })
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4">
            Nossos Serviços
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Soluções para <span className="gradient-text">Todas as Necessidades</span>
          </h2>
          <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto text-lg">
            Da ideia à implementação, oferecemos um portfólio completo de serviços para transformar sua presença
            digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative p-6 rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
