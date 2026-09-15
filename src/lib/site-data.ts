// Coordonnées et informations institutionnelles centralisées.
// Le contenu éditorial (textes des pages) est géré via src/lib/i18n (FR/EN).

export const companyInfo = {
  name: "A2PA",
  legalForm: "Public Affairs & Policy Advisory — structure juridique à confirmer",
  siret: "SIRET / CUI à compléter",
  address: "Bucarest, Roumanie (adresse à compléter)",
  email: "contact@a2pa.ro",
  phone: "+40 7 00 00 00 00",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22850.0!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sen!2sro!4v0000000000000",
} as const;

export const associationInfo = {
  name: "Friends of A2PA",
  legalForm: "Association roumaine à but non lucratif (enregistrement en cours)",
  email: "association@a2pa.ro",
} as const;
