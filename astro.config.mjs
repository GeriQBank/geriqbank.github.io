// @ts-check
import { defineConfig } from 'astro/config';

// ─── Where the site lives: edit these two lines ──────────────────────────────
// On GitHub Pages without your own domain:
//   SITE = 'https://YOUR-GITHUB-USERNAME.github.io'
//   BASE = '/YOUR-REPOSITORY-NAME'
// With your own domain (and a public/CNAME file):
//   SITE = 'https://yourdomain.in'
//   BASE = '/'
const SITE = 'https://sudarsandr36-del.github.io';
const BASE = '/silver-street';

export default defineConfig({
  site: SITE,
  base: BASE,
});
