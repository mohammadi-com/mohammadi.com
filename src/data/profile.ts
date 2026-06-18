export const profile = {
  name: "Mohammad Mohammadi",
  handle: "mohammadi-com",
  domain: "mohammadi.com",
  location: "London",
  contactLabel: "m@{myfamilyname}.com",
  headline:
    "Software engineer building practical tools with Python, FastAPI, TypeScript, and open source habits.",
  intro:
    "I like software that removes friction: tools for job seekers, automation for repetitive work, and small systems that stay understandable after they ship.",
  blogIntro:
    "Writing about backend systems, automation, open-source experiments, and the practical edges of building useful software.",
  availability:
    "Open to focused engineering conversations around backend systems, automation, developer tooling, and product ideas that need a pragmatic build path.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/mohammadi-com",
      handle: "@mohammadi-com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammadmohammadi",
      handle: "in/mohammadmohammadi",
    },
    {
      label: "X",
      href: "https://x.com/mohammadi_io",
      handle: "@mohammadi_io",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mohammadi.io",
      handle: "mohammadi.io",
    },
    {
      label: "Virgool",
      href: "https://virgool.io/mmohammadi",
      handle: "mmohammadi",
    },
  ],
  focus: [
    "Backend services and APIs",
    "FastAPI and Python automation",
    "TypeScript product interfaces",
    "Open-source experiments",
    "Job-search and resume tooling",
  ],
  projects: [
    {
      name: "Zumud",
      href: "https://github.com/Zumud/Zumud",
      description:
        "A product for helping job seekers craft tailored application materials from job descriptions and resumes.",
      tags: ["TypeScript", "product", "job search"],
    },
    {
      name: "GetRemoteJobOffers",
      href: "https://github.com/mohammadi-com/GetRemoteJobOffers",
      description:
        "An open-source effort around breaking down the remote tech job search into concrete, repeatable work.",
      tags: ["remote work", "resume", "automation"],
    },
    {
      name: "TailorMade",
      href: "https://github.com/mohammadi-com/TailorMade_old",
      description:
        "Earlier resume and cover-letter tooling that points at a long-running interest in practical career software.",
      tags: ["Python", "documents", "automation"],
    },
    {
      name: "FastAPI practice",
      href: "https://github.com/mohammadi-com/fastApiProject",
      description:
        "A small FastAPI project from the archive, kept as part of the public engineering trail.",
      tags: ["Python", "FastAPI", "API"],
    },
  ],
};

export type Project = (typeof profile.projects)[number];
