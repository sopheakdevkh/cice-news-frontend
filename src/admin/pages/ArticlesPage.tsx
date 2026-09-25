import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { loadArticles, AdminArticle, deleteArticle, saveArticle } from '@/lib/dataStore';
import Image from '@/components/Image';
import {
  Search,
  PlusCircle,
  ExternalLink,
  Edit3,
  Trash2,
  Filter,
  CheckCircle,
  XCircle,
  RotateCcw,
} from 'lucide-react';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [search, setSearch] = useState('');
  const [selectedLang, setSelectedLang] = useState<'all' | 'en' | 'zh'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'published' | 'draft'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const refreshArticles = () => {
    setArticles(loadArticles());
  };

  useEffect(() => {
    refreshArticles();
    window.addEventListener('cice_articles_updated', refreshArticles);
    return () => window.removeEventListener('cice_articles_updated', refreshArticles);
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      // Language filter
      if (selectedLang !== 'all' && item.lang !== selectedLang) return false;
      // Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      // Search
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches =
          item.title.toLowerCase().includes(q) ||
          item.slug.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.excerpt && item.excerpt.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [articles, selectedLang, selectedStatus, selectedCategory, search]);

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteArticle(id);
    }
  };

  const handleToggleStatus = (item: AdminArticle) => {
    const newStatus = item.status === 'published' ? 'draft' : 'published';
    saveArticle({
      ...item,
      status: newStatus,
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-slate-900">
            Article Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Total {articles.length} news stories in repository ({filteredArticles.length} matching filters)
          </p>
        </div>
        <Link
          to="/admin/articles/new"
          className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Article</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search headline, slug, category..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>

          {/* Language Filter */}
          <div>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value as any)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer"
            >
              <option value="all">All Languages</option>
              <option value="en">English (EN)</option>
              <option value="zh">Chinese (中文)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-amber-500 cursor-pointer"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters helper if active */}
        {(search || selectedLang !== 'all' || selectedStatus !== 'all' || selectedCategory !== 'all') && (
          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
            <span className="text-slate-500">
              Showing {filteredArticles.length} filtered of {articles.length} total
            </span>
            <button
              onClick={() => {
                setSearch('');
                setSelectedLang('all');
                setSelectedStatus('all');
                setSelectedCategory('all');
              }}
              className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4">Article Headline</th>
                <th className="py-3 px-4">Language</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Publish Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    No articles found matching the current search criteria.
                  </td>
                </tr>
              ) : (
                filteredArticles.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-11 rounded-sm overflow-hidden relative shrink-0 border border-slate-200 bg-slate-100">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 max-w-md">
                          <Link
                            to={`/admin/articles/edit/${item.id}`}
                            className="font-bold text-slate-900 truncate block hover:text-sky-800 transition-colors"
                          >
                            {item.title}
                          </Link>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {item.lang === 'zh' ? `/zh/article/${item.slug}` : `/article/${item.slug}`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 font-bold rounded-xs text-[11px] ${
                          item.lang === 'zh'
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-blue-100 text-blue-900'
                        }`}
                      >
                        {item.lang === 'zh' ? '中文' : 'EN'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 font-medium rounded-xs text-[11px]">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleToggleStatus(item)}
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                          item.status === 'published'
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                        title="Click to toggle publish status"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.status === 'published' ? 'bg-emerald-500' : 'bg-slate-500'
                          }`}
                        />
                        {item.status === 'published' ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-slate-500 font-light whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Live reader preview */}
                        <Link
                          to={item.lang === 'zh' ? `/zh/article/${item.slug}` : `/article/${item.slug}`}
                          target="_blank"
                          className="p-1.5 text-slate-400 hover:text-sky-700 hover:bg-slate-100 rounded-sm transition-colors"
                          title="Preview Public Page"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        {/* Edit */}
                        <Link
                          to={`/admin/articles/edit/${item.id}`}
                          className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-slate-100 rounded-sm transition-colors"
                          title="Edit Article"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-100 rounded-sm transition-colors cursor-pointer"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
