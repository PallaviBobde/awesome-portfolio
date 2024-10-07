"use client";
import "./styles.css";
import { useState } from "react";
import Logo from './Logo'
import { FaClosedCaptioning, FaCross, FaCrosshairs, FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-[#ffffff10] top-0 bottom-0 right-0 left-0 navbar sticky">
      {isOpen ? (
        <div className="container mx-auto flex justify-center items-center h-[100vh] bg-gray-900">
            <ul className="w-full h-[40vh] mt-4 text-white  flex flex-col mx-20 justify-around">
              <li>
                <a
                  href="/"
                  className=" hover:bg-gray-700 w-[120px] py-2 my-5"
                  onClick={toggleMenu}
                >
                  <Logo/>
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className=" hover:bg-gray-700 rounded py-2 my-5"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="mailto:pallavibobde1@gmail.com"
                  className=" px-2 hover:bg-gray-700 border-2 rounded-lg py-2 my-5"
                  onClick={toggleMenu}
                >
                  Contact me
                </a>
              </li>
            </ul>
          <div className="block lg:hidden absolute top-0 right-0">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-2xl p-5 font-bold"
            >
              <IoMdClose/>
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex justify-between items-center px-2">
          <Logo/>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={"M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
          <div className={`w-full lg:flex lg:w-auto hidden`}>
            <ul className="lg:flex lg:space-x-4 mt-4 lg:mt-0 text-white">
              <li>
                <a
                  href="#projects"
                  className="block mx-2 py-1 menu-item  hover:text-[#5de0e6]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                 href="mailto:pallavibobde1@gmail.com"
                  className="block mx-2 py-1 px-5 hover:border-b menu-item  text-[#5de0e6] border-2 rounded-lg border-[#5de0e6]"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
