import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="services" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right"
          >
            WHAT I<br />CAN DO
          </h2>
        </div>
      </div>

      {/* Accordion List */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {servicesData.map((service, index) => {
          const isHighlighted = activeIndex === index || (!isMobile && hoveredIndex === index);

          return (
            <div
              key={service.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-all duration-300 ease-in-out ${
                isHighlighted ? 'bg-[#ccff00]' : ''
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">
                {/* Left Side */}
                <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                  <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                    <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                      <span
                        className={`text-lg md:text-3xl font-medium transition-colors duration-300 ease-in-out leading-none ${
                          isHighlighted ? 'text-black' : 'text-white'
                        }`}
                      >
                        {service.id}
                      </span>
                    </div>
                    <div className="flex flex-col w-full min-w-0">
                      <div className="h-7 flex items-center md:h-10">
                        <h3
                          className={`text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-none transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis ${
                            isHighlighted ? 'text-black' : 'text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                          activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                          <ul
                            className={`transition-colors duration-300 ease-in-out text-sm md:text-base font-light space-y-2 flex flex-col ${
                              isHighlighted ? 'text-black/80' : 'text-gray-300'
                            }`}
                          >
                            {service.capabilities.map((cap, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span
                                  className={`transition-colors duration-300 ease-in-out mt-1.5 opacity-70 text-[10px] ${
                                    isHighlighted ? 'text-black' : 'text-[#ccff00]'
                                  }`}
                                >
                                  ■
                                </span>
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Arrow Icon */}
                  <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                    <ArrowRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        isHighlighted ? 'text-black' : 'text-[#ccff00]'
                      } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full ${
                      activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                      <p
                        className={`transition-colors duration-300 ease-in-out text-base md:text-lg leading-relaxed max-w-lg font-light ${
                          isHighlighted ? 'text-black/80' : 'text-gray-300'
                        }`}
                      >
                        {service.description}
                      </p>
                      {service.buttonText && (
                        <a
                          href="#project"
                          className={`font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 border transition-colors duration-300 ease-in-out flex items-center gap-2 mt-4 w-max ${
                            isHighlighted ? 'bg-black text-[#ccff00] border-black' : 'bg-[#ccff00] text-black border-[#ccff00]'
                          }`}
                        >
                          <span className="w-2 h-2 border-t border-l border-current"></span>
                          {service.buttonText}
                          <span className="w-2 h-2 border-b border-r border-current"></span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="hidden lg:flex flex-shrink-0 h-10 items-center">
                    <ArrowRight
                      className={`w-10 h-10 transition-all duration-300 ${
                        isHighlighted ? 'text-black' : 'text-[#ccff00]'
                      } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
