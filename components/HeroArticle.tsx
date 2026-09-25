import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/data';

interface HeroArticleProps {
  hero: Article;
  subArticles: Article[];
  lang?: 'en' | 'zh';
}

export default function HeroArticle({ hero, subArticles, lang = 'en' }: HeroArticleProps) {
  const isZh = lang === 'zh';

  return (
    <section className="my-6">
      {/* Section Header: CAMBODIA with two-tone underline matching user mockup (dark 30%, light 70%) */}
      <div className="mb-6">
        <div className="inline-block">
          <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#142249] tracking-wider uppercase mb-2">
            {isZh ? '柬埔寨' : 'CAMBODIA'}
          </h2>
          <div className="w-full flex h-[3px]">
            <div className="w-[30%] bg-[#142249]" />
            <div className="w-[70%] bg-[#C6CAD9]" />
          </div>
        </div>
      </div>

      {/* Main Hero Card: Left Image + Right Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left: Featured Image */}
        <div className="lg:col-span-8 relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden group">
          <Link href={`/${lang}/article/${hero.slug}`}>
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              priority
              className="object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </Link>
        </div>

        {/* Right: Article Details */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-1">
          <div>
            <span className="inline-block text-[11px] font-bold text-[#142249] tracking-widest uppercase mb-2">
              {hero.category}
            </span>
            <Link href={`/${lang}/article/${hero.slug}`}>
              <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#142249] leading-tight hover:text-sky-800 transition-colors mb-4">
                {hero.title}
              </h1>
            </Link>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light mb-6">
              {hero.excerpt}
            </p>
          </div>

          <div>
            <Link
              href={`/${lang}/article/${hero.slug}`}
              className="inline-flex items-center gap-2 bg-[#142249] hover:bg-[#0e1936] text-white px-6 py-2.5 text-xs font-semibold tracking-wider transition-colors"
            >
              <span>{isZh ? '阅读更多' : 'READ MORE'}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3-Column Sub-grid: Economy | Tourism | Education with gray solid borders between cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 -mx-4 md:-mx-5 mt-6 pt-2">
        {subArticles.map((article, idx) => (
          <article
            key={article.id}
            className={`flex flex-col group px-4 md:px-5 border-[#C6CAD9] ${
              idx < subArticles.length - 1 ? 'md:border-r' : ''
            } mb-6 md:mb-0 pb-6 md:pb-0 border-b md:border-b-0 last:border-b-0 last:mb-0 last:pb-0`}
          >
            <Link
              href={`/${lang}/article/${article.slug}`}
              className="relative h-44 w-full overflow-hidden mb-2.5 block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-104 transition-transform duration-300"
              />
            </Link>

            <span className="text-[11px] font-bold text-[#142249] tracking-wider uppercase mb-1">
              {article.category}
            </span>

            <Link href={`/${lang}/article/${article.slug}`}>
              <h3 className="font-serif-heading text-sm sm:text-base font-bold text-[#142249] leading-snug line-clamp-2 group-hover:text-sky-800 transition-colors mb-2">
                {article.title}
              </h3>
            </Link>

            <div className="mt-auto text-xs text-slate-400 font-light">{article.date}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
