// Builds internal links that work both at a domain root and under a
// GitHub Pages sub-path such as /silver-street/.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/') {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return base + (path.startsWith('/') ? path : '/' + path);
}
