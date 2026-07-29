export interface PorjectCard {
  id: number,
  img: string;
  title: string;
  year: number;
  shortDescription: string;
  bigDescription: string;
  link: string;
  tags: string[];
}

export const ProjectsCardTab : PorjectCard[] = [

{
  id: 1,
  img: "",
  title: "Kong-lang",
  year: 2025,
  shortDescription: "Imperative programming language. Includes many types, control structures, traits...",
  bigDescription: "Kong-lang draws inspiration from three languages with vastly different profiles: Rust (security-first systems language), Python (high-level with easy readable synthax), and C (performance and low security). We tried to take the best of each one to build our language. Our main goal was security. As so, many error cases are check at the compilation. Plus, we keep the idea We tried to keep a clean and readable synthax with clear block structure.",
  link: "https://github.com/KongKorporation/Kong-lang",
  tags: ["Haskell", "Low-level"],
},

{
  id: 2,
  img: "",
  title: "protocol-codegen-cpp",
  year: 2025,
  shortDescription: "Takes a network protocol definition in JSON and produces C++ structs and methods.",
  bigDescription: "",
  link: "https://github.com/eto-NaN/protocol-codegen-cpp",
  tags: ["Python", "C++"],
},

{
  id: 3,
  img: "",
  title: "Chess-analyzer",
  year: 2025,
  shortDescription: "Neural network generator and training to analyze a chess board.",
  bigDescription: "",
  link: "https://github.com/eto-NaN/chess-analyzer",
  tags: ["Rust", "AI"],
},

{
  id: 4,
  img: "",
  title: "Network",
  year: 2026,
  shortDescription: "Network library in cpp easy to use for UDP and TCP networking.",
  bigDescription: "",
  link: "https://github.com/TrueMoonn/Network",
  tags: ["C++", "Network"],
}

]
