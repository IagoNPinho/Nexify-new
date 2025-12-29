"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart Brasil",
    content:
      "A Nexify transformou completamente nossa presença digital. O site novo gerou um aumento de 250% nos leads qualificados em apenas 3 meses.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Diretora de Marketing",
    company: "Inova Consultoria",
    content:
      "Profissionalismo excepcional. A equipe entendeu exatamente nossas necessidades e entregou muito além do esperado. Recomendo fortemente.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    role: "Fundador",
    company: "E-Shop Premium",
    content:
      "Nosso e-commerce desenvolvido pela Nexify superou todas as expectativas. Interface intuitiva, performance excelente e suporte impecável.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Gerente de Operações",
    company: "LogiTech Solutions",
    content:
      "A automação implementada pela equipe reduziu nosso tempo de processamento em 70%. Investimento que se pagou em menos de 2 meses.",
    rating: 5,
  },
]

export function TestimonialsSection() {
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
    <section id="depoimentos" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Depoimentos
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            O que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-purple-500/30 transition-all duration-500 hover-glow group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-yellow-500 text-yellow-500 transition-all duration-300 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${500 + index * 150 + i * 100}ms` : "0ms",
                    }}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
