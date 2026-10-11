// Place at: app/sitemap.js
export default function sitemap() {
  const base = 'https://vvlearninghouse.in';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];
}