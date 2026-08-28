'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Eye, Sparkles, Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Reel {
  id: number;
  client: string;
  title: string;
  category: string;
  views: string;
  gradient: string;
  duration: string;
  engagement: string;
}

const reels: Reel[] = [
  {
    id: 1,
    client: 'Sree Balaji Jewellers',
    title: 'Temple Gold & Heritage Collection',
    category: 'Jewellery / Reels',
    views: '125K+ Views',
    gradient: 'from-amber-950 via-yellow-900/60 to-indigo-950',
    duration: '0:30',
    engagement: '14.2K Likes',
  },
  {
    id: 2,
    client: 'Sri Varagi Promoters',
    title: 'Luxury Gated Community Walkthrough',
    category: 'Real Estate / Tour',
    views: '85K+ Views',
    gradient: 'from-blue-950 via-slate-900/80 to-indigo-950',
    duration: '0:45',
    engagement: '8.9K Likes',
  },
  {
    id: 3,
    client: 'Sagar Readymades',
    title: 'Festive Ethnic & Silk Trend Reel',
    category: 'Fashion & Retail',
    views: '250K+ Views',
    gradient: 'from-rose-950 via-purple-900/70 to-indigo-950',
    duration: '0:25',
    engagement: '28.4K Likes',
  },
  {
    id: 4,
    client: 'Umbrella Homes',
    title: 'Architectural Modern Villa Showcase',
    category: 'Architecture & Living',
    views: '95K+ Views',
    gradient: 'from-emerald-950 via-teal-900/60 to-indigo-950',
    duration: '0:35',
    engagement: '11.6K Likes',
  },
  {
    id: 5,
    client: 'Bal Tex Apparels',
    title: 'High-Fashion Summer D2C Campaign',
    category: 'D2C Apparel',
    views: '160K+ Views',
    gradient: 'from-violet-950 via-fuchsia-900/60 to-indigo-950',
    duration: '0:20',
    engagement: '19.1K Likes',
  },
  {
    id: 6,
    client: 'Kids Kingdom',
    title: 'Festive Fun & Kids Fashion Launch',
    category: 'Retail & Lifestyle',
    views: '190K+ Views',
    gradient: 'from-sky-950 via-indigo-900/70 to-pink-950',
    duration: '0:28',
    engagement: '22.3K Likes',
  },
];

export default function SampleWorks() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section id="sample-works" className="py-20 sm:py-28 bg-dark text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sample Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              Featured Reel Content
            </h2>
            <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base max-w-xl">
              High-converting, scroll-stopping 9:16 vertical reels engineered to captivate audiences and drive measurable business traction.
            </p>
          </div>

          <a
            href="https://www.instagram.com/nova_.frames?igsi=MWp2OXk4bjIxZmRjaw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent text-white hover:text-accent transition-all text-xs sm:text-sm font-semibold uppercase tracking-wider self-start sm:self-auto group"
          >
            <Instagram className="w-4 h-4 text-accent" />
            <span>Explore on Instagram</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reels.map((reel, index) => {
            const isPlaying = playingId === reel.id;

            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="bg-dark-card/90 border border-white/5 rounded-3xl p-4 sm:p-5 hover:border-accent/30 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div
                  onClick={() => togglePlay(reel.id)}
                  className={`w-full aspect-[9/14] sm:aspect-[9/15] rounded-2xl overflow-hidden relative bg-gradient-to-br ${reel.gradient} cursor-pointer group-hover:shadow-2xl group-hover:shadow-accent/20 transition-all duration-500 border border-white/10 flex flex-col justify-between p-4`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10">
                      {reel.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/30 backdrop-blur-md text-white text-[11px] font-bold border border-accent/40 shadow-sm">
                      <Eye className="w-3 h-3" />
                      <span>{reel.views}</span>
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white relative transition-transform duration-300 ${isPlaying ? 'scale-105 bg-accent/40' : 'group-hover:scale-110'}`}>
                      {isPlaying && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-accent/40" />
                      )}
                      {isPlaying ? (
                        <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                      ) : (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
                      )}
                    </div>
                  </div>

                  <div className="z-10 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/80 font-medium">
                      <span className="font-semibold text-white">{reel.client}</span>
                      <span className="text-[11px] text-accent-light">{reel.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1">
                      <span>{reel.engagement}</span>
                      <div className="flex items-end gap-0.5 h-3">
                        <span className={`w-0.5 bg-accent rounded-full transition-all ${isPlaying ? 'h-3 animate-pulse' : 'h-1.5'}`} />
                        <span className={`w-0.5 bg-accent rounded-full transition-all ${isPlaying ? 'h-2 animate-pulse delay-75' : 'h-2.5'}`} />
                        <span className={`w-0.5 bg-accent rounded-full transition-all ${isPlaying ? 'h-3.5 animate-pulse delay-150' : 'h-2'}`} />
                        <span className={`w-0.5 bg-accent rounded-full transition-all ${isPlaying ? 'h-2 animate-pulse delay-100' : 'h-1'}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-1 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {reel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                      Client Campaign • {reel.client}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-glow text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50"
          >
            <span>Create Your Brand Reels</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
