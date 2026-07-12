export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  coverImage: string;
  galleryImages: string[];
  year: string;
  category: string;
  role: string;
  teammates: string[];
  tools: string[];
  timeline: string;
  description: string;
  context: string;
  sections: {
    heading: string;
    body: string;
    image?: string;
  }[];
}

const tbp = "To be posted";
const tbpImage = "/tobeposted.png";

const makePlaceholder = (id: string, category: string): ProjectDetail => ({
  id,
  title: tbp,
  tagline: tbp,
  coverImage: tbpImage,
  galleryImages: [tbpImage, tbpImage],
  year: tbp,
  category,
  role: tbp,
  teammates: [tbp],
  tools: [tbp],
  timeline: tbp,
  description: tbp,
  context: tbp,
  sections: [
    {
      heading: tbp,
      body: tbp,
      image: tbpImage,
    },
    {
      heading: tbp,
      body: tbp,
      image: tbpImage,
    },
  ],
});

export const projectDetails: ProjectDetail[] = [
  // Landing Page
  makePlaceholder("l1", "Landing Page"),
  makePlaceholder("l2", "Landing Page"),
  makePlaceholder("l3", "Landing Page"),
  makePlaceholder("l4", "Landing Page"),

  // SaaS Dashboard
  makePlaceholder("s1", "SaaS Dashboard"),
  makePlaceholder("s2", "SaaS Dashboard"),
  makePlaceholder("s3", "SaaS Dashboard"),
  makePlaceholder("s4", "SaaS Dashboard"),

  // Mobile App
  makePlaceholder("m1", "Mobile App"),
  makePlaceholder("m2", "Mobile App"),
  makePlaceholder("m3", "Mobile App"),
  makePlaceholder("m4", "Mobile App"),
];
