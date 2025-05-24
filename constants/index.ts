import Web1 from "@/public/images/book-search.png";
import Web2 from "@/public/images/guessing-game.png";
import Web3 from "@/public/images/rn-ecommerce.png";
import Web4 from "@/public/images/rn-ranahpesta.png";
import Web5 from "@/public/images/go-expert.png";
import Web6 from "@/public/images/go-tcr.png";
import { CSSProperties } from "react";
import { Figma, Github, Instagram, Linkedin } from "@/components/icons";

// Layout
export const menuLists = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/About",
  },
  {
    id: 3,
    name: "Works",
    path: "/Works",
  },
  {
    id: 4,
    name: "Contact",
    path: "/Contact",
  },
];
export const iconLists = [
  {
    id: 1,
    name: Instagram,
    path: "https://www.instagram.com/illahisyaifal/?next=%2F",
  },
  {
    id: 2,
    name: Linkedin,
    path: "https://linkedin.com/in/syaifal-illahi",
  },
  {
    id: 3,
    name: Github,
    path: "https://github.com/Fal-hi",
  },
  {
    id: 4,
    name: Figma,
    path: "https://www.figma.com/community/file/1464190089054616382",
  },
];

// About
export const listsPL = [
  {
    id: 1,
    name: "TypeScript",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "Node JS",
  },
  {
    id: 4,
    name: "SQL",
  },
];
export const listsFLFE = [
  {
    id: 1,
    name: "React JS",
  },
  {
    id: 2,
    name: "React Native",
  },
  {
    id: 3,
    name: "Next JS",
  },
  {
    id: 4,
    name: "Tailwind CSS",
  },
  {
    id: 5,
    name: "Bootstrap CSS",
  },
];
export const listsFLBE = [
  {
    id: 1,
    name: "Nest JS",
  },
  {
    id: 2,
    name: "Express JS",
  },
];
export const listsDesign = [
  {
    id: 1,
    name: "Figma",
  },
  {
    id: 2,
    name: "Canva",
  },
  {
    id: 3,
    name: "Corel Draw",
  },
];
export const listsWorkOrStudy = [
  {
    id: 1,
    company: "Refactory",
    link: "https://www.linkedin.com/school/refactory-id/about/",
    title: "Bootcamp as a Fullstack Developer | 1 month",
  },
  {
    id: 2,
    company: "CodeXAcademy",
    link: "https://www.linkedin.com/company/codexacademyid/about/",
    title: "Bootcamp as a Fullstack Developer | 3 month",
  },
  {
    id: 3,
    company: "Ganesha Operation",
    link: "https://www.linkedin.com/company/ganesha-operation/about/",
    title: "Working as a Frontend Developer | 2023 - until now",
  },
];

// Works
export const imageLists = [
  {
    name: Web5,
    id: 1,
    alt: "Ganesha Operation Expert",
    tech: "Next JS, Tailwind CSS",
    link: "https://ganeshaoperationexpert.com",
  },
  {
    name: Web6,
    id: 2,
    alt: "Ganesha Operation The Champion Race",
    tech: "Next JS, Tailwind CSS",
    link: "https://champion.ganeshaoperationexpert.com/",
  },
  {
    id: 3,
    name: Web1,
    alt: "Book Search",
    tech: "Next JS, Tailwind CSS",
    link: "https://book-search-fal.netlify.app",
  },
  {
    id: 4,
    name: Web2,
    alt: "Guessing Game",
    tech: "Next JS, Tailwind CSS",
    link: "https://guessing-game-fal.vercel.app",
  },
  {
    id: 5,
    name: Web3,
    alt: "React Native Ecommerce",
    tech: "React Native",
    link: "https://github.com/Fal-hi/freebies-ecommerce",
  },
  {
    id: 6,
    name: Web4,
    alt: "React Native Invitation Online",
    tech: "React Native, Tailwind CSS",
    link: "https://github.com/Fal-hi/ranah-pesta",
  },
];
export const arrowStyles: CSSProperties = {
  position: "absolute",
  cursor: "pointer",
  top: "calc(50% - 15px)",
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 4px )",
  WebkitBackdropFilter: "blur( 4px )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  color: "black",
  zIndex: 2,
  width: 30,
  height: 30,
  borderRadius: 50,
  padding: 5,
};
