export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt?: string;
  metaDescription: string; // Added this field for consistent meta descriptions
  author?: string;
  featuredImage?: string | null;
}

export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}