import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getArticleById, saveArticle, AdminArticle } from '@/lib/dataStore';
import Image from '@/components/Image';
import {
  ArrowLeft,
  Save,
  CheckCircle,
  Eye,
  ImageIcon,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

const CATEGORY_PRESETS_EN = [
  'Cambodia',
  'World',
  'Business',
  'Diplomacy',
  'Insight',
  'Economy',
  'Tourism',
  'Education',
  'Technology',
];

const CATEGORY_PRESETS_ZH = [
  '柬埔寨',
  '国际',
  '商业',
  '外交',
  '观点',
  '中文新闻',
  '文旅',
  '科技',
];

export default function ArticleEditPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [category, setCategory] = useState('Cambodia');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [authorName, setAuthorName] = useState('CICE Editorial Desk');
  const [authorRole, setAuthorRole] = useState('Senior Correspondent');
  const [readTime, setReadTime] = useState('3 min read');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      const existing = getArticleById(id);
      if (existing) {
        setTitle(existing.title);
        setSlug(existing.slug);
        setLang(existing.lang);
        setCategory(existing.category);
        setStatus(existing.status);
        setExcerpt(existing.excerpt || '');
        setContent(existing.content || '');
        setImage(existing.image || '');
        if (existing.author) {
          setAuthorName(existing.author.name || 'CICE Editorial Desk');
          setAuthorRole(existing.author.role || 'Staff Reporter');
        }
        setReadTime(existing.readTime || '3 min read');
      }
    }
  }, [id]);

  // Auto-generate slug when title changes (if slug is empty or user is creating)
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing || !slug) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generated);
    }
  };

  const handleLangChange = (newLang: 'en' | 'zh') => {
    setLang(newLang);
    if (newLang === 'zh') {
      setCategory('柬埔寨');
    } else {
      setCategory('Cambodia');
    }
  };

  const handleSubmit = (targetStatus?: 'published' | 'draft') => {
    if (!title.trim()) {
      alert('Please provide an article headline.');
      return;
    }

    const finalStatus = targetStatus || status;
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

    const saved = saveArticle({
      id: id,
      title: title.trim(),
      slug: slug.trim() || `article-${Date.now()}`,
      lang,
      category,
      categorySlug,
      status: finalStatus,
      excerpt: excerpt.trim(),
      content: content.trim(),
      image: image.trim() || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
      author: {
        name: authorName.trim(),
        role: authorRole.trim(),
      },
      readTime: readTime.trim(),
    });

    setSavedSuccess(true);
    setTimeout(() => {
      navigate('/admin/articles');
    }, 600);
  };

  const activePresets = lang === 'zh' ? CATEGORY_PRESETS_ZH : CATEGORY_PRESETS_EN;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/articles"
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="text-xl font-bold font-serif-heading text-slate-900">
              {isEditing ? 'Edit Story' : 'Create New Story'}
            </h2>
            <p className="text-xs text-slate-500">
              {isEditing ? `Editing ID: ${id}` : 'Draft and publish a new story across CICE News portal'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleSubmit('draft')}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit('published')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer shadow-xs"
          >
            <Save className="w-4 h-4" />
            <span>{savedSuccess ? 'Saved!' : 'Publish Story'}</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 animate-slide-up">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Story has been saved successfully! Redirecting to article manager...</span>
        </div>
      )}

      {/* Editor Grid: 8 Cols Main Content + 4 Cols Meta & Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Title, Excerpt, Body */}
        <div className="lg:col-span-8 space-y-5">
          {/* Title & Slug */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                Article Headline *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder={lang === 'zh' ? '输入新闻标题...' : 'Enter article headline...'}
                className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                URL Slug (Perm-link)
              </label>
              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-500">
                <span className="text-slate-400 select-none">/{lang}/article/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="article-slug"
                  className="w-full bg-transparent text-slate-800 font-mono text-xs focus:outline-hidden px-1"
                />
              </div>
            </div>
          </div>

          {/* Excerpt Lead */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
            <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
              Summary / Excerpt Lead
            </label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Provide a concise 1-2 sentence lead highlighting key developments..."
              className="w-full p-3 bg-slate-50/70 border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:bg-white"
            />
          </div>

          {/* Article Full Body */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
            <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
              Full Article Body
            </label>
            <p className="text-[11px] text-slate-400 mb-2">
              Separate paragraphs with a blank line. Content will format automatically for high readability.
            </p>
            <textarea
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the full news story here..."
              className="w-full p-3.5 bg-slate-50/70 border border-slate-200 rounded-lg text-xs leading-relaxed font-serif-heading text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:bg-white"
            />
          </div>
        </div>

        {/* Right Column: Publishing Controls, Category, Image */}
        <div className="lg:col-span-4 space-y-5">
          {/* Publication Metadata */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Publishing Settings
            </h3>

            {/* Language */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Target Language
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleLangChange('en')}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange('zh')}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    lang === 'zh'
                      ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  中文 (ZH)
                </button>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
              >
                {activePresets.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Estimated Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="3 min read"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
              />
            </div>
          </div>

          {/* Author Details */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Author / Byline
            </h3>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Editorial Role
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Featured Image
            </h3>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
              />
            </div>

            {/* Image Preview Box */}
            <div className="relative h-36 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
              {image ? (
                <Image
                  src={image}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-center text-slate-400 text-xs">
                  <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-50" />
                  <span>No image specified</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
