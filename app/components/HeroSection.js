"use client";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { HeaderSection } from "./HeaderSection";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./ui/Particles";

export function HeroSection() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <div className="bg-transparent">

      <HeaderSection />
      <div
        className="relative h-[40rem] flex items-center   justify-center w-full group"
        id="home"
      >
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-[1rem] "
        >
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
            className="text-2xl md:text-4xl lg:text-4xl font-bold text-white  leading-relaxed lg:leading-snug text-left mx-auto "
          >
            Hi, I&apos;m Pallavi
          </motion.h1>

          <Highlight className=" text-white px-5 text-[2rem]">
            Creative Web Developer
          </Highlight>
          <p className="text-[1rem] font-normal my-5 para">
            Welcome to my portfolio! I specialize in crafting digital experiences that shine, helping businesses create user-friendly, dynamic websites that stand out. Let's bring your vision to life!
            <br />
          </p>
          <p className="text-[1rem] font-normal my-5 altpara">
            Specializing in React, React Native and Next js applications, with
            2+ years of professional experience.
            <br />
          </p>
          <div className="my-10 flex flex-row   btn-container">
            <a
              href="mailto:pallavibobde1@gmail.com"
              download="Pallavi-Bobde-Resume.pdf"
              target="_blank"
              className="rounded-xl bg-gradient-to-t from-[#330867] to-[#0072ff] border-[#0072ff] text-white text-[16px] py-3 px-5 mb-5"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="rounded-xl bg-black border-2 border-white text-white text-[16px] py-3 px-5 ml-5 mb-5"
            >
              View My Projects
            </a>
          </div>
        </motion.h1>
      </div>
    </div>
  );
}
