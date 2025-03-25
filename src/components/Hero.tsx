
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#2A5298] opacity-70 z-0"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center opacity-0">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/80 backdrop-blur-sm">
          Web Contractor & Designer
        </span>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance mb-6 text-shadow">
          <span className="block">Your Web Vision,</span>
          <span className="inline-block mt-1 text-white relative">
            Realized
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal/40 rounded-full"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-delay text-balance">
          I design and build websites that blend style with performance, creating digital experiences that capture your brand's essence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal text-dark font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 group w-full sm:w-auto"
          >
            <span>See My Projects</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          
          <a 
            href="#about" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
          >
            <span>About Me</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <a href="#projects" className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
