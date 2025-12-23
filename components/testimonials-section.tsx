"use client"

import { useEffect, useRef } from "react"
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el, index) => {
      ;(el as HTMLElement).style.animationDelay = `${index * 100}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="depoimentos" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 duration-500 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4">
            Depoimentos
          </span>
          <h2 className="animate-on-scroll opacity-0 duration-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            O que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="animate-on-scroll opacity-0 duration-500 text-muted-foreground max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 duration-500 p-6 rounded-2xl bg-card border border-border hover:border-purple-500/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
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
