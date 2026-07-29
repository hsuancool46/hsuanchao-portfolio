/**
 * Content schema shared by every locale file.
 *
 * `content.en.ts` implements `SiteContent` today; a future `content.zh.ts`
 * implements the exact same type, so pages never change when a locale is added.
 * No copy belongs in `.tsx` — everything rendered comes from here.
 */

/** Per-route navigation label and document metadata. */
export type PageMeta = {
  /**
   * Label for this route in the site navigation.
   * On `home` this is the wordmark rather than a nav link.
   */
  navLabel: string;
  /** `<title>` for the route. */
  title: string;
  /** `<meta name="description">` for the route. */
  description: string;
};

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

/** A short case card on the home page, linking to `/works/{slug}`. */
export type HomeCase = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  outcome: string;
};

export type HomeContent = {
  meta: PageMeta;
  /** Copy baked into the generated Open Graph / Twitter preview image. */
  socialImage: {
    /** Wordmark in the lower-left corner. */
    wordmark: string;
    /** Single supporting line below centre. */
    tagline: string;
    /** `og:image:alt` / `twitter:image:alt`. */
    alt: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    /** Rendered as consecutive paragraphs. */
    description: string[];
  };
  cases: {
    title: string;
    note: string;
    outcomeLabel: string;
    items: HomeCase[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

/** Title + supporting copy, used by the capability and framework lists. */
export type AboutItem = {
  title: string;
  text: string;
};

/** A scenario where the framework applies; `text` is optional. */
export type AboutScenario = {
  title: string;
  text?: string;
  /** Full sentence including its own "Examples:" lead-in. */
  example?: string;
};

export type AboutContent = {
  meta: PageMeta;
  positioning: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  capabilities: {
    label: string;
    title: string;
    items: AboutItem[];
  };
  methodology: {
    label: string;
    title: string;
    intro: string;
    /** Rendered as a numbered list; the number is supplied by the UI. */
    layers: AboutItem[];
  };
  scenarios: {
    label: string;
    title: string;
    items: AboutScenario[];
  };
};

/* -------------------------------------------------------------------------- */
/* Works                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * A block of body copy inside a case study section.
 *
 * Line breaks are meaningful and preserved on render; blank lines separate
 * paragraphs. A line consisting of a bare URL is rendered as a link.
 */
export type WorkBody = string;

/** A named block nested inside a section (e.g. one deliverable of five). */
export type WorkSubsection = {
  heading: string;
  body: WorkBody;
};

export type WorkSection = {
  /** Eyebrow above the heading, e.g. "Problem Statement". */
  label?: string;
  heading: string;
  body?: WorkBody;
  /** Set apart from the body, e.g. a pointer to the About page framework. */
  note?: string;
  subsections?: WorkSubsection[];
};

export type WorkCase = {
  slug: string;
  title: string;
  /** Tag line on the works list card. */
  tags: string[];
  summary: string;
  result: string;
  /** Tag line on the detail page; may carry more tags than the card. */
  detailTags: string[];
  /** Shown above the case body, e.g. a de-identification disclosure. */
  note?: string;
  sections: WorkSection[];
};

export type WorksContent = {
  meta: PageMeta;
  title: string;
  intro: string;
  /** Prefix for the result line on each list card. */
  resultLabel: string;
  /** Link back to the list from a detail page. */
  backLabel: string;
  items: WorkCase[];
};

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export type ContactTopic = {
  /** Stable across locales; only `label` is translated. */
  value: string;
  label: string;
};

export type ContactContent = {
  meta: PageMeta;
  label: string;
  title: string;
  description: string[];
  /** Contains the `{email}` token, replaced by a mailto link on render. */
  emailPrompt: string;
  email: string;
  form: {
    name: string;
    company: string;
    email: string;
    topic: string;
    topicPlaceholder: string;
    topics: ContactTopic[];
    message: string;
    submit: string;
    /** Submit button label while the message is in flight. */
    submitting: string;
    /** Shown when the required topic field is left empty. */
    topicError: string;
    /** Shown when the form endpoint rejects or the request fails. */
    submitError: string;
    /** Shown when no form endpoint is configured. */
    configError: string;
  };
  success: {
    message: string;
    reset: string;
  };
};

/* -------------------------------------------------------------------------- */

export type SiteContent = {
  home: HomeContent;
  about: AboutContent;
  works: WorksContent;
  contact: ContactContent;
};
