import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LinkedInIcon,
  FacebookIcon,
  XIcon,
  YoutubeIcon,
  InstagramIcon,
} from '@/components/SocialIcons';

interface FooterProps {
  lang?: 'en' | 'zh';
}

export default function Footer({ lang = 'en' }: FooterProps) {
  const isZh = lang === 'zh';

  return (
    <footer className="w-full bg-[#0C195A] text-white border-t border-[#08103c] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Top Row: Logo | Links | Social Icons (Matching Image 1) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          {/* Left: Brand Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href={`/${lang}`} className="relative h-14 md:h-16 w-52 md:w-60 mb-0.5">
              <Image
                src="/cice-new-logo.webp"
                alt="CICE News"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-200 font-light">
            <Link href={`/${lang}/about`} className="hover:text-amber-400 transition-colors">
              {isZh ? '关于我们' : 'About Us'}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link href={`/${lang}/contact`} className="hover:text-amber-400 transition-colors">
              {isZh ? '联系我们' : 'Contact'}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link href={`/${lang}/advertising`} className="hover:text-amber-400 transition-colors">
              {isZh ? '广告合作' : 'Advertising'}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link href={`/${lang}/terms`} className="hover:text-amber-400 transition-colors">
              {isZh ? '服务条款' : 'Terms of Use'}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link href={`/${lang}/privacy`} className="hover:text-amber-400 transition-colors">
              {isZh ? '隐私政策' : 'Privacy Policy'}
            </Link>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3.5 text-white/90">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & tagline row matching mockup */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300/80 font-light gap-2">
          <p>© 2026 CICE News . All rights reserved.</p>
          <p className="text-slate-400">A Media Platform for a More Connected Cambodia</p>
        </div>
      </div>
    </footer>
  );
}
