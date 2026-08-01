import Image from "next/image"
import {
  Calendar,
  Clock,
  MapPin,
  Waves,
  Bike,
  Footprints,
  Search,
  Layers,
  TrendingUp,
  Flame,
  Crown,
  Star,
  ShieldCheck,
  Target,
  Trophy,
  Mail,
  Phone,
} from "lucide-react"

const SCHEDULE_LEVELS = [
  {
    level: "Nivel 1",
    category: "DISCOVER",
    subtitle: "Exploración",
    icon: Search,
    quoteIcon: Star,
    quote: "Descubrir jugando, aprender para disfrutar.",
    days: [
      {
        day: "LUNES",
        time: "2:00 - 4:00 pm",
        sports: [
          { icon: Footprints, name: "Atletismo" },
          { icon: Waves, name: "Natación" },
        ],
      },
      {
        day: "VIERNES",
        time: "2:00 - 4:00 pm",
        sports: [
          { icon: Footprints, name: "Atletismo" },
          { icon: Waves, name: "Natación" },
        ],
      },
      {
        day: "SÁBADO",
        time: "11:00 am - 1:00 pm",
        sports: [
          { icon: Footprints, name: "Atletismo" },
          { icon: Bike, name: "Ciclismo" },
        ],
      },
    ],
  },
  {
    level: "Nivel 2",
    category: "FOUNDATION",
    subtitle: "Construcción de bases",
    icon: Layers,
    quoteIcon: ShieldCheck,
    quote: "Construimos hábitos, disciplina y técnica.",
    days: [
      {
        day: "LUNES",
        time: "4:00 - 6:00 pm",
        sports: [
          { icon: Footprints, name: "Atletismo" },
          { icon: Waves, name: "Natación" },
        ],
      },
      {
        day: "VIERNES",
        time: "4:00 - 6:00 pm",
        sports: [
          { icon: Footprints, name: "Atletismo" },
          { icon: Waves, name: "Natación" },
        ],
      },
      {
        day: "SÁBADO",
        time: "9:00 - 11:00 am",
        sports: [
          { icon: Footprints, name: "Atletismo" },
          { icon: Bike, name: "Ciclismo" },
        ],
      },
    ],
  },
  {
    level: "Nivel 3",
    category: "DEVELOPMENT",
    subtitle: "Desarrollo",
    icon: TrendingUp,
    featured: true,
    quoteIcon: TrendingUp,
    quote: "Consolidamos habilidades para competir.",
    days: [
      {
        day: "LUNES",
        time: "4:00 - 6:00 pm",
        sports: [
          { icon: Bike, name: "Ciclismo" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
      {
        day: "VIERNES",
        time: "4:00 - 6:00 pm",
        sports: [
          { icon: Waves, name: "Natación" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
      {
        day: "SÁBADO",
        time: "7:30 - 9:00 am",
        sports: [
          { icon: Bike, name: "Ciclismo" },
          { icon: Waves, name: "Natación" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
    ],
  },
  {
    level: "Nivel 4",
    category: "PERFORMANCE",
    subtitle: "Rendimiento",
    icon: Flame,
    quoteIcon: Target,
    quote: "Entrenamos para rendir y mejorar cada día.",
    days: [
      {
        day: "MARTES",
        time: "4:00 - 6:00 pm",
        sports: [
          { icon: Bike, name: "Ciclismo" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
      {
        day: "JUEVES",
        time: "4:00 - 6:00 pm",
        sports: [
          { icon: Waves, name: "Natación" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
      {
        day: "SÁBADO",
        time: "7:30 - 9:00 am",
        sports: [
          { icon: Bike, name: "Ciclismo" },
          { icon: Waves, name: "Natación" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
    ],
  },
  {
    level: "Nivel 5",
    category: "HIGH PERFORMANCE",
    subtitle: "Alto rendimiento",
    icon: Crown,
    quoteIcon: Trophy,
    quote: "Excelencia, compromiso y resultados.",
    days: [
      {
        day: "LUNES",
        time: "5:00 - 7:00 am",
        sports: [
          { icon: Bike, name: "Ciclismo" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
      {
        day: "MIÉRCOLES",
        time: "5:00 - 7:00 am",
        sports: [
          { icon: Waves, name: "Natación" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
      {
        day: "SÁBADO",
        time: "7:00 - 9:00 am",
        sports: [
          { icon: Bike, name: "Ciclismo" },
          { icon: Waves, name: "Natación" },
          { icon: Footprints, name: "Atletismo" },
        ],
      },
    ],
  },
]

const VENUES = [
  {
    name: "COLEGIO SAGRADO CORAZÓN DE JESÚS - SALESIANAS",
    desc: "Piscina semiolímpica y pista atlética.",
    icon: Waves,
    image: "/images/venue-pool.png",
  },
  {
    name: "COMPLEJO DEPORTIVO",
    desc: "Escenarios naturales para triatlón.",
    icon: Waves,
    image: "/images/venue-complejo.png",
  },
  {
    name: "PISOJÉ COMFACAUCA",
    desc: "Rutas ciclistas seguras y exigentes.",
    icon: Bike,
    image: "/images/venue-cycling.png",
  },
  {
    name: "CENTRO RECREATIVO EL TABLAZO",
    desc: "Escenarios naturales para duatlón y triatlón.",
    icon: Footprints,
    image: "/images/venue-tablazo.png",
  },
  
]

export function Schedules() {
  return (
    <section id="horarios" className="relative overflow-hidden bg-black py-20 border-b border-white/10">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-40 right-10 -z-10 h-[450px] w-[600px] rounded-full bg-brand/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Horarios APEX
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Horarios de Entrenamiento
            </h2>
            <p className="mt-2 text-base text-slate-300">
              Cada categoría tiene horarios diseñados para su desarrollo integral.
            </p>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs text-foreground/80 backdrop-blur-md">
            <a href="mailto:Apextri.team@gmail.com" className="flex items-center gap-1.5 hover:text-brand transition-colors">
              <Mail className="size-4 text-brand" />
              <span>Apextri.team@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a href="tel:+573107970771" className="flex items-center gap-1.5 hover:text-brand transition-colors font-semibold">
              <Phone className="size-4 text-brand" />
              <span>+57 310 797 0771</span>
            </a>
          </div>
        </div>

        {/* 5 Columns for Schedule Levels */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SCHEDULE_LEVELS.map((item) => {
            const Icon = item.icon
            const QuoteIcon = item.quoteIcon

            return (
              <div
                key={item.category}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${item.featured
                    ? "border-brand/40 bg-gradient-to-b from-brand/10 via-white/[0.03] to-white/[0.02] shadow-xl shadow-brand/10 hover:border-brand/60"
                    : "border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
              >
                {/* Level Header */}
                <div className="flex flex-col items-center px-5 pt-6 text-center">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand/15 text-brand group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-5" />
                  </div>
                  <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {item.level}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-foreground group-hover:text-brand transition-colors">
                    {item.category}
                  </h3>
                  <span className="text-xs text-muted-foreground">{item.subtitle}</span>
                </div>

                {/* Days Schedule */}
                <div className="mt-5 border-t border-white/10 px-5 pt-4 flex flex-col gap-4">
                  {item.days.map((d) => (
                    <div key={d.day} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-brand/80" />
                          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                            {d.day}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {d.sports.map((s, idx) => {
                            const SportIcon = s.icon
                            return (
                              <span
                                key={idx}
                                title={s.name}
                                className="flex size-5 items-center justify-center rounded-full bg-brand/15 text-brand"
                              >
                                <SportIcon className="size-3" />
                              </span>
                            )
                          })}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 pl-5">
                        <Clock className="size-3 text-muted-foreground" />
                        <span className="text-xs font-medium text-brand">
                          {d.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Quote */}
                <div className="mt-auto border-t border-white/10 px-5 py-4 mt-5 bg-white/[0.01]">
                  <div className="flex items-center gap-2">
                    <QuoteIcon className="size-4 shrink-0 text-brand" />
                    <p className="text-xs italic text-foreground/80 leading-snug">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Disciplines Legend & Notice */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md sm:flex-row">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-foreground/90 font-semibold">
              <span className="flex size-7 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Waves className="size-3.5" />
              </span>
              NATACIÓN
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/90 font-semibold">
              <span className="flex size-7 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Bike className="size-3.5" />
              </span>
              CICLISMO
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/90 font-semibold">
              <span className="flex size-7 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Footprints className="size-3.5" />
              </span>
              ATLETISMO
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground text-center sm:text-right">
            * Los horarios pueden estar sujetos a cambios según competencias y eventos.
          </p>
        </div>

        {/* ESCENARIOS DE ENTRENAMIENTO */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="size-5 text-brand" />
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground uppercase">
              Escenarios de Entrenamiento
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VENUES.map((venue, index) => {
              const VIcon = venue.icon
              return (
                <div
                  key={`${venue.name}-${index}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-4 flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <VIcon className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-white leading-snug group-hover:text-brand transition-colors">
                        {venue.name}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-300 leading-relaxed">
                        {venue.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
