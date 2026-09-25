import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '@/components/Image';
import { Search, Menu, X as CloseIcon } from 'lucide-react';
import {
  LinkedInIcon,
  FacebookIcon,
  XIcon,
  YoutubeIcon,
  InstagramIcon,
} from '@/components/SocialIcons';
import { CATEGORIES_EN, CATEGORIES_ZH } from '@/lib/data';
import {
  getHomePath,
  getCategoryPath,
  getSearchPath,
  getSwitchLanguageUrl,
} from '@/lib/routes';

interface HeaderProps {
  lang: 'en' | 'zh';
}

export default function Header({ lang }: HeaderProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const rawCategories = lang === 'zh' ? CATEGORIES_ZH : CATEGORIES_EN;
  const hasHome = rawCategories.some((cat) => cat.slug === '' || cat.slug === 'home');
  const categories = hasHome
    ? rawCategories
    : [{ name: lang === 'zh' ? '首页' : 'Home', slug: '' }, ...rawCategories];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(getSearchPath(searchQuery.trim(), lang));
  };

  return (
    <header className="w-full bg-[#0C195A] text-white select-none">
      {/* Top Section: Socials (top-left) | Logo (center) | Search (top-right) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-3">
        {/* Left: 5 Social Media Icons at the top */}
        <div className="sm:absolute sm:left-4 lg:left-8 sm:top-3.5 flex items-center gap-3.5 text-white z-10 mb-2 sm:mb-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4 fill-white" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4 fill-white" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="X (Twitter)"
          >
            <XIcon className="w-4 h-4 fill-white" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-4 h-4 fill-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4 fill-white" />
          </a>
        </div>

        {/* Center: CICE News Logo */}
        <div className="flex flex-col items-center justify-center text-center">
          <Link to={getHomePath(lang)} className="inline-flex flex-col items-center group">
            <div className="relative h-14 sm:h-16 md:h-20 w-48 sm:w-60 md:w-72">
              <Image
                src="/cice-news-logo.webp"
                alt="CICE News"
                fill
                priority
                className="object-contain drop-shadow-sm group-hover:scale-102 transition-transform duration-300"
              />
            </div>
          </Link>
        </div>

        {/* Right: Search Box & Language Toggle at the top */}
        <div className="sm:absolute sm:right-4 lg:right-8 sm:top-3.5 flex items-center gap-3 md:gap-4 z-10 justify-end mt-2 sm:mt-0">
          <form
            onSubmit={handleSearch}
            className="relative hidden sm:flex items-center rounded-xs overflow-hidden bg-white shadow-xs border border-white/20"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('common.searchPlaceholder')}
              className="bg-white text-slate-800 text-xs px-3 py-1.5 w-32 md:w-44 focus:outline-hidden"
            />
            <button
              type="submit"
              aria-label={t('common.search')}
              className="bg-[#0C195A] text-white px-3 py-1.5 flex items-center justify-center hover:bg-[#08103c] transition-colors border-l border-slate-200 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Desktop Language Toggle: EN | 中文 */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-wide ml-1">
            <Link
              to={getSwitchLanguageUrl(pathname, 'en', location.search)}
              className={`relative py-0.5 transition-colors ${
                lang === 'en'
                  ? 'text-white font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              EN
              {lang === 'en' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-400" />
              )}
            </Link>
            <span className="text-white/40 text-xs font-light select-none">|</span>
            <Link
              to={getSwitchLanguageUrl(pathname, 'zh', location.search)}
              className={`relative py-0.5 transition-colors font-chinese-serif ${
                lang === 'zh'
                  ? 'text-white font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              中文
              {lang === 'zh' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-400" />
              )}
            </Link>
          </div>

          {/* Mobile Language Toggle */}
          <div className="flex sm:hidden items-center gap-1.5 text-xs font-semibold mr-1">
            <Link
              to={getSwitchLanguageUrl(pathname, 'en', location.search)}
              className={`relative px-1 py-0.5 ${
                lang === 'en' ? 'text-white font-bold' : 'text-white/70'
              }`}
            >
              EN
              {lang === 'en' && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-amber-400" />
              )}
            </Link>
            <span className="text-white/40 text-xs">|</span>
            <Link
              to={getSwitchLanguageUrl(pathname, 'zh', location.search)}
              className={`relative px-1 py-0.5 font-chinese-serif ${
                lang === 'zh' ? 'text-white font-bold' : 'text-white/70'
              }`}
            >
              中文
              {lang === 'zh' && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-amber-400" />
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 p-1 focus:outline-hidden cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Thin Horizontal Divider Line spanning across */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full border-t border-white/25" />
      </div>

      {/* Category Navigation Bar */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="hidden md:flex items-center justify-center space-x-8 lg:space-x-14 text-sm font-normal">
            {categories.map((cat) => {
              if ('isLangSwitch' in cat && (cat as any).isLangSwitch) {
                const targetLang = lang === 'zh' ? 'en' : 'zh';
                return (
                  <li key="lang-switch" className="py-2.5">
                    <Link
                      to={getSwitchLanguageUrl(pathname, targetLang, location.search)}
                      className="text-white hover:text-amber-300 transition-colors font-chinese-serif"
                    >
                      {cat.name}
                    </Link>
                  </li>
                );
              }

              const isHome = cat.slug === '' || cat.slug === 'home';
              const isChineseNews = cat.slug === 'chinese-news';
              const to = getCategoryPath(cat.slug, lang);

              const isActive =
                lang === 'zh'
                  ? isChineseNews
                    ? pathname === '/zh' || pathname === '/zh/' || pathname?.startsWith('/zh/category/chinese-news')
                    : isHome
                    ? pathname === '/zh' || pathname === '/zh/'
                    : pathname?.startsWith(`/zh/category/${cat.slug}`)
                  : isHome
                  ? pathname === '/'
                  : pathname?.startsWith(`/category/${cat.slug}`);

              return (
                <li key={cat.slug || 'home'} className="relative py-2.5">
                  <Link
                    to={to}
                    className={`transition-colors duration-200 hover:text-amber-300 block ${
                      isActive ? 'text-white font-medium' : 'text-white/90'
                    }`}
                  >
                    {cat.name}
                  </Link>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-amber-400" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Collapsible Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 space-y-2">
              <form onSubmit={handleSearch} className="mb-3 px-2">
                <div className="flex border border-white/20 rounded-xs overflow-hidden bg-white">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('common.searchPlaceholder')}
                    className="w-full text-slate-800 text-xs px-3 py-1.5 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    aria-label={t('common.search')}
                    className="bg-[#0C195A] text-white px-3 py-1.5 cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Mobile Drawer Language Toggle */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
                <span className="text-xs text-white/60">{t('common.language')}</span>
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <Link
                    to={getSwitchLanguageUrl(pathname, 'en', location.search)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative py-0.5 ${
                      lang === 'en' ? 'text-amber-400 font-bold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    EN
                    {lang === 'en' && <span className="block h-[2px] bg-amber-400 mt-0.5" />}
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    to={getSwitchLanguageUrl(pathname, 'zh', location.search)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative py-0.5 font-chinese-serif ${
                      lang === 'zh' ? 'text-amber-400 font-bold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    中文
                    {lang === 'zh' && <span className="block h-[2px] bg-amber-400 mt-0.5" />}
                  </Link>
                </div>
              </div>
              {categories.map((cat) => {
                const isHome = cat.slug === '' || cat.slug === 'home';
                const isChineseNews = cat.slug === 'chinese-news';
                const targetLang = lang === 'zh' ? 'en' : 'zh';

                const to =
                  'isLangSwitch' in cat && (cat as any).isLangSwitch
                    ? getSwitchLanguageUrl(pathname, targetLang, location.search)
                    : getCategoryPath(cat.slug, lang);

                const isActive =
                  lang === 'zh'
                    ? isChineseNews
                      ? pathname === '/zh' || pathname === '/zh/' || pathname?.startsWith('/zh/category/chinese-news')
                      : isHome
                      ? pathname === '/zh' || pathname === '/zh/'
                      : pathname?.startsWith(`/zh/category/${cat.slug}`)
                    : isHome
                    ? pathname === '/'
                    : pathname?.startsWith(`/category/${cat.slug}`);

                return (
                  <Link
                    key={cat.slug || 'home'}
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-1.5 text-sm rounded-xs transition-colors ${
                      isActive
                        ? 'bg-white/15 text-amber-300 font-medium'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
