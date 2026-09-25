import React, { useState } from 'react';
import { CATEGORIES_EN, CATEGORIES_ZH } from '@/lib/data';
import { loadArticles } from '@/lib/dataStore';
import { FolderTree, Plus, Tag, Check, Globe } from 'lucide-react';

export default function CategoriesPage() {
  const articles = loadArticles();
  const [categoriesEn, setCategoriesEn] = useState(CATEGORIES_EN);
  const [categoriesZh, setCategoriesZh] = useState(CATEGORIES_ZH);
  const [newCatName, setNewCatName] = useState('');
  const [newCatSlug, setNewCatSlug] = useState('');
  const [newCatLang, setNewCatLang] = useState<'en' | 'zh'>('en');

  const getArticleCountForCategory = (slug: string, lang: 'en' | 'zh') => {
    return articles.filter(
      (a) =>
        a.lang === lang &&
        (a.categorySlug === slug || a.category.toLowerCase().includes(slug))
    ).length;
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const slug =
      newCatSlug.trim() ||
      newCatName
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-');

    if (newCatLang === 'en') {
      setCategoriesEn([...categoriesEn, { name: newCatName.trim(), slug }]);
    } else {
      setCategoriesZh([...categoriesZh, { name: newCatName.trim(), slug }]);
    }

    setNewCatName('');
    setNewCatSlug('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-slate-900">
          News Categories Management
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Organize taxonomy, navigation topics, and localized desk categories.
        </p>
      </div>

      {/* Add Category Card */}
      <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Plus className="w-4 h-4 text-amber-500" />
          <span>Add New Category</span>
        </h3>
        <form onSubmit={handleAddCategory} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Category Name *
            </label>
            <input
              type="text"
              required
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              placeholder="e.g. Technology / 科技创新"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              URL Slug
            </label>
            <input
              type="text"
              value={newCatSlug}
              onChange={(e) => setNewCatSlug(e.target.value)}
              placeholder="e.g. technology"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Portal Language
            </label>
            <select
              value={newCatLang}
              onChange={(e) => setNewCatLang(e.target.value as any)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
            >
              <option value="en">English Portal (EN)</option>
              <option value="zh">Chinese Portal (中文)</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>

      {/* Categories Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* English Categories */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="p-4 bg-blue-50/60 border-b border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-700" />
              <h3 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                English Portal Topics ({categoriesEn.length})
              </h3>
            </div>
          </div>
          <div className="divide-y divide-slate-100 text-xs">
            {categoriesEn.map((cat, idx) => (
              <div key={idx} className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <div>
                    <span className="font-bold text-slate-900 block">{cat.name}</span>
                    <span className="text-[11px] font-mono text-slate-400">/{cat.slug || 'home'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-medium">
                    {getArticleCountForCategory(cat.slug, 'en')} stories
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active in navigation" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chinese Categories */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="p-4 bg-amber-50/60 border-b border-amber-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-700" />
              <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                中文版专题分类 ({categoriesZh.length})
              </h3>
            </div>
          </div>
          <div className="divide-y divide-slate-100 text-xs">
            {categoriesZh.map((cat, idx) => (
              <div key={idx} className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <div>
                    <span className="font-bold text-slate-900 font-chinese-serif block">{cat.name}</span>
                    <span className="text-[11px] font-mono text-slate-400">/{cat.slug || 'home'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-medium">
                    {getArticleCountForCategory(cat.slug, 'zh')} stories
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active in navigation" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
