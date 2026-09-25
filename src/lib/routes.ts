export type SupportedLang = 'en' | 'zh';

/**
 * Returns the localized URL path.
 * When lang is 'en' (default), paths do not contain /en prefix (e.g. /, /category/world, /article/xyz).
 * When lang is 'zh', paths are prefixed with /zh (e.g. /zh, /zh/category/world, /zh/article/xyz).
 */
export function getLocalizedPath(path: string, lang: SupportedLang = 'en'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'zh') {
    return normalized === '/' ? '/zh' : `/zh${normalized}`;
  }
  return normalized;
}

export function getHomePath(lang: SupportedLang = 'en'): string {
  return lang === 'zh' ? '/zh' : '/';
}

export function getArticlePath(slug: string, lang: SupportedLang = 'en'): string {
  return getLocalizedPath(`/article/${slug}`, lang);
}

export function getCategoryPath(slug: string, lang: SupportedLang = 'en'): string {
  if (!slug || slug === 'home') {
    return getHomePath(lang);
  }
  if (slug === 'chinese-news') {
    return '/zh';
  }
  return getLocalizedPath(`/category/${slug}`, lang);
}

export function getSearchPath(query?: string, lang: SupportedLang = 'en'): string {
  const base = getLocalizedPath('/search', lang);
  return query ? `${base}?q=${encodeURIComponent(query)}` : base;
}

export function detectLang(pathname: string): SupportedLang {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function getSwitchLanguageUrl(currentPath: string, targetLang: SupportedLang, search = ''): string {
  let targetPath = '/';
  if (targetLang === 'zh') {
    if (currentPath === '/zh' || currentPath.startsWith('/zh/')) {
      targetPath = currentPath;
    } else {
      targetPath = currentPath === '/' ? '/zh' : `/zh${currentPath}`;
    }
  } else {
    // targetLang === 'en'
    if (currentPath === '/zh' || currentPath === '/zh/') {
      targetPath = '/';
    } else if (currentPath.startsWith('/zh/')) {
      targetPath = currentPath.replace(/^\/zh/, '') || '/';
    } else {
      targetPath = currentPath.replace(/^\/en(\/|$)/, '/') || '/';
    }
  }
  return `${targetPath}${search}`;
}
