import Image from "next/image"
import { Mail } from "lucide-react"
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/brand-icons"

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/apextriatlon" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/apextriatlon" },
  { icon: TikTokIcon, label: "TikTok", href: "https://tiktok.com/@apextriatlon" },
  { icon: Mail, label: "Correo", href: "mailto:apextri.team@gmail.com" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/apex-logo-dark.jpeg"
              alt="APEX Triatlón"
              width={280}
              height={90}
              className="h-16 w-auto object-contain sm:h-20 drop-shadow-[0_0_12px_rgba(91,155,255,0.2)] brightness-110"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Club deportivo de triatlón. Nado, ciclismo y carrera con
              entrenamiento profesional para alcanzar tu cima.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-[#5b9bff]/60 hover:bg-white/10 hover:text-[#5b9bff]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Club</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <li><a href="#club" className="hover:text-[#5b9bff]">El club</a></li>
              <li><a href="#disciplinas" className="hover:text-[#5b9bff]">Disciplinas</a></li>
              <li><a href="#programas" className="hover:text-[#5b9bff]">Programas</a></li>
              <li><a href="#eventos" className="hover:text-[#5b9bff]">Eventos</a></li>
              <li><a href="#unete" className="hover:text-[#5b9bff]">Únete</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Contacto</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <li>
                <a href="mailto:apextri.team@gmail.com" className="hover:text-[#5b9bff]">
                  apextri.team@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+573107970771" className="hover:text-[#5b9bff]">
                  +57 310 797 0771
                </a>
              </li>
              <li>Lun a Sáb · 6:00 - 21:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} APEX Triatlón. Todos los derechos reservados.</p>
          <p>Nado · Ciclismo · Carrera</p>
        </div>
      </div>
    </footer>
  )
}
