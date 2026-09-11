import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero onPreloadComplete={() => setPreloaderComplete(true)} />

      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <About />
          <Services />
          <Skills />
          <Experience />
          <Project />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;
