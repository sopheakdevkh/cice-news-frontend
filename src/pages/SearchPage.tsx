import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  HERO_ARTICLE_EN,
  SUB_GRID_ARTICLES_EN,
  SHOWCASE_ARTICLES_EN,
  CHINESE_PREVIEW_ARTICLES,
  CATEGORY_ARTICLES_MAP,
  Article,
  MOST_READ_ARTICLES_EN,
  CHINESE_TOP_NEWS,
} from '@/lib/data';
import CategoryList from '@/components/CategoryList';
import MostReadSidebar from '@/components/MostReadSidebar';
import { useTranslation } from 'react-i18next';
import { detectLang } from '@/lib/routes';

export default function SearchPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = detectLang(location.pathname);
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const isZh = lang === 'zh';
  const query = q.toLowerCase();

  useEffect(() => {
    document.title = `${isZh ? '搜索结果' : 'Search Results'}: ${q} - CICE News`;
  }, [q, isZh]);

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
          {isZh ? '搜索结果' : 'Search Results'}: <span className="text-amber-600 font-normal">"{q}"</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {t('common.matchesFound', { count: results.length })}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          {results.length > 0 ? (
            <CategoryList variant="feed" articles={results} lang={isZh ? 'zh' : 'en'} />
          ) : (
            <div className="p-8 bg-white border border-slate-200 rounded text-center">
              <p className="text-slate-500 text-sm">
                {t('common.noArticlesFound')}
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
