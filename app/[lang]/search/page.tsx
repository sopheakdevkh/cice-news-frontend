import React from 'react';
import Link from 'next/link';
import {
  HERO_ARTICLE_EN,
  SUB_GRID_ARTICLES_EN,
  SHOWCASE_ARTICLES_EN,
  CHINESE_PREVIEW_ARTICLES,
  CATEGORY_ARTICLES_MAP,
  Article,
} from '@/lib/data';
import CategoryList from '@/components/CategoryList';
import MostReadSidebar from '@/components/MostReadSidebar';
import { MOST_READ_ARTICLES_EN, CHINESE_TOP_NEWS } from '@/lib/data';

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { lang } = await params;
  const { q } = await searchParams;
  const isZh = lang === 'zh';
  const query = (q || '').toLowerCase();

  const allArticles: Article[] = [
    HERO_ARTICLE_EN,
    ...SUB_GRID_ARTICLES_EN,
    ...SHOWCASE_ARTICLES_EN,
    ...CHINESE_PREVIEW_ARTICLES,
    ...Object.values(CATEGORY_ARTICLES_MAP).flat(),
  ];

  const results = query
    ? allArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query)
      )
    : allArticles.slice(0, 5);

  const mostRead = isZh ? CHINESE_TOP_NEWS : MOST_READ_ARTICLES_EN;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="mb-8 border-b-2 border-[#142249] pb-3">
        <h1 className="font-cinzel text-2xl md:text-3xl font-bold text-[#142249]">
          {isZh ? '搜索结果' : 'Search Results'}: <span className="text-amber-600 font-normal">"{q || ''}"</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {results.length} {isZh ? '条相关结果' : 'matches found'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          {results.length > 0 ? (
            <CategoryList variant="feed" articles={results} lang={isZh ? 'zh' : 'en'} />
          ) : (
            <div className="p-8 bg-white border border-slate-200 rounded text-center">
              <p className="text-slate-500 text-sm">
                {isZh ? '未找到相关文章，请尝试其他关键词。' : 'No articles matched your search query.'}
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-4">
          <MostReadSidebar
            articles={mostRead}
            lang={isZh ? 'zh' : 'en'}
            title={isZh ? '热门推荐' : 'Most Read'}
            showAd={true}
          />
        </div>
      </div>
    </div>
  );
}
