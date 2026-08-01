import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const PLANS = [
  {
    name: "Iniciación",
    price: "$45",
    tagline: "Da tus primeros pasos en el triatlón",
    features: ["2 sesiones semanales", "Evaluación física inicial", "Acceso a la comunidad", "Fundamentos de las 3 disciplinas"],
    featured: false,
  },
  {
    name: "Competición",
    price: "$89",
    tagline: "El plan preferido de nuestros atletas",
    features: [
      "5 sesiones semanales",
      "Plan de entrenamiento personalizado",
      "Análisis de rendimiento por zonas",
      "Coach dedicado",
      "Preparación para carreras",
    ],
    featured: true,
  },
  {
    name: "Élite",
    price: "$149",
    tagline: "Rendimiento de alto nivel",
    features: ["Entrenamiento ilimitado", "Nutrición deportiva", "Test de laboratorio", "Estrategia de carrera 1 a 1"],
    featured: false,
  },
]

export function Programs() {
  return (
    <section id="programas" className="bg-gradient-brand-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-white">Membresías</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Elige el plan que se ajusta a tu meta
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Planes flexibles con acompañamiento profesional para cada nivel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-transparent bg-gradient-brand text-brand-foreground shadow-2xl shadow-brand/25 lg:scale-105"
                  : "border-border bg-card text-foreground shadow-sm"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-4 py-1 text-xs font-bold text-brand shadow">
                  Más popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.featured ? "text-brand-foreground/80" : "text-muted-foreground"}`}>
                {plan.tagline}
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                <span className={`pb-1 text-sm ${plan.featured ? "text-brand-foreground/80" : "text-muted-foreground"}`}>
                  /mes
                </span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-brand-foreground" : "text-brand"}`} />
                    <span className={plan.featured ? "text-brand-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                render={<a href="#unete" />}
                nativeButton={false}
                className={`mt-8 ${
                  plan.featured
                    ? "bg-background text-brand hover:bg-background/90"
                    : "bg-gradient-brand text-brand-foreground hover:opacity-90"
                }`}
              >
                Elegir {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
