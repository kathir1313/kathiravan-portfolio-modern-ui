import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/hero_center.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('SOFTWARE');
  const titleContainerRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = 'KATHIRAVAN';
    const start = 'SOFTWARE';
    let iterations = 0;
    let intervalId;
    let timeoutId;
    let isMounted = true;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 800);
    });

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() => {
          const maxLen = Math.max(target.length, start.length);
          return Array.from({ length: maxLen }, (_, index) => {
            if (index < Math.floor(iterations)) return target[index] || '';
            if (index < start.length) return start[index];
            return '';
          }).join('');
        });

        if (iterations >= target.length) {
          clearInterval(intervalId);

          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto';
              if (onPreloadComplete) onPreloadComplete();
            },
          });

          const isMobile = window.innerWidth < 768;
          tl.to(
            titleContainerRef.current,
            { top: isMobile ? '20%' : '45%', duration: 1.5, ease: 'power3.inOut' },
            '+=0.2'
          );
          tl.fromTo(
            [subtitleRef.current, buttonsRef.current],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
            '-=1.0'
          );
          tl.fromTo(
            imageRef.current,
            { y: '100vh' },
            { y: 0, duration: 1.5, ease: 'power3.out' },
            '-=1.2'
          );
        }
        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [onPreloadComplete]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ background: 'radial-gradient(circle, rgb(34, 34, 34) 0%, rgb(0, 0, 0) 80%)' }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Centered Background Typography & Flanking Elements */}
      <div
        ref={titleContainerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-start w-max"
      >
        <h1
          ref={nameRef}
          className="text-[11vw] md:text-[7rem] lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl pr-4 md:pr-8 leading-none uppercase select-none whitespace-nowrap"
        >
          {text}
        </h1>

        {/* Subtitle - positioned bottom-left */}
        <p
          ref={subtitleRef}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-8 text-white text-base md:text-2xl lg:text-4xl drop-shadow-md z-10 opacity-0 w-max"
        >
          <span className="font-bold">Software</span>{' '}
          <span className="font-light italic text-gray-300">Developer</span>
        </p>

        {/* Action Buttons - positioned bottom-right */}
        <div
          ref={buttonsRef}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-auto md:right-8 lg:right-20 flex items-center gap-2 md:gap-4 pointer-events-auto z-10 opacity-0 w-max"
        >
          <a
            href="#contact"
            aria-label="Scroll to contact"
            className="group w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 cursor-pointer"
          >
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-300 transition-transform duration-300 group-hover:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H16M7 17V8" />
            </svg>
          </a>

          <a
            href="#contact"
            className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-white/10 hover:border-gray-400/50 transition-all cursor-pointer"
          >
            <span className="text-gray-300 text-xs md:text-base italic font-light tracking-wider">Contact</span>
          </a>
        </div>
      </div>

      {/* Hero Portrait in Foreground */}
      <div
        ref={imageRef}
        className="relative z-10 text-center text-white flex flex-col items-center w-full pointer-events-none translate-y-[100vh]"
      >
        <img
          src={centerImage}
          alt="Kathiravan G"
          className="w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
};

export default Hero;
