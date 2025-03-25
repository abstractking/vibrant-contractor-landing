
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-10 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-display font-medium tracking-tight text-white">
              <span className="inline-block pr-1">Portfolio</span>
              <span className="text-teal">.dev</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-light-gray">
              © {currentYear} All rights reserved. Crafted with 
              <Heart size={12} className="inline-block mx-1 text-teal" />
              by <span className="text-white">Portfolio.dev</span>
            </p>
            
            <div className="h-4 border-l border-white/10 mx-4 hidden md:block"></div>
            
            <nav className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-xs text-light-gray hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-light-gray hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs text-light-gray hover:text-white transition-colors">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
