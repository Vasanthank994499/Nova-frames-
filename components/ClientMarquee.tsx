'use client';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: 'Sree Balaji Jewellers', logo: '/logos/sree-balaji-jewellers.png' },
  { name: 'Sri Varagi Promoters', logo: '/logos/varaghi-promoters.png' },
  { name: 'Umbrella Homes', logo: '/logos/umbrella-homes.jpg' },
  { name: 'Aara Designers', logo: '/logos/aara-designers.png' },
  { name: 'Vasthiram', logo: '/logos/vasthiram.png' },
  { name: 'Sleek', logo: '/logos/sleek.png' },
  { name: 'Sagar Readymades', logo: '/logos/sagar.png' },
  { name: 'Bal Tex', logo: '/logos/bal-tex.png' },
  { name: 'Merry Berry', logo: '/logos/merry-berry.png' },
  { name: 'Chennai Fitness', logo: '/logos/chennai-fitness.png' },
  { name: 'Detailing Mafia', logo: '/logos/detailing-mafia.png' },
  { name: 'Anish Sarees', logo: '/logos/anish-sarees.png' },
  { name: 'Nira Bangles', logo: '/logos/nira-bangles.png' },
  { name: 'Parimalam Tyres', logo: '/logos/parimalam-tyres.png' },
  { name: 'Radiant Windows', logo: '/logos/radiant-windows.png' },
  { name: 'Tiny Joys', logo: '/logos/tiny-joys.png' },
  { name: 'Vilvam', logo: '/logos/vilvam.png' },
  { name: 'Vogue Apparels', logo: '/logos/vogue-apparels.png' },
];

export default function ClientMarquee() {
  return (
    <section id="clients-marquee" className="py-14 sm:py-20 bg-surface border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <h3 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-2">
          Trusted By Brands That Want To Move Forward
        </h3>
        <p className="text-txt-muted text-xs sm:text-sm">
          Selected partners and businesses growing with NovaFrames
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-10 bg-gradient-to-r from-surface via-surface/90 to-transparent pointer-events-none" />

        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-10 bg-gradient-to-l from-surface via-surface/90 to-transparent pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center whitespace-nowrap">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-surface-alt/70 hover:bg-surface-alt border border-gray-100/80 hover:border-accent/30 rounded-2xl transition-all duration-300 shadow-sm shrink-0 mx-2.5 sm:mx-3.5 select-none group/item"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white p-1.5 shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain filter contrast-105"
                  loading="lazy"
                />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-txt-primary/80 group-hover/item:text-txt-primary whitespace-nowrap transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
