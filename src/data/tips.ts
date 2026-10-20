export type TipCategory =
  | 'farming'
  | 'animals'
  | 'fishing'
  | 'mining'
  | 'combat'
  | 'foraging'
  | 'social'
  | 'artisan'
  | 'money'
  | 'life';

export interface Tip {
  id: number;
  text: string;
  cat: TipCategory;
  icon?: string;
  link?: string;
}

export const TIP_CATEGORIES: Record<
  TipCategory,
  { label: string; icon: string; color: string }
> = {
  farming: { label: 'Farming', icon: '/images/items/parsnip.png', color: '#4ea832' },
  animals: { label: 'Animals', icon: '/images/items/hay.png', color: '#c9564b' },
  fishing: { label: 'Fishing', icon: '/images/items/largemouth-bass.png', color: '#5b9bd5' },
  mining: { label: 'Mining', icon: '/images/items/geode.png', color: '#b0784a' },
  combat: { label: 'Combat', icon: '/images/items/monster-loot.png', color: '#7d5ba6' },
  foraging: { label: 'Foraging', icon: '/images/items/blackberry.png', color: '#2e8b57' },
  social: { label: 'Social', icon: '/images/items/diamond.png', color: '#d17a9e' },
  artisan: { label: 'Artisan', icon: '/images/items/wine.png', color: '#d4842c' },
  money: { label: 'Money', icon: '/images/items/gold-bar.png', color: '#caa42c' },
  life: { label: 'Life', icon: '/images/items/stardrop.png', color: '#6a8caf' },
};

