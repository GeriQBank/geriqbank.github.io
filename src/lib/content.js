// Loads the Markdown files in src/content. Adding a file there adds a page.
const slugOf = (path) => path.split('/').pop().replace(/\.md$/, '');

const answerFiles = import.meta.glob('../content/answers/*.md', { eager: true });
export const answers = Object.fromEntries(
  Object.entries(answerFiles).map(([path, mod]) => [slugOf(path), mod]),
);

const essayFiles = import.meta.glob('../content/essays/*.md', { eager: true });
export const essays = Object.entries(essayFiles)
  .map(([path, mod]) => ({ slug: slugOf(path), frontmatter: mod.frontmatter, Content: mod.Content }))
  .sort((a, b) => String(b.frontmatter.date).localeCompare(String(a.frontmatter.date)));

const issueFiles = import.meta.glob('../content/issues/*.md', { eager: true });
export const issues = Object.entries(issueFiles)
  .map(([path, mod]) => ({ slug: slugOf(path), frontmatter: mod.frontmatter, Content: mod.Content }))
  .sort((a, b) => (b.frontmatter.number || 0) - (a.frontmatter.number || 0));
