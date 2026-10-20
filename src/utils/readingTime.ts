import { readFile } from 'node:fs/promises';
import type { CollectionEntry } from 'astro:content';

const WORDS_PER_MINUTE = 200;

export async function readingTime(guide: CollectionEntry<'guides'>): Promise<number> {
  const raw =
    (guide as unknown as { body?: string }).body ??
    (await readFile(new URL(`../content/guides/${guide.id}.md`, import.meta.url), 'utf-8'));
  const words = raw.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
