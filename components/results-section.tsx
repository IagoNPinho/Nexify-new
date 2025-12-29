"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 120, suffix: "+", label: "Projetos Entregues" },
  { value: 300, suffix: "%", label: "Aumento Médio em Conversão" },
  { value: 50, suffix: "+", label: "Empresas Atendidas" },
  { value: 5, suffix: "+", label: "Anos de Experiência" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => {
      el.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
    })
  }, [])

  return (
    <section id="resultados" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4">
            Nossos Resultados
          </span>
          <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Resultados que <span className="gradient-text">Falam por Si</span>
          </h2>
          <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto text-lg">
            Números que demonstram nosso compromisso com a excelência e a satisfação dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-on-scroll text-center p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-purple-500/50 transition-all group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
