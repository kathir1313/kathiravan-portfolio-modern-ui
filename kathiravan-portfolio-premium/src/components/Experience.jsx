import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

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
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="bg-[#050505] text-white py-20 md:py-28 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.95] uppercase mb-14 md:mb-20"
        >
          Where I&apos;ve <span className="font-light italic text-gray-300 lowercase font-serif">worked</span>
        </h2>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#ccff00] via-[#ccff00]/30 to-transparent" />

          {experience.map((job, i) => (
            <div
              key={job.company}
              ref={(el) => (cardRefs.current[i] = el)}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-8 md:-left-12 top-2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#ccff00] shadow-[0_0_16px_2px_rgba(204,255,0,0.5)]" />

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-9 hover:bg-white/[0.07] transition-colors duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center shrink-0">
                    <Briefcase className="text-[#ccff00] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg md:text-xl text-white uppercase tracking-tight leading-tight">
                      {job.role}
                    </h3>
                    <p className="text-[#ccff00] text-sm font-medium mt-0.5">{job.company}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-300 text-sm md:text-base font-light leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
