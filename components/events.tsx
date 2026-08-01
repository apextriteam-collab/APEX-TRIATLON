import { MapPin, ArrowUpRight } from "lucide-react"

const EVENTS = [
  { day: "12", month: "Mar", title: "Proximamente", place: "Popayán", type: "Sprint" },
  { day: "28", month: "Abr", title: "Proximamente", place: "Popayán", type: "Duatlón" },
  { day: "17", month: "Jun", title: "Proximamente", place: "Popayán", type: "Olímpico" },
  { day: "09", month: "Sep", title: "Proximamente", place: "Popayán", type: "70.3" },
]

export function Events() {
  return (
    <section id="eventos" className="bg-black py-20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Calendario</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Próximos eventos y competencias
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Compite representando a APEX en las carreras más importantes de la temporada.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {EVENTS.map((e) => (
            <li
              key={e.title}
              className="group flex items-center gap-5 p-5 transition-colors hover:bg-accent/60 sm:gap-6 sm:p-6"
            >
              <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                <span className="font-display text-xl font-extrabold leading-none">{e.day}</span>
                <span className="text-xs font-medium uppercase">{e.month}</span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-brand">
                  {e.type}
                </span>
                <h3 className="mt-1.5 truncate font-display text-lg font-bold text-foreground">{e.title}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {e.place}
                </p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
