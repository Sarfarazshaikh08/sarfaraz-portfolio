
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application that helps users organize tasks, set priorities, and track progress.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Website",
    description: "A property listing platform with advanced search, map integration, and user authentication.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for monitoring and managing social media accounts and campaigns.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["Vue.js", "D3.js", "Express", "OAuth"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="section bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto reveal">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="default" className="rounded-full">
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white rounded-full">
                        <Github size={16} className="mr-1" /> Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="reveal">
              <Github size={18} className="mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
