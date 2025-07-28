import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "8cdaba001@smtp-brevo.com",
    pass: process.env.SENDGRID_API_KEY!,
  },
});

/**
 * Envía un correo usando la configuración de Brevo.
 * @param {Object} options
 * @param {string} options.to - Dirección de correo del destinatario
 * @param {string} options.subject - Asunto del mensaje
 * @param {string} options.text - Contenido de texto plano
 * @param {string} options.html - Contenido HTML (opcional)
 */
export async function BrevoTranporter({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  const mailOptions = {
    from: `"Impacta Una Vida" <hello.koinoniaplus@gmail.com>`,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}
