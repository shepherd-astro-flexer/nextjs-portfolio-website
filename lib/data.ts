import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import gilasGym from "@/public/ggms.png";
import jackYoyiPares from "@/public/jack_yoyi_pares.png";
import starlexFitness from "@/public/startlex_fitness.png";
import portfolioImg from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; //this is more precise and explicitly defined, if we removed this line TS would infer the type

export const experiencesData = [
  {
    title: "Co-founder Gilas Gym",
    location: "Subic",
    description:
      "Co-founded and successfully launched a gym community with the aim of promoting a healthy lifestyle. Oversee daily operations, including member management.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "2022",
  },
  {
    title: "Graduated from AMA Computer College - Olongapo Campus",
    location: "Olongapo City",
    description:
      "I graduated from the AMA Computer College in 2020 with a Bachelor of Science in Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "On-the-Job Training",
    location: "AMA Computer College Registrars office",
    description:
      "Provided technical support to staff and faculty for IT related issues and inquiries, and assisted in managing student records using Microsoft Excel.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "2019-2020",
  },
] as const;
// React.createElement(RiComputerLine),
// React.createElement(FaRegCalendarAlt)

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "Built using cutting-edge technologies, this portfolio reflects my skills in creating responsive, interactive, and visually engaging websites.",
    tags: ["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: portfolioImg,
    hostUrl:
      "https://github.com/shepherd-astro-flexer/nextjs-portfolio-website",
  },
  {
    title: "Gilas Gym Magement System",
    description:
      "A React-based web application that I developed for our gym business, leveraging knowledge I gained from previous projects.",
    tags: ["React", "MongoDB", "Node.js", "Tailwind CSS", "DaisyUI"],
    imageUrl: gilasGym,
    hostUrl: "https://gilasgym.onrender.com/",
  },
  // {
  //   title: "Jack Yoyi Pares Point of Sales System - Capstone Project",
  //   description:
  //     "A Point of Sales System that we developed for our beneficiary, Jack Yoyi Pares.",
  //   tags: ["PHP", "VB.net", "Javascript", "HTML", "CSS"],
  //   imageUrl: jackYoyiPares,
  //   hostUrl: "https://github.com/shepherd-astro-flexer/jack_yoyi_pares_pos",
  // },
  // {
  //   title: "Starlex Gym Management System - SAD Project",
  //   description:
  //     "A Gym Management System that we developed for our beneficiary, Starlex Fitness Gym.",
  //   tags: ["PHP", "VB.net", "HTML", "Javascript", "CSS"],
  //   imageUrl: starlexFitness,
  //   hostUrl: "https://github.com/shepherd-astro-flexer/starlex_fitness_gms",
  // },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "MongoDB",
  "PostgreSql",
  "MySql",
  "PHP",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS",
  "Github",
] as const;
