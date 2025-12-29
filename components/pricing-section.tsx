"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Desenvolvimento Web",
    description: "Ideal para empresas que precisam de um site institucional profissional",
    features: [
      "Design responsivo e moderno",
      "Otimização para SEO",
      "Painel administrativo",
      "Integração com analytics",
      "Suporte técnico incluso",
    ],
  },
  {
    name: "Landing Pages",
    description: "Perfeito para campanhas de marketing e captação de leads",
    popular: true,
    features: [
      "Alta taxa de conversão",
      "Otimizado para Google Ads",
      "Testes A/B inclusos",
      "Formulários inteligentes",
      "Relatórios de performance",
    ],
  },
  {
    name: "E-commerce",
    description: "Para negócios que querem vender online com estrutura profissional",
    features: [
      "Loja virtual completa",
      "Múltiplos meios de pagamento",
      "Gestão de estoque",
      "Integração com marketplaces",
      "Dashboard de vendas",
    ],
  },
  {
    name: "Automação",
    description: "Para empresas que buscam otimizar processos e escalar operações",
    features: [
      "Análise de processos",
      "Integração de sistemas",
      "Workflows automatizados",
      "Chatbots inteligentes",
      "Relatórios automatizados",
    ],
  },
]

export function PricingSection() {
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
    <section id="precos" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Planos e Preços
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Investimento que <span className="gradient-text">Gera Retorno</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Soluções personalizadas para cada necessidade. Valores podem variar conforme escopo do projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border transition-all duration-500 hover:shadow-lg hover-glow ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-600/10 to-blue-600/10 border-purple-500/50 hover:shadow-purple-500/20"
                  : "bg-card border-border hover:border-purple-500/30 hover:shadow-purple-500/10"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold animate-pulse-glow">
                  Mais Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${500 + index * 100 + i * 50}ms` : "0ms",
                    }}
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-sm text-muted-foreground mt-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-4"
          }`}
        >
          * Valores podem variar conforme escopo e complexidade do projeto. Entre em contato para um orçamento
          personalizado.
        </p>
      </div>
    </section>
  )
}
