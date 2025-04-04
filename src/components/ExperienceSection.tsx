
import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2021 - Present",
    description: "Led the development of the company's main SaaS product, improving performance by 40%. Mentored junior developers and implemented best practices.",
    responsibilities: [
      "Architected and developed new features using React, TypeScript, and Tailwind CSS",
      "Optimized application performance and reduced loading time by 35%",
      "Implemented comprehensive testing strategy using Jest and React Testing Library",
      "Collaborated with UI/UX designers to create intuitive user interfaces"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions LLC",
    location: "Austin, TX",
    period: "Mar 2018 - Dec 2020",
    description: "Developed and maintained multiple client websites and web applications. Worked in an agile team environment.",
    responsibilities: [
      "Built responsive web applications using React, Redux, and SCSS",
      "Integrated RESTful APIs and implemented state management solutions",
      "Participated in code reviews and pair programming sessions",
      "Migrated legacy applications to modern technology stacks"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "StartUp Vision",
    location: "Remote",
    period: "Jun 2017 - Feb 2018",
    description: "Assisted in the development of the company's main product while learning modern web development practices.",
    responsibilities: [
      "Developed UI components using HTML, CSS, and JavaScript",
      "Fixed bugs and improved existing functionality",
      "Participated in daily stand-up meetings and sprint planning",
      "Gained experience with Git version control and CI/CD pipelines"
    ]
  }
];

const ExperienceSection = () => {
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
    <section id="experience" ref={sectionRef} className="section bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto reveal">
            My professional journey and the valuable experience I've gained along the way.
            Each role has contributed to my growth as a developer.
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="md:flex md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="flex items-center justify-end text-slate-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end text-slate-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">{exp.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Briefcase size={18} className="mr-2 text-blue-500" />
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
