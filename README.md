# Silver Street: free MD Geriatrics exam prep

A free website that ranks every MD Geriatrics Paper III and IV question by how
often it has been set, with model answers, essays and a weekly newsletter.
"Silver Street" is a placeholder name. Change it in `src/site.config.mjs`.

- **Live site:** https://sudarsandr36-del.github.io/silver-street/
- **Publishing:** automatic. Every change saved to this repository rebuilds the
  site in about two minutes. The **Actions** tab shows each build; a green tick
  means it's live, and a red cross means something needs fixing.

## Preview mode is on

While `preview: true` is set in `src/site.config.mjs`, the site works for anyone
with the link but is hidden from Google. Change it to `false` on launch day.

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
| `src/site.config.mjs` | Site name, your name, reviewer, newsletter link, error-report link |
| `src/pages/about.astro` | The line about you |
| `src/content/answers/p3-135.md` | Review date and reviewer |

## Using your own domain later

1. Buy the domain from any registrar.
2. Add a file `public/CNAME` containing only the domain, such as `silverstreet.in`.
3. In `astro.config.mjs`, set `SITE` to `https://` plus your domain, and `BASE` to `'/'`.
4. Point the domain's DNS at GitHub Pages (search GitHub's guide
   "Managing a custom domain for your GitHub Pages site").
5. In **Settings > Pages**, tick **Enforce HTTPS** once it's available.

## Where things live

```
src/site.config.mjs     your name, links, preview mode
src/data/               all 355 questions (qbank-iii.json, qbank-iv.json)
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

Paper II has answers but no question-frequency data yet, so it isn't in the index.
