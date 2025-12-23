import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/images/logo-20oficial.png"
              alt="Nexify Logo"
              width={140}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Transformamos ideias em soluções digitais de alta performance. Desenvolvimento web, e-commerce, automação
              e inteligência artificial para escalar seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#servicos" className="hover:text-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-foreground transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-foreground transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:contato@nexify.com.br" className="hover:text-foreground transition-colors">
                  contato@nexify.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+5500000000000" className="hover:text-foreground transition-colors">
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Nexify. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
