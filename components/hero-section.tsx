"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".animate-on-load")
    elements?.forEach((el) => {
      el.classList.remove("opacity-0")
    })
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/20" />

      {/* Aurora effect layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-violet-600/10 animate-aurora opacity-50" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blue glow */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full animate-glow-pulse"
          style={{ animationDelay: "0s" }}
        />

        {/* Secondary purple glow */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full animate-glow-drift"
          style={{ animationDelay: "-2s" }}
        />

        {/* Accent violet glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full animate-glow-rotate" />

        {/* Small accent glows */}
        <div
          className="absolute top-[10%] right-[20%] w-[200px] h-[200px] bg-cyan-500/20 rounded-full animate-glow-pulse"
          style={{ animationDelay: "-1s" }}
        />
        <div
          className="absolute bottom-[15%] left-[15%] w-[250px] h-[250px] bg-pink-500/15 rounded-full animate-glow-drift"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Grid Pattern with shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-transparent to-background/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-load animate-fade-in-up cascade-delay-1">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-6 hover-glow transition-all">
              Software House Premium
            </span>
          </div>

          <h1 className="animate-on-load animate-text-reveal cascade-delay-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
            Soluções Digitais Sob Medida para <span className="gradient-text">Empresas que Querem Crescer Online</span>
          </h1>

          <p className="animate-on-load animate-fade-in-up cascade-delay-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Transformamos suas ideias em soluções digitais de alta performance. Desenvolvimento web, e-commerce,
            automação e inteligência artificial para escalar seu negócio.
          </p>

          <div className="animate-on-load animate-fade-in-up cascade-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 animate-pulse-glow"
            >
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-xl border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-105 bg-transparent hover-glow"
            >
              <a href="https://wa.me/5585988224901" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="animate-on-load animate-fade-in-up cascade-delay-5 mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm group-hover:text-foreground transition-colors">+50 Projetos Entregues</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
              <span className="text-sm group-hover:text-foreground transition-colors">+35 Empresas Atendidas</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
              <span className="text-sm group-hover:text-foreground transition-colors">+3 Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
