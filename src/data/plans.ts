export interface ReadingPlan { id: string; title: string; label: string; intro: string; outcome: string; steps: [string, string, string][]; }
export const PLANS: ReadingPlan[] = [
  {
    "id": "first-spring",
    "title": "Find your feet in Spring",
    "label": "A fresh save",
    "intro": "Get a small field growing, learn a second activity, and keep enough money for the next planting. This route assumes a Standard Farm and standard bundles.",
    "outcome": "You can plan a day with crops, food, and one useful outing.",
    "steps": [
      [
        "first-week-guide",
        "Follow Spring 1–7",
        "Try the starter field and the first fishing and mine visits."
      ],
      [
        "energy-management-tips",
        "Make the morning manageable",
        "Adjust the field before committing to more watering."
      ],
      [
        "backpack-storage-guide",
        "Free space for the outing",
        "Prepare a fishing or mining loadout."
      ],
      [
        "spring-crop-guide",
        "Choose the next seed purchase",
        "Count growing days and leave a bundle reserve."
      ],
      [
        "egg-festival-strawberry-plan",
        "Shop with a planting limit",
        "Buy before the hunt and keep time for the evening."
      ]
    ]
  },
  {
    "id": "farm-systems",
    "title": "Build a farm that is easier to run",
    "label": "Less daily work",
    "intro": "Start with the chore that keeps interrupting your day. Place and test one small system before repeating it across the farm.",
    "outcome": "Watering, collection, and storage have clear places and short routes.",
    "steps": [
      [
        "farm-layout-tips",
        "Sketch a usable field",
        "Start with a measured block and a walking aisle."
      ],
      [
        "sprinkler-guide",
        "Water every intended tile",
        "Match the range to the ground and inspect the first morning."
      ],
      [
        "scarecrow-range-rarecrow-checklist",
        "Protect the outer corners",
        "Add protection after checking the actual field shape."
      ],
      [
        "workbench-crafting-corner",
        "Bring materials within reach",
        "Keep an approach tile open beside the bench."
      ],
      [
        "auto-grabber-auto-petter-difference",
        "Reduce the right animal chore",
        "Choose collection or petting while keeping feeding covered."
      ],
      [
        "junimo-hut-harvest-layout",
        "Automate a developed harvest",
        "Allow for rain and the crops helpers cannot collect."
      ]
    ]
  },
  {
    "id": "steady-income",
    "title": "Turn a harvest into useful income",
    "label": "Spend with a plan",
    "intro": "A larger finished price can mean a longer wait. Keep the next expense covered, then allocate the harvest to the machines you can actually refill.",
    "outcome": "You know what to sell now, what to process, and what the next machine adds.",
    "steps": [
      [
        "make-money-year-one",
        "Set the next payment date",
        "Use a small planting budget with a visible cash reserve."
      ],
      [
        "shipping-bin-or-shop",
        "Choose when the gold arrives",
        "A direct sale can fund today; shipping pays after sleep."
      ],
      [
        "keg-vs-preserves-jar",
        "Compare added value and time",
        "Use crop value and machine capacity together."
      ],
      [
        "dehydrator-five-item-batches",
        "Clear a large matching backlog",
        "Count five same-quality inputs per batch."
      ],
      [
        "fish-smoker-coal-profit",
        "Budget fuel before processing",
        "Use the actual catch value and the coal you need elsewhere."
      ],
      [
        "cask-aging-cellar-guide",
        "Age only the next cellar load",
        "Keep regular sales moving while a long batch matures."
      ]
    ]
  },
  {
    "id": "town-goals",
    "title": "Keep collections and festivals moving",
    "label": "People & milestones",
    "intro": "Keep the seasonal item before shipping the rest. Separate donation counters, event currency, and personal gifts so one project does not consume another.",
    "outcome": "The next missing item or event has a concrete preparation step.",
    "steps": [
      [
        "community-center-guide",
        "Read the next bundle",
        "Use the seasonal crop and Boiler Room lists."
      ],
      [
        "museum-donation-guide",
        "Choose where first finds belong",
        "Handle rare eggs, seeds, and shards deliberately."
      ],
      [
        "friendship-guide",
        "Build a small relationship routine",
        "Check gift limits, caps, and birthdays."
      ],
      [
        "best-gifts-villagers",
        "Pack a gift you already have",
        "Use the checked starter examples."
      ],
      [
        "stardew-valley-fair-grange-guide",
        "Build a varied display",
        "Check nine slots, category coverage, and score."
      ],
      [
        "stardrop-sources-checklist",
        "Pick the next reachable milestone",
        "Choose a source that fits current progress."
      ]
    ]
  },
  {
    "id": "deeper-mines",
    "title": "Go deeper and bring the haul home",
    "label": "Mines & equipment",
    "intro": "Separate checkpoint progress from resource gathering. Build a reliable healing setup before spending more on an ambitious descent.",
    "outcome": "Each trip has a material or depth goal, an exit, and a useful follow-up.",
    "steps": [
      [
        "mining-guide-beginners",
        "Bank the next checkpoint",
        "Choose floors for the material you need."
      ],
      [
        "combat-survival-guide",
        "Make recovery easy to select",
        "Practice encounters before adding depth pressure."
      ],
      [
        "furnace-and-coal-planning",
        "Turn the haul into the next recipe",
        "Count fuel as well as ore."
      ],
      [
        "tool-upgrades-guide",
        "Remove the next tool constraint",
        "Plan both hand-in and collection."
      ],
      [
        "crystalarium-jade-or-diamond",
        "Prepare the staircase supply",
        "Trade on the right day before the cavern outing."
      ],
      [
        "skull-cavern-guide",
        "Choose a supported descent",
        "Pack for a short first visit or a planned deeper run."
      ],
      [
        "marlon-item-recovery",
        "Resolve a loss before risking another",
        "Choose one recovery entry before the list is replaced."
      ]
    ]
  },
  {
    "id": "island",
    "title": "Make the next island trip count",
    "label": "Later-game exploration",
    "intro": "Repair the boat, follow the open access route, and decide whether the visit is for growing, discovery, or a first Volcano ascent.",
    "outcome": "Travel, mainland care, and the next island unlock fit the same plan.",
    "steps": [
      [
        "ginger-island-first-visit",
        "Fund repairs and pack the trip",
        "Keep boat materials apart from other building reserves."
      ],
      [
        "island-farm-overnight-plan",
        "Arrange a stay",
        "Budget walnuts and cover mainland feeding."
      ],
      [
        "volcano-dungeon-first-forge-route",
        "Reach and open the Forge shortcut",
        "Bring water, healing, and a way home."
      ],
      [
        "forge-upgrades-enchantments",
        "Spend shards for a specific change",
        "Separate predictable gem upgrades from enchantment rolls."
      ],
      [
        "rain-totem-weather-planning",
        "Check regional weather",
        "Use the item where the weather-dependent activity takes place."
      ]
    ]
  }
];
