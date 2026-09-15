import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "A2PA services: private-sector public affairs, policy monitoring, stakeholder engagement, EU funding strategy and public policy development.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
