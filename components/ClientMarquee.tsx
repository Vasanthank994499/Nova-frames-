'use client';

export default function ClientMarquee() {
  const clients = [
    'TechVault',
    'RetailMax',
    'Luxora',
    'Greenfield Co.',
    'Meridian Labs',
    'Atlas Digital',
    'PulseMedia',
    'Vertex AI'
  ];

  return (
    <section id="clients-marquee" className="py-12 sm:py-16 bg-surface border-y border-gray-100 overflow-hidden">
      <h3 className="text-center text-xs sm:text-sm uppercase tracking-widest text-txt-muted mb-8 sm:mb-12 px-4">
        Trusted by Industry Leaders
      </h3>
      
      <div className="relative flex overflow-hidden group">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 z-10 bg-gradient-to-r from-surface via-surface/80 to-transparent pointer-events-none" />
        
        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 z-10 bg-gradient-to-l from-surface via-surface/80 to-transparent pointer-events-none" />
        
        {/* Marquee Track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-xl font-bold text-txt-muted/40 whitespace-nowrap mx-3 sm:mx-8 transition-colors duration-300 hover:text-txt-muted select-none"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
