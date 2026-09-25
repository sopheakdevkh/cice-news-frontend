import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  return {
    title: isZh
      ? 'CICE News - 柬埔寨国际通讯社 | 深度报道与权威洞见'
      : 'CICE News | Cambodia International Communication Echo',
    description: isZh
      ? '柬埔寨国际通讯社 (CICE News) 提供权威的柬埔寨、东盟及全球政治、经济、文旅资讯。'
      : 'CICE News delivers independent, insightful news and analysis on Cambodia, ASEAN, diplomacy, business, and cultural developments.',
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = lang === 'zh' ? 'zh' : 'en';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={validLang} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer lang={validLang} />
    </div>
  );

}
