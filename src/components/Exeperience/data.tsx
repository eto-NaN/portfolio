export interface ExperienceCard {
  id: number;
  img: string;
  title: string;
  date: string;
  company: string;
  shortDescription: string;
  bigDescription: string;
  link: string;
  tags: string[];
}

export const ExperiencesCardTab: ExperienceCard[] = [
  {
    id: 1,
    img: "",
    title: "Astek (teaching assistant)",
    date: "feb 2025 - jul 2026",
    company: "Epitech Paris",
    shortDescription: "Technical assistance to students during their projects",
    bigDescription: "",
    link: "",
    tags: [""],
  },
];
