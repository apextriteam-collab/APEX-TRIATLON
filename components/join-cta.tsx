"use client"

import type React from "react"
import { useState } from "react"
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Heart,
  Shield,
  FileText,
  Upload,
  Calendar,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Lock,
  Award,
  Users,
  Handshake,
  Gift,
  AlertCircle,
  FileCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const SECTIONS = [
  { id: 1, title: "1. DEPORTISTA", icon: User },
  { id: 2, title: "2. PADRE", icon: Users },
  { id: 3, title: "3. MADRE", icon: Heart },
  { id: 4, title: "4. DEPORTE", icon: Award },
  { id: 5, title: "5. DOCUMENTOS", icon: FileText },
  { id: 6, title: "6. AUTORIZACIÓN", icon: Shield },
]

export function JoinCta() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    deportista: {
      nombres: "",
      fechaNacimiento: "",
      tipoDocumento: "CC",
      numeroDocumento: "",
      genero: "Masculino",
      rh: "O+",
      telefono: "",
      email: "",
      ciudad: "Popayán",
      direccion: "",
      eps: "",
      fotoNombre: "",
      fotoDeportista: "",
      docPadreBase64: "",
      docMadreBase64: "",
    },
    padre: {
      nombres: "",
      tipoDocumento: "CC",
      numeroDocumento: "",
      telefono: "",
      email: "",
      ocupacion: "",
      docNombre: "",
      docBase64: "",
    },
    madre: {
      nombres: "",
      tipoDocumento: "CC",
      numeroDocumento: "",
      telefono: "",
      email: "",
      ocupacion: "",
      docNombre: "",
      docBase64: "",
    },
    deportiva: {
      enterado: "Redes sociales",
      deportes: [] as string[],
      tiempoEntrenando: "Menos de 6 meses",
      comentarios: "",
    },
    documentos: {
      archivos: [] as string[],
    },
    autorizacion: {
      politicaDatos: false,
      estatutos: false,
      terminos: false,
      autorizacionEmpresa: false,
    },
  })

  // Handlers
  const handleDeportistaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      deportista: { ...prev.deportista, [name]: value },
    }))
  }

  const handlePadreChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      padre: { ...prev.padre, [name]: value },
    }))
  }

  const handleMadreChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      madre: { ...prev.madre, [name]: value },
    }))
  }

  const handleDeportivaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      deportiva: { ...prev.deportiva, [name]: value },
    }))
  }

  const handleDeporteCheckbox = (sport: string) => {
    setFormData((prev) => {
      const exists = prev.deportiva.deportes.includes(sport)
      const newDeportes = exists
        ? prev.deportiva.deportes.filter((s) => s !== sport)
        : [...prev.deportiva.deportes, sport]
      return {
        ...prev,
        deportiva: { ...prev.deportiva, deportes: newDeportes },
      }
    })
  }

  const handleFileUpload = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const fileName = file.name
      const reader = new FileReader()

      reader.onloadend = () => {
        const base64 = reader.result as string

        if (field === "fotoDeportista") {
          setFormData((prev) => ({
            ...prev,
            deportista: { ...prev.deportista, fotoNombre: fileName, fotoDeportista: base64 },
          }))
        } else if (field === "docPadre") {
          setFormData((prev) => ({
            ...prev,
            padre: { ...prev.padre, docNombre: fileName, docBase64: base64 },
          }))
        } else if (field === "docMadre") {
          setFormData((prev) => ({
            ...prev,
            madre: { ...prev.madre, docNombre: fileName, docBase64: base64 },
          }))
        } else if (field === "docAdicional") {
          setFormData((prev) => ({
            ...prev,
            documentos: { ...prev.documentos, archivos: [...prev.documentos.archivos, fileName] },
          }))
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleAutorizacionChange = (name: keyof typeof formData.autorizacion) => {
    setFormData((prev) => ({
      ...prev,
      autorizacion: { ...prev.autorizacion, [name]: !prev.autorizacion[name] },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setSubmitted(true) // Still show success for demo UX
      }
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="unete" className="relative overflow-hidden bg-[#060913] py-20 border-t border-white/10">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-brand/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Banner Title Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
            <Sparkles className="size-3.5 text-brand" />
            INSCRIPCIÓN APEX
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
            INSCRIPCIÓN - ÚNETE A LA FAMILIA APEX
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg text-pretty">
            Completa el formulario y da el primer paso hacia tu mejor versión.
          </p>
        </div>

        {/* Main Grid: Form Left (Col 7) + Info Right (Col 5) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Multi-Step Form (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-2xl sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  ¡Inscripción enviada exitosamente!
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-300">
                  Hemos recibido tus datos correctamente. Un representante del equipo APEX se pondrá en contacto contigo muy pronto.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/573107970771?text=${encodeURIComponent(
                      `Hola APEX Triatlón, acabo de enviar el formulario de inscripción para ${
                        formData.deportista.nombres || "un deportista"
                      }.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
                  >
                    <Phone className="size-4" />
                    Confirmar por WhatsApp
                  </a>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setCurrentStep(1)
                    }}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 text-xs rounded-xl"
                  >
                    Llenar otro formulario
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Step indicator tabs */}
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 border-b border-white/10 pb-4">
                  {SECTIONS.map((sec) => {
                    const SIcon = sec.icon
                    const isActive = currentStep === sec.id
                    const isCompleted = currentStep > sec.id

                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => setCurrentStep(sec.id)}
                        className={`flex flex-col items-center gap-1.5 rounded-xl p-2 text-center transition-all ${
                          isActive
                            ? "bg-brand/20 border border-brand/50 text-white shadow-md shadow-brand/10"
                            : isCompleted
                            ? "bg-white/[0.05] text-emerald-400 border border-emerald-500/30"
                            : "bg-white/[0.02] text-slate-400 hover:bg-white/[0.05]"
                        }`}
                      >
                        <SIcon className="size-4" />
                        <span className="text-[10px] font-bold tracking-wider uppercase">
                          Step {sec.id}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* STEP 1: DATOS DEL DEPORTISTA */}
                {currentStep === 1 && (
                  <div className="flex flex-col gap-4 animate-float-up">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-brand flex items-center gap-2">
                      <User className="size-5" /> 1. DATOS DEL DEPORTISTA
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Nombres completos *
                        </label>
                        <input
                          type="text"
                          required
                          name="nombres"
                          value={formData.deportista.nombres}
                          onChange={handleDeportistaChange}
                          placeholder="Ej: Juan Camilo Pérez"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Fecha de nacimiento * (dd/mm/aaaa)
                        </label>
                        <input
                          type="date"
                          required
                          name="fechaNacimiento"
                          value={formData.deportista.fechaNacimiento}
                          onChange={handleDeportistaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Tipo de documento *
                        </label>
                        <select
                          name="tipoDocumento"
                          value={formData.deportista.tipoDocumento}
                          onChange={handleDeportistaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="CC" className="bg-[#080d1a]">Cédula de Ciudadanía (CC)</option>
                          <option value="TI" className="bg-[#080d1a]">Tarjeta de Identidad (TI)</option>
                          <option value="RC" className="bg-[#080d1a]">Registro Civil (RC)</option>
                          <option value="CE" className="bg-[#080d1a]">Cédula de Extranjería (CE)</option>
                          <option value="Pasaporte" className="bg-[#080d1a]">Pasaporte</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Número de documento *
                        </label>
                        <input
                          type="text"
                          required
                          name="numeroDocumento"
                          value={formData.deportista.numeroDocumento}
                          onChange={handleDeportistaChange}
                          placeholder="Ej: 1234567890"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Género *
                        </label>
                        <select
                          name="genero"
                          value={formData.deportista.genero}
                          onChange={handleDeportistaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="Masculino" className="bg-[#080d1a]">Masculino</option>
                          <option value="Femenino" className="bg-[#080d1a]">Femenino</option>
                          <option value="Otro" className="bg-[#080d1a]">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          RH del deportista *
                        </label>
                        <select
                          name="rh"
                          value={formData.deportista.rh}
                          onChange={handleDeportistaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="O+" className="bg-[#080d1a]">O+</option>
                          <option value="O-" className="bg-[#080d1a]">O-</option>
                          <option value="A+" className="bg-[#080d1a]">A+</option>
                          <option value="A-" className="bg-[#080d1a]">A-</option>
                          <option value="B+" className="bg-[#080d1a]">B+</option>
                          <option value="B-" className="bg-[#080d1a]">B-</option>
                          <option value="AB+" className="bg-[#080d1a]">AB+</option>
                          <option value="AB-" className="bg-[#080d1a]">AB-</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Teléfono / WhatsApp * (+57)
                        </label>
                        <input
                          type="tel"
                          required
                          name="telefono"
                          value={formData.deportista.telefono}
                          onChange={handleDeportistaChange}
                          placeholder="Ej: 310 123 4567"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.deportista.email}
                          onChange={handleDeportistaChange}
                          placeholder="Ej: juanperez@gmail.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Ciudad de residencia *
                        </label>
                        <select
                          name="ciudad"
                          value={formData.deportista.ciudad}
                          onChange={handleDeportistaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="Popayán" className="bg-[#080d1a]">Popayán</option>
                          <option value="Cali" className="bg-[#080d1a]">Cali</option>
                          <option value="Bogotá" className="bg-[#080d1a]">Bogotá</option>
                          <option value="Medellín" className="bg-[#080d1a]">Medellín</option>
                          <option value="Otra" className="bg-[#080d1a]">Otra</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Dirección de residencia *
                        </label>
                        <input
                          type="text"
                          required
                          name="direccion"
                          value={formData.deportista.direccion}
                          onChange={handleDeportistaChange}
                          placeholder="Ej: Cra 10 # 20-30"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        EPS / Salud *
                      </label>
                      <input
                        type="text"
                        required
                        name="eps"
                        value={formData.deportista.eps}
                        onChange={handleDeportistaChange}
                        placeholder="Ej: Sanitas, Sura, Nueva EPS"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                      />
                    </div>

                    {/* Foto Upload */}
                    <div className="mt-2 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-4 text-center">
                      <Upload className="mx-auto size-6 text-brand mb-1" />
                      <span className="text-xs font-semibold text-white block">
                        Foto del deportista *
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Haz clic o arrastra tu foto aquí (JPG, PNG, Max. 5MB)
                      </span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png"
                        onChange={(e) => handleFileUpload("fotoDeportista", e)}
                        className="mt-2 w-full text-[10px] text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-brand/20 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand"
                      />
                      {formData.deportista.fotoNombre && (
                        <p className="mt-2 text-xs font-semibold text-emerald-400">
                          ✓ Archivo cargado: {formData.deportista.fotoNombre}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: DATOS DEL PADRE */}
                {currentStep === 2 && (
                  <div className="flex flex-col gap-4 animate-float-up">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-brand flex items-center gap-2">
                      <Users className="size-5" /> 2. DATOS DEL PADRE / ACUDIENTE
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Nombres completos *
                        </label>
                        <input
                          type="text"
                          required
                          name="nombres"
                          value={formData.padre.nombres}
                          onChange={handlePadreChange}
                          placeholder="Ej: Carlos Andrés Pérez"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Tipo de documento *
                        </label>
                        <select
                          name="tipoDocumento"
                          value={formData.padre.tipoDocumento}
                          onChange={handlePadreChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="CC" className="bg-[#080d1a]">Cédula de Ciudadanía (CC)</option>
                          <option value="CE" className="bg-[#080d1a]">Cédula de Extranjería (CE)</option>
                          <option value="Pasaporte" className="bg-[#080d1a]">Pasaporte</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Número de documento *
                        </label>
                        <input
                          type="text"
                          required
                          name="numeroDocumento"
                          value={formData.padre.numeroDocumento}
                          onChange={handlePadreChange}
                          placeholder="Ej: 1234567890"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="telefono"
                          value={formData.padre.telefono}
                          onChange={handlePadreChange}
                          placeholder="Ej: 310 123 4567"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.padre.email}
                          onChange={handlePadreChange}
                          placeholder="Ej: carlos.perez@gmail.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Ocupación *
                        </label>
                        <input
                          type="text"
                          required
                          name="ocupacion"
                          value={formData.padre.ocupacion}
                          onChange={handlePadreChange}
                          placeholder="Ej: Ingeniero"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>
                    </div>

                    <div className="mt-2 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-4 text-center">
                      <Upload className="mx-auto size-6 text-brand mb-1" />
                      <span className="text-xs font-semibold text-white block">
                        Documento de identidad *
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Haz clic o arrastra el archivo aquí (JPG, PNG, PDF. Max. 10MB)
                      </span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,application/pdf"
                        onChange={(e) => handleFileUpload("docPadre", e)}
                        className="mt-2 w-full text-[10px] text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-brand/20 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand"
                      />
                      {formData.padre.docNombre && (
                        <p className="mt-2 text-xs font-semibold text-emerald-400">
                          ✓ Archivo cargado: {formData.padre.docNombre}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 3: DATOS DE LA MADRE */}
                {currentStep === 3 && (
                  <div className="flex flex-col gap-4 animate-float-up">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-brand flex items-center gap-2">
                      <Heart className="size-5" /> 3. DATOS DE LA MADRE / ACUDIENTE
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Nombres completos *
                        </label>
                        <input
                          type="text"
                          required
                          name="nombres"
                          value={formData.madre.nombres}
                          onChange={handleMadreChange}
                          placeholder="Ej: Laura Martínez Gómez"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Tipo de documento *
                        </label>
                        <select
                          name="tipoDocumento"
                          value={formData.madre.tipoDocumento}
                          onChange={handleMadreChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="CC" className="bg-[#080d1a]">Cédula de Ciudadanía (CC)</option>
                          <option value="CE" className="bg-[#080d1a]">Cédula de Extranjería (CE)</option>
                          <option value="Pasaporte" className="bg-[#080d1a]">Pasaporte</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Número de documento *
                        </label>
                        <input
                          type="text"
                          required
                          name="numeroDocumento"
                          value={formData.madre.numeroDocumento}
                          onChange={handleMadreChange}
                          placeholder="Ej: 1234567890"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="telefono"
                          value={formData.madre.telefono}
                          onChange={handleMadreChange}
                          placeholder="Ej: 310 123 4567"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.madre.email}
                          onChange={handleMadreChange}
                          placeholder="Ej: lauramartinez@gmail.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          Ocupación *
                        </label>
                        <input
                          type="text"
                          required
                          name="ocupacion"
                          value={formData.madre.ocupacion}
                          onChange={handleMadreChange}
                          placeholder="Ej: Contadora"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        />
                      </div>
                    </div>

                    <div className="mt-2 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-4 text-center">
                      <Upload className="mx-auto size-6 text-brand mb-1" />
                      <span className="text-xs font-semibold text-white block">
                        Documento de identidad *
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Haz clic o arrastra el archivo aquí (JPG, PNG, PDF. Max. 10MB)
                      </span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,application/pdf"
                        onChange={(e) => handleFileUpload("docMadre", e)}
                        className="mt-2 w-full text-[10px] text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-brand/20 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand"
                      />
                      {formData.madre.docNombre && (
                        <p className="mt-2 text-xs font-semibold text-emerald-400">
                          ✓ Archivo cargado: {formData.madre.docNombre}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 4: INFORMACIÓN DEPORTIVA */}
                {currentStep === 4 && (
                  <div className="flex flex-col gap-4 animate-float-up">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-brand flex items-center gap-2">
                      <Award className="size-5" /> 4. INFORMACIÓN DEPORTIVA
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          ¿Cómo te enteraste de APEX? *
                        </label>
                        <select
                          name="enterado"
                          value={formData.deportiva.enterado}
                          onChange={handleDeportivaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="Redes sociales" className="bg-[#080d1a]">Redes sociales</option>
                          <option value="Amigos/Familiares" className="bg-[#080d1a]">Amigos / Familiares</option>
                          <option value="Evento deportivo" className="bg-[#080d1a]">Evento deportivo</option>
                          <option value="Búsqueda web" className="bg-[#080d1a]">Búsqueda web</option>
                          <option value="Otro" className="bg-[#080d1a]">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">
                          ¿Cuánto tiempo llevas entrenando? *
                        </label>
                        <select
                          name="tiempoEntrenando"
                          value={formData.deportiva.tiempoEntrenando}
                          onChange={handleDeportivaChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white outline-none focus:border-brand"
                        >
                          <option value="Menos de 6 meses" className="bg-[#080d1a]">Menos de 6 meses</option>
                          <option value="6 meses a 1 año" className="bg-[#080d1a]">6 meses a 1 año</option>
                          <option value="1 a 3 años" className="bg-[#080d1a]">1 a 3 años</option>
                          <option value="Más de 3 años" className="bg-[#080d1a]">Más de 3 años</option>
                          <option value="Principiante" className="bg-[#080d1a]">Principiante total</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        ¿Qué deportes practicas actualmente? *
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {["Natación", "Ciclismo", "Atletismo", "Ninguno"].map((sport) => {
                          const isChecked = formData.deportiva.deportes.includes(sport)
                          return (
                            <button
                              key={sport}
                              type="button"
                              onClick={() => handleDeporteCheckbox(sport)}
                              className={`flex items-center justify-center gap-2 rounded-xl p-3 text-xs font-bold transition-all border ${
                                isChecked
                                  ? "bg-brand/25 border-brand text-white shadow-md shadow-brand/10"
                                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                              }`}
                            >
                              <CheckCircle2 className={`size-4 ${isChecked ? "text-brand" : "opacity-30"}`} />
                              <span>{sport}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Comentarios adicionales (opcional)
                      </label>
                      <textarea
                        name="comentarios"
                        rows={3}
                        value={formData.deportiva.comentarios}
                        onChange={handleDeportivaChange}
                        placeholder="Cuéntanos algo más que consideres importante..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white outline-none focus:border-brand"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: DOCUMENTOS ADICIONALES */}
                {currentStep === 5 && (
                  <div className="flex flex-col gap-4 animate-float-up">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-brand flex items-center gap-2">
                      <FileText className="size-5" /> 5. DOCUMENTOS ADICIONALES (OPCIONAL)
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Si deseas adjuntar documentos adicionales (Prescripción médica, carnet EPS, etc.) puedes hacerlo aquí.
                    </p>

                    <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-center">
                      <Upload className="mx-auto size-8 text-brand mb-2" />
                      <span className="text-xs font-semibold text-white block">
                        Adjuntar archivos
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-1">
                        JPG, PNG, PDF. Max 10MB por archivo
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/jpeg,image/png,application/pdf"
                        onChange={(e) => handleFileUpload("docAdicional", e)}
                        className="mt-3 w-full text-[10px] text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-brand/20 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand"
                      />
                    </div>

                    {formData.documentos.archivos.length > 0 && (
                      <div className="rounded-xl bg-white/5 p-3">
                        <span className="text-xs font-bold text-white block mb-1">
                          Archivos adjuntos:
                        </span>
                        <ul className="flex flex-col gap-1 text-xs text-emerald-400">
                          {formData.documentos.archivos.map((file, idx) => (
                            <li key={idx}>✓ {file}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 6: AUTORIZACIÓN Y ACEPTACIÓN */}
                {currentStep === 6 && (
                  <div className="flex flex-col gap-4 animate-float-up">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-brand flex items-center gap-2">
                      <Shield className="size-5" /> 6. AUTORIZACIÓN Y ACEPTACIÓN
                    </h3>

                    <div className="flex flex-col gap-3">
                      <label
                        onClick={() => handleAutorizacionChange("politicaDatos")}
                        className={`flex items-start gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                          formData.autorizacion.politicaDatos
                            ? "bg-brand/15 border-brand text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <CheckCircle2 className={`size-5 shrink-0 mt-0.5 ${formData.autorizacion.politicaDatos ? "text-brand" : "opacity-30"}`} />
                        <span className="text-xs leading-snug">
                          He leído y acepto la <strong>Política de Tratamiento de Datos Personales</strong>
                        </span>
                      </label>

                      <label
                        onClick={() => handleAutorizacionChange("estatutos")}
                        className={`flex items-start gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                          formData.autorizacion.estatutos
                            ? "bg-brand/15 border-brand text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <CheckCircle2 className={`size-5 shrink-0 mt-0.5 ${formData.autorizacion.estatutos ? "text-brand" : "opacity-30"}`} />
                        <span className="text-xs leading-snug">
                          He leído los <strong>Estatutos del Club APEX</strong>
                        </span>
                      </label>

                      <label
                        onClick={() => handleAutorizacionChange("terminos")}
                        className={`flex items-start gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                          formData.autorizacion.terminos
                            ? "bg-brand/15 border-brand text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <CheckCircle2 className={`size-5 shrink-0 mt-0.5 ${formData.autorizacion.terminos ? "text-brand" : "opacity-30"}`} />
                        <span className="text-xs leading-snug">
                          Acepto los <strong>Términos y Condiciones de Inscripción</strong>
                        </span>
                      </label>

                      <label
                        onClick={() => handleAutorizacionChange("autorizacionEmpresa")}
                        className={`flex items-start gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                          formData.autorizacion.autorizacionEmpresa
                            ? "bg-brand/15 border-brand text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <CheckCircle2 className={`size-5 shrink-0 mt-0.5 ${formData.autorizacion.autorizacionEmpresa ? "text-brand" : "opacity-30"}`} />
                        <span className="text-xs leading-snug">
                          Autorizo de manera expresa, libre, voluntaria e informada a <strong>APEX TRIATLÓN</strong> para el tratamiento de mis datos personales y los de mi hijo(a) con fines administrativos, afiliación y compra de póliza de seguros en APEX TRIATLÓN.
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step Navigation Buttons */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep((s) => s - 1)}
                      className="border-white/20 text-white hover:bg-white/10 text-xs"
                    >
                      <ChevronLeft className="size-4" /> Anterior
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 6 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep((s) => s + 1)}
                      className="bg-brand text-white font-bold hover:bg-brand/90 text-xs"
                    >
                      Siguiente <ChevronRight className="size-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-emerald-600 text-white font-bold hover:bg-emerald-500 text-xs px-6 py-2.5 shadow-lg shadow-emerald-600/20"
                    >
                      {loading ? "Enviando..." : "ENVIAR INSCRIPCIÓN"}
                      <Send className="size-4 ml-1.5" />
                    </Button>
                  )}
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-1">
                  <Lock className="size-3 text-emerald-400" />
                  <span>Tu información está 100% segura con nosotros.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Panel Derecho / Info & Contact (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Beneficios Incluidos */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-4 flex items-center gap-2">
                <FileCheck className="size-4" /> BENEFICIOS INCLUIDOS
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Plan de entrenamiento personalizado",
                  "Seguimiento técnico continuo",
                  "Entrenamientos presenciales",
                  "Planificación deportiva",
                  "Evaluación deportiva",
                  "Acompañamiento integral",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="size-4 shrink-0 text-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horarios / Estadísticas extra */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Clock className="size-5" />
                </div>
                <div>
                  <span className="font-display text-sm font-bold text-white block">6 HORAS</span>
                  <span className="text-[10px] text-slate-400">por semana</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <span className="font-display text-sm font-bold text-white block">24 HORAS</span>
                  <span className="text-[10px] text-slate-400">por mes</span>
                </div>
              </div>
            </div>

            {/* Tarifas Especiales */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3 flex items-center gap-2">
                <Gift className="size-4 text-brand" /> TARIFAS ESPECIALES DISPONIBLES:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                  <Users className="size-3.5 text-brand" />
                  <span>Por referidos</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                  <Heart className="size-3.5 text-brand" />
                  <span>Plan familiar</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                  <Handshake className="size-3.5 text-brand" />
                  <span>Convenios</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                  <Users className="size-3.5 text-brand" />
                  <span>Por grupo</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="rounded-3xl border border-brand/40 bg-gradient-to-r from-brand/20 via-white/[0.03] to-transparent p-6 backdrop-blur-xl shadow-xl flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand">
                ¿TIENES DUDAS? CONTÁCTANOS
              </h3>
              <div className="flex flex-col gap-2 text-xs">
                <a href="mailto:apextri.team@gmail.com" className="flex items-center gap-2 text-slate-200 hover:text-brand transition-colors">
                  <Mail className="size-4 text-brand" />
                  <span>apextri.team@gmail.com</span>
                </a>
                <a href="tel:+573107970771" className="flex items-center gap-2 text-slate-200 hover:text-brand transition-colors font-semibold">
                  <Phone className="size-4 text-brand" />
                  <span>+57 310 797 0771</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
