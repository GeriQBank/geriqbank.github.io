// The question bank: every Paper II, III and IV question, with how many times
// it has been set (x, or null where no count exists), its mark format (m) and theme (t).
import paper2 from '../data/qbank-ii.json';
import paper3 from '../data/qbank-iii.json';
import paper4 from '../data/qbank-iv.json';

const data = { II: paper2, III: paper3, IV: paper4 };

export const PAPERS = [
  { key: 'II', slug: 'paper-2', label: 'Paper II' },
  { key: 'III', slug: 'paper-3', label: 'Paper III' },
  { key: 'IV', slug: 'paper-4', label: 'Paper IV' },
];

export const paperBySlug = (slug) => PAPERS.find((p) => p.slug === slug);
export const paperByKey = (key) => PAPERS.find((p) => p.key === key);

export function themeName(key, id) {
  const theme = data[key].themes.find((t) => t.id === id);
  return theme ? theme.name : '';
}

export const questionPath = (key, n) => `/questions/${paperByKey(key).slug}/${n}/`;

// Answer files are named p2-17.md, p3-135.md (Paper III, question 135) or p4-20.md.
const PAPER_NUMBER = { II: 2, III: 3, IV: 4 };
export const answerKey = (key, n) => `p${PAPER_NUMBER[key]}-${n}`;

export const timesLabel = (x) => (!x ? '' : x === 1 ? 'asked once' : `asked ${x} times`);

// Tally marks: four strokes, then a diagonal for the fifth, in groups of five.
export function tally(n) {
  let d = '';
  for (let i = 0; i < n; i++) {
    const group = Math.floor(i / 5);
    const pos = i % 5;
    const gx = 4 + group * 32;
    if (pos < 4) {
      const x = gx + pos * 6.5;
      d += `M${x} ${3 + (pos % 2)} L${x + (pos % 2 ? 0.5 : -0.5)} ${17 - (pos % 2)} `;
    } else {
      d += `M${gx - 3} 13 L${gx + 23} 6 `;
    }
  }
  return { d: d.trim(), width: Math.max(1, Math.ceil(n / 5)) * 32 };
}

// Themes with the total number of times their questions were set, largest first.
export function themeTotals(key) {
  const totals = new Map();
  for (const q of data[key].questions) totals.set(q.t, (totals.get(q.t) || 0) + (q.x || 0));
  return data[key].themes
    .map((t) => ({ ...t, total: totals.get(t.id) || 0 }))
    .sort((a, b) => b.total - a.total || a.id - b.id);
}

export const mostAsked = (key, limit) =>
  [...data[key].questions].sort((a, b) => (b.x || 0) - (a.x || 0) || a.n - b.n).slice(0, limit);

export default data;
