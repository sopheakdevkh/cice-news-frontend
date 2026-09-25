import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { detectLang } from '@/lib/routes';

export default function Layout() {
  const location = useLocation();
  const validLang = detectLang(location.pathname);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang);
    }
    const isZh = validLang === 'zh';
    if (location.pathname === '/' || location.pathname === '/zh' || location.pathname === '/zh/') {
      document.title = isZh
        ? 'CICE News - 柬埔寨国际通讯社 | 深度报道与权威洞见'
        : 'CICE News | Cambodia International Communication Echo';
    }
  }, [validLang, location.pathname, i18n]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={validLang} />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer lang={validLang} />
    </div>
  );
}
