import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  profile: string;
  message: string;
};

function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const payload = data as Record<string, unknown>;
  return (
    typeof payload.name === "string" &&
    payload.name.trim().length > 1 &&
    typeof payload.email === "string" &&
    /.+@.+\..+/.test(payload.email) &&
    typeof payload.message === "string" &&
    payload.message.trim().length > 5
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corp de cerere invalid." },
      { status: 400 }
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Te rugăm să completezi câmpurile obligatorii din formular." },
      { status: 400 }
    );
  }

  // TODO: conectați un serviciu de trimitere a emailurilor (ex. Resend, Nodemailer, SendGrid)
  // folosind variabilele de mediu ale proiectului odată ce conținutul și
  // găzduirea finală sunt confirmate. Pentru moment, cererea este
  // înregistrată pe server pentru a valida fluxul complet.
  console.info("Mesaj de contact nou primit:", {
    name: body.name,
    email: body.email,
    company: body.company,
    profile: body.profile,
  });

  return NextResponse.json({ success: true });
}
