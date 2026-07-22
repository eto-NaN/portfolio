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
  title: "protocol-codegen-cpp",
  year: 2026,
  description: "A code generator that takes a network protocol definition in JSON and produces C++ structs with serialize/deserialize methods.",
  link: "https://github.com/eto-NaN/protocol-codegen-cpp?tab=GPL-3.0-1-ov-file",
  tags: ["Python", "C++"],
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
