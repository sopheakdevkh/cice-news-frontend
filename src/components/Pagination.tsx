import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PaginationProps {
  totalPages?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  lang?: 'en' | 'zh';
  className?: string;
}

export default function Pagination({
  totalPages = 5,
  initialPage = 1,
  onPageChange,
  lang = 'en',
  className = '',
}: PaginationProps) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const isZh = lang === 'zh';

  const handlePage = (num: number) => {
    setCurrentPage(num);
    if (onPageChange) onPageChange(num);
  };

  return (
    <div
      className={`w-full pt-8 pb-4 flex items-center justify-center gap-1.5 select-none ${className}`}
    >
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => handlePage(num)}
          className={`w-7 h-7 text-xs font-medium transition-all flex items-center justify-center cursor-pointer ${
            currentPage === num
              ? 'bg-[#0C195A] text-white shadow-xs'
              : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
          aria-label={`Page ${num}`}
        >
          {num}
        </button>
      ))}

      <span className="text-slate-400 text-xs px-1">...</span>

      <button
        onClick={() => handlePage(Math.min(totalPages, currentPage + 1))}
        className="px-3 h-7 border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1 transition-colors cursor-pointer"
        aria-label="Next Page"
      >
        <span>{t('common.next')}</span>
        <span>→</span>
      </button>
    </div>
  );
}
