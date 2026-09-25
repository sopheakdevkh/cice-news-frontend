import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '@/components/Image';
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
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#0C195A] text-white border-t border-[#08103c] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Top Row: Logo | Links | Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          {/* Left: Brand Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to={`/${lang}`} className="relative h-14 md:h-16 w-52 md:w-60 mb-0.5">
              <Image
                src="/cice-news-logo.webp"
                alt="CICE News"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-200 font-light">
            <Link to={`/${lang}/about`} className="hover:text-amber-400 transition-colors">
              {t('footer.aboutUs')}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link to={`/${lang}/contact`} className="hover:text-amber-400 transition-colors">
              {t('footer.contact')}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link to={`/${lang}/advertising`} className="hover:text-amber-400 transition-colors">
              {t('footer.advertising')}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link to={`/${lang}/terms`} className="hover:text-amber-400 transition-colors">
              {t('footer.termsOfUse')}
            </Link>
            <span className="text-slate-400/50 hidden sm:inline">|</span>
            <Link to={`/${lang}/privacy`} className="hover:text-amber-400 transition-colors">
              {t('footer.privacyPolicy')}
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

        {/* Bottom copyright & tagline */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300/80 font-light gap-2">
          <p>{t('footer.rights')}</p>
          <p className="text-slate-400">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
