"use client";
import { HeaderSection } from "./components/HeaderSection";
import TestFooter from "./components/TestFooter";
import HeroSection from "./components/HeroSection";
import ContactMe from "./components/Contactme";
import Featured from "./components/Featured";
import How from "./components/How";
import Recommendations from "./components/Recommendations";
import CaseStudies from "./components/CaseStudies";

export default function Home() {
  return (
    <>
      <HeaderSection />

      <HeroSection />
      <Featured />
      {/* <Projects/> */}
      

      <How />
      <CaseStudies />
      <Recommendations />

      <ContactMe />
      <TestFooter />
    </>
  );
}

// My colours - #5de0e6 (light blue) ,  #004aad (dark blue)

// my blogs
