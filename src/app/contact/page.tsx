import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact A2PA for any business, public sector or association enquiry.",
};

export default function ContactPage() {
  return <ContactContent />;
}

