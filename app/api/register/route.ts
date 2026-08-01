import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      deportista,
      padre,
      madre,
      deportiva,
      autorizacion,
    } = body

    // ─── DEBUG ─────────────────────────────────────────────
    console.log("📥 BODY RECIBIDO:", JSON.stringify(body, null, 2))
    console.log("👤 deportista.nombres:", deportista?.nombres)
    console.log("👨 padre.nombres:", padre?.nombres)
    // ───────────────────────────────────────────────────────

    const fechaRegistro = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })

    // 1. Google Sheets / Drive Webhook (Google Apps Script)
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deportista: {
              nombres: deportista?.nombres || "",
              fechaNacimiento: deportista?.fechaNacimiento || "",
              tipoDocumento: deportista?.tipoDocumento || "",
              numeroDocumento: deportista?.numeroDocumento || "",
              genero: deportista?.genero || "",
              rh: deportista?.rh || "",
              telefono: deportista?.telefono || "",
              email: deportista?.email || "",
              ciudad: deportista?.ciudad || "",
              direccion: deportista?.direccion || "",
              eps: deportista?.eps || "",
              fotoDeportista: deportista?.fotoDeportista || "",
            },
            padre: {
              nombres: padre?.nombres || "",
              tipoDocumento: padre?.tipoDocumento || "",
              numeroDocumento: padre?.numeroDocumento || "",
              telefono: padre?.telefono || "",
              email: padre?.email || "",
              ocupacion: padre?.ocupacion || "",
            },
            madre: {
              nombres: madre?.nombres || "",
              tipoDocumento: madre?.tipoDocumento || "",
              numeroDocumento: madre?.numeroDocumento || "",
              telefono: madre?.telefono || "",
              email: madre?.email || "",
              ocupacion: madre?.ocupacion || "",
            },
            deportiva: {
              enterado: deportiva?.enterado || "",
              deportes: deportiva?.deportes || [],
              tiempoEntrenando: deportiva?.tiempoEntrenando || "",
              comentarios: deportiva?.comentarios || "",
            },
            autorizacion: {
              politicaDatos: autorizacion?.politicaDatos || false,
              estatutos: autorizacion?.estatutos || false,
              terminos: autorizacion?.terminos || false,
              autorizacionEmpresa: autorizacion?.autorizacionEmpresa || false,
            },
          }),
        })
      } catch (sheetsErr) {
        console.error("Error enviando a Google Sheets / Drive:", sheetsErr)
      }
    }

    // 2. Transporter SMTP / Email Notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "apextri.team@gmail.com",
        pass: process.env.SMTP_PASS || "",
      },
    })

    const recipientEmail = process.env.NOTIFICATION_EMAIL || "apextri.team@gmail.com"

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f6f9; color: #1e293b; margin: 0; padding: 20px; }
          .container { max-width: 700px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
          .header { background: linear-gradient(135deg, #090d16 0%, #1e3a8a 100%); color: #ffffff; padding: 25px 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px; color: #60a5fa; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #cbd5e1; }
          .section { padding: 20px 30px; border-bottom: 1px solid #e2e8f0; }
          .section-title { font-size: 15px; font-weight: bold; color: #1d4ed8; text-transform: uppercase; margin-bottom: 12px; border-left: 4px solid #3b82f6; padding-left: 10px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .field { background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #f1f5f9; }
          .label { font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 3px; }
          .value { font-size: 13px; font-weight: 600; color: #0f172a; word-break: break-word; }
          .footer { background: #0f172a; color: #94a3b8; padding: 15px 30px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>NUEVA INSCRIPCIÓN - APEX TRIATLÓN</h1>
            <p>Fecha de Registro: ${fechaRegistro}</p>
          </div>

          <div class="section">
            <div class="section-title">1. DATOS DEL DEPORTISTA</div>
            <div class="grid">
              <div class="field"><span class="label">Nombres Completos</span><span class="value">${deportista?.nombres || "-"}</span></div>
              <div class="field"><span class="label">Fecha de Nacimiento</span><span class="value">${deportista?.fechaNacimiento || "-"}</span></div>
              <div class="field"><span class="label">Documento</span><span class="value">${deportista?.tipoDocumento || ""} ${deportista?.numeroDocumento || "-"}</span></div>
              <div class="field"><span class="label">Género</span><span class="value">${deportista?.genero || "-"}</span></div>
              <div class="field"><span class="label">RH</span><span class="value">${deportista?.rh || "-"}</span></div>
              <div class="field"><span class="label">Teléfono / WhatsApp</span><span class="value">${deportista?.telefono || "-"}</span></div>
              <div class="field"><span class="label">Correo Electrónico</span><span class="value">${deportista?.email || "-"}</span></div>
              <div class="field"><span class="label">Ciudad</span><span class="value">${deportista?.ciudad || "-"}</span></div>
              <div class="field"><span class="label">Dirección</span><span class="value">${deportista?.direccion || "-"}</span></div>
              <div class="field"><span class="label">EPS / Salud</span><span class="value">${deportista?.eps || "-"}</span></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">2. DATOS DEL PADRE / ACUDIENTE</div>
            <div class="grid">
              <div class="field"><span class="label">Nombres Completos</span><span class="value">${padre?.nombres || "-"}</span></div>
              <div class="field"><span class="label">Documento</span><span class="value">${padre?.tipoDocumento || ""} ${padre?.numeroDocumento || "-"}</span></div>
              <div class="field"><span class="label">Teléfono / WhatsApp</span><span class="value">${padre?.telefono || "-"}</span></div>
              <div class="field"><span class="label">Correo Electrónico</span><span class="value">${padre?.email || "-"}</span></div>
              <div class="field"><span class="label">Ocupación</span><span class="value">${padre?.ocupacion || "-"}</span></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">3. DATOS DE LA MADRE / ACUDIENTE</div>
            <div class="grid">
              <div class="field"><span class="label">Nombres Completos</span><span class="value">${madre?.nombres || "-"}</span></div>
              <div class="field"><span class="label">Documento</span><span class="value">${madre?.tipoDocumento || ""} ${madre?.numeroDocumento || "-"}</span></div>
              <div class="field"><span class="label">Teléfono / WhatsApp</span><span class="value">${madre?.telefono || "-"}</span></div>
              <div class="field"><span class="label">Correo Electrónico</span><span class="value">${madre?.email || "-"}</span></div>
              <div class="field"><span class="label">Ocupación</span><span class="value">${madre?.ocupacion || "-"}</span></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">4. INFORMACIÓN DEPORTIVA</div>
            <div class="grid">
              <div class="field"><span class="label">¿Cómo se enteró de APEX?</span><span class="value">${deportiva?.enterado || "-"}</span></div>
              <div class="field"><span class="label">Deportes que practica</span><span class="value">${(deportiva?.deportes || []).join(", ") || "Ninguno"}</span></div>
              <div class="field"><span class="label">Tiempo entrenando</span><span class="value">${deportiva?.tiempoEntrenando || "-"}</span></div>
            </div>
            ${deportiva?.comentarios ? `<div class="field" style="margin-top: 10px;"><span class="label">Comentarios Adicionales</span><span class="value">${deportiva.comentarios}</span></div>` : ""}
          </div>

          <div class="section">
            <div class="section-title">5. AUTORIZACIÓN Y ACEPTACIÓN</div>
            <ul style="font-size: 12px; color: #1e293b; padding-left: 20px;">
              <li>✅ Acepta Política de Tratamiento de Datos Personales: <strong>${autorizacion?.politicaDatos ? "SÍ" : "NO"}</strong></li>
              <li>✅ Acepta Estatutos del Club APEX: <strong>${autorizacion?.estatutos ? "SÍ" : "NO"}</strong></li>
              <li>✅ Acepta Términos y Condiciones de Inscripción: <strong>${autorizacion?.terminos ? "SÍ" : "NO"}</strong></li>
              <li>✅ Autorización expresa para fines administrativos, afiliación y seguros APEX: <strong>${autorizacion?.autorizacionEmpresa ? "SÍ" : "NO"}</strong></li>
            </ul>
          </div>

          <div class="footer">
            <p>APEX TRIATLÓN — Formamos personas • Desarrollamos triatletas • Inspiramos campeones</p>
          </div>
        </div>
      </body>
      </html>
    `

    if (process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Inscripciones APEX Web" <${process.env.SMTP_USER || "apextri.team@gmail.com"}>`,
        to: recipientEmail,
        replyTo: deportista?.email || recipientEmail,
        subject: `🏆 Nueva Inscripción APEX: ${deportista?.nombres || "Deportista"}`,
        html: htmlContent,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Inscripción registrada y enviada exitosamente a Google Sheets y Correo.",
    })
  } catch (error) {
    console.error("Error procesando inscripción:", error)
    return NextResponse.json(
      { success: false, message: "Error al procesar la inscripción" },
      { status: 500 }
    )
  }
}
