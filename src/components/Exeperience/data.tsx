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
    bigDescription:
      "With 15 other asteks, we helped around 300 different students at Epitech Paris during their projects for 1,5 years. As they have projects to do, they have sometimes need helps to find the good informations, to understand new notions etc. So we help them mainly by guiding them across their reflection instead of giving the straight answer. We respond to their questions but we also animate activities to help them with other students and encourage communication between them to build new ideas. Apart from the assistance, we rate their projects and then give them advices on what they did and what they could do better.",
    link: "",
    tags: ["Teaching", "C", "C++", "Haskell"],
  },
  {
    id: 2,
    img: "",
    title: "Data scientist",
    date: "feb 2025 - jul 2026",
    company: "Caisse des dépôts et consignations",
    shortDescription:
      "Building tools with datas to enhance CPF and combat fraud on it",
    bigDescription:
      "CPF (https://travail-emploi.gouv.fr/le-compte-personnel-de-formation-cpf) is a product created and managed by the company. As it concerns every worker in France, there are many datas to analyze/use and as it involves a lot of money, there are many fraudsters. During this internship, i built tools allowing fraud prevention officer to better do there job (creation of relationship graphs between individuals and organizations for exemple). I also contribuated to create a new search engine (benchmarking and comparative evaluation of natural language processing (NLP) models algorithm). As I worked with data scientists, I had the opportunity to bring them some good practice in their works such as a better use of git alone and in team.",
    link: "",
    tags: ["NLP", "Data", "IHM"],
  },
];
