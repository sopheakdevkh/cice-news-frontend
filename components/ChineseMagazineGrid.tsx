'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CHINESE_HERO_ARTICLE,
  CHINESE_TOP_NEWS,
  CHINESE_SECTIONS,
  CHINESE_OPINIONS,
} from '@/lib/data';
import BannerAd from './BannerAd';
import { ChevronLeft, ChevronRight, FileText, BarChart3, TrendingUp, BookOpen, Database, ArrowRight } from 'lucide-react';

export default function ChineseMagazineGrid() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const heroSlides = [
    CHINESE_HERO_ARTICLE,
    {
      id: 'zh-hero-2',
      slug: 'china-cambodia-leaders-meeting',
      lang: 'zh' as const,
      category: '中文新闻·头条',
      categorySlug: 'diplomacy',
      title: '中柬两国高水平互信持续深化 务实经贸合作开拓新空间',
      excerpt: '双方全面对接发展战略，加速实施重点交通与清洁能源旗舰合作工程，共同谱写现代化发展新篇章。',
      date: '2026年9月11日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_19_07-PM.png',
    },
    {
      id: 'zh-hero-3',
      slug: 'cambodia-asean-economic-summit',
      lang: 'zh' as const,
      category: '中文新闻·东盟',
      categorySlug: 'world',
      title: '柬埔寨积极参与东盟经贸会议 推动区域经济一体化进程',
      excerpt: '柬方强调坚持多边贸易体制，助力东盟共同体供应链韧性与数字化绿色协同发展。',
      date: '2026年9月10日',
      image: 'https://cice.news/wp-content/uploads/2026/09/ChatGPT-Image-Sep-20-2026-04_16_58-PM.png',
    },
    {
      id: 'zh-hero-4',
      slug: 'cambodia-auto-industry-opportunities',
      lang: 'zh' as const,
      category: '中文新闻·产业',
      categorySlug: 'business',
      title: '柬埔寨汽车产业迎来新机遇 多家国际企业加快在柬布局',
      excerpt: '随着投资环境持续优化，越来越多跨国企业看好柬埔寨高附加值制造业的增长潜能。',
      date: '2026年9月9日',
      image: 'https://cice.news/wp-content/uploads/2026/09/802032215_2911760719164575_3287661511473095817_n.png-7-edited-1.jpeg',
    },
  ];

  const currentHero = heroSlides[carouselIndex];

  // Auto slide every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      {/* 1. Top Section: Hero Carousel (Left) + 柬埔寨要闻 (Right) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left Hero Feature with Carousel Controls */}
        <div
          className="lg:col-span-8 relative h-[380px] md:h-[460px] rounded-sm overflow-hidden group shadow-md bg-slate-900 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Stacked Images for Smooth Crossfade & Ken Burns effect */}
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === carouselIndex ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className={`object-cover transition-transform duration-7000 ease-out ${
                  idx === carouselIndex ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent z-1 pointer-events-none" />

          {/* Content Over Hero - Slides from bottom and stays displayed */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white z-10 flex flex-col justify-end">
            <div key={carouselIndex} className="animate-slide-up flex flex-col justify-end">
              <span className="inline-block self-start text-xs font-semibold px-2.5 py-1 bg-sky-700/90 text-white rounded-xs mb-3 backdrop-blur-xs shadow-xs">
                {currentHero.category}
              </span>

              <Link href={`/zh/article/${currentHero.slug}`}>
                <h2 className="font-chinese-serif text-xl sm:text-2xl md:text-3xl font-bold leading-tight hover:text-amber-300 transition-colors line-clamp-2">
                  {currentHero.title}
                </h2>
              </Link>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-3xl font-light leading-relaxed">
                {currentHero.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span>{currentHero.date}</span>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3">
                  {/* Slide Indicators */}
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        aria-label={`跳转至第 ${idx + 1} 张幻灯片`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === carouselIndex
                            ? 'w-6 bg-amber-400'
                            : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Left / Right Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setCarouselIndex((prev) =>
                          prev === 0 ? heroSlides.length - 1 : prev - 1
                        )
                      }
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-xs cursor-pointer active:scale-95"
                      aria-label="上一张"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={() =>
                        setCarouselIndex((prev) => (prev + 1) % heroSlides.length)
                      }
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-xs cursor-pointer active:scale-95"
                      aria-label="下一张"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 柬埔寨要闻 (01 - 05) */}
        <div className="lg:col-span-4 bg-white rounded-sm border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b-2 border-[#142249] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-amber-500 rounded-xs" />
                <h3 className="font-chinese-serif text-base font-bold text-[#142249]">
                  柬埔寨要闻
                </h3>
              </div>
              <Link
                href="/zh/category/cambodia"
                className="text-xs text-slate-500 hover:text-amber-600 transition-colors inline-flex items-center gap-1"
              >
                <span>更多</span>
                <span>→</span>
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {CHINESE_TOP_NEWS.map((item, idx) => (
                <div key={item.id} className="py-2.5 flex items-start gap-3 group">
                  <span className="font-serif-heading text-base font-bold text-amber-500/90 w-5 shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <Link
                    href={`/zh/article/${item.slug}`}
                    className="relative h-12 w-16 shrink-0 rounded-xs overflow-hidden block"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link href={`/zh/article/${item.slug}`}>
                      <h4 className="font-chinese-serif text-xs font-semibold text-[#142249] leading-snug line-clamp-2 group-hover:text-sky-800 transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                    <p className="text-[10px] text-slate-400 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Promo Banner */}
      <BannerAd variant="promo" />

      {/* 3. Main Split Section: 2-Column News Blocks (Left) + Right Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
        {/* Left Column: 6 News Blocks in 2x3 Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHINESE_SECTIONS.map((sec) => (
              <div
                key={sec.sectionTitle}
                className="bg-white rounded-sm border border-slate-200/80 p-4 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Category Header with Gold Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-amber-500 rounded-xs" />
                      <h3 className="font-chinese-serif text-sm font-bold text-[#142249]">
                        {sec.sectionTitle}
                      </h3>
                    </div>
                    <Link
                      href={sec.moreLink}
                      className="text-xs text-slate-400 hover:text-amber-600 transition-colors"
                    >
                      更多 →
                    </Link>
                  </div>

                  {/* Thumbnail Image */}
                  <Link
                    href={`/zh/article/${sec.article.slug}`}
                    className="relative h-40 w-full rounded-xs overflow-hidden block mb-3"
                  >
                    <Image
                      src={sec.article.image}
                      alt={sec.article.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Article Title */}
                  <Link href={`/zh/article/${sec.article.slug}`}>
                    <h4 className="font-chinese-serif text-sm font-bold text-[#142249] leading-snug hover:text-sky-800 transition-colors line-clamp-2">
                      {sec.article.title}
                    </h4>
                  </Link>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                    {sec.article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                  {sec.article.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Columnist, Research, Newsletter, Discover */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Widget 1: 专栏·观点 */}
          <div className="bg-white rounded-sm border border-slate-200/80 p-5 shadow-xs">
            <div className="flex items-center justify-between border-b-2 border-[#142249] pb-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-amber-500 rounded-xs" />
                <h3 className="font-chinese-serif text-base font-bold text-[#142249]">
                  专栏 · 观点
                </h3>
              </div>
              <Link
                href="/zh/category/insight"
                className="text-xs text-slate-500 hover:text-amber-600 transition-colors"
              >
                更多 →
              </Link>
            </div>

            {/* Featured Columnist */}
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
              <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                <Image
                  src={CHINESE_OPINIONS.featured.author.avatar}
                  alt={CHINESE_OPINIONS.featured.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-chinese-serif text-sm font-bold text-[#142249] leading-snug hover:text-sky-800 transition-colors cursor-pointer">
                  {CHINESE_OPINIONS.featured.title}
                </h4>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">
                    {CHINESE_OPINIONS.featured.author.name}
                  </span>
                  <span>·</span>
                  <span className="text-[11px] text-slate-400">
                    {CHINESE_OPINIONS.featured.author.title}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {CHINESE_OPINIONS.featured.date}
                </p>
              </div>
            </div>

            {/* Columnist List */}
            <div className="divide-y divide-slate-100">
              {CHINESE_OPINIONS.list.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center gap-3 group">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-chinese-serif text-xs font-semibold text-[#142249] hover:text-sky-800 line-clamp-1 transition-colors cursor-pointer">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 2: CICE Research Card */}
          <div className="rounded-sm bg-linear-to-br from-[#002B49] to-[#001726] text-white p-5 shadow-sm border border-sky-950">
            <h4 className="font-cinzel text-lg font-bold text-amber-300 tracking-wider">
              CICE Research
            </h4>
            <p className="font-chinese-serif text-xs text-slate-200 mt-1 mb-4">
              洞见柬埔寨 · 研究创造价值
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-5">
              <div className="flex items-center gap-1.5 bg-white/5 py-1.5 px-2 rounded-xs border border-white/10">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>政策研究</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 py-1.5 px-2 rounded-xs border border-white/10">
                <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                <span>产业分析</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 py-1.5 px-2 rounded-xs border border-white/10">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span>市场洞察</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 py-1.5 px-2 rounded-xs border border-white/10">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>专题报告</span>
              </div>
              <div className="col-span-2 flex items-center gap-1.5 bg-white/5 py-1.5 px-2 rounded-xs border border-white/10">
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span>定制数据咨询服务</span>
              </div>
            </div>

            <Link
              href="/zh/category/insight"
              className="inline-flex items-center justify-center gap-2 w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-xs rounded-xs transition-colors shadow-xs"
            >
              <span>了解更多</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Widget 3: Newsletter Subscription Box */}
          <div className="bg-white rounded-sm border border-slate-200/80 p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-amber-500 rounded-xs" />
              <h4 className="font-chinese-serif text-sm font-bold text-[#142249]">
                订阅 CICE News
              </h4>
            </div>
            <p className="text-xs text-slate-500 mb-3">获取柬埔寨及区域最新权威商业资讯</p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xs text-xs font-medium border border-emerald-200">
                感谢您的订阅！我们会定期向您发送深度快讯。
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="请输入您的邮箱"
                  className="flex-1 bg-slate-50 border border-slate-200 px-3 py-2 text-xs rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#142249]"
                />
                <button
                  type="submit"
                  className="bg-[#142249] hover:bg-[#0e1936] text-white px-4 py-2 text-xs font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  订阅
                </button>
              </form>
            )}
          </div>

          {/* Widget 4: Discover Cambodia Promo Card */}
          <div className="relative rounded-sm overflow-hidden h-74 shadow-xs group">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
              alt="Discover Cambodia"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <span className="font-cinzel text-xs tracking-widest text-amber-300 font-bold block mb-1">
                DISCOVER CAMBODIA
              </span>
              <p className="text-[11px] text-slate-200 font-light mb-3">
                RICH CULTURE, BRIGHTER FUTURE
              </p>
              <Link
                href="/zh/category/cambodia"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-xs px-3 py-1.5 rounded-xs transition-colors"
              >
                <span>EXPLORE</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
