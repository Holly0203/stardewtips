---
title: "Keg vs Preserves Jar: What to Process and When to Sell"
description: "Compare Stardew Valley kegs and preserves jars with price formulas, worked examples, and a practical plan for a farm with limited machines."
pubDate: 2026-10-24
updatedDate: 2026-10-24
category: "Farming"
tags: ["artisan goods", "keg", "preserves jar", "profit"]
---

A bottle that sells for more can still be the slower way to clear a harvest chest. Compare the value added to each crop and how long the machine stays occupied. That matters most when crops are piling up faster than your few machines can process them.

> **At a glance**
>
> - Compare finished sale price **and** the time your machine stays occupied.
> - Ordinary fruit wine sells for **3 × the fruit’s base price**.
> - Ordinary vegetable juice uses **2.25 × the vegetable’s base price**, with integer rounding.
> - Crop jelly and pickles sell for **2 × base price + 50g**.
> - These examples exclude professions, aging, and input-quality bonuses. Special products such as Pale Ale follow separate rules.

## Start with the machines you can actually build

![Preserves Jar](/images/items/preserves-jar.png) Preserves Jars unlock at Farming level 4 and require **50 Wood, 40 Stone, and 8 Coal** each. ![Keg](/images/items/keg.png) Kegs unlock at Farming level 8 and require **30 Wood, 1 Copper Bar, 1 Iron Bar, and 1 Oak Resin** each. These crafting requirements come from the Wiki’s [Preserves Jar](https://wiki.stardewvalley.net/Preserves_Jar) and [Keg](https://wiki.stardewvalley.net/Keg) entries.

The unlock gap gives jars an early role even if your eventual plan is a wine shed. Do not leave an available machine idle merely because another machine might produce a larger sale later. Conversely, do not spend all your coal building jars if that prevents you from smelting the bars you need next.

For your first batch, look at your material chest before choosing a target number. Build a few, use them through a harvest, and see whether your real problem is missing machines, missing ingredients, or forgetting to refill them. Our [crafting guide](/guides/crafting-guide-beginners/) helps prioritize that first round of equipment.

## Compare one item before comparing an entire season

For ordinary crop inputs, let **B** mean the crop’s normal-quality base sale value. A simple calculation reveals the price crossover:

- Fruit: wine and jelly match at **B = 50g**. Above that, wine has the higher finished sale price; below it, jelly does.
- Vegetables: juice and pickles match at **B = 200g** before integer rounding. Below that, pickles have the higher price.

These are algebraic comparisons of the formulas above, **not** rules about the most profitable use of a machine over time. They also do not apply to special recipes such as Wheat becoming Beer or Hops becoming Pale Ale.

Here are three hypothetical base values so you can see the arithmetic without memorizing a crop list:

| Input type and assumed base value | Jar output | Keg output | Higher sale per input |
|---|---:|---:|---|
| Fruit worth 40g | 130g | 120g | Jar by 10g |
| Fruit worth 100g | 250g | 300g | Keg by 50g |
| Vegetable worth 100g | 250g | 225g | Jar by 25g |

Use the base value, rather than the starred item’s shipping price, when calculating the output. The [Preserves Jar reference](https://wiki.stardewvalley.net/Preserves_Jar) explains why higher-quality ingredients do not improve the resulting jelly or pickles. When choosing between two otherwise identical crops, processing the normal-quality one usually sacrifices less immediate shipping income.

## A higher bottle price can hide a slower queue

Crop preserves take **4,000 processing minutes**. Ordinary Wine takes **10,000**, while Juice takes **6,000**. Nighttime processing uses a different clock rate, so treat these as machine durations rather than simply dividing them by the visible daytime clock. These timings are documented in the machine references above.

Consider the hypothetical 100g fruit in the table. One jar adds 150g of value; a keg adds 200g. The keg adds more to that individual fruit, but occupies its slot for much longer. With a large stockpile and only one available machine, finishing more jar batches can matter more than getting the highest price from each item.

With a tiny harvest and spare machines, the situation changes. If nothing would use the slot afterward, a slower cycle may have no practical opportunity cost. This is why “always put fruit in kegs” is too broad: it skips the question of whether your farm is short on crops or short on processing capacity.

The Wiki’s [productivity comparison](https://wiki.stardewvalley.net/Preserves_Jar_Productivity) uses the same useful distinction: **added value**, rather than the whole selling price, divided by processing time.

## Sort a harvest into four small piles

Before loading anything, make a quick pass through your chest:

1. **Reserve items you still need.** Keep bundle crops, quest items, seed stock, and ingredients you have a concrete use for. A profitable jar is not worth missing a seasonal requirement.
2. **Set aside immediate cash.** If tomorrow’s seed purchase depends on selling part of today’s harvest, ship that portion. A full processing queue cannot pay Pierre until you collect and sell its output.
3. **Choose the processing queue.** Match ordinary crops to the formulas and available machine time. Keep special inputs separate so they do not get judged using the wine or juice formula.
4. **Sell the overflow deliberately.** Ask whether you will realistically process it before the next harvest. Keeping every crop indefinitely is a storage habit, not automatically a profit plan.

For seasonal planting decisions, use our [Summer crop guide](/guides/summer-crop-guide/) and [Fall crop guide](/guides/fall-crop-guide/). Machine capacity should influence how much you grow, rather than becoming an endless excuse to expand.

## Build a routine you will maintain

Place finished machines where you naturally pass them, or group a batch where it is easy to check. Keep a nearby chest for the ingredients you have already chosen. A sophisticated processing plan loses its advantage if you regularly miss collections because the machines are scattered behind buildings.

Try a small expansion first. If the ingredient chest keeps growing after several collections, add capacity or reduce what you reserve for processing. If machines sit empty, buying materials for another row is unlikely to fix the problem.

## Your next practical decision

Choose one available machine, one suitable input, and one realistic collection routine. Expand after that routine works. For a broader view of how processing fits alongside fishing, crops, and upgrades, continue with our [Year 1 income guide](/guides/make-money-year-one/).

**Scope:** ordinary unaged crop products in an unmodded 1.6 game. Profession bonuses, special recipes, and later-game equipment require their own comparisons. Formulas and crafting facts were checked against the linked Wiki references on 24 October 2026; the hypothetical examples and sorting workflow are our own explanation.
