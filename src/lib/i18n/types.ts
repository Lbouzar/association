export type Locale = "fr" | "en";

export type ListItem = { title: string; description: string };

export type Dictionary = {
  nav: {
    home: string;
    association: string;
    contact: string;
    contactCta: string;
  };
  footer: {
    tagline: string;
    companyLabel: string;
    associationLabel: string;
    navigationLabel: string;
    rights: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroParagraph: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;

    introEyebrow: string;
    introTitle: string;
    introParagraphs: string[];

    approachEyebrow: string;
    approachTitle: string;
    approachParagraphs: string[];

    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    capabilitiesIntro: string;
    capabilities: ListItem[];
    capabilitiesNote: string;

    audienceEyebrow: string;
    audienceTitle: string;
    audiences: ListItem[];

    servicesEyebrow: string;
    servicesTitle: string;
    servicesGroup1Title: string;
    servicesGroup1Intro: string;
    servicesGroup1: ListItem[];
    servicesGroup2Title: string;
    servicesGroup2Intro: string;
    servicesGroup2: ListItem[];

    labEyebrow: string;
    labTitle: string;
    labIntro: string;
    labFormats: string[];
    labNote: string;

    partnerEyebrow: string;
    partnerTitle: string;
    partnerIntro: string;
    partnerSupport: string[];
    partnerNote: string;

    deliveryEyebrow: string;
    deliveryTitle: string;
    deliveryParagraphs: string[];
    deliveryPoints: string[];

    valuesEyebrow: string;
    valuesTitle: string;
    valuesIntro: string;
    values: string[];
    valuesNote: string;

    teamEyebrow: string;
    teamTitle: string;
    teamDescription: string;

    associationTeaserEyebrow: string;
    associationTeaserTitle: string;
    associationTeaserDescription: string;
    associationTeaserCta: string;

    closingEyebrow: string;
    closingTitle: string;
    closingDescription: string;
    closingCta: string;
  };
  association: {
    heroEyebrow: string;
    heroStatus: string;
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
