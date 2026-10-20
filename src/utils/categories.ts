export interface CategoryMeta {
  name: string;
  slug: string;
  icon: string;
  blurb: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    name: 'Getting Started',
    slug: 'getting-started',
    icon: '/images/items/parsnip.png',
    blurb: 'First steps, daily routines, and the basics done right.',
  },
  {
    name: 'Farming',
    slug: 'farming',
    icon: '/images/items/melon.png',
    blurb: 'Crops, animals, sprinklers, and turning dirt into gold.',
  },
  {
    name: 'Fishing',
    slug: 'fishing',
    icon: '/images/items/largemouth-bass.png',
    blurb: 'Master the rod, from your first catch to legendary fish.',
  },
  {
    name: 'Mining',
    slug: 'mining',
    icon: '/images/items/geode.png',
    blurb: 'Ores, gems, and surviving the depths of the mines.',
  },
  {
    name: 'Community',
    slug: 'community',
    icon: '/images/items/diamond.png',
    blurb: 'Friends, gifts, romance, and the Community Center.',
  },
];

export function categorySlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function categoryMeta(name: string): CategoryMeta {
  const slug = categorySlug(name);
  return CATEGORIES.find((c) => c.slug === slug) ?? {
    name,
    slug,
    icon: CATEGORIES[0].icon,
    blurb: '',
  };
}
