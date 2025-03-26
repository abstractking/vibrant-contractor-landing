
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

type NFT = {
  id: number;
  title: string;
  image: string;
  link: string;
};

// Vechain NFT artwork from World of V
const nftSamples: NFT[] = [
  {
    id: 1,
    title: "Abstract Kingdom NFT #1",
    image: "https://images.unsplash.com/photo-1634986666676-ec9323397571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://worldofv.art/token/0x5E6265680087520DC022d75f4C45F9CCD712BA97/58701205500000",
  },
  {
    id: 2,
    title: "Abstract Kingdom NFT #2",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://worldofv.art/token/0x5E6265680087520DC022d75f4C45F9CCD712BA97/58701205400000",
  },
  {
    id: 3,
    title: "Abstract Kingdom NFT #3",
    image: "https://images.unsplash.com/photo-1646671404230-bfd169a5e207?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://worldofv.art/token/0x5E6265680087520DC022d75f4C45F9CCD712BA97/58701205200000",
  },
  {
    id: 4,
    title: "Abstract Kingdom NFT #4",
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://worldofv.art/token/0x5E6265680087520DC022d75f4C45F9CCD712BA97/58701204800000",
  }
];

const NFTPortfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [nfts, setNfts] = useState<NFT[]>(nftSamples);

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

    nftRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      nftRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="nft-art" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-teal/10 border border-teal/20 rounded-full text-teal">
            NFT Art
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">VeChain NFT Creations</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Explore my digital art collection on the VeChain blockchain, where creativity meets decentralized ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              ref={(el) => (nftRefs.current[index] = el)}
              className="group bg-dark-gray rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:translate-y-[-5px] hover:border-teal/30 hover:shadow-[0_0_20px_rgba(0,196,204,0.3)] opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a href={nft.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"></div>
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-teal transition-colors duration-300">{nft.title}</h3>
                  <div className="inline-flex items-center text-sm font-medium text-teal gap-1 group/link">
                    <span>View on World of V</span>
                    <ExternalLink size={14} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.worldofv.art/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal/10 border border-teal/20 rounded-lg text-teal hover:bg-teal/20 transition-all duration-300"
          >
            <span>View Full Collection</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFTPortfolio;
