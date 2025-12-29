"use client"

import { useEffect, useRef, useState } from "react"
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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nossos Serviços
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Soluções para <span className="gradient-text">Todas as Necessidades</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Da ideia à implementação, oferecemos um portfólio completo de serviços para transformar sua presença
            digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 hover-glow ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
