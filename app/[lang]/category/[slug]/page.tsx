import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategoryList from '@/components/CategoryList';
import MostReadSidebar from '@/components/MostReadSidebar';
import Pagination from '@/components/Pagination';
import {
  CATEGORY_ARTICLES_MAP,
  MOST_READ_ARTICLES_EN,
  CHINESE_TOP_NEWS,
  CATEGORIES_EN,
  CATEGORIES_ZH,
} from '@/lib/data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isZh = lang === 'zh';
  const categoryMapEn: Record<string, string> = {
    cambodia: 'Cambodia',
    world: 'World',
    business: 'Business',
    diplomacy: 'Diplomacy',
    insight: 'Insight',
  };
  const categoryMapZh: Record<string, string> = {
    cambodia: '柬埔寨',
    world: '国际',
    business: '商业',
    diplomacy: '外交',
    insight: '观点',
    'chinese-news': '中文新闻',
  };

  const title = isZh
    ? `${categoryMapZh[slug] || '新闻'} - CICE News 柬埔寨国际通讯社`
    : `${categoryMapEn[slug] || 'News'} - CICE News`;

  return { title };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isZh = lang === 'zh';

  // Capitalized category title
  const categoryMapEn: Record<string, string> = {
    cambodia: 'Cambodia',
    world: 'World',
    business: 'Business',
    diplomacy: 'Diplomacy',
    insight: 'Insight',
  };

  const categoryMapZh: Record<string, string> = {
    cambodia: '柬埔寨',
    world: '国际新闻',
    business: '商业与投资',
    diplomacy: '外交事务',
    insight: '深度观点',
    'chinese-news': '中文要闻',
  };

  const titleEn = categoryMapEn[slug];
  const titleZh = categoryMapZh[slug];

  // Articles for this category
  const articles =
    CATEGORY_ARTICLES_MAP[slug] ||
    CATEGORY_ARTICLES_MAP['cambodia'] ||
    [];

  const mostRead = isZh ? CHINESE_TOP_NEWS : MOST_READ_ARTICLES_EN;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      {/* 2-Column Category Layout starting from the top */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Breadcrumb + Category Header + Article Feed */}
        <div className="lg:col-span-8">
          {/* Breadcrumb Navigation: Home > Category */}
          <nav className="flex items-center gap-1.5 text-xs text-sky-800 mb-2 font-light uppercase">
            <Link href={`/${lang}`} className="text-sky-800 hover:underline">
              {isZh ? '首页' : 'Home'}
            </Link>
            <span className="text-slate-400">&gt;</span>
            <span className="text-sky-800 font-medium">
              {isZh ? titleZh || slug : titleEn || slug}
            </span>
          </nav>

          {/* Category Header: Title + Gold Bar underneath */}
          <div className="mb-6">
            <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#142249] tracking-tight capitalize">
              {isZh ? titleZh || slug : titleEn || slug}
            </h1>
            <div className="w-14 sm:w-16 h-[3px] bg-amber-400 mt-2" />
          </div>

          {/* Article Feed */}
          <CategoryList
            variant="feed"
            articles={articles}
            lang={isZh ? 'zh' : 'en'}
            categoryTitle={isZh ? titleZh : titleEn}
            categorySlug={slug}
          />
        </div>

        {/* Right Sidebar: Starts from the top, level with the Category Title */}
        <div className="lg:col-span-4 lg:pt-6">
          <MostReadSidebar
            articles={mostRead}
            lang={isZh ? 'zh' : 'en'}
            title={isZh ? '柬埔寨要闻' : 'Most Read'}
            showAd={true}
          />
        </div>
      </div>

      {/* Pagination centered relative to the ENTIRE PAGE width */}
      <Pagination lang={isZh ? 'zh' : 'en'} />
    </div>
  );
}
