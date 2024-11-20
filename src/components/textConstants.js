export interface ContactPageText {
  title: string;
  links: { text: string, url: string }[];
}

export const CONTACT_PAGE_TEXT: ContactPageText = {
  title: "Contact",
  links: [
    { text: "Email", url: "mailto:example@example.com" },
    { text: "LinkedIn", url: "https://linkedin.com/in/example" },
    { text: "Dribbble", url: "https://dribbble.com/example" },
    { text: "Portfolio", url: "https://example.com" },
  ],
};

export interface Skill {
  initial: string;
  name: string;
}

export const HOME_PAGE_TEXT = {
  skills: [
    { initial: "Ld", name: "Leadership" },
    { initial: "Fg", name: "Figma" },
    { initial: "Ps", name: "Photoshop" },
    { initial: "Ts", name: "Typescript" },
    { initial: "Ux", name: "Experience" },
    { initial: "Ui", name: "Interface" },
    { initial: "Ag", name: "Agile" },
    { initial: "Html", name: "Markup" },
    { initial: "Css", name: "Stylesheets" },
    { initial: "A11y", name: "Accessibility" },
  ],
  mainTitle: "David Melkonian",
  summaryTitle: "Professional Summary",
  summaryText: [
    `With a diverse background in enterprise software delivery, my experience spans projects for high-profile clients such as HealthCare.gov, Blue Cross Blue Shield, United Healthcare, Meridian Health, Delta Dental of Michigan, Ford Motor Company, and General Motors. My roles have included delivery manager, technical lead, accessibility lead, user experience (UX) and user interface (UI) designer/developer, consultant, and technical writer.`,
    `I've contributed to numerous applications, including Delta Dental's MySmileCoverage site, the Member Portal, and the SaaS product Roosevelt Solutions. I've also been involved with Blue Cross Blue Shield of Michigan's platforms like bcbsm.com and mibcn.com, as well as many other projects of various scales.`,
  ],
  skillsTitle: "Skills and Expertise",
  skillsText: [
    `With a strong foundation in Agile methodologies such as Scrum and SAFe, I am a Certified Usability Analyst (CUA) through Human Factors International and hold a Scrum Master certification. My work involves close collaboration with product owners, executive leadership, vendors, and management to ensure the delivery of world-class software.`,
    `As an experienced front-end developer, I am proficient in HTML, CSS, JavaScript, TypeScript, and frameworks like React, Angular, and Bootstrap. I excel at creating pixel-perfect, responsive design frameworks from scratch and converting design files to production-ready code.`,
  ],
  uxUiTitle: "User Experience & Interface Design",
  uxUiText: [
    `I am a UX/UI specialist with a CUA credential, skilled in developing and integrating graphic design systems directly with front-end code. I have created wireframes, graphic compositions, design systems, working prototypes, and fully coded proof-of-concept projects. My design toolkit includes Figma, Photoshop, Illustrator, and Sketch, and I have a deep understanding of creating cohesive, visually compelling user experiences.`,
  ],
};

export const LINKS_TEXT = {
  videoConference: "Video conference concept",
};

export interface SkillCategory {
    title: string;
    skills: string[];
  }
  
  export const SKILLS_DATA: SkillCategory[] = [
    {
      title: "Front End Development",
      skills: [
        "HTML / CSS / SCSS / Bootstrap / Razor",
        "SaSS / Less",
        "Wordpress / Umbraco / Magnolia",
        "ReactJs / Angular / jQuery",
      ],
    },
    {
      title: "Front End Design",
      skills: [
        "Photoshop / Illustrator / Sketch",
        "Figma / Proto.io / Canva",
      ],
    },
    {
      title: "User Experience Design",
      skills: [
        "Photoshop / Illustrator / Sketch",
        "Figma / Proto.io / Canva",
        "Balsamiq / Lucidchart / Adobe XD",
      ],
    },
    {
      title: "Package Management",
      skills: ["NPM", "Gulp", "Yarn", "NuGet", "Homebrew"],
    },
    {
      title: "Development Tooling",
      skills: [
        "Github / Bitbucket / Azure / Jenkins / Docker",
        "Visual Studio / Intellij / Notepad++ / Github Codespaces",
      ],
    },
    {
      title: "Methodologies and Disciplines",
      skills: [
        "Content Architecture / UX Architecture / UI Patterns / Workflow Illustration",
        "Team Leadership / Management / Consulting / Client Relationships",
        "Agile / Scrum / SAFe",
        "Human-Centered Design / Accessibility / ADA / Section 508",
        "Graphic Design principles / Wireframing / User Experience Certification",
      ],
    },
  ];
  