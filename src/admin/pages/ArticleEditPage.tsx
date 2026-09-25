import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  Bold,
  Italic,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  RefreshCw,
  Clock,
  User,
  FileText,
  Globe,
  Search,
  Check,
  Calendar,
  Layers
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

const CURATED_NEWS_IMAGES = [
  {
    name: 'Phnom Penh Skyline',
    url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'ASEAN & Bilateral Trade',
    url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Diplomatic Summit',
    url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'High-Tech & Logistics',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cambodian Heritage',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ArticleEditPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

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
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [autoSlug, setAutoSlug] = useState(true);

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
        setAutoSlug(false);
      }
    }
  }, [id]);

  // Dynamic Word Count and Reading Time calculation
  const wordCount = useMemo(() => {
    const text = (title + ' ' + excerpt + ' ' + content).trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  }, [title, excerpt, content]);

  useEffect(() => {
    if (wordCount > 0) {
      const calculated = Math.max(1, Math.ceil(wordCount / 180));
      setReadTime(`${calculated} min read`);
    }
  }, [wordCount]);

  // Slug generator
  const generateSlugFromTitle = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (autoSlug || !slug) {
      setSlug(generateSlugFromTitle(val));
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

  // Quick formatting toolbar action
  const insertFormatting = (prefix: string, suffix: string = '') => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const previousContent = content;
    const selectedText = previousContent.substring(start, end) || 'text';

    const newContent =
      previousContent.substring(0, start) +
      prefix +
      selectedText +
      suffix +
      previousContent.substring(end);

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length
      );
    }, 0);
  };

  const handleSubmit = (targetStatus?: 'published' | 'draft') => {
    if (!title.trim()) {
      alert('Please provide an article headline.');
      setActiveTab('editor');
      return;
    }

    const finalStatus = targetStatus || status;
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

    saveArticle({
      id: id,
      title: title.trim(),
      slug: slug.trim() || `article-${Date.now()}`,
      lang,
      category,
      categorySlug,
      status: finalStatus,
      excerpt: excerpt.trim(),
      content: content.trim(),
      image: image.trim() || CURATED_NEWS_IMAGES[0].url,
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
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Sticky Top Header Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-20">
        <div className="flex items-center gap-3.5">
          <Link
            to="/admin/articles"
            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Return to Articles List"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900">
                {isEditing ? 'Edit Story' : 'New Article'}
              </h1>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  status === 'published'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {status}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
              <span>{wordCount} words</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {readTime}
              </span>
            </p>
          </div>
        </div>

        {/* Tab Toggle & Actions */}
        <div className="flex items-center gap-3">
          {/* Write / Preview Tab Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'editor'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Write</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSubmit('draft')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={() => handleSubmit('published')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <Save className="w-4 h-4" />
              <span>{savedSuccess ? 'Saved!' : isEditing ? 'Update Story' : 'Publish Story'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success Notification Alert */}
      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center gap-2.5 animate-slide-up shadow-2xs">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Story has been recorded successfully. Redirecting to management repository...</span>
        </div>
      )}

      {/* VIEW: LIVE PREVIEW MODE */}
      {activeTab === 'preview' ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 max-w-4xl mx-auto space-y-6">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#0C195A] text-white text-[11px] font-bold rounded-md uppercase tracking-wider">
                {category}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'zh' ? '中文版预览' : 'English Edition'}
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">{readTime}</span>
          </div>

          {/* Preview Headline */}
          <h1 className="text-2xl sm:text-4xl font-bold font-serif-heading text-[#0C195A] leading-tight">
            {title || 'Untitled News Headline'}
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-3 py-2 border-y border-slate-100 text-xs text-slate-500">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">
              {authorName.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-slate-800">{authorName}</p>
              <p className="text-[11px] text-slate-400">{authorRole} • {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>

          {/* Hero Image */}
          {image && (
            <div className="rounded-xl overflow-hidden border border-slate-200 relative aspect-16/9 bg-slate-100">
              <Image src={image} alt="Preview" fill className="object-cover" />
            </div>
          )}

          {/* Excerpt Lead */}
          {excerpt && (
            <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed italic border-l-4 border-amber-400 pl-4 py-1">
              {excerpt}
            </p>
          )}

          {/* Body */}
          <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed font-serif-heading text-sm sm:text-base space-y-4">
            {content ? (
              content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p className="text-slate-400 italic">No article body has been entered yet.</p>
            )}
          </div>
        </div>
      ) : (
        /* VIEW: EDITOR WRITE MODE */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Column (8 Cols): Writing Canvas */}
          <div className="lg:col-span-8 space-y-5">
            {/* Title & Slug Box */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Article Headline <span className="text-red-500">*</span>
                  </label>
                  <span className={`text-[11px] font-mono ${title.length > 90 ? 'text-amber-600' : 'text-slate-400'}`}>
                    {title.length} chars
                  </span>
                </div>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder={lang === 'zh' ? '输入新闻标题...' : 'Enter a clear, authoritative news headline...'}
                  className="w-full px-4 py-3 bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-base font-bold font-serif-heading text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0C195A]/15 focus:border-[#0C195A] transition-all"
                />
              </div>

              {/* Slug / Perm-link */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-semibold text-slate-600">
                    URL Perm-link
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setSlug(generateSlugFromTitle(title));
                      setAutoSlug(true);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] text-[#0C195A] hover:underline cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Regenerate from Title</span>
                  </button>
                </div>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs text-slate-500">
                  <span className="text-slate-400 select-none font-mono">
                    {lang === 'zh' ? '/zh/article/' : '/article/'}
                  </span>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => {
                      setSlug(e.target.value);
                      setAutoSlug(false);
                    }}
                    placeholder="headline-slug"
                    className="w-full bg-transparent text-slate-800 font-mono text-xs focus:outline-hidden px-1"
                  />
                </div>
              </div>
            </div>

            {/* Excerpt Lead Summary */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Summary / Excerpt Lead
                </label>
                <span className="text-[11px] text-slate-400 font-mono">
                  {excerpt.length}/250 chars
                </span>
              </div>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A compelling 1-2 sentence lead summarizing key insights for article cards and search snippets..."
                className="w-full p-3.5 bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm leading-relaxed text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0C195A]/15 focus:border-[#0C195A] transition-all"
              />
            </div>

            {/* Article Body with Editorial Toolbar */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Story Body
                </label>

                {/* Quick Markdown / Text Formatting Toolbar */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => insertFormatting('**', '**')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Bold (**text**)"
                  >
                    <Bold className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('*', '*')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Italic (*text*)"
                  >
                    <Italic className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-px h-4 bg-slate-200 mx-0.5" />
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n## ', '\n')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Heading 2"
                  >
                    <Heading2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n### ', '\n')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Heading 3"
                  >
                    <Heading3 className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-px h-4 bg-slate-200 mx-0.5" />
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n> ', '\n')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Quote"
                  >
                    <Quote className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n- ', '\n')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Bullet list"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n1. ', '\n')}
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    title="Numbered list"
                  >
                    <ListOrdered className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <textarea
                  ref={contentTextareaRef}
                  rows={14}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write the full journalistic story here. Separate paragraphs with an empty line..."
                  className="w-full p-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl text-sm leading-relaxed font-serif-heading text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0C195A]/15 focus:border-[#0C195A] transition-all resize-y"
                />
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                  <span>Standard editorial markdown supported</span>
                  <span>{content.length} characters</span>
                </div>
              </div>
            </div>

            {/* Google Search Snippet Preview */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span>Search Engine Preview (SEO)</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 max-w-xl">
                <p className="text-xs text-emerald-800 font-mono truncate">
                  https://cice.news{lang === 'zh' ? '/zh' : ''}/article/{slug || 'headline-slug'}
                </p>
                <h3 className="text-sm font-semibold text-blue-800 hover:underline cursor-pointer truncate mt-0.5">
                  {title || 'Article Headline - CICE News'}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                  {excerpt || 'Story summary and excerpt lead will appear here as the meta description for search engines.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 Cols): Settings, Media & Author */}
          <div className="lg:col-span-4 space-y-5">
            {/* Publishing Settings Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <Layers className="w-4 h-4 text-[#0C195A]" />
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Publishing Settings
                </h3>
              </div>

              {/* Language Selection Toggle */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Target Edition
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleLangChange('en')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      lang === 'en'
                        ? 'bg-[#0C195A] text-white border-[#0C195A] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>English (EN)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLangChange('zh')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      lang === 'zh'
                        ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>中文 (ZH)</span>
                  </button>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Primary Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full py-2.5 px-3.5 bg-slate-50 hover:bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0C195A]/15 focus:border-[#0C195A] cursor-pointer"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Workflow Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full py-2.5 px-3.5 bg-slate-50 hover:bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0C195A]/15 focus:border-[#0C195A] cursor-pointer"
                >
                  <option value="published">Published (Live immediately)</option>
                  <option value="draft">Draft (Saved to newsroom)</option>
                </select>
              </div>

              {/* Estimated Read Time */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Reading Time
                </label>
                <div className="relative rounded-xl">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="3 min read"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Featured Image Card with 1-Click Editorial Presets */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <ImageIcon className="w-4 h-4 text-[#0C195A]" />
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Featured Media
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Image Source URL
                </label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0C195A]/15 focus:border-[#0C195A]"
                />
              </div>

              {/* Live Preview Box */}
              <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center shadow-2xs">
                {image ? (
                  <Image
                    src={image}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center text-slate-400 text-xs p-4">
                    <ImageIcon className="w-7 h-7 mx-auto mb-1 opacity-40" />
                    <span>No image set. Choose a preset below or paste a URL.</span>
                  </div>
                )}
              </div>

              {/* Curated 1-Click Editorial Image Presets */}
              <div>
                <span className="block text-[11px] font-semibold text-slate-500 mb-1.5">
                  Quick Royalty-Free Presets
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {CURATED_NEWS_IMAGES.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setImage(preset.url)}
                      className={`text-left text-xs px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-between ${
                        image === preset.url
                          ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate">{preset.name}</span>
                      {image === preset.url && <Check className="w-3 h-3 text-amber-600 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Byline Details */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <User className="w-4 h-4 text-[#0C195A]" />
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Author Byline
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Correspondent Name
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Editorial Designation
                </label>
                <input
                  type="text"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
