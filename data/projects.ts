export interface Author {
  name: string;
  verified: boolean;
  avatar: string;
}

export interface Project {
  id: string;
  author: Author;
  date: string;
  pinned?: boolean;
  caption: string;
  image?: string;
  images?: string[];
  likes: number;
  shares: number;
  projectLink?: string;
}

export const projects: Project[] = [
  {
    id: "dot-graduation",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "24 July 2026",
    pinned: true,
    caption: "Just graduated from my DOT Internship as a UI/UX Designer and was awarded Best Designer! Grateful for the experience and ready for the next challenge.",
    image: "/graduate dot.png",
    likes: 420,
    shares: 28,
  },
  {
    id: "zesty-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "28 July 2026",
    caption: "New case study: Zesty. A calorie tracker that feels like a buddy, not a judge. Built with a 3-layer friendly system featuring a mascot, a soft lime palette, and encouraging copy.",
    image: "/Zesty Project/Zesty - Thumbnail.png",
    projectLink: "/projects/zesty",
    likes: 0,
    shares: 0,
  },
  {
    id: "sprout-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "27 July 2026",
    caption: "New case study: Sprout. A membership feature designed for small business owners. Focused on transparency, urgent promos, and an easy-to-navigate reward catalog.",
    image: "/Sprout Project/Sprout - Thumbnail.png",
    projectLink: "/projects/sprout",
    likes: 0,
    shares: 0,
  },
  {
    id: "indolink-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "26 July 2026",
    caption: "New case study dropped: IndoLink. A link-in-bio builder tailored specifically for e-commerce brands with a 2-layer appearance system. See how we make WhatsApp CTA and Product blocks stand out.",
    image: "/IndoLink Project/IndoLink - Thumbnail.png",
    projectLink: "/projects/indolink",
    likes: 0,
    shares: 0,
  },
  {
    id: "triply-launch",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "25 July 2026",
    caption: "New case study just dropped: Triply, the travel app that replaces your discovery app, your booking platform, and your trip spreadsheet. One flow from 'where should I go?' to 'payment confirmed.' Check it out",
    image: "/Triply Project/Triply - Thumbnail.png",
    projectLink: "/projects/triply",
    likes: 0,
    shares: 0,
  },
  {
    id: "vantage-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "20 July 2026",
    caption: "New case study: Vantage, a landing page concept for an AI-powered sprint workflow platform. Every section designed with conversion in mind, from hero to footer.",
    image: "/vantage project/vantage thumbnail.png",
    projectLink: "/projects/vantage",
    likes: 87,
    shares: 9,
  },
  {
    id: "orbital-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "18 July 2026",
    caption: "New case study: Orbital, a landing page for a smart automation platform that brings design, engineering, and workflow into one unified system.",
    image: "/orbital project/orbital thumbnail.png",
    projectLink: "/projects/orbital",
    likes: 112,
    shares: 14,
  },
  {
    id: "weatherr-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "15 June 2026",
    caption: "Published my first case study on Weatherr! It's a mobile app focused on earthquake and weather preparedness to help people stay safe and informed.",
    image: "/Weatherr Project/Weatherr - Showcase Thumbnail.png",
    projectLink: "/projects/weatherr",
    likes: 154,
    shares: 12,
  },
  {
    id: "clearclaim-case-study",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "10 May 2026",
    caption: "Deep dive into ClearClaim: a complete SaaS dashboard built to streamline reimbursement management for growing teams. Read the full breakdown of the process and design decisions.",
    image: "/Clear Claim Project/ClearClaim - Thumbnail Image.png",
    projectLink: "/projects/clearclaim",
    likes: 201,
    shares: 24,
  },
  {
    id: "5",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "12 March 2026",
    pinned: true,
    caption: "Started as UI/UX Designer Intern at DOT Indonesia",
    image: "/dot.png",
    likes: 210,
    shares: 18
  },
  {
    id: "4",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "26 October 2025",
    caption: "Graduated with a GPA of 3.82 — Informatics degree done",
    image: "/graduate.jpeg",
    likes: 345,
    shares: 42
  },
  {
    id: "3",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "10 Dec 2024",
    caption: "Took home 2nd place at the ITC Startup Hackathon",
    image: "/hackathon.jpeg",
    likes: 182,
    shares: 24
  },
  {
    id: "expo-5",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "12 December 2023",
    caption: "Semester 5 Informatics Expo, closing the year with my last expo in Informatics Expo UII",
    image: "/informatics expo semester 5 - December 12 2023.jpeg",
    likes: 134,
    shares: 11
  },
  {
    id: "expo-4",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "11 July 2023",
    caption: "Semester 4 Informatics Expo — proud of what we built",
    image: "/informatics expo semester 4 - July 11 2023.jpeg",
    likes: 102,
    shares: 7
  },
  {
    id: "expo-3",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "21 April 2023",
    caption: "Semester 3 Informatics Expo — showed off our project with the squad",
    image: "/informatics expo semester 3 - april 21 2023.jpeg",
    likes: 145,
    shares: 15
  },
  {
    id: "2",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "18 Dec 2022",
    caption: "Joined FTI UII's Marketing & Communication team as Designer & Photographer",
    image: "/marcomm.jpeg",
    likes: 95,
    shares: 8
  },
  {
    id: "1",
    author: {
      name: "vhrimlna",
      verified: true,
      avatar: "/profile-pict.jpg",
    },
    date: "21 Sept 2021",
    caption: "Started my journey at Islamic University of Indonesia",
    image: "/logo-uii.png",
    likes: 120,
    shares: 5
  }
];
