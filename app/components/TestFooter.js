import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn, FaPhone, FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-5 bg-[#004aad60] text-sm">
      <div className="flex flex-wrap container mx-auto px-6 md:px-12">
        
       
      <div className="col col1 w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <Logo />
          {/* <p className=" mt-5">2024 © All Rights Reserved</p> */}
        </div>
        <div className="col col3 w-full md:w-1/3 flex flex-col items-center">
          <a className=" mb-2" href="#projects">
            Projects
          </a>
          <a className=" mb-2">Resume</a>
          <a className=" mb-2" href="#contact">
            Contact me
          </a>
          
        </div>

        

        <div className="col col1 w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <h3 className="footer-heading font-semibold mb-4">
            Contact me Today!
          </h3>
          <div className="social flex space-x-4">
            <a
              href="mailto:pallavibobde1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-white hover:text-gray-200 transition-colors"
            >
              <IoIosMail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pallavi-bobde-35ba721b2"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-white hover:text-gray-200 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="tel:+916263218624"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-white hover:text-gray-200 transition-colors"
            >
              <FaPhone size={24} />
            </a>
            <a
              href="https://github.com/PallaviBobde"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-white hover:text-gray-200 transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        
      </div>
      <div className="backdrop"></div>
      <p className=" text-center mt-20">2024 © All Rights Reserved</p>
      {/* <div><p className=" mt-5">2024 © All Rights Reserved</p></div> */}
    </footer>
  );
};

export default Footer;
