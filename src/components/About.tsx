
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Code, Layout, Zap, MapPin, Mail, Phone } from 'lucide-react';

const skills = [
  { icon: <Code className="w-5 h-5" />, name: "Smart Contract Development", description: "Custom solutions on platforms like VeChain, tailored to your vision." },
  { icon: <Layout className="w-5 h-5" />, name: "Web Design & Development", description: "Simple, striking websites that grab attention and deliver results." },
  { icon: <Zap className="w-5 h-5" />, name: "Decentralized Solutions", description: "From NFT marketplaces to DAO frameworks, I build tools that empower." }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={contentRef} className="opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/80">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Who I Am
            </h2>
            <div className="space-y-6 text-light-gray">
              <p>
                I'm Arion Friddle, a Web3 enthusiast hailing from the parish of "Crying Eagle," where my drive to redefine value—creativity, labor, and all—was born. My soul is fueled by a relentless passion to build decentralized solutions that amplify the voices of the overlooked: artists without massive followings and workers yearning for fair recognition. For me, technology isn't just a tool—it's a catalyst to disrupt the status quo and uplift the underdog.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6">My Mission</h3>
              <p>
                I believe creativity and labor deserve more than the scraps of traditional systems. That's why I pour my energy into crafting decentralized platforms that empower the unseen. Through projects like VeCollab.Art, an NFT marketplace built on VeChain, I'm supporting creators with innovative smart contract logic and community-driven airdrops—giving artists a stage where their work shines, not their follower count. Meanwhile, I'm shaping a DAO that honors true labor, weaving smart contracts with a vision for equity that puts people over profits.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6">My Roots and Craft</h3>
              <p>
                My journey started in web development, where I learned to merge clean code with eye-catching design. Those roots now power my Web3 innovations, blending technical precision with a purpose-driven ethos. Whether I'm coding a sleek website or architecting a decentralized ecosystem, every line I write is a step toward a fairer, more inclusive digital world.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6">What I Offer</h3>
              <p>
                I bring a versatile skill set to the table for clients who share my hunger for impact.
                No project is too big or too small—I'm here to turn your ideas into reality.
              </p>
            </div>
            
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold text-white">Let's Build Together</h3>
              <p className="text-light-gray">
                Ready to reshape how the world sees your work? Contact me today for a quote, and let's craft something extraordinary that honors creativity, labor, and equity.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal" />
                  <a href="tel:3375408503" className="text-light-gray hover:text-teal transition-colors">
                    (337) 540-8503
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal" />
                  <a href="mailto:biz.abstractkingdom@gmail.com" className="text-light-gray hover:text-teal transition-colors">
                    biz.abstractkingdom@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal" />
                  <span className="text-light-gray">
                    Lake Charles, Louisiana, 70607
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-teal font-medium hover:underline"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </a>
              </div>
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
