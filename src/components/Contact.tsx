
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-dark-gray/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-teal/10 border border-teal/20 rounded-full text-teal">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Ready to transform your web presence? Reach out to discuss your project needs and how we can collaborate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div ref={contentRef} className="lg:col-span-2 opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark-gray p-8 rounded-xl border border-white/5 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm text-light-gray mb-1">Email Address</h4>
                    <a href="mailto:contact@example.com" className="text-white hover:text-teal transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm text-light-gray mb-1">Social Media</h4>
                    <div className="flex gap-3 mt-2">
                      {['twitter', 'linkedin', 'github'].map((social) => (
                        <a 
                          key={social}
                          href="#" 
                          className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white hover:text-teal rounded-full transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            {social === 'twitter' && (
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            )}
                            {social === 'linkedin' && (
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            )}
                            {social === 'github' && (
                              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="p-4 bg-teal/5 rounded-lg border border-teal/10">
                  <p className="text-sm text-light-gray italic">
                    "The details are not the details. They make the design."
                    <span className="block mt-2 text-white">— Charles Eames</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-3 opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="bg-dark-gray p-8 rounded-xl border border-white/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-light-gray mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-medium-gray/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-light-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-medium-gray/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm text-light-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-medium-gray/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 text-white"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-light-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-medium-gray/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-teal text-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
