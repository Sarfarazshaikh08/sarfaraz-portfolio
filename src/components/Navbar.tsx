
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 font-display">Portfolio</a>
        
        {/* Mobile menu button */}
        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-slate-700 hover:text-primary underline-animation">About</a>
          <a href="#skills" className="text-slate-700 hover:text-primary underline-animation">Skills</a>
          <a href="#projects" className="text-slate-700 hover:text-primary underline-animation">Projects</a>
          <a href="#contact">
            <Button>Contact Me</Button>
          </a>
        </nav>
        
        {/* Mobile navigation */}
        <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <a href="#about" className="text-slate-900 hover:text-primary" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-slate-900 hover:text-primary" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-slate-900 hover:text-primary" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>
              <Button>Contact Me</Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
