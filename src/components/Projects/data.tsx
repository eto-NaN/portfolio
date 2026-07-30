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

export const ProjectsCardTab: PorjectCard[] = [

  {
    id: 1,
    img: "",
    title: "Kong-lang",
    year: 2025,
    shortDescription: "Imperative programming language. Includes many types, control structures, traits...",
    bigDescription: "Kong-lang draws inspiration from three languages with vastly different profiles: Rust (security-first systems language), Python (high-level with easy readable synthax), and C (performance and low security).\n We tried to take the best of each one to build our language. Our main goal was security. For that, many error cases are check at the compilation like rust compiler. We tried to keep a clean and readable synthax with clear block structure.\nThis language comes with cool features like statically typed variables (like in c and rust), classic control stuctures (for, while, if), Traits (like in rust), some wrappers (tuples, arrays and vectors that are the only wrapper/type that is not 'safe'). There are also standard and math libraries.",
    link: "https://github.com/KongKorporation/Kong-lang",
    tags: ["Haskell", "Low-level"],
  },

  {
    id: 2,
    img: "",
    title: "Network",
    year: 2026,
    shortDescription: "Network library in cpp easy to use for UDP and TCP networking.",
    bigDescription: "This project is a network library in C++ that provides easy-to-use abstractions for UDP and TCP networking. We bring all the tools needed to build network applications such as easy creation and usage of servers and clients, basic message handling, a logger to watch the network traffic etc.",
    link: "https://github.com/TrueMoonn/Network",
    tags: ["C++", "Network"],
  },


  {
    id: 3,
    img: "",
    title: "Chess-analyzer",
    year: 2025,
    shortDescription: "Neural network generator and training to analyze a chess board.",
    bigDescription: "This project is splited into two parts: a neural network module (a generic module/library that grants all the tools needed to generate, train, and analyze a neural network like pytorch but build by our own) and a chessboard analyzer executable that can be launched either in training mode, or in evaluation mode.\nThe analyzer takes an chessboard as input then predicts if the board is in The analyzer predicts one of 5 possible states: Nothing (No check or checkmate), Check White (White king is in check), Check Black (Black king is in check), Checkmate White (White is checkmated), Checkmate Black (Black is checkmated).",
    link: "https://github.com/eto-NaN/chess-analyzer",
    tags: ["Rust", "AI"],
  },

  {
    id: 4,
    img: "",
    title: "protocol-codegen-cpp",
    year: 2025,
    shortDescription: "Takes a network protocol definition in JSON and produces C++ structs and methods.",
    bigDescription: "A code generator that takes a JSON protocol definition and produces C++ structs with serialize / deserialize methods. Each message becomes a C++ struct with:\nAn ID identifying the message\nA serialize() method returning std::vector<uint8_t>\nA deserialize(const std::vector<uint8_t>&) factory method\n\nHere are all the types supported in the structure for your packets: uint8-uint64, int8-int64, float, double, string, fixed array, dynamic array. With that, you can easily use any protocol with this tool for your application.",
    link: "https://github.com/eto-NaN/protocol-codegen-cpp",
    tags: ["Python", "C++"],
  },

]
