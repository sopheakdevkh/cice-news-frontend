import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import { Article } from '@/lib/data';

interface CategoryListProps {
  variant?: 'showcase' | 'feed';
  articles: Article[];
  lang?: 'en' | 'zh';
  categoryTitle?: string;
  categorySlug?: string;
  showPagination?: boolean;
}

export default function CategoryList({
  variant = 'showcase',
  articles,
  lang = 'en',
  categoryTitle,
  categorySlug,
  showPagination = false,
}: CategoryListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const isZh = lang === 'zh';

  // 4-Column Category Showcase (Homepage)
  if (variant === 'showcase') {
    return (
      <section className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-4 lg:-mx-5">
          {articles.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col group px-4 lg:px-5 border-[#C6CAD9] ${
                idx < articles.length - 1 ? 'lg:border-r' : ''
              } ${
                idx % 2 === 0 ? 'sm:border-r lg:border-r' : 'sm:border-r-0 lg:border-r'
              } ${
                idx === articles.length - 1 ? 'sm:border-r-0 lg:border-r-0' : ''
              } mb-6 lg:mb-0 pb-6 lg:pb-0 border-b lg:border-b-0 last:border-b-0 last:mb-0 last:pb-0`}
            >
              {/* Category Header with bold bar */}
              <div className="mb-3">
                <div className="flex items-end">
                  <div className="inline-block">
                    <Link
                      to={`/${lang}/category/${item.categorySlug}`}
                      className="font-serif-heading text-sm font-bold tracking-wider text-[#142249] hover:text-sky-800 transition-colors uppercase block pb-1.5"
                    >
                      {item.category}
                    </Link>
                    <div className="w-full h-[3px] bg-[#142249]" />
                  </div>
                  <div className="flex-1 h-[3px] bg-[#C6CAD9]" />
                </div>
              </div>

              {/* Card Image */}
              <Link
                to={`/${lang}/article/${item.slug}`}
                className="relative h-40 w-full overflow-hidden mb-2.5 block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-104 transition-transform duration-300"
                />
              </Link>

              {/* Card Title */}
              <Link to={`/${lang}/article/${item.slug}`}>
                <h3 className="font-serif-heading text-sm font-bold text-[#142249] leading-snug line-clamp-3 group-hover:text-sky-800 transition-colors mb-2">
                  {item.title}
                </h3>
              </Link>

              {/* Date */}
              <div className="mt-auto text-xs text-slate-400 font-light">{item.date}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 2-Column Category Feed (Category Page)
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col sm:flex-row gap-5 md:gap-6 group"
          >
            {/* Article Thumbnail */}
            <Link
              to={`/${lang}/article/${article.slug}`}
              className="relative h-52 sm:h-44 md:h-48 sm:w-72 md:w-80 shrink-0 overflow-hidden block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-104 transition-transform duration-300"
              />
            </Link>

            {/* Article Info: Title + Date */}
            <div className="flex flex-col justify-start flex-1 pt-1">
              <Link to={`/${lang}/article/${article.slug}`}>
                <h2 className="font-serif-heading text-base sm:text-lg md:text-xl font-bold text-[#142249] leading-snug group-hover:text-sky-700 transition-colors mb-2.5">
                  {article.title}
                </h2>
              </Link>
              <span className="text-xs text-slate-400 font-light">
                {article.date}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Optional Pagination if enabled */}
      {showPagination && (
        <div className="pt-8 flex items-center justify-center gap-1.5 select-none">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-7 h-7 text-xs font-medium transition-all flex items-center justify-center cursor-pointer ${
                currentPage === num
                  ? 'bg-[#0C195A] text-white'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {num}
            </button>
          ))}

          <span className="text-slate-400 text-xs px-1">...</span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="px-3 h-7 border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{isZh ? '下一页' : 'Next'}</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
