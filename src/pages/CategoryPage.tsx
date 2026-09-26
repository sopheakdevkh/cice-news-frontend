import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CategoryList from '@/components/CategoryList';
import MostReadSidebar from '@/components/MostReadSidebar';
import Pagination from '@/components/Pagination';
import { detectLang, getHomePath } from '@/lib/routes';
import {
  CATEGORY_ARTICLES_MAP,
  CATEGORY_ARTICLES_ZH_MAP,
  MOST_READ_ARTICLES_EN,
  CHINESE_TOP_NEWS,
} from '@/lib/data';

export default function CategoryPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const { slug = 'cambodia' } = useParams<{ slug?: string }>();
  const lang = detectLang(location.pathname);
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
    world: '国际新闻',
    business: '商业与投资',
    diplomacy: '外交事务',
    insight: '深度观点',
    'chinese-news': '中文要闻',
  };

  const titleEn = categoryMapEn[slug] || slug;
  const titleZh = categoryMapZh[slug] || slug;
  const activeTitle = isZh ? titleZh : titleEn;

  useEffect(() => {
    document.title = isZh
      ? `${titleZh} - CICE News 柬埔寨国际通讯社`
      : `${titleEn} - CICE News`;
  }, [isZh, titleZh, titleEn]);

  // Articles for this category
  const articles = isZh
    ? (CATEGORY_ARTICLES_ZH_MAP[slug] ||
       CATEGORY_ARTICLES_ZH_MAP['cambodia'] ||
       CATEGORY_ARTICLES_MAP[slug] ||
       [])
    : (CATEGORY_ARTICLES_MAP[slug] ||
       CATEGORY_ARTICLES_MAP['cambodia'] ||
       []);

  const mostRead = isZh ? CHINESE_TOP_NEWS : MOST_READ_ARTICLES_EN;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      {/* 2-Column Category Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Breadcrumb + Category Header + Article Feed */}
        <div className="lg:col-span-8">
          {/* Breadcrumb Navigation: Home > Category */}
          <nav className="flex items-center gap-1.5 text-xs text-sky-800 mb-2 font-light">
            <Link to={getHomePath(lang)} className="text-sky-800 hover:underline">
              {t('common.home')}
            </Link>
            <span className="text-slate-400">&gt;</span>
            <span className="text-sky-800 font-medium">
              {activeTitle}
            </span>
          </nav>

          {/* Category Header */}
          <div className="mb-6">
            <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0C195A] tracking-tight">
              {activeTitle}
            </h1>
            <div className="w-14 sm:w-16 h-[3px] bg-amber-400 mt-2" />
          </div>

          {/* Article Feed */}
          <CategoryList
            variant="feed"
            articles={articles}
            lang={isZh ? 'zh' : 'en'}
            categoryTitle={activeTitle}
            categorySlug={slug}
          />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 lg:pt-6">
          <MostReadSidebar
            articles={mostRead}
            lang={isZh ? 'zh' : 'en'}
            showAd={true}
            showFollowUs={false}
          />
        </div>
      </div>

      {/* Pagination */}
      <Pagination lang={isZh ? 'zh' : 'en'} />
    </div>
  );
}
