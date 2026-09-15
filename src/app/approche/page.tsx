import type { Metadata } from "next";
import ApprocheContent from "./ApprocheContent";

export const metadata: Metadata = {
  title: "Notre approche",
  description:
    "A2PA's method: policy intelligence, stakeholder understanding and strategic engagement for public affairs in Romania and the European Union.",
};

export default function ApprochePage() {
  return <ApprocheContent />;
}
