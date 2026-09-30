// The sitemap for search engines: every page worth indexing, with answers
// dated by their last review. Question pages without an answer are left out,
// because they stay hidden from search until the answer exists.
import data, { PAPERS, questionPath, answerKey } from '../lib/qbank.js';
import { answers, essays, issues } from '../lib/content.js';
import { url } from '../lib/url.js';

const isoDate = (value) => {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? '')) ? String(value) : undefined;
};

export function GET({ site }) {
  const pages = [
    { path: '/' },
    { path: '/about/' },
    { path: '/essays/' },
    ...essays.map((e) => ({ path: `/essays/${e.slug}/`, lastmod: isoDate(e.frontmatter.date) })),
    { path: '/sunday-rounds/' },
    ...issues.map((i) => ({ path: `/sunday-rounds/${i.slug}/`, lastmod: isoDate(i.frontmatter.date) })),
    ...PAPERS.flatMap((p) =>
      data[p.key].questions
        .filter((q) => answers[answerKey(p.key, q.n)])
        .map((q) => ({
          path: questionPath(p.key, q.n),
          lastmod: isoDate(answers[answerKey(p.key, q.n)].frontmatter.lastReviewed),
        })),
    ),
  ];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...pages.map(({ path, lastmod }) =>
      `  <url><loc>${new URL(url(path), site).href}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`,
    ),
    '</urlset>',
  ].join('\n');
  return new Response(body + '\n', { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
