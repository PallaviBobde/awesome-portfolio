"use client"
import { HeroSection } from "./components/HeroSection";
import { ResumeSection } from "./components/ResumeSection";
import { Projects } from "./components/Projects";
import { HeaderSection } from "./components/HeaderSection";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/ui/testimonials";
// import experienceTimeline from "./components/ui/experienceTimeline";
import  TestFooter  from "./components/TestFooter";
import HeroSectionss from './components/HeroSectionss';
import TimeLine from './components/Timeline'


export default function Home() {
  return (
    <>
    <HeaderSection/>
    <HeroSectionss/>
    <Skills/>
    <Projects/>
    <TimeLine/>
    <Testimonials/>

    <Footer/>

    <TestFooter/>
    
    
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

