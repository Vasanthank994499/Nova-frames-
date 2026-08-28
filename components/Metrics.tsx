'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ end, suffix, duration = 2000, isK = false, isComma = false }: { end: number, suffix: string, duration?: number, isK?: boolean, isComma?: boolean }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);
      
      const easedProgress = easeOutExpo(percent);
      setCount(Math.floor(end * easedProgress));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  const displayValue = isK ? `${count/1000}` : (isComma ? count.toLocaleString() : count.toString());

  return (
    <span ref={nodeRef}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metrics" className="py-16 sm:py-20 md:py-24 bg-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label uppercase text-accent text-xs sm:text-sm font-bold tracking-widest text-center mb-12 sm:mb-16"
        >
          REAL BRANDS. REAL GROWTH.
        </motion.p>
        
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <Counter end={20} suffix="+" />
            </h3>
            <p className="font-body text-sm sm:text-base text-txt-muted mt-2 sm:mt-3">
              Brands Built & Supported
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <Counter end={5} suffix="+" />
            </h3>
            <p className="font-body text-sm sm:text-base text-txt-muted mt-2 sm:mt-3">
              Industries Covered
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <Counter end={1000} suffix="+" isComma={true} />
            </h3>
            <p className="font-body text-sm sm:text-base text-txt-muted mt-2 sm:mt-3">
              Leads Generated
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <Counter end={10000} suffix="K+" isK={true} />
            </h3>
            <p className="font-body text-sm sm:text-base text-txt-muted mt-2 sm:mt-3">
              Organic Audience Growth
            </p>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-txt-muted text-sm mt-12 sm:mt-16 italic"
        >
          Selected results from our client partnerships.
        </motion.p>
      </div>
    </section>
  );
}
