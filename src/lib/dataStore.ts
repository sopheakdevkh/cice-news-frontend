import {
  HERO_ARTICLE_EN,
  SUB_GRID_ARTICLES_EN,
  SHOWCASE_ARTICLES_EN,
  CHINESE_HERO_ARTICLE,
  CHINESE_TOP_NEWS,
  CHINESE_PREVIEW_ARTICLES,
  CATEGORY_ARTICLES_MAP,
  Article,
} from './data';

const STORAGE_KEY = 'cice_articles_store_v1';

export interface AdminArticle extends Article {
  status: 'published' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}

// Combine all initial articles into a single source of truth
function getInitialArticles(): AdminArticle[] {
  const initial: AdminArticle[] = [
    { ...HERO_ARTICLE_EN, status: 'published' },
    ...SUB_GRID_ARTICLES_EN.map((a) => ({ ...a, status: 'published' as const })),
    ...SHOWCASE_ARTICLES_EN.map((a) => ({ ...a, status: 'published' as const })),
    { ...CHINESE_HERO_ARTICLE, status: 'published' },
    ...CHINESE_TOP_NEWS.map((a) => ({ ...a, status: 'published' as const })),
    ...CHINESE_PREVIEW_ARTICLES.map((a) => ({ ...a, status: 'published' as const })),
  ];

  // Also include category map articles if not already present
  Object.values(CATEGORY_ARTICLES_MAP).forEach((list) => {
    list.forEach((art) => {
      if (!initial.some((item) => item.slug === art.slug)) {
        initial.push({ ...art, status: 'published' });
      }
    });
  });

  return initial;
}

export function loadArticles(): AdminArticle[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialArticles();
      saveAllArticles(initial);
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load articles from storage:', err);
    return getInitialArticles();
  }
}

export function saveAllArticles(articles: AdminArticle[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    // Dispatch custom event so open views can update synchronously
    window.dispatchEvent(new Event('cice_articles_updated'));
  } catch (err) {
    console.error('Failed to save articles to storage:', err);
  }
}

export function getArticleById(id: string): AdminArticle | undefined {
  const articles = loadArticles();
  return articles.find((a) => a.id === id);
}

export function getArticleBySlugFromStore(slug: string): AdminArticle | undefined {
  const articles = loadArticles();
  return articles.find((a) => a.slug === slug);
}

export function saveArticle(article: Partial<AdminArticle> & { title: string; category: string; lang: 'en' | 'zh' }): AdminArticle {
  const articles = loadArticles();
  const now = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (article.id) {
    // Update existing
    const index = articles.findIndex((a) => a.id === article.id);
    if (index !== -1) {
      const updated: AdminArticle = {
        ...articles[index],
        ...article,
        updatedAt: now,
      } as AdminArticle;
      articles[index] = updated;
      saveAllArticles(articles);
      return updated;
    }
  }

  // Create new
  const slug =
    article.slug ||
    article.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '') ||
    `article-${Date.now()}`;

  const newArticle: AdminArticle = {
    id: article.id || `art-${Date.now()}`,
    slug,
    lang: article.lang,
    title: article.title,
    category: article.category,
    categorySlug: article.categorySlug || article.category.toLowerCase().replace(/\s+/g, '-'),
    date: article.date || now,
    image: article.image || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    excerpt: article.excerpt || '',
    content: article.content || '',
    author: article.author || { name: 'Editorial Desk', role: 'Staff Reporter' },
    readTime: article.readTime || '3 min read',
    status: article.status || 'published',
    createdAt: now,
    updatedAt: now,
  };

  articles.unshift(newArticle);
  saveAllArticles(articles);
  return newArticle;
}

export function deleteArticle(id: string): boolean {
  const articles = loadArticles();
  const filtered = articles.filter((a) => a.id !== id);
  if (filtered.length !== articles.length) {
    saveAllArticles(filtered);
    return true;
  }
  return false;
}

export function resetArticlesToDefaults(): void {
  const initial = getInitialArticles();
  saveAllArticles(initial);
}
