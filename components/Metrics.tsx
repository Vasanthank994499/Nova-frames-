'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Layers, Target, Users } from 'lucide-react';

interface MetricProps {
  icon: React.ElementType;
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const MetricCard = ({ icon: Icon, target, suffix = '+', prefix = '', label }: MetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easedPercentage = easeOutExpo(percentage);
      setCount(Math.floor(easedPercentage * target));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target]);

  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-center p-5 sm:p-6 md:p-8 bg-dark-card/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 flex flex-col justify-center items-center shadow-lg group">
      <div className="flex justify-center mb-3 sm:mb-5 p-3 rounded-xl bg-white/5 text-accent group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-white tracking-tight">
        {prefix}{formattedCount}{suffix}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default function Metrics() {
  const metrics = [
    { icon: Rocket, target: 20, suffix: '+', label: 'Brands Built & Supported' },
    { icon: Layers, target: 5, suffix: '+', label: 'Industries Covered' },
    { icon: Target, target: 1000, suffix: '+', label: 'Leads Generated' },
    { icon: Users, target: 10, suffix: 'K+', label: 'Organic Audience Growth' },
  ];

  return (
    <section id="metrics" className="py-16 sm:py-24 bg-dark text-white border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Real Brands. Real Growth.
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 tracking-tight">
            Impact That Speaks
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-16">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              target={metric.target}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-500 italic mt-10 sm:mt-12">
          Selected results from our client partnerships.
        </p>
      </div>
    </section>
  );
}
