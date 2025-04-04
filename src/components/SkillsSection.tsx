
import React, { useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React / React Native", percentage: 90 },
  { name: "JavaScript / TypeScript", percentage: 85 },
  { name: "HTML & CSS / Tailwind", percentage: 95 },
  { name: "Node.js", percentage: 80 },
  { name: "UI/UX Design", percentage: 75 },
  { name: "Database Management", percentage: 70 },
];

const technologies = [
  "React", "TypeScript", "Next.js", "Node.js", "Express", 
  "Tailwind CSS", "MongoDB", "PostgreSQL", "Figma", "Git",
  "GraphQL", "Redux", "Firebase", "Docker", "AWS"
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.reveal');
          elements?.forEach((el) => {
            el.classList.add('active');
          });

          const progressBars = sectionRef.current?.querySelectorAll('.skill-progress');
          progressBars?.forEach((el, index) => {
            setTimeout(() => {
              el.setAttribute('value', skills[index].percentage.toString());
            }, 200 * index);
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
    <section id="skills" ref={sectionRef} className="section bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">My Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto reveal">
            I've worked with a variety of technologies and frameworks, constantly expanding my skillset
            to stay up-to-date with the latest industry trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 reveal">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={0} className="skill-progress h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 reveal">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 reveal"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6 reveal">My Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start reveal">
                <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                <p className="text-slate-600">I focus on writing clean, maintainable code with best practices.</p>
              </li>
              <li className="flex items-start reveal">
                <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                <p className="text-slate-600">I believe in responsive design that works flawlessly across all devices.</p>
              </li>
              <li className="flex items-start reveal">
                <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                <p className="text-slate-600">My development process includes thorough testing and debugging.</p>
              </li>
              <li className="flex items-start reveal">
                <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></div>
                <p className="text-slate-600">I'm passionate about creating accessible and inclusive web experiences.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
