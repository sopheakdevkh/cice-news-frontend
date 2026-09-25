import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '@/components/Image';
import { Article } from '@/lib/data';
import { getArticlePath } from '@/lib/routes';
import BannerAd from './BannerAd';
import {
  LinkedInIcon,
  FacebookIcon,
  XIcon,
  YoutubeIcon,
  InstagramIcon,
} from './SocialIcons';

interface MostReadSidebarProps {
  articles: Article[];
  lang?: 'en' | 'zh';
  title?: string;
  showAd?: boolean;
}

export default function MostReadSidebar({
  articles,
  lang = 'en',
  title,
  showAd = true,
}: MostReadSidebarProps) {
  const { t } = useTranslation();
  const displayTitle = title || t('common.mostRead');

  return (
    <aside className="w-full space-y-6">
      {/* Most Read Box */}
      <div className="bg-[#ebf5fe] p-4 sm:p-5">
        {/* Header with thin gold line */}
        <div className="pb-2 mb-4 border-b border-amber-300/90">
          <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#0C195A]">
            {displayTitle}
          </h3>
        </div>

        {/* Ranked List */}
        <div className="space-y-4">
          {articles.slice(0, 5).map((item, index) => {
            const rankFormatted = String(item.rank || index + 1).padStart(2, '0');
            return (
              <div
                key={item.id || index}
                className="flex items-start gap-3.5 group"
              >
                {/* Ranking Number in Gold */}
                <span className="font-serif-heading text-lg sm:text-xl font-bold text-amber-500/95 w-6 shrink-0 mt-0.5">
                  {rankFormatted}
                </span>

                {/* Square Thumbnail */}
                <Link
                  to={getArticlePath(item.slug, lang)}
                  className="relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 overflow-hidden block"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </Link>

                {/* Title */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <Link to={getArticlePath(item.slug, lang)}>
                    <h4 className="font-serif-heading text-xs sm:text-[13px] font-bold text-[#0C195A] leading-snug line-clamp-3 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Horizontal Sidebar Ads */}
      {showAd && (
        <div className="space-y-4 pt-4">
          <BannerAd variant="ad-city" />
          <BannerAd variant="ad-partner" />
          <BannerAd variant="ad-globe" />
        </div>
      )}

      {/* Follow Us Section */}
      <div className="bg-[#f8fafc] p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-[3px] h-3.5 bg-[#0C195A]" />
          <h4 className="font-serif-heading text-sm sm:text-base font-bold text-[#0C195A]">
            {t('common.followUs')}
          </h4>
        </div>
        <div className="flex items-center gap-3.5 sm:gap-4 text-[#0C195A]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-amber-500 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-amber-500 transition-colors"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-amber-500 transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-amber-500 transition-colors"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-amber-500 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
