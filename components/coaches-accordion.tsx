"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, Waves, Bike, Footprints, Dumbbell } from "lucide-react"

const COACHES = [
  {
    id: "swimming",
    name: "Coach de Natación",
    role: "Entrenador de Natación",
    icon: Waves,
    image: "/images/coach-swimming.png",
    color: "from-cyan-500 to-blue-600",
    colorAccent: "text-cyan-400",
    bio: "Especialista en técnica de nado para aguas abiertas y piscina. Trabaja con atletas de todos los niveles para mejorar eficiencia, resistencia acuática y confianza en el agua.",
    specialties: ["Técnica de crol y estilos", "Aguas abiertas", "Resistencia acuática", "Corrección biomecánica"],
    experience: "+10 años",
    athletes: "+80 atletas",
  },
  {
    id: "cycling",
    name: "Coach de Ciclismo",
    role: "Entrenador de Ciclismo",
    icon: Bike,
    image: "/images/coach-cycling.png",
    color: "from-green-500 to-emerald-600",
    colorAccent: "text-green-400",
    bio: "Experto en entrenamiento de potencia, cadencia y estrategia sobre la bicicleta. Diseña planes por zonas para optimizar el rendimiento en ruta y contrarreloj.",
    specialties: ["Entrenamiento por potencia", "Estrategia de ruta", "Biomecánica del pedaleo", "Nutrición en bici"],
    experience: "+8 años",
    athletes: "+60 atletas",
  },
  {
    id: "running",
    name: "Coach de Carrera",
    role: "Entrenador de Atletismo",
    icon: Footprints,
    image: "/images/coach-running.png",
    color: "from-orange-500 to-red-600",
    colorAccent: "text-orange-400",
    bio: "Especialista en resistencia y velocidad para el segmento de carrera. Enfoque en técnica, prevención de lesiones y periodización para rendir al máximo después del ciclismo.",
    specialties: ["Técnica de carrera", "Prevención de lesiones", "Planes por zonas", "Transiciones T2"],
    experience: "+12 años",
    athletes: "+100 atletas",
  },
  {
    id: "strength",
    name: "Coach de Fuerza",
    role: "Preparador Físico",
    icon: Dumbbell,
    image: "/images/coach-strength.png",
    color: "from-purple-500 to-pink-600",
    colorAccent: "text-purple-400",
    bio: "Preparador físico integral enfocado en fuerza funcional, movilidad y prevención. Su trabajo complementa cada disciplina para formar atletas más completos y resistentes.",
    specialties: ["Fuerza funcional", "Core y estabilidad", "Movilidad articular", "Prevención de lesiones"],
    experience: "+9 años",
    athletes: "+70 atletas",
  },
]

export function CoachesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="entrenadores" className="relative overflow-hidden bg-[#080d1a] py-20 border-b border-white/10">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[500px] w-[700px] rounded-full bg-brand/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Equipo de Coaches
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            Entrenadores que inspiran campeones
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300 text-pretty">
            Nuestro equipo de coaches certificados te acompaña en cada disciplina
            para potenciar tu rendimiento y alcanzar tus metas.
          </p>
        </div>

      {/* Accordion — Desktop (horizontal) */}
      <div className="mt-12 hidden lg:flex lg:gap-2 lg:h-[520px]">
        {COACHES.map((coach, index) => {
          const isActive = activeIndex === index
          const Icon = coach.icon

          return (
            <button
              key={coach.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                isActive ? "flex-[4]" : "flex-[0.8] cursor-pointer hover:flex-[1]"
              }`}
            >
              {/* Background image */}
              <Image
                src={coach.image}
                alt={coach.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-all duration-700 ${
                  isActive ? "scale-100" : "scale-110 brightness-50"
                }`}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isActive
                    ? "from-black/90 via-black/40 to-transparent"
                    : "from-black/80 via-black/60 to-black/30"
                }`}
              />

              {/* Collapsed state — vertical label */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className={`flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm`}>
                  <Icon className={`size-5 ${coach.colorAccent}`} />
                </div>
                <span
                  className="whitespace-nowrap font-display text-sm font-bold text-white/90"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  {coach.name}
                </span>
              </div>

              {/* Expanded state — full info */}
              <div
                className={`absolute inset-0 flex items-end transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-full p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-full bg-gradient-to-br ${coach.color}`}
                    >
                      <Icon className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-white">
                        {coach.name}
                      </h3>
                      <p className={`text-sm font-medium ${coach.colorAccent}`}>{coach.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">{coach.bio}</p>

                  {/* Specialties */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {coach.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-4 flex items-center gap-6">
                    <div className="flex items-center gap-1.5">
                      <Award className={`size-4 ${coach.colorAccent}`} />
                      <span className="text-xs font-semibold text-white/80">
                        {coach.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-white/80">
                        {coach.athletes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Accordion — Mobile (vertical) */}
      <div className="mt-12 flex flex-col gap-3 lg:hidden">
        {COACHES.map((coach, index) => {
          const isActive = activeIndex === index
          const Icon = coach.icon

          return (
            <button
              key={coach.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 text-left transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                isActive ? "h-[420px]" : "h-[72px]"
              }`}
            >
              {/* Background image */}
              <Image
                src={coach.image}
                alt={coach.name}
                fill
                sizes="100vw"
                className={`object-cover transition-all duration-700 ${
                  isActive ? "scale-100" : "scale-110 brightness-50"
                }`}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isActive
                    ? "from-black/90 via-black/40 to-transparent"
                    : "from-black/70 to-black/40"
                }`}
              />

              {/* Collapsed label */}
              <div
                className={`absolute inset-0 flex items-center gap-3 px-5 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${coach.color}`}>
                  <Icon className="size-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{coach.name}</h3>
                  <p className="text-xs text-white/60">{coach.role}</p>
                </div>
              </div>

              {/* Expanded info */}
              <div
                className={`absolute inset-0 flex items-end transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-full p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${coach.color}`}
                    >
                      <Icon className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-white">
                        {coach.name}
                      </h3>
                      <p className={`text-xs font-medium ${coach.colorAccent}`}>{coach.role}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/80">{coach.bio}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {coach.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Award className={`size-3.5 ${coach.colorAccent}`} />
                      <span className="text-xs font-semibold text-white/80">{coach.experience}</span>
                    </div>
                    <span className="text-xs font-semibold text-white/80">{coach.athletes}</span>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  </section>
)
}
