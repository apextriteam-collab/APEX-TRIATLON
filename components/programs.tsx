import {
  CheckCircle2,
  Clock,
  Calendar,
  ClipboardList,
  Target,
  Waves,
  BarChart3,
  FileCheck,
  Heart,
  Users,
  Handshake,
  Gift,
  ShieldCheck,
  Award,
  TrendingUp,
  Star,
  Search,
  Layers,
  Flame,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const MEMBERSHIP_LEVELS = [
  {
    level: "Nivel 1",
    category: "DISCOVER",
    subtitle: "Exploración",
    icon: Search,
    price: "$170.000",
    period: "MENSUALES",
    fee: "MATRÍCULA ANUAL $80.000",
    btnText: "ELEGIR DISCOVER",
    customPrice: false,
    features: [
      "Plan de entrenamiento",
      "Seguimiento técnico",
      "Entrenamientos presenciales",
      "Planificación",
      "Evaluación deportiva",
    ],
  },
  {
    level: "Nivel 2",
    category: "FOUNDATION",
    subtitle: "Construcción de bases",
    icon: Layers,
    price: "$170.000",
    period: "MENSUALES",
    fee: "MATRÍCULA ANUAL $80.000",
    btnText: "ELEGIR FOUNDATION",
    customPrice: false,
    features: [
      "Plan de entrenamiento",
      "Seguimiento técnico",
      "Entrenamientos presenciales",
      "Planificación",
      "Evaluación deportiva",
    ],
  },
  {
    level: "Nivel 3",
    category: "DEVELOPMENT",
    subtitle: "Desarrollo",
    icon: TrendingUp,
    featured: true, // Highlights core plan
    price: "$170.000",
    period: "MENSUALES",
    fee: "MATRÍCULA ANUAL $80.000",
    btnText: "ELEGIR DEVELOPMENT",
    customPrice: false,
    features: [
      "Plan de entrenamiento",
      "Seguimiento técnico",
      "Entrenamientos presenciales",
      "Planificación",
      "Evaluación deportiva",
    ],
  },
  {
    level: "Nivel 4",
    category: "PERFORMANCE",
    subtitle: "Rendimiento",
    icon: Flame,
    price: "$170.000",
    period: "MENSUALES",
    fee: "MATRÍCULA ANUAL $80.000",
    btnText: "ELEGIR PERFORMANCE",
    customPrice: false,
    features: [
      "Plan de entrenamiento",
      "Seguimiento técnico",
      "Entrenamientos presenciales",
      "Planificación",
      "Evaluación deportiva",
    ],
  },
  {
    level: "Nivel 5",
    category: "HIGH PERFORMANCE",
    subtitle: "Alto rendimiento",
    icon: Crown,
    price: "TARIFA PERSONALIZADA",
    period: "Plan diseñado según evaluación y objetivos individuales.",
    fee: "",
    btnText: "MÁS INFORMACIÓN",
    customPrice: true,
    features: [
      "Plan de entrenamiento",
      "Seguimiento técnico",
      "Entrenamientos presenciales",
      "Planificación",
      "Evaluación deportiva",
    ],
  },
]

const INCLUDES = [
  { icon: ClipboardList, name: "Plan de entrenamiento" },
  { icon: Target, name: "Seguimiento técnico continuo" },
  { icon: Waves, name: "Entrenamientos presenciales en nuestras disciplinas" },
  { icon: BarChart3, name: "Planificación deportiva" },
  { icon: FileCheck, name: "Evaluación deportiva" },
  { icon: Heart, name: "Acompañamiento integral" },
]

const SPECIAL_RATES = [
  { icon: Users, name: "Por referidos" },
  { icon: Users, name: "Por plan familiar" },
  { icon: Handshake, name: "Por convenios institucionales" },
  { icon: Users, name: "Por grupo" },
  { icon: Gift, name: "Por promocionales" },
]

export function Programs() {
  return (
    <section id="programas" className="relative overflow-hidden bg-[#080d1a] py-20 border-b border-white/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Planes APEX
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Membresía
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300 text-pretty">
              Este enfoque permite construir procesos más humanos, seguros y eficientes, donde el objetivo principal no es acelerar resultados, sino formar deportistas sólidos, íntegros y preparados para crecer de manera sostenible dentro y fuera de la competencia.
            </p>
          </div>

          {/* Hours stats badges */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md">
              <Clock className="size-5 text-brand" />
              <div>
                <span className="font-display text-base font-bold text-foreground leading-none block">
                  6 HORAS
                </span>
                <span className="text-[11px] text-muted-foreground">por semana</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md">
              <Calendar className="size-5 text-brand" />
              <div>
                <span className="font-display text-base font-bold text-foreground leading-none block">
                  24 HORAS
                </span>
                <span className="text-[11px] text-muted-foreground">por mes</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Membership Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {MEMBERSHIP_LEVELS.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.category}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 p-6 ${
                  item.featured
                    ? "border-brand/50 bg-gradient-to-b from-brand/15 via-white/[0.04] to-white/[0.02] shadow-2xl shadow-brand/15 hover:border-brand/70 xl:scale-105"
                    : "border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 rounded-b-xl bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                    Recomendado
                  </span>
                )}

                {/* Header */}
                <div className="flex flex-col items-center text-center mt-2">
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

                {/* Price block */}
                <div className="mt-6 border-t border-white/10 pt-4 text-center">
                  {item.customPrice ? (
                    <div>
                      <span className="font-display text-base font-bold text-brand block">
                        {item.price}
                      </span>
                      <p className="mt-1 text-[11px] text-muted-foreground leading-snug">
                        {item.period}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="font-display text-2xl font-extrabold text-foreground group-hover:text-brand transition-colors">
                        {item.price}
                      </span>
                      <span className="text-xs text-muted-foreground block font-semibold">
                        {item.period}
                      </span>
                      <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border-t border-white/5 pt-2">
                        {item.fee}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-white/10 pt-4">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="size-3.5 shrink-0 text-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  render={<a href="#unete" />}
                  nativeButton={false}
                  className={`mt-6 w-full text-xs uppercase tracking-wider font-bold rounded-xl transition-all ${
                    item.featured
                      ? "bg-gradient-brand text-white shadow-lg shadow-brand/20 hover:opacity-90"
                      : "bg-white/10 text-foreground hover:bg-brand hover:text-white"
                  }`}
                >
                  {item.btnText}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner 1: Tu Membresía Incluye */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-4">
            TU MEMBRESÍA <span className="text-foreground">INCLUYE</span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {INCLUDES.map((inc) => {
              const IncIcon = inc.icon
              return (
                <div key={inc.name} className="flex flex-col items-center text-center gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-colors">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <IncIcon className="size-4.5" />
                  </div>
                  <span className="text-xs font-medium text-foreground/85 leading-snug">
                    {inc.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Banner 2: Tarifas Especiales & Highlights */}
        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          {/* Tarifas Especiales */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md flex flex-col justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
              PREGUNTA POR <span className="text-brand">TARIFAS ESPECIALES:</span>
            </h3>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-5">
              {SPECIAL_RATES.map((rate) => {
                const RIcon = rate.icon
                return (
                  <div key={rate.name} className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-colors">
                    <div className="flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <RIcon className="size-4" />
                    </div>
                    <span className="text-[11px] font-medium text-foreground/85 leading-snug">
                      {rate.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Trial Class & Highlights */}
          <div className="lg:col-span-5 rounded-2xl border border-brand/40 bg-gradient-to-r from-brand/15 via-white/[0.03] to-transparent p-6 backdrop-blur-md flex flex-col justify-between shadow-xl shadow-brand/5">
            <div className="flex items-start gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg shadow-brand/25">
                <Star className="size-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand block">
                  CURSOS ALTERNOS...
                </span>
                <p className="text-xs text-foreground/80 mt-0.5 leading-relaxed">
                  Conoce nuestro método antes de inscribirte.
                </p>
                <span className="text-sm font-display font-extrabold italic text-brand block mt-1">
                  ¡Te esperamos!
                </span>
              </div>
            </div>

            <div className="mt-4 border-t border-white/10 pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-foreground/75">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-brand" />
                <span>Certificados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-3.5 text-brand" />
                <span>Integral</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="size-3.5 text-brand" />
                <span>Familiar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="size-3.5 text-brand" />
                <span>Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
