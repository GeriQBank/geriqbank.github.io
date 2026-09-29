// @ts-check
import { defineConfig } from 'astro/config';

// ─── Where the site lives ─────────────────────────────────────────────────────
// With your own domain, put it here and add a public/CNAME file containing it:
const CUSTOM_DOMAIN = ''; // for example 'silverstreetmd.in'

// Otherwise the address comes from the GitHub repository the site is built
// from, so moving or renaming the repository needs no change here:
//   owner/silver-street      → https://owner.github.io/silver-street/
//   owner/owner.github.io    → https://owner.github.io/
const [owner, repo] = (process.env.GITHUB_REPOSITORY || 'silverstreetmd/silverstreetmd.github.io').split('/');
const rootSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const SITE = CUSTOM_DOMAIN ? `https://${CUSTOM_DOMAIN}` : `https://${owner.toLowerCase()}.github.io`;
const BASE = CUSTOM_DOMAIN || rootSite ? '/' : `/${repo}`;

export default defineConfig({
  site: SITE,
  base: BASE,
});
