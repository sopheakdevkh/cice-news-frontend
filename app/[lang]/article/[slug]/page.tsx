import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getArticleBySlug,
  MOST_READ_ARTICLES_EN,
  CHINESE_TOP_NEWS,
  HERO_ARTICLE_EN,
  SUB_GRID_ARTICLES_EN,
  SHOWCASE_ARTICLES_EN,
  CATEGORY_ARTICLES_MAP,
  CHINESE_HERO_ARTICLE,
  CHINESE_PREVIEW_ARTICLES,
  CHINESE_SECTIONS,
  Article,
} from '@/lib/data';
import MostReadSidebar from '@/components/MostReadSidebar';
import BannerAd from '@/components/BannerAd';
import { Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { FacebookIcon, XIcon, LinkedInIcon } from '@/components/SocialIcons';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found - CICE News' };
  return {
    title: `${article.title} - CICE News`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isZh = lang === 'zh';
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const mostRead = isZh ? CHINESE_TOP_NEWS : MOST_READ_ARTICLES_EN;

  // Determine previous and next articles following the Most Read sequence (01 -> 02 -> 03 -> 04 -> 05)
  const mostReadIndex = mostRead.findIndex((a) => a.slug === article.slug);

  let prevArticle: Article;
  let nextArticle: Article;

  if (mostReadIndex !== -1) {
    // Current article is in Most Read (ranks 01 - 05)
    prevArticle =
      mostReadIndex > 0
        ? mostRead[mostReadIndex - 1]
        : mostRead[mostRead.length - 1];
    nextArticle =
      mostReadIndex < mostRead.length - 1
        ? mostRead[mostReadIndex + 1]
        : mostRead[0];
  } else {
    // Current article is outside Most Read (e.g. Phnom Penh article):
    // Next advances to Most Read #01, Previous links to Most Read #05
    nextArticle = mostRead[0]; // 01: Cambodia's Capital Market Marks New Milestone
    prevArticle = mostRead[mostRead.length - 1]; // 05: New Road Projects to Boost Regional Connectivity
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      {/* Main Grid: Article Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: Article Reader Body (8 cols) */}
        <article className="lg:col-span-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-sky-800 mb-3 font-light uppercase">
            <Link href={`/${lang}`} className="text-sky-800 hover:underline uppercase">
              {isZh ? '首页' : 'Home'}
            </Link>
            <span className="text-slate-400">&gt;</span>
            <Link
              href={`/${lang}/category/${article.categorySlug}`}
              className="text-sky-800 hover:underline uppercase"
            >
              {article.category}
            </Link>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-400 truncate max-w-xs">{article.title}</span>
          </nav>
          {/* Category Tag */}
          <span className="inline-block text-xs font-bold text-sky-800 tracking-wider uppercase mb-3">
            {article.category}
          </span>

          {/* Headline */}
          <h1 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#142249] leading-tight mb-4">
            {article.title}
          </h1>

          {/* Meta Info & Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-slate-100 text-xs text-slate-500 mb-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readTime || '3 min read'}
              </span>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider mr-1">
                {isZh ? '分享' : 'Share'}:
              </span>
              <button
                className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                aria-label="Share on Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </button>
              <button
                className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                aria-label="Share on X"
              >
                <XIcon className="w-3.5 h-3.5" />
              </button>
              <button
                className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 w-full rounded-xs overflow-hidden mb-6">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Excerpt Lead */}
          <p className="font-serif-heading italic text-base sm:text-lg text-slate-700 leading-relaxed mb-6 pl-4 border-l-3 border-amber-500 bg-amber-50/30 py-2">
            {article.excerpt}
          </p>

          {/* Article Body Paragraphs */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base font-light">
            {article.content ? (
              article.content
                .trim()
                .split('\n\n')
                .map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))
            ) : (
              <>
                <p>
                  {isZh
                    ? '金边讯 — 随着柬埔寨宏观经济指标稳步向好，有关各方正积极落实各项深化改革与开放政策，推动高水平国际经贸合作与人文交流迈上新台阶。'
                    : "Phnom Penh — Cambodia's socioeconomic indicators continue to showcase remarkable stability, underpinned by comprehensive modern regulatory enhancements, streamlined trade facilitation, and strategic investments into digital infrastructure."}
                </p>
                <p>
                  {isZh
                    ? '多位区域政策分析师指出，柬埔寨得天独厚的区位优势、年轻化的人口红利以及多元包容的营商环境，正在吸引全球范围内各高新技术与智能装备制造企业的战略布局。'
                    : "Regional analysts emphasize that Cambodia's competitive demographics, strategic geographic position along key maritime and land routes, and open foreign investment environment have positioned the Kingdom as a resilient frontier for high-value manufacturing and sustainable enterprise."}
                </p>
                <p>
                  {isZh
                    ? '展望未来，柬埔寨将继续依托多边机制与共建“一带一路”倡议，推进绿色能源转型与现代物流走廊建设，为区域繁荣发展注入持久动力。'
                    : 'Moving forward, cross-border partnerships and institutional dialogue will remain pivotal in sustaining green transition milestones, ensuring resilient supply chains and high-quality employment opportunities for future generations.'}
                </p>
              </>
            )}
          </div>

          {/* Previous / Next Article Navigation matching mockup */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative items-center">
              {/* Left: Previous Article */}
              {prevArticle ? (
                <Link
                  href={`/${lang}/article/${prevArticle.slug}`}
                  className="flex items-center gap-3.5 group pr-2 sm:pr-4"
                >
                  <ChevronLeft className="w-6 h-6 text-[#142249] shrink-0 stroke-[3] group-hover:-translate-x-1 transition-transform" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#142249] tracking-wider uppercase block mb-1">
                      {isZh ? '上一篇' : 'PREVIOUS'}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#142249] leading-snug line-clamp-2 group-hover:text-sky-700 transition-colors">
                      {prevArticle.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Center Vertical Divider Line (Desktop) */}
              <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-slate-200" />

              {/* Right: Next Article */}
              {nextArticle ? (
                <Link
                  href={`/${lang}/article/${nextArticle.slug}`}
                  className="flex items-center justify-end gap-3.5 group pl-2 sm:pl-4 text-right ml-auto"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#142249] tracking-wider uppercase block mb-1">
                      {isZh ? '下一篇' : 'NEXT'}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#142249] leading-snug line-clamp-2 group-hover:text-sky-700 transition-colors">
                      {nextArticle.title}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#142249] shrink-0 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </article>

        {/* Right Sidebar (4 cols): Starts from the top, level with the article title */}
        <div className="lg:col-span-4 lg:pt-6">
          <MostReadSidebar
            articles={mostRead}
            lang={isZh ? 'zh' : 'en'}
            title={isZh ? '相关要闻' : 'Most Read'}
            showAd={true}
          />
        </div>
      </div>
    </div>
  );
}
