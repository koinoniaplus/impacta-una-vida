import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { BrevoTranporter } from "./BrevoTranporter";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await BrevoTranporter({
      to: "hello.koinoniaplus@gmail.com",
      subject: "Nuevo mensaje desde Impacta Una Vida",
      text: `Mensaje de: ${name}\n\n${message} \n\nPuedes responder a: ${email}`,
      html: `<p><strong>Mensaje de:</strong> ${name}</p><p>${message}</p><p><strong>Responder a:</strong> <a href="mailto:${email}">${email}</a></p>`,
    });
    return NextResponse.json(
      { success: true, message: "Contact ok" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
  }
  return new NextResponse("Internal Server Error", { status: 500 });
}
