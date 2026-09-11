import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trigger initial slide down animation
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 transition-all duration-700 ease-in-out ${
          show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${isMenuOpen ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-white font-black text-xl md:text-2xl tracking-widest uppercase cursor-pointer relative z-50 hover:text-[#ccff00] transition-colors"
        >
          Kathiravan
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 text-sm hover:text-[#ccff00] transition-colors uppercase tracking-wider font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-white cursor-pointer hover:text-[#ccff00] transition-colors relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-white text-3xl font-black uppercase tracking-widest hover:text-[#ccff00] transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
