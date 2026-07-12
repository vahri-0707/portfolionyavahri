export interface GalleryItem {
  id: string;
  title: string;
  tags: string[];
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "To be posted",
    tags: ["UI Design"],
    image: "/tobeposted.png",
    aspectRatio: "landscape",
  },
  {
    id: "g2",
    title: "To be posted",
    tags: ["Mobile App"],
    image: "/tobeposted.png",
    aspectRatio: "portrait",
  },
  {
    id: "g3",
    title: "To be posted",
    tags: ["Dashboard"],
    image: "/tobeposted.png",
    aspectRatio: "square",
  },
  {
    id: "g4",
    title: "To be posted",
    tags: ["Landing Page"],
    image: "/tobeposted.png",
    aspectRatio: "portrait",
  },
  {
    id: "g5",
    title: "To be posted",
    tags: ["Branding"],
    image: "/tobeposted.png",
    aspectRatio: "landscape",
  },
  {
    id: "g6",
    title: "To be posted",
    tags: ["UI Design"],
    image: "/tobeposted.png",
    aspectRatio: "square",
  },
  {
    id: "g7",
    title: "To be posted",
    tags: ["Mobile App"],
    image: "/tobeposted.png",
    aspectRatio: "portrait",
  },
  {
    id: "g8",
    title: "To be posted",
    tags: ["Web Design"],
    image: "/tobeposted.png",
    aspectRatio: "landscape",
  },
];
