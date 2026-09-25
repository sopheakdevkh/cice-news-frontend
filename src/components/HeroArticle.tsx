import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '@/components/Image';
import { Article } from '@/lib/data';
import { getArticlePath } from '@/lib/routes';

interface HeroArticleProps {
  hero: Article;
  subArticles: Article[];
  lang?: 'en' | 'zh';
}

export default function HeroArticle({ hero, subArticles, lang = 'en' }: HeroArticleProps) {
  const { t } = useTranslation();
  const isZh = lang === 'zh';
  const serifFontClass = isZh ? 'font-chinese-serif' : 'font-serif-heading';

  return (
    <section className="my-6">
      {/* Section Header: CAMBODIA with two-tone underline */}
      <div className="mb-6">
        <div className="inline-block">
          <h2 className={`${serifFontClass} text-xl sm:text-2xl font-bold text-[#0C195A] tracking-wider uppercase mb-2`}>
            {isZh ? '柬埔寨' : 'CAMBODIA'}
          </h2>
          <div className="w-full flex h-[3px]">
            <div className="w-[30%] bg-[#0C195A]" />
            <div className="w-[70%] bg-[#C6CAD9]" />
          </div>
        </div>
      </div>

      {/* Main Hero Card: Left Image + Right Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left: Featured Image */}
        <div className="lg:col-span-8 relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden group">
          <Link to={getArticlePath(hero.slug, lang)}>
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
        <div className="lg:col-span-4 flex flex-col justify-start pt-1">
          <div>
            <span className="inline-block text-xs font-bold text-[#0C195A] tracking-widest uppercase mb-2.5">
              {hero.category}
            </span>
            <Link to={getArticlePath(hero.slug, lang)} className="block group">
              <h1
                className={`${serifFontClass} text-xl sm:text-2xl lg:text-[25px] xl:text-[27px] font-bold text-[#0C195A] leading-[1.25] group-hover:text-sky-800 transition-colors mb-4 [text-wrap:balance]`}
              >
                {hero.title === "Cambodia's Capital Market Marks New Milestone" ? (
                  <>
                    <span className="block">Cambodia&apos;s Capital Market</span>
                    <span className="block">Marks New Milestone</span>
                  </>
                ) : (
                  hero.title
                )}
              </h1>
            </Link>
            <p
              className={`${serifFontClass} text-sm sm:text-[15px] text-slate-800 leading-relaxed font-normal mb-6`}
            >
              {hero.excerpt}
            </p>
          </div>

          <div>
            <Link
              to={getArticlePath(hero.slug, lang)}
              className={`inline-flex items-center gap-2.5 bg-[#0C195A] hover:bg-[#08103c] text-white px-7 py-3 text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-colors ${serifFontClass}`}
            >
              <span>{t('common.readMore')}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3-Column Sub-grid: Economy | Tourism | Education */}
      <div className="grid grid-cols-1 md:grid-cols-3 -mx-4 md:-mx-5 mt-6 pt-2">
        {subArticles.map((article, idx) => (
          <article
            key={article.id}
            className={`flex flex-col group px-4 md:px-5 border-[#C6CAD9] ${
              idx < subArticles.length - 1 ? 'md:border-r' : ''
            } mb-6 md:mb-0 pb-6 md:pb-0 border-b md:border-b-0 last:border-b-0 last:mb-0 last:pb-0`}
          >
            <Link
              to={getArticlePath(article.slug, lang)}
              className="relative h-44 w-full overflow-hidden mb-2.5 block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-104 transition-transform duration-300"
              />
            </Link>

            <span className="text-[11px] font-bold text-[#0C195A] tracking-wider uppercase mb-1">
              {article.category}
            </span>

            <Link to={getArticlePath(article.slug, lang)}>
              <h3 className={`${serifFontClass} text-sm sm:text-base font-bold text-[#0C195A] leading-snug line-clamp-2 group-hover:text-sky-800 transition-colors mb-2`}>
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
