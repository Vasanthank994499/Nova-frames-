'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface VideoItem {
  id: number;
  title: string;
  subtitle: string;
  gradient: string;
  tag: string;
  src?: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'Sri Bal Tex',
    subtitle: 'Generate 400+ leads',
    gradient: 'from-amber-950 via-amber-900 to-indigo-950',
    tag: 'Textiles & Apparel / Lead Gen',
    src: '/videos/sri-bal-tex.mp4',
  },
  {
    id: 2,
    title: 'Sri Varagi Promoters',
    subtitle: 'Real Estate Brand Storytelling & High-Intent Enquiries',
    gradient: 'from-blue-950 via-slate-900 to-indigo-950',
    tag: 'Real Estate / Lead Gen',
  },
  {
    id: 3,
    title: 'Sagar Readymades',
    subtitle: 'Festive Sales Drive & Store Walk-in Campaign (+30–40% Walk-ins)',
    gradient: 'from-rose-950 via-purple-950 to-indigo-950',
    tag: 'Retail / Performance Ads',
  },
];

function VideoCard({ video, isVisible, index }: { video: VideoItem; isVisible: boolean; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (video.src && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`${isVisible ? 'block' : 'hidden'} sm:block w-full transition-all duration-300`}
    >
      <div
        className={`w-full aspect-video rounded-2xl overflow-hidden relative bg-gradient-to-br ${video.gradient} cursor-pointer group shadow-md hover:shadow-xl active:scale-[0.99] transition-all duration-300 border border-black/10`}
        onClick={togglePlay}
      >
        {video.src ? (
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-cover"
            playsInline
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
        )}

        {/* Tag pill */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 pointer-events-none">
          <span className="px-2.5 py-1 sm:px-3 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-[11px] sm:text-xs font-medium border border-white/10 shadow-sm">
            {video.tag}
          </span>
        </div>

        {/* Play Button Overlay (visible when paused or non-video) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white relative transition-transform group-hover:scale-110 shadow-lg border border-white/20">
              <Play size={24} className="sm:w-8 sm:h-8 relative z-10 ml-0.5 sm:ml-1" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 sm:mt-4 text-left">
        <h3 className="text-base sm:text-lg font-semibold text-txt-primary">{video.title}</h3>
        <p className="text-txt-muted text-xs sm:text-sm mt-0.5">{video.subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveSlide((prev) => (prev + 1) % videos.length);
    } else if (isRightSwipe) {
      setActiveSlide((prev) => (prev - 1 + videos.length) % videos.length);
    }
  };

  return (
    <section id="video-showcase" className="py-16 sm:py-24 bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold">
              Our Work
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-txt-primary mt-2 tracking-tight">
              Featured Growth Stories
            </h2>
          </div>
          <Link
            href="/clients"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-glow mt-4 sm:mt-0 group min-h-[44px] py-1"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid on Tablet/Desktop & Touch-Swipeable on Mobile */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 touch-pan-y select-none sm:select-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              isVisible={activeSlide === index}
              index={index}
            />
          ))}
        </div>

        {/* Mobile-Only Touch-Friendly Navigation Dots & Hint */}
        <div className="flex flex-col items-center gap-2 mt-6 sm:hidden">
          <div className="flex justify-center items-center gap-1">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className="p-2 flex items-center justify-center focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-accent w-7' : 'bg-gray-300 w-2.5'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-[11px] text-txt-muted font-medium">Swipe to explore stories</span>
        </div>
      </div>
    </section>
  );
}
