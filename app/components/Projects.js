"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <div className=" mx-auto px-8 pt-10" id="projects">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-left mx-auto "
      >
        Explore my Projects
      </motion.h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  // {
  //   title: "Portfolio",
  //   description:
  //     "This is my own portfolio website build with lots of love",
  //   tags:['Next js','React','React Hooks','Framer','Tailwind Css'],
  //   imageLink:'',
  //   link: "",
  // },
  // {
  //   title: "Veberszone",
  //   description:
  //     "This is my own portfolio website build with lots of love",
  //   tags:['Next js','React','React Hooks','Framer','Tailwind Css'],
  //   imageLink:'',
  //   link: "https://veberszone.com/",
  // },
  {
    title: "Image Manipulator",
    description:
      "This is my own portfolio website build with lots of love",
    tags:['Javascript','Html','Css','Caman js'],
    imageLink:'https://pallavibobde.github.io/myportfolio/Screenshot%20(68).png',
    link: "https://pallavibobde.github.io/img_manipulation/",
  },
  {
    title: "Google Keep Clone",
    description:
      "Take notes in this google keep clone, notes taking website.",
    tags:['ReactJs','Javascript','Html','Css'],
    imageLink:'https://pallavibobde.github.io/myportfolio/Screenshot%20(81).png',
    link: "https://pallavibobde.github.io/google-keep-clone/",
  },
  {
    title: "Crypto App",
    description:
      "Compare crypto-currency prices with this crypto-app.",
    tags:['React','Javascript','Html','Css'],
    imageLink:'https://pallavibobde.github.io/myportfolio/Screenshot%20(82).png',
    link: "https://pallavibobde.github.io/crypto-app/",
  },
  {
    title: "Weather App",
    description:
      "Check weather using this website. It uses openweathermap api.",
    tags:['Javascript','Html','Css'],
    imageLink:'https://pallavibobde.github.io/myportfolio/Screenshot%20(69).png',
    link: "https://pallavibobde.github.io/weatherapp/",
  },
];
