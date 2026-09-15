import type { Metadata } from "next";
import AssociationContent from "./AssociationContent";

export const metadata: Metadata = {
  title: "Friends of A2PA — Association",
  description:
    "Friends of A2PA is an independent Romanian non-profit association working to strengthen civic participation, democratic dialogue and transparency in public policymaking.",
};

export default function AssociationPage() {
  return <AssociationContent />;
}

