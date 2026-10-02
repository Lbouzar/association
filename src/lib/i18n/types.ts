export type Locale = "ro" | "en";

export type ListItem = { title: string; description: string };

export type Dictionary = {
  nav: {
    home: string;
    association: string;
    contact: string;
    contactCta: string;
  };
  footer: {
    companyLabel: string;
    associationLabel: string;
    legalStructureLabel: string;
    rights: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;

    introEyebrow: string;
    introTitle: string;
    introParagraphs: string[];

    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    capabilitiesIntro: string;
    capabilities: ListItem[];

    audienceEyebrow: string;
    audienceTitle: string;
    audiences: ListItem[];

    labEyebrow: string;
    labTitle: string;
    labIntro: string;
    labFormats: string[];

    partnerEyebrow: string;
    partnerTitle: string;
    partnerIntro: string;
    partnerSupport: string[];
  };
  association: {
    heroEyebrow: string;
    heroTitle: string;
    heroParagraph1: string;
    heroParagraph2: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;

    whyEyebrow: string;
    whyTitle: string;
    whyParagraphs: string[];

    missionEyebrow: string;
    missionTitle: string;
    missionIntro: string;
    missionPoints: string[];
    missionNote: string;

    lobbyingEyebrow: string;
    lobbyingTitle: string;
    lobbyingParagraphs: string[];
    lobbyingListIntro: string;
    lobbyingPoints: string[];

    programsEyebrow: string;
    programsTitle: string;
    programs: ListItem[];

    whoEyebrow: string;
    whoTitle: string;
    beneficiariesTitle: string;
    beneficiaries: string[];
    partnersTitle: string;
    partners: string[];
    whoNote: string;

    howEyebrow: string;
    howTitle: string;
    values: ListItem[];

    independenceEyebrow: string;
    independenceTitle: string;
    independenceParagraphs: string[];

    visionEyebrow: string;
    visionTitle: string;
    visionIntro: string;
    visionPoints: string[];

    partnershipsEyebrow: string;
    partnershipsTitle: string;
    partnershipsParagraphs: string[];
    primaryCta: string;
    secondaryCta: string;
    additionalCta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    formTitle: string;
    formHint: string;
    coordinatesTitle: string;
    addressLabel: string;
    addressValue: string;
    emailLabel: string;
    phoneLabel: string;
    mapTitle: string;
    fieldName: string;
    fieldNamePlaceholder: string;
    fieldEmail: string;
    fieldEmailPlaceholder: string;
    fieldCompany: string;
    fieldCompanyPlaceholder: string;
    fieldProfile: string;
    profileOptions: { company: string; publicSector: string; association: string; other: string };
    fieldMessage: string;
    fieldMessagePlaceholder: string;
    submit: string;
    submitLoading: string;
    successMessage: string;
    errorMessageDefault: string;
  };
};
