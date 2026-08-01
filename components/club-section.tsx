import Image from "next/image"
import { HeartPulse, Users, Trophy, Target } from "lucide-react"

const VALUES = [
  { icon: HeartPulse, title: "Pasión", desc: "El corazón late al ritmo del entrenamiento." },
  { icon: Users, title: "Comunidad", desc: "Entrenamos juntos, crecemos juntos." },
  { icon: Trophy, title: "Excelencia", desc: "Buscamos siempre la mejor versión de ti." },
  { icon: Target, title: "Constancia", desc: "El progreso se construye día a día." },
]

export function ClubSection() {
  return (
    <section id="club" className="bg-black py-20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-brand/15 ring-1 ring-brand/10">
              <Image
                src="/images/team-training.png"
                alt="Equipo de APEX entrenando en la pista al amanecer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Somos APEX</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Más que un club, una comunidad que llega a la meta unida
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Nacimos con la convicción de que el triatlón transforma vidas.
              Combinamos ciencia del deporte, coaches certificados y una cultura
              de apoyo para que cada atleta alcance su propia cima.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
