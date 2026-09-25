import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '@/components/Image';
import BannerAd from '@/components/BannerAd';
import HeroArticle from '@/components/HeroArticle';
import CategoryList from '@/components/CategoryList';
import ChineseMagazineGrid from '@/components/ChineseMagazineGrid';
import { detectLang } from '@/lib/routes';
import {
  HERO_ARTICLE_EN,
  SUB_GRID_ARTICLES_EN,
  SHOWCASE_ARTICLES_EN,
  CHINESE_PREVIEW_ARTICLES,
} from '@/lib/data';

export default function HomePage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = detectLang(location.pathname);
  const isZh = lang === 'zh';

  useEffect(() => {
    document.title = isZh
      ? 'CICE News - 柬埔寨国际通讯社 | 深度报道与权威洞见'
      : 'CICE News | Cambodia International Communication Echo';
  }, [isZh]);

  // If Chinese portal is requested (/zh)
  if (isZh) {
    return <ChineseMagazineGrid />;
  }

  // English Home Layout
  return (
    <div className="w-full">
      {/* Upper Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 1. Top Leaderboard Advertisement */}
        <BannerAd variant="leaderboard" />

        {/* 2. Hero Section & 3-Column Sub-grid (CAMBODIA) */}
        <HeroArticle
          hero={HERO_ARTICLE_EN}
          subArticles={SUB_GRID_ARTICLES_EN}
          lang="en"
        />

        {/* 3. In-feed Horizontal Advertisement Banner */}
        <BannerAd variant="leaderboard" />

        {/* 4. 4-Column Category Showcase (World, Business, Diplomacy, Insight) */}
        <CategoryList
          variant="showcase"
          articles={SHOWCASE_ARTICLES_EN}
          lang="en"
        />
      </div>

      {/* 5. Bottom Section: FULL-WIDTH Preview feed for Chinese news items */}
      <section className="w-full bg-[#ebf5fe] py-8 sm:py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Title and "查看全部 →" */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1.5">
              <h2 className="font-chinese-serif text-xl sm:text-2xl font-bold text-[#142249]">
                {t('common.chineseNews')}
              </h2>
              <Link
                to="/zh"
                className="text-xs sm:text-sm font-chinese-serif text-[#142249] hover:text-sky-800 transition-colors inline-flex items-center gap-1 group font-medium"
              >
                <span>{t('common.viewAll')}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            {/* Composite line with solid gray matching Cambodia */}
            <div className="flex items-center h-[3px]">
              <div className="w-20 sm:w-24 h-[3px] bg-[#142249]" />
              <div className="flex-1 h-[3px] bg-[#C6CAD9]" />
            </div>
          </div>

          {/* 4-column Chinese preview cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHINESE_PREVIEW_ARTICLES.map((item) => (
              <article
                key={item.id}
                className="bg-white overflow-hidden flex flex-col shadow-xs group hover:shadow-md transition-shadow"
              >
                {/* Full Width Image with No Padding */}
                <Link
                  to={`/zh/article/${item.slug}`}
                  className="relative h-44 sm:h-48 w-full block overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-300"
                  />
                </Link>

                {/* Text Content with Padding */}
                <div className="p-4 flex flex-col flex-1">
                  <Link to={`/zh/article/${item.slug}`}>
                    <h3 className="font-chinese-serif text-sm font-bold text-[#142249] leading-snug line-clamp-2 group-hover:text-sky-800 transition-colors mb-3">
                      {item.title}
                    </h3>
                  </Link>

                  <div className="mt-auto text-xs text-slate-400 font-light font-chinese-serif pt-1">
                    {item.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
