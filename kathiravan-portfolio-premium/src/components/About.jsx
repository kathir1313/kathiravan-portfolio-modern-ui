import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/about_section/about_section.png';
import { aboutWords, skillGroups, education, personal } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];

    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Mobile Intro Text */}
        <h2
          ref={introMobileRef}
          className="lg:hidden text-center text-[8vw] md:text-[4rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-6 md:mb-8"
        >
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-20">
            <img
              src={aboutImage}
              alt="Kathiravan G"
              className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            <h2
              ref={introDesktopRef}
              className="hidden lg:block text-[8vw] md:text-[10rem] lg:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none"
            >
              Intro
            </h2>

            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>{wordObj.text}</span>
                    {index < aboutWords.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Education + Resume */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-center lg:text-left">
                <p className="text-[#ccff00] text-xs uppercase tracking-widest font-bold mb-1">Education</p>
                <p className="text-white text-sm md:text-base font-medium">{education.degree}</p>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  {education.school} &middot; {education.period} &middot; {education.cgpa}
                </p>
              </div>

              <a
                href={personal.resumePath}
                download
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ccff00] text-black font-semibold text-sm hover:bg-[#b3e600] transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...skillGroups.frontend, ...skillGroups.frontend, ...skillGroups.frontend, ...skillGroups.frontend].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...skillGroups.backend, ...skillGroups.backend, ...skillGroups.backend, ...skillGroups.backend].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...skillGroups.core, ...skillGroups.core, ...skillGroups.core, ...skillGroups.core].map((item, i) => (
              <div key={`core-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...skillGroups.tools, ...skillGroups.tools, ...skillGroups.tools, ...skillGroups.tools].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
