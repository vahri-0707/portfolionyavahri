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
}

export const projects: Project[] = [
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
