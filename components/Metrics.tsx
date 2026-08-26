'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderCheck, Film, Rocket, Users } from 'lucide-react';

interface MetricProps {
  icon: React.ElementType;
  target: number;
  label: string;
}

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const MetricCard = ({ icon: Icon, target, label }: MetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother counter
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

  return (
    <div ref={ref} className="text-center p-5 sm:p-6 md:p-8 bg-dark-card/60 backdrop-blur-sm rounded-2xl border border-white/5 flex flex-col justify-center items-center">
      <div className="flex justify-center mb-3 sm:mb-5">
        <Icon className="text-accent w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-white tracking-tight">
        {count}+
      </div>
      <div className="text-gray-400 text-xs sm:text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default function Metrics() {
  const metrics = [
    { icon: FolderCheck, target: 120, label: 'Projects Completed' },
    { icon: Film, target: 300, label: 'Video Reels & Ads' },
    { icon: Rocket, target: 50, label: 'Brands Scaled' },
    { icon: Users, target: 25, label: 'Active Retainer Clients' },
  ];

  return (
    <section id="metrics" className="py-16 sm:py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm">
            By the Numbers
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4 tracking-tight">
            Impact That Speaks
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-16">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              target={metric.target}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
