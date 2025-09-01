
import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, Map, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.reveal');
          elements?.forEach((el) => {
            el.classList.add('active');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto reveal">
            I'm a passionate web developer with expertise in creating modern, responsive web applications. 
            My goal is to build digital solutions that are not only visually appealing but also highly functional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="w-full rounded-xl overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" 
                  alt="Profile" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 bg-blue-50 -z-10 rounded"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 reveal">Who I Am</h3>
            <p className="text-slate-600 mb-6 reveal">
              I'm a passionate web developer starting my journey in frontend and backend development. 
              I have a strong foundation in modern technologies and a keen eye for clean code, user-centered design, and creating efficient solutions.
            </p>
            <p className="text-slate-600 mb-8 reveal">
              When I'm not coding, you can find me learning new technologies, working on personal projects, 
              and staying updated with the latest trends in web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <User className="text-blue-500 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">Name</p>
                    <p className="font-medium">Md Sarfaraz</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <Map className="text-blue-500 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium">Bengaluru India</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <Calendar className="text-blue-500 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">Experience</p>
                    <p className="font-medium">Fresher</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <Clock className="text-blue-500 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">Availability</p>
                    <p className="font-medium">Full-time</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
