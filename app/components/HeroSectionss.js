import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroHighlight } from './ui/hero-highlight';
import { HeroSection as HeroSectionold } from './HeroSection';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;

    gsap.fromTo(
      heroElement,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: heroElement,
          start: 'top center',
        },
      }
    );

    gsap.fromTo(
      textElement,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textElement,
          start: 'top center',
        },
      }
    );

    shapesRef.current.forEach(shape => {
      gsap.fromTo(
        shape,
        { x: 'random(-200, 200)', y: 'random(-200, 200)', opacity: 0 },
        {
          x: 'random(-200, 200)',
          y: 'random(-200, 200)',
          opacity: 0.7,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    });
  }, []);

  const renderShapes = () => {
    const shapes = [];
    const colors = ['bg-gray-900', 'bg-gray-900', 'bg-gray-900', 'bg-gray-900'];
    for (let i = 0; i < 10; i++) {
      const size = `${Math.random() * 100 + 50}px`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      shapes.push(
        <div
          key={i}
          ref={el => (shapesRef.current[i] = el)}
          className={`absolute ${color} opacity-50`}
          style={{
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
          }}
        ></div>
      );
    }
    return shapes;
  };

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen  text-white overflow-hidden"
    >
      <div className="absolute inset-0 "></div>
      <HeroSectionold/>
    </section>
  );
};

export default HeroSection;
