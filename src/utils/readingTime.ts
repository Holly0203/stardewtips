import { readFile } from 'node:fs/promises';
import type { CollectionEntry } from 'astro:content';

const WORDS_PER_MINUTE = 220;

export async function readingTime(guide: CollectionEntry<'guides'>): Promise<number> {
  const raw = guide.body ?? await readFile(
    new URL(`../content/guides/${guide.id}.md`, import.meta.url), 'utf-8'
  );
  const prose = raw
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/[#*`|]/g, ' ');
  const words = prose.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
