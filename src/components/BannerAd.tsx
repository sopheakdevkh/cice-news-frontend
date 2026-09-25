import React from 'react';
import { Link } from 'react-router-dom';

interface BannerAdProps {
  variant?: 'leaderboard' | 'sidebar' | 'promo' | 'ad-city' | 'ad-partner' | 'ad-globe';
  className?: string;
}

export default function BannerAd({ variant = 'leaderboard', className = '' }: BannerAdProps) {
  if (variant === 'ad-city') {
    return (
      <div
        className={`relative overflow-hidden rounded-none bg-linear-to-r from-[#0055a5] via-[#003d7a] to-[#002244] text-white flex items-center justify-between px-5 sm:px-6 py-4 h-32 sm:h-36 md:h-40 shadow-xs group ${className}`}
      >
        <div className="relative z-10 max-w-[52%] sm:max-w-[50%]">
          <h5 className="font-serif-heading text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white leading-tight">
            Advertisement
          </h5>
          <p className="text-[10px] sm:text-xs tracking-wider uppercase text-sky-200/90 font-light mt-2 leading-relaxed">
            REACH YOUR AUDIENCE IN CAMBODIA AND BEYOND
          </p>
        </div>
        {/* City Skyline Photo */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%] sm:w-[62%] md:w-[65%] pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=800&auto=format&fit=crop"
            alt="City Skyline"
            className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#003d7a] via-[#003d7a]/40 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === 'ad-partner') {
    return (
      <div
        className={`relative overflow-hidden rounded-none bg-linear-to-r from-[#fae7b5] via-[#edd08c] to-[#deb55d] text-[#003164] flex items-center justify-between px-5 sm:px-6 py-4 h-32 sm:h-36 md:h-40 shadow-xs group ${className}`}
      >
        <div className="relative z-10 max-w-[52%] sm:max-w-[50%]">
          <h5 className="font-serif-heading text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#003164] leading-tight">
            Advertisement
          </h5>
          <p className="text-[10px] sm:text-xs tracking-wider uppercase text-amber-950/85 font-medium mt-2 leading-relaxed">
            YOUR BUSINESS PARTNER IN CAMBODIA
          </p>
        </div>
        {/* Angkor Wat Photo */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%] sm:w-[62%] md:w-[65%] pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
            alt="Angkor Wat"
            className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#edd08c] via-[#edd08c]/35 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === 'ad-globe') {
    return (
      <div
        className={`relative overflow-hidden rounded-none bg-linear-to-r from-[#002f66] via-[#00244f] to-[#00142e] text-white flex items-center justify-between px-5 sm:px-6 py-4 h-32 sm:h-36 md:h-40 shadow-xs group ${className}`}
      >
        <div className="relative z-10 max-w-[52%] sm:max-w-[50%]">
          <h5 className="font-serif-heading text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white leading-tight">
            Advertisement
          </h5>
          <p className="text-[10px] sm:text-xs tracking-wider uppercase text-sky-200/90 font-light mt-2 leading-relaxed">
            CONNECT BRANDS CREATE OPPORTUNITIES
          </p>
        </div>
        {/* Glowing Earth Globe Photo */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%] sm:w-[62%] md:w-[65%] pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
            alt="Globe"
            className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#00244f] via-[#00244f]/35 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div
        className={`relative overflow-hidden rounded-xs border border-sky-900/30 bg-linear-to-b from-[#0b3a60] via-[#002B49] to-[#001728] text-white flex flex-col items-center justify-between p-6 min-h-[300px] text-center ${className}`}
      >
        <div className="w-full flex items-center justify-center gap-2">
          <div className="h-px bg-amber-400/40 flex-1" />
          <span className="font-serif-heading text-[10px] tracking-widest text-amber-300 uppercase">
            Sponsored
          </span>
          <div className="h-px bg-amber-400/40 flex-1" />
        </div>

        <div className="relative z-10 py-6">
          <h4 className="font-serif-heading text-2xl font-bold tracking-wider text-white mb-2">
            Advertisement
          </h4>
          <p className="text-xs text-slate-300 max-w-[200px] mx-auto font-light leading-relaxed">
            Connect with regional leaders and international decision-makers across ASEAN
          </p>
        </div>

        <div className="relative z-10 w-full">
          <Link
            to="/contact"
            className="inline-block w-full py-2 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-amber-600/80 hover:bg-amber-500 rounded-xs transition-colors border border-amber-400/30 shadow-xs"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'promo') {
    return (
      <div
        className={`relative w-full rounded-xs overflow-hidden bg-linear-to-r from-[#001f35] via-[#0b3a60] to-[#002B49] text-white py-8 px-6 md:px-12 my-8 shadow-sm border-t-2 border-amber-500/50 ${className}`}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-cinzel text-2xl md:text-3xl font-extrabold tracking-widest text-white">
                CAMBODIA
              </span>
              <span className="text-amber-400 font-serif-heading italic text-sm md:text-base">
                A Land of Opportunities
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-200 tracking-wide font-chinese-serif">
              连接柬埔寨 · 连接世界
              <span className="hidden sm:inline text-xs text-slate-400 ml-3 tracking-widest uppercase font-sans">
                PEOPLE · BUSINESS · CULTURE · A SHARED TOMORROW
              </span>
            </p>
          </div>

          <Link
            to="/zh/category/cambodia"
            className="inline-flex items-center gap-2 bg-[#002B49] hover:bg-[#001B2E] text-amber-300 hover:text-white px-6 py-2.5 rounded-xs font-medium text-sm transition-all border border-amber-400/40 hover:border-amber-400 shadow-md shrink-0"
          >
            <span>了解更多</span>
            <span className="font-bold">→</span>
          </Link>
        </div>
      </div>
    );
  }

  // Exact Leaderboard Banner using official /advertisement.png asset
  return (
    <div
      className={`relative w-full h-16 sm:h-20 md:h-28 lg:h-32 overflow-hidden rounded-xs my-3 sm:my-6 bg-[#073561] flex items-center justify-center select-none shadow-xs group cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <img
          src="/advertisement.png"
          alt="Advertisement Banner"
          className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 text-center pointer-events-none px-4">
        <h2 className="font-serif-heading text-base sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white tracking-wider drop-shadow-md">
          Advertisement
        </h2>
      </div>
    </div>
  );
}
