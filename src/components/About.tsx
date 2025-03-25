
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Code, Layout, Zap } from 'lucide-react';

const skills = [
  { icon: <Layout className="w-5 h-5" />, name: "UI/UX Design", description: "Creating intuitive interfaces with a focus on user experience." },
  { icon: <Code className="w-5 h-5" />, name: "Web Development", description: "Building responsive, accessible, and performant websites." },
  { icon: <Zap className="w-5 h-5" />, name: "Optimization", description: "Enhancing site speed and conversion rates through testing." }
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 bg-dark-gray"
    >
      <div className="max-w-7xl mx-auto opacity-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/80">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Crafting Digital Experiences with Precision
            </h2>
            <div className="space-y-4 text-light-gray">
              <p>
                I'm a web contractor with 5+ years of experience, passionate about crafting user-friendly, visually stunning websites that deliver results.
              </p>
              <p>
                My approach combines clean aesthetics with functional design, ensuring each project not only looks impressive but performs exceptionally well across all devices.
              </p>
              <p>
                I believe in close collaboration with clients, transparent communication, and attention to detail at every stage of the development process.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-teal font-medium hover:underline"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div ref={skillsRef} className="opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Profile Image */}
              <div className="relative z-10 mx-auto lg:ml-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/40 to-blue-600/40 opacity-70"></div>
                <div className="w-full h-full bg-dark-gray flex items-center justify-center text-teal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 p-4 bg-medium-gray/20 backdrop-blur-sm rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{skill.name}</h3>
                      <p className="text-sm text-light-gray mt-1">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
