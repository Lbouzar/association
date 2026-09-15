import type { Metadata } from "next";
import EquipeContent from "./EquipeContent";

export const metadata: Metadata = {
  title: "Notre équipe",
  description: "A2PA's team — presentation coming soon.",
};

export default function EquipePage() {
  return <EquipeContent />;
}
