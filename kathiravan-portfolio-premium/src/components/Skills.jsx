import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="bg-[#050505] text-white py-20 md:py-28 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.95] uppercase mb-14 md:mb-20"
        >
          Skills &amp; <span className="font-light italic text-gray-300 lowercase font-serif">toolkit</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-[#ccff00]/30 transition-colors duration-300"
            >
              <p className="text-[#ccff00] text-xs uppercase tracking-widest font-bold mb-4">{cat.title}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs md:text-sm text-gray-200 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
