import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { ResumeSection } from "./components/ResumeSection";
import { Projects } from "./components/Projects";
import { HeaderSection } from "./components/HeaderSection";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
    <HeaderSection/>
    <HeroSection/>
    <Skills/>
    <Projects/>
    <ResumeSection/>
    <Contact/>
    <Footer/>
    </>
  );
}

// colors - #33086 #0072ff
//get in touch
// Need an experienced senior full-stack developer to help out?


//tags in projects
// view prpject btn
//pop up on project click

// my blogs

