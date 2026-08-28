'use client';

export default function ClientMarquee() {
  const clients = [
    'Sree Balaji Jewellers',
    'Sri Varagi Promoters',
    'Sagar Readymades',
    'Umbrella Homes',
    'Bal Tex',
    'Vasthiram',
    'Merry Berry',
    'Kids Kingdom',
    'Vogue Apparels',
  ];

  return (
    <section id="clients-marquee" className="py-12 sm:py-16 bg-surface border-y border-gray-100 overflow-hidden">
      <h3 className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-8 sm:mb-12 px-4">
        Trusted By Brands That Want To Move Forward
      </h3>
      
      <div className="relative flex overflow-hidden group">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-surface via-surface/80 to-transparent pointer-events-none" />
        
        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-surface via-surface/80 to-transparent pointer-events-none" />
        
        {/* Marquee Track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center px-4 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl font-bold text-txt-primary/30 whitespace-nowrap mx-2 sm:mx-6 transition-colors duration-300 hover:text-accent select-none"
            >
              <span>{client}</span>
              <span className="ml-4 sm:ml-8 text-accent/40 text-lg sm:text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
