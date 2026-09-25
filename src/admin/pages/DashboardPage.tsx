import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadArticles, AdminArticle, deleteArticle } from '@/lib/dataStore';
import Image from '@/components/Image';
import {
  FileText,
  CheckCircle2,
  Clock,
  Eye,
  PlusCircle,
  TrendingUp,
  Globe,
  ExternalLink,
  Edit3,
  Trash2,
} from 'lucide-react';

export default function DashboardPage() {
  const [articles, setArticles] = useState<AdminArticle[]>([]);

  const refreshArticles = () => {
    setArticles(loadArticles());
  };

  useEffect(() => {
    refreshArticles();
    window.addEventListener('cice_articles_updated', refreshArticles);
    return () => window.removeEventListener('cice_articles_updated', refreshArticles);
  }, []);

  const total = articles.length;
  const published = articles.filter((a) => a.status === 'published').length;
  const drafts = total - published;
  const englishCount = articles.filter((a) => a.lang === 'en').length;
  const chineseCount = articles.filter((a) => a.lang === 'zh').length;

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteArticle(id);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-linear-to-r from-[#0A1640] via-[#0F2366] to-[#142D80] rounded-xl p-6 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
            Overview Dashboard
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-heading mt-1">
            Welcome to CICE News
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Manage articles, categories, advertising slots, and multilingual publications in real time.
          </p>
        </div>
        <Link
          to="/admin/articles/new"
          className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Article</span>
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Articles */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Total Articles</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{total}</p>
            <span className="text-[11px] text-emerald-600 font-semibold inline-flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> Live in portal
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        {/* Published */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Published</p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">{published}</p>
            <span className="text-[11px] text-slate-400 mt-1 block">Active on reader</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        {/* Drafts */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Drafts / Review</p>
            <p className="text-2xl font-bold text-amber-700 mt-1">{drafts}</p>
            <span className="text-[11px] text-slate-400 mt-1 block">Unpublished</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        {/* Language Ratio */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Language Feeds</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold text-slate-900">EN: {englishCount}</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-bold text-slate-900">ZH: {chineseCount}</span>
            </div>
            <span className="text-[11px] text-sky-600 mt-1 block font-medium">Bilingual Portal</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Articles Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-serif-heading">Recent News Stories</h3>
            <p className="text-xs text-slate-500 mt-0.5">Recently added or updated editorial articles</p>
          </div>
          <Link
            to="/admin/articles"
            className="text-xs text-sky-700 hover:text-sky-900 font-semibold transition-colors"
          >
            View all {total} articles →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4">Article</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Language</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {articles.slice(0, 7).map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 rounded-sm overflow-hidden relative shrink-0 border border-slate-200 bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 max-w-sm">
                        <p className="font-bold text-slate-900 truncate hover:text-sky-800 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">{item.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 font-medium rounded-xs text-[11px]">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-0.5 font-bold rounded-xs text-[11px] ${
                        item.lang === 'zh'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-blue-100 text-blue-900'
                      }`}
                    >
                      {item.lang === 'zh' ? '中文 (ZH)' : 'English (EN)'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.status === 'published'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'published' ? 'bg-emerald-500' : 'bg-slate-500'
                        }`}
                      />
                      {item.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 font-light whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      {/* View live in front-end */}
                      <Link
                        to={`/${item.lang}/article/${item.slug}`}
                        target="_blank"
                        className="p-1 text-slate-400 hover:text-sky-700 transition-colors"
                        title="Preview Public Page"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      {/* Edit */}
                      <Link
                        to={`/admin/articles/edit/${item.id}`}
                        className="p-1 text-slate-400 hover:text-amber-600 transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>
                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(item.id, item.title)}
                        className="p-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
