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
      { error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Merci de compléter les champs obligatoires du formulaire." },
      { status: 400 }
    );
  }

  // TODO: brancher un service d'envoi d'email (ex. Resend, Nodemailer, SendGrid)
  // en utilisant les variables d'environnement du projet une fois le contenu
  // et l'hébergement définitifs confirmés. Pour l'instant, la requête est
  // journalisée côté serveur afin de valider le flux de bout en bout.
  console.info("Nouveau message de contact reçu :", {
    name: body.name,
    email: body.email,
    company: body.company,
    profile: body.profile,
  });

  return NextResponse.json({ success: true });
}
