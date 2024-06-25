"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroSection() {
  return (
    <div className="relative h-[45rem] flex items-center bg-white dark:bg-black justify-center w-full group" id="home">
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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto "
      >
        Hi, I&apos;m Pallavi Bobde <br />
        
        
        <Highlight className="text-black dark:text-white px-5">
          Amazing Frontend Developer
        </Highlight>
        <p className="text-[20px] font-normal my-5">
          Energetic developer, specializing in React, React Native and Next js applications,
          with over 2 years of professional experience in creating and optimizing web applications. Let&apos;s build something amazing together.<br/>
        </p>
        <div className="my-10 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a
                href="#projects" className="rounded-xl bg-black border-2 dark:border-white border-white text-white text-[16px] py-3 px-5">
            View My Projects
          </a>
          <a
                href="./Pallavi-Bobde-Resume.pdf"
                download="Pallavi-Bobde-Resume.pdf"
                target="_blank" className="rounded-xl bg-gradient-to-t from-[#330867] to-[#0072ff] dark:from-[#330867] dark:to-[#0072ff]  dark:border-[#0072ff] border-[#0072ff] text-white text-[16px] py-3 px-5">
            Download Resume
          </a>
        </div>
      </motion.h1>
    </div>
  );
}