export const TIPS: Tip[] = [
  // ---- Farming ----
  { id: 1, text: 'Plant all 15 starter Parsnip seeds on Spring 1 — four days later they turn into your first 500g.', cat: 'farming', icon: 'parsnip-seeds.png', link: '/guides/first-week-guide/' },
  { id: 2, text: 'Judge every crop by profit per day, never by raw sell price.', cat: 'farming', icon: 'parsnip.png', link: '/guides/spring-crop-guide/' },
  { id: 3, text: 'Egg Festival (Spring 13) Strawberry seeds at 100g are the best deal of the season — buy as many as you can carry.', cat: 'farming', icon: 'strawberry-seeds.png' },
  { id: 4, text: 'Blueberries drop three berries per pick and regrow every 4 days all Summer.', cat: 'farming', icon: 'blueberry.png', link: '/guides/summer-crop-guide/' },
  { id: 5, text: 'Cranberries yield two berries at once — one Fall field, double money.', cat: 'farming', icon: 'cranberries.png', link: '/guides/fall-crop-guide/' },
  { id: 6, text: 'Never plant a crop whose grow days exceed the days left in the season.', cat: 'farming', icon: 'winter-seeds.png' },
  { id: 7, text: 'Rain waters every crop for free — send your watering can to Clint on storm nights.', cat: 'farming', icon: 'rain-totem.png', link: '/guides/tool-upgrades-guide/' },
  { id: 8, text: 'Retaining Soil can keep farmland watered overnight — perfect for Spring 1 when you have no sprinklers.', cat: 'farming', icon: 'basic-retaining-soil.png' },
  { id: 9, text: 'Basic Sprinklers need only a copper bar and an iron bar at Farming level 2 — automate watering the week you unlock them.', cat: 'farming', icon: 'sprinkler.png', link: '/guides/sprinkler-guide/' },
  { id: 10, text: 'Quality Sprinklers (Farming 6) water 8 tiles and take 1.6 nozzles to grow further without moving them.', cat: 'farming', icon: 'quality-sprinkler.png' },
  { id: 11, text: 'Leave a full 3×3 block of one mature crop — Cauliflower, Melon or Pumpkin — and it can merge into a Giant Crop for your axe.', cat: 'farming', icon: 'melon.png' },
  { id: 12, text: 'Fruit trees need 28 days to mature, so plant saplings on day 1 of a season or lose a whole harvest cycle.', cat: 'farming', icon: 'apple-sapling.png' },
  { id: 13, text: 'Tree Fertilizer (Foraging 7) is the only fertilizer that keeps wild trees growing through Winter.', cat: 'farming', icon: 'tree-fertilizer.png' },
  { id: 14, text: 'Scythe swings cost zero energy: mow every weed for fiber, hay and mixed seeds.', cat: 'farming', icon: 'fiber-seeds.png' },
  { id: 15, text: 'Hold back one of every crop — the Pantry bundles will come asking, and they pay in more than gold.', cat: 'farming', icon: 'vegetables.png', link: '/guides/community-center-guide/' },

  // ---- Animals ----
  { id: 16, text: 'Build the Silo before your first Coop: summer grass banked as hay is what carries animals through Winter.', cat: 'animals', icon: 'hay.png', link: '/guides/animals-guide/' },
  { id: 17, text: 'Pet every animal each morning — happiness is the difference between regular and Large products.', cat: 'animals', icon: 'large-milk.png' },
  { id: 18, text: 'The Auto-Petter (Farming 10) pets your whole barn so you can sleep in.', cat: 'animals', icon: 'auto-petter.png' },
  { id: 19, text: 'A pig let outside in Fall digs up free 625g Truffles — the best animal ROI in the game.', cat: 'animals', icon: 'truffle.png' },
  { id: 20, text: 'Well-fed, friendly hens sometimes lay two eggs in a single day.', cat: 'animals', icon: 'egg.png' },
  { id: 21, text: 'Bee Houses make honey every few days from Spring to Fall without a single visit from you.', cat: 'animals', icon: 'bee-house.png' },

  // ---- Fishing ----
  { id: 22, text: 'Willy gifts you the Bamboo Pole for free the first time you step onto the beach.', cat: 'fishing', icon: 'bamboo-pole.png', link: '/guides/fishing-guide-beginners/' },
  { id: 23, text: 'Keep failing the minigame? The 25g Training Rod has a huge bar and only bites common fish — learn on it.', cat: 'fishing', icon: 'training-rod.png' },
  { id: 24, text: 'Tap, never hold: the green bar overshoots the bobber if the button stays down.', cat: 'fishing', icon: 'lead-bobber.png' },
  { id: 25, text: 'The Fiberglass Rod (Fishing 2, 1,800g) unlocks bait — that is where treasure fish begin.', cat: 'fishing', icon: 'fiberglass-rod.png' },
  { id: 26, text: 'The Iridium Rod (Fishing 6) is the only rod that wears bait and tackle at the same time.', cat: 'fishing', icon: 'iridium-rod.png' },
  { id: 27, text: 'Rainy days turn the town river into a catfish farm — 200g per cast when the sky is grey.', cat: 'fishing', icon: 'catfish.png' },
  { id: 28, text: 'Walleye only bite after dark — start your Fall fishing trip at 6pm.', cat: 'fishing', icon: 'walleye.png' },
  { id: 29, text: 'Magic Bait ignores seasons and weather — use it for the fish you missed and the legends you dare not.', cat: 'fishing', icon: 'magic-bait.png', link: '/guides/legendary-fish-guide/' },
  { id: 30, text: 'The Sonar Bobber shows what is hooked before you reel — swap out trash fish in seconds.', cat: 'fishing', icon: 'sonar-bobber.png' },
  { id: 31, text: 'The Curiosity Lure tackle makes treasure chests bite dramatically more often.', cat: 'fishing', icon: 'curiosity-lure.png' },
  { id: 32, text: 'A Worm Bin converts fishing trash into free bait — turn your worst catches into fuel.', cat: 'fishing', icon: 'worm-bin.png' },
  { id: 33, text: 'Keep the green bar over the bobber the whole minigame for a “Perfect” catch and a higher price.', cat: 'fishing', icon: 'rainbow-trout.png' },
  { id: 34, text: 'At Fishing 10, pick the Fisher profession: every fish you sell earns +25% from then on.', cat: 'fishing', icon: 'sardine.png' },

  // ---- Mining ----
  { id: 35, text: 'The mine elevator stops every 5 floors — ride it, never re-climb.', cat: 'mining', icon: 'geode.png', link: '/guides/mining-guide-beginners/' },
  { id: 36, text: 'Geodes are only worth opening: 25g at Clint’s reveals gems and minerals he never sells.', cat: 'mining', icon: 'omni-geode.png' },
  { id: 37, text: 'Depth decides gems — amethyst and topaz in the first 40, jade and aquamarine by 70, ruby and emerald near 80.', cat: 'mining', icon: 'jade.png' },
  { id: 38, text: 'Trade 3 Prismatic Shards at the desert vault for the Galaxy Sword — the biggest combat jump money can’t buy.', cat: 'mining', icon: 'prismatic-shard.png', link: '/guides/skull-cavern-guide/' },
  { id: 39, text: 'Dust Sprites on floors 40–79 are your best coal source — kill them all.', cat: 'mining', icon: 'coal.png' },
  { id: 40, text: 'One Cherry Bomb clears more stone than twenty pickaxe swings and hurts every monster in range.', cat: 'mining', icon: 'cherry-bomb.png' },
  { id: 41, text: 'A Steel Pickaxe smashes the rubble hiding the dwarves — that opens the Skull Cavern shortcut.', cat: 'mining', icon: 'dwarf-sword.png' },
  { id: 42, text: 'Smelt Quartz + coal into Refined Quartz: it sits inside every sprinkler recipe you will ever craft.', cat: 'mining', icon: 'refined-quartz.png' },
  { id: 43, text: 'The Lucky Ring doubles gem and mineral chance — swap it in before any deep dive.', cat: 'mining', icon: 'lucky-ring.png' },
  { id: 44, text: 'The Burglar’s Ring doubles every monster drop — bones, slimes and bat wings pile up fast.', cat: 'mining', icon: 'burglar-s-ring.png' },
  { id: 45, text: 'Oil of Garlic lowers monster aggression for the day — drink it before floor 80.', cat: 'mining', icon: 'oil-of-garlic.png' },
  { id: 46, text: 'Black out in the mines and you wake at Harvey’s lighter in gold and items — ladder up while you still can.', cat: 'mining', icon: 'bone-fragment.png' },

  // ---- Combat ----
  { id: 47, text: 'Life Elixir (four foraged mushrooms, Combat level 2) restores 200 energy and 80 health mid-dungeon.', cat: 'combat', icon: 'life-elixir.png' },
  { id: 48, text: 'Ten bug meat become Bug Steak: 45 energy. Monster loot is groceries, not trash.', cat: 'combat', icon: 'bug-steak.png' },
  { id: 49, text: 'Scythes swing for free energy — in 1.6 they double as weapons that mow weeds and weak monsters alike.', cat: 'combat', icon: 'golden-scythe.png' },
  { id: 50, text: 'Slime, bat and skeleton drops feed crafting and cooking — pick every one up.', cat: 'combat', icon: 'monster-loot.png' },

  // ---- Foraging ----
  { id: 51, text: 'One acorn + one maple seed + one pine cone = a Field Snack: 45 free energy at Foraging level 1.', cat: 'foraging', icon: 'field-snack.png', link: '/guides/energy-management-tips/' },
  { id: 52, text: 'Berry bushes explode twice a year: Salmonberry on Spring 15–18, Blackberry on Fall 8–11. Stock up for weeks.', cat: 'foraging', icon: 'salmonberry.png' },
  { id: 53, text: 'The Secret Woods (Steel Axe required) delivers hardwood and rare mushrooms every single day.', cat: 'foraging', icon: 'mahogany-tree.png' },
  { id: 54, text: 'Gatherer (Foraging 5) sometimes returns what you picked — free double berries.', cat: 'foraging', icon: 'forager-s-hat.png' },
  { id: 55, text: 'Tappers are pure passive gold: Maple Syrup 200g, Pine Tar 250g, Oak Resin 300g per drip.', cat: 'foraging', icon: 'maple-syrup.png' },
  { id: 56, text: 'Forage spawns reset daily — a morning loop of forest, mountain and beach pays your seed bill in Spring.', cat: 'foraging', icon: 'daffodil.png' },
  { id: 57, text: 'Winter foraging is Winter’s farming: Crystal Fruit (150g) and Snow Yam (100g) carpet the snow.', cat: 'foraging', icon: 'crystal-fruit.png', link: '/guides/winter-guide/' },
  { id: 58, text: 'Fall overflows the inventory — Wild Plums, Hazelnuts and Blackberries come faster than any chest can hold.', cat: 'foraging', icon: 'hazelnut.png' },
  { id: 59, text: 'Purple Mushrooms only appear in the Secret Woods and the caves — save them for the Wizard’s favorite gift.', cat: 'foraging', icon: 'mushroom-cap.png' },

  // ---- Social ----
  { id: 60, text: 'Birthday gifts give 8× the friendship — one loved item on the right day beats eight ordinary ones.', cat: 'social', icon: 'pink-cake.png', link: '/guides/best-gifts-villagers/' },
  { id: 61, text: 'Villagers accept only two gifts a week — a third gift wastes your loved item.', cat: 'social', icon: 'flowers.png' },
  { id: 62, text: 'Gems are liked by almost everyone — a cheap safe gift while you memorize loved items.', cat: 'social', icon: 'amethyst.png' },
  { id: 63, text: 'Friendship decays when ignored — one free chat a day protects those 10 hearts.', cat: 'social', icon: 'abigail-portrait.png', link: '/guides/friendship-guide/' },
  { id: 64, text: 'The Bouquet says “go steady”; the Mermaid’s Pendant (10 hearts, 5,000g from the counter on the beach) does the rest.', cat: 'social', icon: 'wedding-ring.png' },
  { id: 65, text: 'Festivals gather every villager in one square — one gift lap is worth a week of wandering.', cat: 'social', icon: 'festive-dining-table.png' },
  { id: 66, text: 'The Winter Star (Winter 25) is town Secret Santa — everyone gifts you, and you gift back.', cat: 'social', icon: 'tree-of-the-winter-star.png' },
  { id: 67, text: 'Read the bulletin board in Pierre’s — help-wanted requests pay gold, friendship and sometimes gear.', cat: 'social', icon: 'pierre-s-sign.png' },

  // ---- Artisan ----
  { id: 68, text: 'Wine triples a fruit’s value and juice takes it 2.25× — never ship surplus you could process.', cat: 'artisan', icon: 'wine.png' },
  { id: 69, text: 'Preserves Jars favor cheap bulk crops: pickles and jelly pay 2× value plus a flat 50g.', cat: 'artisan', icon: 'juice.png' },
  { id: 70, text: 'Hops → Pale Ale is the game’s best keg ratio: 40g hops into 300g ale, daily through Summer.', cat: 'artisan', icon: 'pale-ale.png' },
  { id: 71, text: 'The second house upgrade adds a cellar full of casks — age your wine inside for far higher prices.', cat: 'artisan', icon: 'cask.png' },
  { id: 72, text: 'An Oil Maker turns each 625g Truffle into 1,065g Truffle Oil — pig profits doubled.', cat: 'artisan', icon: 'truffle-oil.png' },
  { id: 73, text: 'Mayonnaise machines and cheese presses convert eggs and milk daily — the quietest income on any farm.', cat: 'artisan', icon: 'cheese.png' },
  { id: 74, text: 'The Loom spins cut grass into wool and wool into cloth — your weeds are tailoring supplies.', cat: 'artisan', icon: 'cloth.png' },

  // ---- Money ----
  { id: 75, text: 'The shipping bin pays overnight — dump the day’s haul before 2am and collect the gold with breakfast.', cat: 'money', icon: 'chest.png' },
  { id: 76, text: 'Traveling Cart (Fri & Sun): a ~1,000g Rare Seed planted by Fall 4 pays for itself with a 600g Rarefruit… and keeps regrowing nothing — so plant early.', cat: 'money', icon: 'rare-seed.png' },
  { id: 77, text: 'Smelt ore into bars before selling — bars fetch several times the price of raw ore.', cat: 'money', icon: 'gold-bar.png' },
  { id: 78, text: 'Year 1 rule: spend on seeds, sprinklers and metal bars before anything cosmetic. Clint and Pierre are the whole economy.', cat: 'money', icon: 'furnace.png', link: '/guides/make-money-year-one/' },
  { id: 79, text: 'Fix the bus and Desert Starfruit (750g each) become the strongest one-off crop of the game.', cat: 'money', icon: 'starfruit.png' },
  { id: 80, text: 'Museum donations beat selling artifacts — they unlock shops, letters and a Stardrop.', cat: 'money', icon: 'ancient-doll.png' },

  // ---- Life ----
  { id: 81, text: 'In bed before midnight = full energy. After that it drains hour by hour, and 2am knocks you out for up to 1,000g.', cat: 'life', icon: 'retro-bed.png' },
  { id: 82, text: 'Watch the TV every morning: fortune tells luck, weather plans your watering, and the channels teach rotating recipes.', cat: 'life', icon: 'budget-tv.png' },
  { id: 83, text: 'Put one chest at every field corner — dumping harvest mid-task saves dozens of walks home.', cat: 'life', icon: 'big-chest.png' },
  { id: 84, text: 'Clint can hold several tools at once — batch your upgrades through Winter and storms.', cat: 'life', icon: 'anvil.png', link: '/guides/tool-upgrades-guide/' },
  { id: 85, text: 'Stardrops permanently add 34 to your max energy (base 270) — collect every one the world offers.', cat: 'life', icon: 'stardrop.png' },
  { id: 86, text: 'The spa refills energy and health at 10 per second — free, daily, and open year-round since 1.6.', cat: 'life', icon: undefined, link: '/guides/energy-management-tips/' },
  { id: 87, text: 'The Farm Obelisk (1.6 Mastery) teleports you from the field’s edge straight home.', cat: 'life', icon: 'farm-obelisk.png' },
  { id: 88, text: 'Lightning Rods turn storm strikes into Battery Packs — the final part of every Iridium Sprinkler.', cat: 'life', icon: 'lightning-rod.png' },
  { id: 89, text: 'Coffee gives a speed boost with little energy — but one cup too many backfires.', cat: 'life', icon: 'coffee.png' },
  { id: 90, text: 'Fish Ponds reproduce on their own — sturgeon ponds lay 500g Caviar without a rod in sight.', cat: 'life', icon: 'aged-roe.png' },
  { id: 91, text: 'Buy Pierre’s backpack upgrades early — 12 slots is not a farming inventory.', cat: 'life', icon: undefined },
  { id: 92, text: 'Refilling the watering can is free: top up at the pond beside your house every single morning.', cat: 'life', icon: undefined },
  { id: 93, text: 'Plant on day 1 of each season — every day of delay costs a whole harvest cycle.', cat: 'life', icon: 'spring-seeds.png' },
  { id: 94, text: 'Replant a sapling for every tree you fell, or hardwood quietly runs out.', cat: 'life', icon: 'oak-tree.png' },
  { id: 95, text: 'Craft one Basic Scarecrow and crows vanish from your farm for good.', cat: 'life', icon: 'scarecrow.png' },
  { id: 96, text: 'Good-luck days boost treasure chests and gem chance — save the deep dives for them.', cat: 'life', icon: 'star-shards.png' },
  { id: 97, text: '1.6’s Ginger Island is an endless-summer farm — send your tropical seeds there to grow all year.', cat: 'life', icon: 'mango.png' },
  { id: 98, text: 'Winter is not a dead season — it is the mining, foraging and artisan-processing season.', cat: 'life', icon: 'winter-root.png', link: '/guides/winter-guide/' },
  { id: 99, text: 'Check your mail daily: quests, refunds, shop arrivals and bundle letters all land in the mailbox.', cat: 'life', icon: undefined },
  { id: 100, text: 'The golden loop of Stardew: water → task → talk to someone → ship → sleep by midnight. Repeat until rich.', cat: 'life', icon: undefined, link: '/guides/tips-and-tricks/' },
  { id: 101, text: 'A Prismatic Shard is a loved gift for every villager — except Haley, who hates it.', cat: 'social', icon: 'prismatic-shard.png', link: '/guides/best-gifts-villagers/' },
];
