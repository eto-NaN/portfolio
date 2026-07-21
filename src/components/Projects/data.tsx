export interface PorjectCard {
  id: number,
  img: string;
  title: string;
  year: number;
  description: string;
  link: string;
  tags: string[];
}

export const ProjectsCardTab : PorjectCard[] = [

{
  id: 1,
  img: "",
  title: "Kong-lang",
  year: 2025,
  description: "Imperative programming language. I built the compiler from scratch.",
  link: "https://github.com/KongKorporation/Kong-lang",
  tags: ["Haskell", "Low-level"],
},

{
  id: 2,
  img: "",
  title: "",
  year: 0,
  description: "",
  link: "/",
  tags: [],
},

{
  id: 3,
  img: "",
  title: "",
  year: 0,
  description: "",
  link: "/",
  tags: [],
},

{
  id: 4,
  img: "",
  title: "",
  year: 0,
  description: "",
  link: "/",
  tags: [],
}

]
