
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const educations = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Quest Group of Institution",
    location: "Mohali, Punjab",
    period: "2021 - 2025",
    description: "Focused on software development, data structures & algorithms, and modern web technologies.",
    achievements: [
      "Strong foundation in programming languages",
      "Hands-on experience with full-stack development",
      "Active participant in coding competitions",
      "Completed multiple real-world projects"
    ]
  }
];

const certifications = [
  "Core Java Certification",
  "MERN Full Stack Development",
  "Fundamental Digital Marketing"
];

const EducationSection = () => {
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
    <section id="education" ref={sectionRef} className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto reveal">
            My academic background and professional certifications that have shaped my knowledge and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {educations.map((edu, index) => (
            <Card key={index} className="overflow-hidden reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <GraduationCap size={20} className="text-blue-500 mr-2" />
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <p className="text-blue-500 font-medium">{edu.institution}</p>
                  <div className="flex items-center text-slate-600 mt-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">{edu.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Award size={18} className="mr-2 text-blue-500" />
                    Achievements
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {edu.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="reveal">
          <h3 className="text-2xl font-bold mb-6 text-center flex justify-center items-center">
            <BookOpen size={24} className="text-blue-500 mr-3" />
            Professional Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-slate-50 px-6 py-3 rounded-lg border border-slate-200 shadow-sm flex items-center reveal"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Award size={18} className="text-blue-500 mr-2" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
