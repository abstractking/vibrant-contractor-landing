
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 md:px-10 transition-all duration-300",
          isScrolled ? "backdrop-blur-md bg-black/60 border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-display font-medium tracking-tight text-white group"
          >
            <span className="inline-block pr-1">AIRSOL</span>
            <span className="text-teal inline-block">.dev</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Projects', 'NFT Art', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[15px] text-light-gray hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-teal hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="flex items-center gap-1 py-2 px-4 rounded-full bg-teal/10 border border-teal/20 text-teal hover:bg-teal/20 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>
          
          <button onClick={toggleMobileMenu} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-24 pb-6 px-6 bg-dark-gray/95 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col space-y-6 mt-8">
            {['Projects', 'NFT Art', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xl font-medium text-white py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a 
              href="#contact" 
              className="block w-full text-center py-3 rounded-lg bg-teal/10 border border-teal/20 text-teal hover:bg-teal/20 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
