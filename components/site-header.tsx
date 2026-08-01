"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Club", href: "#club" },
  { label: "Disciplinas", href: "#disciplinas" },
  { label: "Categorías", href: "#Categorias" },
  { label: "Eventos", href: "#eventos" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black backdrop-blur-md">
      <div className="relative mx-auto flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6 max-w-6xl">
        <a href="#inicio" className="flex items-center gap-2 py-1 transition-transform duration-300 hover:scale-105" aria-label="APEX Triatlón inicio">
          <Image
             src="/images/apex-logo-dark.jpeg"
  alt="APEX Triatlón"
  width={280}
  height={90}
  className="h-16 w-auto object-contain sm:h-20 md:h-22"
  priority
/>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/90 transition-colors hover:text-[#5b9bff]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="#unete" />}
            nativeButton={false}
            className="bg-gradient-brand font-semibold text-brand-foreground hover:opacity-90"
          >
            Únete al club
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="relative border-t border-white/10 bg-black backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-[#5b9bff]"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="#unete" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 bg-gradient-brand font-semibold text-brand-foreground hover:opacity-90"
            >
              Únete al club
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
