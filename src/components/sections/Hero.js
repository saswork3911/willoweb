"use client"
import { useState, useRef } from 'react';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center ">
      {/* Background Video with Text Overlay */}
      <div className="absolute inset-0 z-[1]">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          {/* <source src="https://www.piindustries.com/wp-content/uploads/2025/06/home-hero-vid-mobile.mp4" type="video/mp4" /> */}
          <source src='/video/home-hero.mp4' type="video/mp4" />
          <source src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop&crop=center" type="image/jpeg" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,77,46,0.4)] to-[rgba(168,209,102,0.3)]" />
      </div>

      {/* Content */}
      <div className="relative z-[3] mx-4 sm:mx-6 md:mx-auto max-w-full md:max-w-[900px] py-4 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 text-center">
        {/* content will be there  */}
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-[999] bg-black opacity-30 text-white  p-3 rounded-full transition-all duration-200 shadow-xl border-1.5"
        title={isMuted ? 'Click to unmute' : 'Click to mute'}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.75a.75.75 0 00-1.264-.546L5.203 6H2.667a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75h2.536l3.533 2.796A.75.75 0 0010 16.25V3.75z" />
            <path d="M12.22 6.22a.75.75 0 011.06 0l2.83 2.83a.75.75 0 010 1.06L13.28 13.28a.75.75 0 01-1.06-1.06l2.3-2.3-2.3-2.3a.75.75 0 010-1.06z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.75a.75.75 0 00-1.264-.546L5.203 6H2.667a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75h2.536l3.533 2.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 101.06 1.06 7 7 0 000-9.899z" />
            <path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" />
          </svg>
        )}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-10 inset-x-0 z-[5] flex flex-col items-center gap-2 text-white animate-bounce">
        <span className="font-montserrat font-semibold text-xs md:text-sm tracking-[2px] uppercase text-center">
          Scroll to Explore
        </span>
        <i className="fas fa-chevron-down text-lg md:text-2xl"></i>
      </div>
    </section>
  );
}
