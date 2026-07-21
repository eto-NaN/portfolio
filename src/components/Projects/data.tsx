export interface PorjectCard {
  id: number,
  img: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const ProjectsCardTab : PorjectCard[] = [

{
  id: 1,
  img: "",
  title: "Kong-lang",
  description: "Imperative programming language. I built the compiler from scratch.",
  link: "https://github.com/KongKorporation/Kong-lang",
  tags: ["Haskell", "Low-level"],
},

{
  id: 2,
  img: "",
  title: "",
  description: "",
  link: "/",
  tags: [],
},

{
  id: 3,
  img: "",
  title: "",
  description: "",
  link: "/",
  tags: [],
},

{
  id: 4,
  img: "",
  title: "",
  description: "",
  link: "/",
  tags: [],
}

]
