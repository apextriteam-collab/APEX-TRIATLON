import Image from "next/image"

const DISCIPLINES = [
  {
    title: "Natación",
    image: "/images/disc-swim.png",
    desc: "Técnica de aguas abiertas y piscina para nadar más rápido gastando menos energía.",
    distance: "1.5 km",
  },
  {
    title: "Ciclismo",
    image: "/images/disc-bike.png",
    desc: "Potencia, cadencia y estrategia sobre la bicicleta con planes de entrenamiento por zonas.",
    distance: "40 km",
  },
  {
    title: "Carrera",
    image: "/images/disc-run.png",
    desc: "Resistencia y velocidad para cerrar fuerte, incluso después del ciclismo.",
    distance: "10 km",
  },
]

export function Disciplines() {
  return (
    <section id="disciplinas" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-white">Tres deportes, un objetivo</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Dominamos las tres disciplinas del triatlón
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Cada entrenamiento está diseñado para llevarte de la línea de salida
          hasta la meta con confianza y rendimiento.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {DISCIPLINES.map((d) => (
          <article
            key={d.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={d.image}
                alt={`Disciplina de ${d.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-brand backdrop-blur">
                {d.distance}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
