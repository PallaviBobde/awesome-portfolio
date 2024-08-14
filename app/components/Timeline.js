import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    const cards = cardsRef.current;
    const dots = dotsRef.current;
    const sections = sectionsRef.current;

    // Create sections and animate line color
    sections.forEach((section, index) => {
      gsap.to(section, {
        backgroundColor: "#330867", // Final color
        scrollTrigger: {
          trigger: cards[index],
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        ease: "none",
        duration: 1,
      });
    });

    // Animate each card and corresponding dot
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? 200 : -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        dots[index],
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const experiences = [
    {
      date: "July, 2023 - Present",
      title: "Software Developer",
      company: "Bajaj Finserv Health",
      description:
        "Enhanced app performance and user experience. Collaborated on APIs, participated in code reviews, and engaged in sprint planning and daily meetings.",
    },
    {
      date: "August 2022 - July 2023",
      title: "Software Developer Intern",
      company: "Bajaj Finserv Health",
      description:
        "Developed and optimized React Native apps for iOS/Android. Collaborated on APIs, UI, state management, testing, and GitHub.",
    },
    {
      date: "Jun 2021 - Jul 2022",
      title: "Full Stack Engineer",
      company: "Jiva crafts",
      description:
        "Developed web apps with React.js and Node.js. Collaborated with teams, ensured responsive design, conducted code reviews, integrated APIs, and resolved performance issues.",
    },
  ];

  return (
    <>
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
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-white  leading-relaxed lg:leading-snug text-left mx-auto px-10"
      >
        Experience
      </motion.h1>
      <div className="relative py-16  text-gray-300">
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 w-1 bg-gray-700 transform -translate-x-1/2"
            style={{ height: "100%" }}
          >
            {/* Timeline Sections */}
            {experiences.map((_, index) => (
              <div
                key={index}
                ref={(el) => (sectionsRef.current[index] = el)}
                className="absolute w-1 bg-transparent"
                style={{
                  top: `${(index * 100) / experiences.length}%`,
                  height: `${100 / experiences.length}%`,
                  zIndex: 0,
                }}
              ></div>
            ))}
            {/* Timeline Dots */}
            {experiences.map((_, index) => (
              <div
                key={index}
                ref={(el) => (dotsRef.current[index] = el)}
                className="absolute bg-[#330867] rounded-full  border-4 border-white"
                style={{
                  top: `${(index * 100) / experiences.length}%`,
                  left: "-10px", // Adjust to align with line
                  width: "24px",
                  height: "24px",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                }}
              ></div>
            ))}
          </div>
          {/* Experience Cards */}
          <div className="container mx-auto px-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                } group`}
              >
                <div
                  className={`relative w-full md:w-1/2 lg:w-2/5 p-6 bg-gradient-to-b from-transparent to-[#0072ff40] border border-[#ffffff40]   shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  } hover:bg-gray-900`}
                >
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className=" mr-2 transition-transform duration-500 group-hover:scale-110" />
                    <div className="text-gray-400">{experience.date}</div>
                  </div>
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    {/* <FaBriefcase className="mr-2 transition-transform duration-500 group-hover:scale-110" /> */}
                    {experience.title}
                  </h3>
                  <h4 className="text-md font-semibold mb-2 text-gray-200">
                    {experience.company}
                  </h4>
                  <p className="text-gray-400">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
