
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Hi, I'm <span className="text-blue-600">Sarfaraz</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              I build beautiful, responsive websites and applications with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToProjects} className="group">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <a href="#contact">
                <Button size="lg" variant="outline">Get In Touch</Button>
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800" 
                  alt="Developer working" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-100 rounded-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollDown}>
        <ChevronDown size={32} className="text-slate-600" />
      </div>
    </section>
  );
};

export default HeroSection;
