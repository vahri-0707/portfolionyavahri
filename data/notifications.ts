export type NotificationType = "NEW_PROJECT" | "NEW_POSITION" | "FINISHED_PROJECT" | "ACHIEVEMENT";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  date: string;
}

export const notifications: Notification[] = [
  {
    id: "triply-case-study",
    type: "NEW_PROJECT",
    title: "New case study dropped",
    description: "Published a new case study for Triply, an all-in-one travel companion app",
    date: "25 July 2026",
  },
  {
    id: "vantage-case-study-notif",
    type: "NEW_PROJECT",
    title: "New case study dropped",
    description: "Published a new case study for Vantage, an AI-powered sprint workflow landing page",
    date: "20 July 2026",
  },
  {
    id: "orbital-case-study-notif",
    type: "NEW_PROJECT",
    title: "New case study dropped",
    description: "Published a new case study for Orbital, a smart automation platform landing page",
    date: "18 July 2026",
  },
  {
    id: "weatherr-case-study-notif",
    type: "NEW_PROJECT",
    title: "New case study dropped",
    description: "Published a new case study for Weatherr, an earthquake and weather preparedness app",
    date: "15 June 2026",
  },
  {
    id: "clearclaim-case-study-notif",
    type: "NEW_PROJECT",
    title: "New case study dropped",
    description: "Published a new case study for ClearClaim, a reimbursement management SaaS",
    date: "10 May 2026",
  },
  {
    id: "n1",
    type: "NEW_POSITION",
    title: "Started a new position",
    description: "Started as UI/UX Designer Intern at DOT Indonesia",
    date: "12 March 2026",
  },
  {
    id: "n2",
    type: "ACHIEVEMENT",
    title: "Milestone reached",
    description: "Graduated with a GPA of 3.82 — Informatics degree done",
    date: "26 October 2025",
  },
  {
    id: "n3",
    type: "ACHIEVEMENT",
    title: "Hackathon Winner",
    description: "Took home 2nd place at the ITC Startup Hackathon",
    date: "10 Dec 2024",
  },
  {
    id: "expo-n5",
    type: "FINISHED_PROJECT",
    title: "Project showcase",
    description: "Semester 5 Informatics Expo, closing the year with my last expo in Informatics Expo UII",
    date: "12 December 2023",
  },
  {
    id: "expo-n4",
    type: "FINISHED_PROJECT",
    title: "Project showcase",
    description: "Semester 4 Informatics Expo — proud of what we built",
    date: "11 July 2023",
  },
  {
    id: "expo-n3",
    type: "FINISHED_PROJECT",
    title: "Project showcase",
    description: "Semester 3 Informatics Expo — showed off our project with the squad",
    date: "21 April 2023",
  },
  {
    id: "n4",
    type: "NEW_POSITION",
    title: "Started a new position",
    description: "Joined FTI UII's Marketing & Communication team as Designer & Photographer",
    date: "18 Dec 2022",
  },
  {
    id: "n5",
    type: "ACHIEVEMENT",
    title: "Started college",
    description: "Started my journey at Islamic University of Indonesia",
    date: "21 Sept 2021",
  }
];
