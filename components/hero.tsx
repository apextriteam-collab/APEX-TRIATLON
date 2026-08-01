import Image from "next/image"
import { ArrowRight, Waves, Bike, Footprints } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-brand-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Club Deportivo de Triatlón
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-4xl lg:text-6xl">
            Formamos personas <span className="text-gradient-brand">Desarrollamos triatletas </span> Inspiramos campeones.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            En APEX fusionamos natación, ciclismo y carrera con entrenamiento
            profesional y una comunidad que empuja hacia el límite. Tu mejor
            versión empieza aquí.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#unete" />}
              nativeButton={false}
              size="lg"
              className="bg-gradient-brand text-brand-foreground hover:opacity-90"
            >
              Comienza a entrenar
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#categorias" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-brand/30 text-brand hover:bg-accent"
            >
              Ver Categorías
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-brand/15 pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Atletas</dt>
              <dd className="font-display text-1xl font-bold text-foreground">Proximamente...</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Podios</dt>
              <dd className="font-display text-1xl font-bold text-foreground">Proximamente...</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Años</dt>
              <dd className="font-display text-1xl font-bold text-foreground">0.1</dd>
            </div>
          </dl> 
        </div>

        <div className="relative animate-float-up">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-brand/20 ring-1 ring-brand/10">
            <Image
              src="/images/hero-triathlon.png"
              alt="Triatleta entrenando ciclismo al amanecer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
          </div>

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-6 rounded-2xl border border-border bg-background/95 px-6 py-4 shadow-xl backdrop-blur">
            {[
              { icon: Waves, label: "Natación" },
              { icon: Bike, label: "Ciclismo" },
              { icon: Footprints, label: "Carrera" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="flex size-9 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground">
                  <Icon className="size-4" />
                </span>
                <span className="text-xs font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
