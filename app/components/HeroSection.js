"use client";
import { HeaderSection } from "./HeaderSection";
import HiglightedButton from './HiglightedButton';

const HeroSection=()=> {

  return (
    <div className="bg-transparent h-[90vh]">
      {/* <HeaderSection /> */}
      <div
        className=" flex flex-col items-center justify-start w-full"
        id="home"
      >
        <img src="./photo.png" className="w-[180px] m-5" />
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Build <span className="text-[#004aad]">Websites</span> &{" "}
          <span className="text-[#5de0e6]">Apps</span> that
          <br /> truly work for You
        </h1>
        <HiglightedButton btnTitle="Start Your Project" btnLink="mailto:pallavibobde1@gmail.com" />
      </div>
    </div>
  );
}

export default HeroSection;