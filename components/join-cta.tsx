"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function JoinCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="unete" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-center shadow-2xl shadow-brand/25 sm:px-12 sm:py-16">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-brand-foreground text-balance sm:text-4xl">
          Da el primer paso hacia tu próxima meta
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-foreground/85 text-pretty">
          Déjanos tus datos y un coach de APEX te contactará para agendar tu
          primera sesión sin costo.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-background/95 px-6 py-4 text-brand">
            <CheckCircle2 className="size-5" />
            <span className="font-semibold">¡Gracias! Te contactaremos muy pronto.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Tu correo electrónico"
              className="h-11 flex-1 rounded-lg border-0 bg-background/95 px-4 text-sm text-foreground shadow-sm outline-none ring-offset-2 placeholder:text-muted-foreground focus:ring-2 focus:ring-background"
            />
            <Button type="submit" className="h-11 bg-background text-brand hover:bg-background/90">
              Quiero unirme
              <Send className="size-4" />
            </Button>
          </form>
        )}

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-brand-foreground/85">
          <Phone className="size-4" />
          <span>¿Prefieres llamar?</span>
          <a href="tel:+573107970771" className="font-semibold text-brand-foreground underline underline-offset-4">
            +57 310 797 0771
          </a>
        </p>
      </div>
    </section>
  )
}
