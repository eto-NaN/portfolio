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
  link: "https://github.com/eto-NaN/protocol-codegen-cpp",
  tags: ["Python", "C++"],
},

{
  id: 3,
  img: "",
  title: "Chess-analyzer",
  year: 2025,
  description: "Neural network generator and training to analyze a chess board and determine winning or not positions.",
  link: "https://github.com/eto-NaN/chess-analyzer",
  tags: ["Rust", "AI"],
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
