# Silver Street: free MD Geriatrics exam prep

A free website listing every MD Geriatrics Paper II, III and IV question, ranked by
how often it has been set, with model answers, essays and a weekly newsletter.
The site's name is set in `src/site.config.mjs`.

- **Live site:** https://sudarsandr36-del.github.io/silver-street/
- **Publishing:** automatic. Every change saved to this repository rebuilds the
  site in about two minutes. The **Actions** tab shows each build; a green tick
  means it's live, and a red cross means something needs fixing.

## Launched

Preview mode is off, so Google can index the site. Question pages without an
answer stay hidden from Google until their answer exists. To hide the whole
site again, set `preview: true` in `src/site.config.mjs`.

The site publishes a sitemap at `/sitemap.xml` (every page worth indexing) and a
link preview image at `/og-image.png` (stored as text in the `src/assets/og-image*.b64` files).
For Google Search Console, paste its verification code into
`googleSiteVerification` in `src/site.config.mjs`.

## Editing on github.com (no software needed)

**Change a file:** open it on github.com, tap the pencil icon, edit, then tap
**Commit changes**.

**Add a model answer:**
1. Open `docs/answer-template.md` and copy its text.
2. Go to `src/content/answers`, tap **Add file > Create new file**.
3. Name it after the question, such as `p3-29.md` for Paper III question 29
   (question numbers are the ones shown in the question index).
4. Paste the template, write the answer, and tap **Commit changes**.

The question's page shows the answer automatically, and the index marks it
"Answer ready". Pages without an answer tell visitors it's coming and stay hidden
from Google until the answer exists.

**Add an essay or newsletter issue:** the same way, in `src/content/essays` or
`src/content/issues` (give each issue the next `number`).

**Write every answer in your own words.** Name textbooks such as Pathy and Kane
as further reading, but don't copy their sentences, tables or figures.

## Placeholders to fill in

| File | What to change |
| --- | --- |
| `src/site.config.mjs` | Newsletter link (Subscribe buttons stay hidden while it's empty) |

## Using your own domain later

1. Buy the domain from any registrar.
2. Add a file `public/CNAME` containing only the domain, such as `silverstreet.in`.
3. In `astro.config.mjs`, set `CUSTOM_DOMAIN` to your domain, such as `'silverstreet.in'`,
   and update the Sitemap line in `public/robots.txt`.
4. Point the domain's DNS at GitHub Pages (search GitHub's guide
   "Managing a custom domain for your GitHub Pages site").
5. In **Settings > Pages**, tick **Enforce HTTPS** once it's available.

## Where things live

```
src/site.config.mjs     your name, links, preview mode
src/data/               all 600 questions (qbank-ii/iii/iv.json)
src/content/answers/    one Markdown file per model answer
src/content/essays/     essays
src/content/issues/     Sunday Rounds issues
src/pages/              page templates
src/styles/global.css   colours, type and layout
docs/                   the answer template
```

## For developers

```bash
npm install
npm run dev       # local preview at http://localhost:4321/silver-street/
npm run build     # full build including the search index
```

Paper II comes from its answer bank, which records repeats for only some questions,
so most Paper II questions show no tally yet.
