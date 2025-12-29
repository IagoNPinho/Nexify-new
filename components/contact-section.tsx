"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

const serviceTypes = [
  "Desenvolvimento Web",
  "Landing Page",
  "E-commerce",
  "Automação de Processos",
  "Inteligência Artificial",
  "Plataforma Digital",
  "SaaS",
  "Outro",
]

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => {
      el.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const phone = "5585988224901"

  const text = `
Olá, tudo bem?

Me chamo ${name}.
${company ? `Empresa: ${company}` : ""}

Tenho interesse em um projeto profissional.

📌 Tipo de serviço: ${service}
📞 WhatsApp: ${whatsapp}
📧 E-mail: ${email}

📝 Detalhes do projeto:
${message || "Ainda não detalhado."}
  `.trim()

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

  setIsSubmitted(true)

  window.open(whatsappUrl, "_blank")

  setTimeout(() => setIsSubmitted(false), 3000)
}


  return (
    <section id="contato" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="animate-on-scroll inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-4">
              Entre em Contato
            </span>
            <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Solicite seu <span className="gradient-text">Orçamento</span>
            </h2>
            <p className="animate-on-scroll text-muted-foreground text-lg">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="animate-on-scroll p-8 rounded-2xl bg-card border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input id="name" placeholder="Seu nome completo" required className="bg-background" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder="Nome da empresa" className="bg-background" value={company} onChange={(e) => setCompany(e.target.value)}/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input id="whatsapp" type="tel" placeholder="(00) 00000-0000" required className="bg-background" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required className="bg-background" value={email}
  onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <Label htmlFor="service">Tipo de Serviço *</Label>
              <Select required onValueChange={setService}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecione o tipo de serviço" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6 space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Conte-nos mais sobre seu projeto..."
                rows={4}
                className="bg-background resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Mensagem Enviada!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Quero um Projeto Profissional
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
