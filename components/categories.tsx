import { Search, Layers, TrendingUp, Flame, Crown, CheckCircle2, Heart, Shield, Swords, Mountain } from "lucide-react"

const LEVELS = [
  {
    level: "Nivel 1",
    category: "DISCOVER",
    subtitle: "Exploración",
    icon: Search,
    objetivo: "Descubrir el deporte jugando y disfrutando.",
    desarrolla: [
      "Motricidad",
      "Coordinación",
      "Equilibrio",
      "Confianza en el agua",
      "Diversión",
    ],
    avanza: [
      "Tiene control corporal básico",
      "Sigue instrucciones",
      "Gana confianza y autonomía",
      "Participa activamente",
    ],
  },
  {
    level: "Nivel 2",
    category: "FOUNDATION",
    subtitle: "Construcción de bases",
    icon: Layers,
    objetivo: "Aprender correctamente las habilidades básicas.",
    desarrolla: [
      "Técnica básica",
      "Disciplina y hábitos",
      "Resistencia básica",
      "Trabajo en equipo",
      "Seguridad en las 3 disciplinas",
    ],
    avanza: [
      "Domina las técnicas básicas",
      "Tiene hábitos de entrenamiento",
      "Es constante y responsable",
      "Muestra actitud positiva",
    ],
  },
  {
    level: "Nivel 3",
    category: "DEVELOPMENT",
    subtitle: "Desarrollo",
    icon: TrendingUp,
    featured: true, // Highlights core development level
    objetivo: "Consolidar habilidades y prepararse para competir.",
    desarrolla: [
      "Técnicas avanzadas",
      "Resistencia",
      "Estrategia básica",
      "Competencia sana",
      "Autonomía deportiva",
    ],
    avanza: [
      "Ejecuta técnicas con control",
      "Tiene buena base aeróbica",
      "Compite de forma sana",
      "Gestiona sus emociones",
    ],
  },
  {
    level: "Nivel 4",
    category: "PERFORMANCE",
    subtitle: "Rendimiento",
    icon: Flame,
    objetivo: "Entrenar para rendir y mejorar resultados.",
    desarrolla: [
      "Eficiencia técnica",
      "Resistencia específica",
      "Táctica de competencia",
      "Mentalidad competitiva",
      "Planificación y disciplina",
    ],
    avanza: [
      "Tiene consistencia en entrenos",
      "Ejecuta su plan de carrera",
      "Controla su mente en competencia",
      "Asume responsabilidades",
    ],
  },
  {
    level: "Nivel 5",
    category: "HIGH PERFORMANCE",
    subtitle: "Alto rendimiento",
    icon: Crown,
    objetivo: "Alcanzar la excelencia deportiva sostenida en el tiempo.",
    desarrolla: [
      "Rendimiento máximo",
      "Estrategia avanzada",
      "Preparación integral",
      "Resiliencia mental",
      "Liderazgo deportivo",
    ],
    avanza: [
      "Compite al más alto nivel",
      "Tiene disciplina total",
      "Gestiona su proceso integral",
      "Representa los valores APEX",
    ],
  },
]

const VALUES = [
  { icon: Heart, name: "DISCIPLINA", desc: "Nos enfoca y nos hace mejores." },
  { icon: Shield, name: "RESPETO", desc: "Nos une como comunidad." },
  { icon: Swords, name: "SANA COMPETENCIA", desc: "Nos impulsa a dar lo mejor." },
  { icon: Mountain, name: "PASIÓN", desc: "Por el triatlón, por la vida." },
]

const ADVANCE_CRITERIA = [
  "Dominio técnico",
  "Disciplina",
  "Madurez deportiva",
  "Autonomía",
  "Compromiso",
]

export function Categories() {
  return (
    <section id="categorias" className="relative overflow-hidden bg-[#080d1a] py-20 border-b border-white/10">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Categorías APEX
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              ¿Cómo progresa un atleta en APEX?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 text-pretty">
              Cada nivel tiene un propósito claro de formación y desarrollo integral.
            </p>
          </div>

          {/* Advance criteria badge */}
          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-md shadow-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">
              Un atleta avanza cuando demuestra:
            </p>
            <ul className="flex flex-col gap-2">
              {ADVANCE_CRITERIA.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <span className="size-1.5 rounded-full bg-brand shadow-sm shadow-brand/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Level Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {LEVELS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.category}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                  item.featured
                    ? "border-brand/40 bg-gradient-to-b from-brand/10 via-white/[0.03] to-white/[0.02] shadow-xl shadow-brand/10 hover:border-brand/60"
                    : "border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {/* Icon + Level header */}
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

                {/* Objetivo */}
                <div className="mt-4 border-t border-white/10 px-5 pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-brand">
                    Objetivo
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80">{item.objetivo}</p>
                </div>

                {/* Desarrolla */}
                <div className="mt-3 px-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-brand">
                    Desarrolla
                  </p>
                  <ul className="mt-1.5 flex flex-col gap-1">
                    {item.desarrolla.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-foreground/75">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand/70" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Avanza cuando */}
                <div className="mt-auto border-t border-white/10 px-5 pb-5 pt-4 mt-4 bg-white/[0.01]">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-brand">
                    Avanza cuando...
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {item.avanza.map((a) => (
                      <li key={a} className="flex items-start gap-1.5 text-xs text-foreground/85">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Values Bar */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: VIcon, name, desc }) => (
            <div
              key={name}
              className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md hover:border-white/20 transition-all"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <VIcon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">{name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
