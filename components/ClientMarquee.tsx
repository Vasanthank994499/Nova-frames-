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

  const marqueeItems = [...clients, ...clients];

  return (
    <section id="clients-marquee" className="py-16 sm:py-20 bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 sm:mb-14 text-center">
        <span className="section-label text-accent uppercase tracking-widest text-xs font-bold">
          TRUSTED BY BRANDS THAT WANT TO MOVE FORWARD.
        </span>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute top-0 left-0 h-full w-24 sm:w-32 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 sm:w-32 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />
        
        <div className="flex space-x-8 sm:space-x-12 min-w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((client, index) => (
            <div key={index} className="flex items-center space-x-8 sm:space-x-12">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-txt-primary/20 uppercase tracking-wide">
                {client}
              </span>
              <span className="text-accent text-xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
