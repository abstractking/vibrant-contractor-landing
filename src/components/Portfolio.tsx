
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Hub",
    description: "A sleek online store with fast load times and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Creative Agency",
    description: "Bold design for a modern agency that showcases their portfolio and services.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "UI/UX Design"
  },
  {
    id: 3,
    title: "Portfolio Redesign",
    description: "Minimalist showcase for a freelancer that highlights their work and skills.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Design"
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "Interactive dashboard with real-time data visualization and analytics tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Application"
  },
  {
    id: 5,
    title: "Health & Wellness",
    description: "Clean, accessible website for a health service with online booking functionality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Travel Blog",
    description: "Content-focused platform with immersive photography and smooth animations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Content Platform"
  }
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-teal/10 border border-teal/20 rounded-full text-teal">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            A selection of my recent work, showcasing web design and development projects for various clients and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group bg-dark-gray rounded-xl overflow-hidden border border-white/5 hover:border-teal/20 transition-all duration-300 hover:translate-y-[-5px] opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-black/30 backdrop-blur-sm rounded-full text-white border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-light-gray text-sm mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-teal hover:underline gap-1 group/link"
                >
                  <span>View Project</span>
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            <span>Ready to start your project?</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
