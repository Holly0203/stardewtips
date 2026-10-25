# 83 篇内容审阅：2026-10-25

范围：当前 master（cd8464b）的 83 篇 Markdown。全量文本审阅与结构统计，重点事实联网抽查；不是逐数值实机验证、全文互联网查重或 Google 审核结果预测。本次只写审阅报告，未改文章、未推送。

整体判断：有可用的入门攻略基础，但不宜将全部文章称为高质量。较强页面解释了实际决策和可复算收益；较弱页面反复提醒备料、留钱、留背包空间，却缺标题所需的关键地点、图示、候选清单和可执行步骤。此前仅凭构建、链接和篇数把批次概括为高质量，判断过于笼统。

## 优先级

- P0：6 篇，应先修事实、误导或标题/正文冲突；不代表每篇所有段落均错。
- P1：15 篇，优先补全核心答案或显著收紧范围。
- P2：62 篇，可保留，按逐篇建议精修；不代表已证明全部事实无误。

## 全站观察

- 约 56,246 个英文单词（含正文链接文本等近似统计），中位数约 700；最新 20 篇大致 377–422 词。长度本身不是优劣或审核门槛。
- 75/83 篇正文没有 Markdown 图片或 img 标签；余下图多为道具小图。此项不计公共页头。需要补的是范围、路线和布局的说明图，不是装饰性配图。
- 30 篇使用 At a glance 区块，67 篇包含 reserve。共同结构可以有用，但反复把备料/留钱/留空间当作主要内容，会稀释专题答案。这是编辑观察，不是 AI 检测结果。
- make-money-year-one、crafting-guide-beginners、tips-and-tricks 没有直接外部来源链接；内链不能自动补足本页具体断言的依据。
- 新批次的标签只有分类和 stardew valley 1.6，缺专题标签；元数据应逐篇补齐，但优先级低于事实和实用性。
- 来源注记多写“1.6”；涉及变化时应写明确小版本/平台。不要用统一日期代替核查记录。
- 多篇仍把“上一版错误”写进正文。重要纠错可留简短变更说明；大段编辑历史移到变更记录，让正文只服务读者当前任务。
- 没有进行完整抄袭扫描，不能声称零重复、零版权风险或“AI 检测一定通过”。不应伪造游戏实测或作者个人经历。

## 已核实的具体问题与依据

1. crafting-guide-beginners 第 55 行把普通 Bait 写成 1 Wood + 1 Fiber，正确输入为 Bug Meat；同篇把电池来源写为 jungle mushrooms，与来源表不符。[Bait](https://wiki.stardewvalley.net/Bait)、[Battery Pack](https://wiki.stardewvalley.net/Battery_Pack)。
2. 同篇声称 Keg 的 Oak Resin 要求是 since 1.6；当前 Keg 历史不支持这一版本断言，应删去。[Keg](https://wiki.stardewvalley.net/Keg)。Charcoal Kiln 的 Foraging 2 和 Tapper 的 Foraging 4 则有 1.6 变更记录，不能一起当错项删除。
3. mining-guide-beginners 第 42 行 skeletons (20+) 错：普通 Skeleton 为 71–79 层；第 49 行把升级镐解释成挥速变快，应说减少对应岩石/矿点所需敲击次数。[Skeleton](https://wiki.stardewvalley.net/Skeleton)、[Pickaxes](https://wiki.stardewvalley.net/Pickaxes)。
4. skull-cavern-guide 把普通随机宝箱房概率与越深越高混讲；随机房间概率公式取决于运气，100/200/300 层固定奖励应另讲。[Skull Cavern](https://wiki.stardewvalley.net/Skull_Cavern#Treasure_Rooms)。
5. tips-and-tricks 把公开生日历放在 Pierre lobby，实际在门外左侧。[Calendar](https://wiki.stardewvalley.net/Calendar)。
6. best-gifts-villagers 的 Every Villager 标题和全村宝石策略 description 与七人正文不匹配；这是直接可由项目内容验证的问题。

## 逐篇清单

优先级表示修改顺序；字数用于了解体量，不是打分。文章均可在现有内容目录找到。

| 优先级 | 文章 | 约词数 | 修改建议 |
|---|---|---:|---|
| P2 | [Animals Guide: Buildings, Feeding, and Daily Care](../src/content/guides/animals-guide.md) | 687 | 保留建筑成本表；补一个四只鸡的首购、饲料、加工设备总预算，删去泛化扩建提醒。 |
| P2 | [Auto-Grabber or Auto-Petter? Buy for the Chore You Have](../src/content/guides/auto-grabber-auto-petter-difference.md) | 404 | 比较表有效；补 Community Center 路线获得 Auto-Petter 的实际来源与随机性，不承诺掉落。 |
| P2 | [Backpack and Storage Guide: Carry Less, Keep What Matters](../src/content/guides/backpack-storage-guide.md) | 803 | 价格与负载分工有用；压缩反复的储备提醒，增加一张具体的十二格出行装包示意。 |
| P2 | [Bait and Tackle Guide: Fix the Fishing Problem You Actually Have](../src/content/guides/bait-and-tackle-guide.md) | 817 | 保留按失败原因选装备的思路；补 PC、手柄、移动端装配步骤及价格/耐久对照。 |
| P2 | [Bait Maker: Sacrifice One Fish Only When More Catches Matter](../src/content/guides/bait-maker-targeted-fishing.md) | 393 | 主题清楚；用一个真实鱼种演示可捕获窗口、投入一条鱼与所得鱼饵的取舍。 |
| P2 | [Bee House Guide: Keep Flowers Growing and Harvest Better Honey](../src/content/guides/bee-house-flower-honey-guide.md) | 822 | 收蜜前不要采花的解释很好；补五格范围形状图和春夏秋花蜜对照。 |
| P0 | [Stardew Valley Gift Guide: The Best Gifts for Every Villager](../src/content/guides/best-gifts-villagers.md) | 599 | 标题称 Every Villager，description 仍承诺全村免费送宝石，正文实际仅七人且否定宝石通用。必须同步改标题/摘要，或补完整可筛选村民表。 |
| P2 | [Big Chests: Upgrade Crowded Storage Without Making More Clutter](../src/content/guides/big-chest-upgrade-planning.md) | 410 | 容量和替换机制有用；精简通用储存建议，与工作台篇各自保留明确职责。 |
| P2 | [Calico Desert Errands: Pack Trades Before Buying a Bus Ticket](../src/content/guides/calico-desert-bus-errands.md) | 404 | 整理为星期、兑换物、带什么的紧凑出行单，补 Sandy 正常营业时间与活动例外。 |
| P2 | [Cask Aging: What Belongs in the Cellar and What Should Be Sold?](../src/content/guides/cask-aging-cellar-guide.md) | 684 | 保留增量价值算法；加入真实酒类与金星奶酪的每槽每日增值比较。 |
| P2 | [Cheese and Mayonnaise: Size Matters More Than Stars](../src/content/guides/cheese-mayonnaise-quality-rules.md) | 402 | 表格有效；补普通及大号原料的加工前后价格，清楚隔开鸵鸟蛋等例外。 |
| P2 | [Combat Survival Guide: Handle the Early Mines Without Rushing](../src/content/guides/combat-survival-guide.md) | 836 | 热点栏建议重复偏多；补剑/棍/匕首的操作差异和两三种具体敌人的应对。 |
| P1 | [Community Center Guide: Standard Bundles and Room Rewards](../src/content/guides/community-center-guide.md) | 768 | 房间奖励总览合格，但大量精确要求仍交给 Wiki；补本站季节清单、必留物与房间优先顺序实例。 |
| P1 | [Cooking Guide: Learn Recipes and Use Food Buffs Without Replacing Them](../src/content/guides/cooking-and-food-buffs-guide.md) | 849 | 增益替换规则解释清楚；缺可直接用的配餐表，补几种实际食品、材料、恢复值和适用场景。 |
| P2 | [Crab Pot Guide: Build a Daily Route You Will Actually Maintain](../src/content/guides/crab-pot-route-guide.md) | 829 | 保留材料/购买取舍；补淡水与海水产物及一条短路线，减少重复的储备段落。 |
| P0 | [Crafting for Beginners: Storage, Smelting, and First Machines](../src/content/guides/crafting-guide-beginners.md) | 1034 | 已确认普通 Bait 配方错误：应为 Bug Meat，不是 Wood + Fiber；删除 jungle mushrooms 产电池的错误来源及 Oak Resin 是 1.6 新增要求的说法，复核整张材料表。 |
| P2 | [Crystalarium: Choose Jade for Supplies or Diamonds for Sales](../src/content/guides/crystalarium-jade-or-diamond.md) | 716 | 目的对比有价值；补 Jade 复制周期及每周可兑换 Staircase 的明确计算。 |
| P2 | [Dehydrator Guide: Match Five Items and Clear a Harvest Backlog](../src/content/guides/dehydrator-five-item-batches.md) | 695 | 批量和每输入价值解释较好；把假设水果替换/补充为真实蓝莓或蔓越莓案例。 |
| P1 | [Desert Festival: A Three-Day Plan for Your First Visit](../src/content/guides/desert-festival-first-plan.md) | 403 | 写了购物预算却缺赚蛋方法与具体购买建议；补三天行动表、可选活动、实际蛋价和截止提醒。 |
| P2 | [Dwarf Scrolls: Find the Missing Color and Unlock Translation](../src/content/guides/dwarf-scrolls-translation-guide.md) | 646 | 翻译与入口分开讲是优点；补缺单色时可执行的楼层/敌人路线，标明概率而非保证。 |
| P2 | [Egg Festival Guide: Budget Strawberries and Plan the Evening Planting](../src/content/guides/egg-festival-strawberry-plan.md) | 799 | 日期、种子预算和收获计算比较完整；补速度肥料情形或一个小田方案即可，不必重写。 |
| P2 | [Energy Management: Watering, Food, and Recovery](../src/content/guides/energy-management-tips.md) | 684 | 纠正耗能误区有效；给出便宜食物和恢复值示例，减少抽象的准备提醒。 |
| P2 | [Fall Crop Planning: Cranberries, Pumpkins, and Rare Seeds](../src/content/guides/fall-crop-guide.md) | 693 | 保留带假设的种植日历；补不同种植日期的收益小表和一组普通预算组合。 |
| P2 | [Mushrooms or Fruit Bats? Choose a Farm Cave for Your Goals](../src/content/guides/farm-cave-mushrooms-or-bats-guide.md) | 855 | 保留随机性与版本说明；压缩重复权衡，增加可一眼比较的两列决策表。 |
| P1 | [Farm Layout: Shorter Routes and Room to Expand](../src/content/guides/farm-layout-tips.md) | 768 | 标题是布局但没有可照做的布局图；补坐标或网格，区分实际机制与“30秒”等主观建议，检查行列方案是否与洒水覆盖一致。 |
| P2 | [Fertilizer: Choose Quality, Earlier Harvests, or Water Retention](../src/content/guides/fertilizer-quality-or-speed.md) | 720 | 原理明确但示例偏抽象；用具体作物说明何时真的增加一次采收，并列施用窗口。 |
| P0 | [Your First Week: A Spring 1–7 Plan](../src/content/guides/first-week-guide.md) | 1104 | 删除“Ship everything”与留献祭物的冲突；去掉草莓绝对最优、越买越富的断言；修正指向相关文章时“every bundle/每种作物利润表”的过度承诺。 |
| P1 | [Your First Fish Pond: Choose a Species and Plan the Upgrade Requests](../src/content/guides/fish-pond-first-pond-guide.md) | 827 | 让读者选鱼却没有具体候选清单；补 Sturgeon、Lava Eel、普通入门鱼的请求难度、产物与处理规则，明确适用小版本。 |
| P2 | [Fish Smoker: Is the Extra Sale Value Worth Your Coal?](../src/content/guides/fish-smoker-coal-profit.md) | 696 | 增量收益和燃料成本算法较好；补实际鱼种及 Fisher/Angler、Artisan 组合示例，保留假设边界。 |
| P2 | [Fishing for Beginners: Bar Control, Rods, and First Catches](../src/content/guides/fishing-guide-beginners.md) | 664 | 入门条理清楚；补一两个适合练习的实际鱼种、位置及条件，别只让新手查外部总表。 |
| P1 | [Fisher or Trapper? Choose Fishing Professions for Your Routine](../src/content/guides/fishing-professions-guide.md) | 858 | 分支图有用但缺重选职业的出口；补重选地点、条件、花费及何时生效，并压缩泛化选择建议。 |
| P2 | [Flower Dance: Check Four Hearts Before Asking](../src/content/guides/flower-dance-partner-planning.md) | 398 | 四心门槛清楚；补一个经核实的首春生日送礼路线，标记为可选计划。 |
| P1 | [Forge Upgrades vs Enchantments: Budget Your Cinder Shards](../src/content/guides/forge-upgrades-enchantments.md) | 384 | 只有消耗区别，读者仍难选；补常用宝石效果表、一个明确武器情境和附魔替换示例。 |
| P2 | [Friendship Guide: Conversations, Gifts, and Birthdays](../src/content/guides/friendship-guide.md) | 589 | 基础数值清楚；补质量加成、周重置及封顶后衰减的简表，与送礼清单职责分开。 |
| P2 | [Fruit Tree Guide: Plant Early and Troubleshoot Missed Growth](../src/content/guides/fruit-tree-planting-guide.md) | 838 | 排查逻辑有效；用图展示幼树净空与成熟后利用，补一组实际种植日期。 |
| P2 | [Furnace Planning: Count the Coal Before Adding More Machines](../src/content/guides/furnace-and-coal-planning.md) | 703 | 燃料算账实用；补普通熔炉原料/时长表和可获取煤的具体选择，压缩容量建议。 |
| P2 | [Garden Pots: Grow Indoors Without a Sprinkler](../src/content/guides/garden-pot-indoor-growing.md) | 402 | 不受洒水器影响的结论直接；补可访问的盆栽布局与 Deluxe Retaining Soil 获得方式。 |
| P2 | [Geode Guide: Budget Cracking Costs and Sort What You Find](../src/content/guides/geode-processing-guide.md) | 776 | 费用与运气说明明确；补不同晶球来源和矿物池区别，降低“整理背包”篇幅。 |
| P2 | [First Trip to Ginger Island: Repair the Boat and Pack for Exploration](../src/content/guides/ginger-island-first-visit.md) | 715 | 修船材料与首访范围合理；补码头至 Leo 的简图及首批核桃解锁顺序，不必泄露所有谜题。 |
| P2 | [Green Rain: Collect Moss Without Clearing the Whole Valley](../src/content/guides/green-rain-moss-route.md) | 716 | 事件区别有用；补具体 Moss 配方需求对照和一条有起终点的路线，而非泛指附近区域。 |
| P1 | [Greenhouse Guide: Unlocks, Watering, and Crop Choices](../src/content/guides/greenhouse-guide.md) | 739 | 承诺六洒水器、十八果树布局但无位置图；补网格并明确树木成熟后全年结果，收紧 Coffee/Hops 一概推荐。 |
| P2 | [Help Wanted and Special Orders: Read the Collection Rule First](../src/content/guides/help-wanted-special-orders.md) | 709 | 收集与交付区别讲得好；用一个真实订单展示两个计数器和领取时点。 |
| P2 | [Island Farm and Farmhouse: Prepare Before Staying Overnight](../src/content/guides/island-farm-overnight-plan.md) | 403 | 核桃分项预算有用；补可直接执行的离家前清单和带往岛上的首批物品。 |
| P2 | [Junimo Hut Layout: Range, Rain, and Missed Harvests](../src/content/guides/junimo-hut-harvest-layout.md) | 394 | 范围与雨天限制有用；补以门口为中心的 17×17 图与一组实际洒水器位置。 |
| P2 | [Keg vs Preserves Jar: What to Process and When to Sell](../src/content/guides/keg-vs-preserves-jar.md) | 1066 | 公式、交叉点和机器占用解释是较强内容；补真实作物表与已验证的操作时点即可。 |
| P1 | [Legendary Fish: Locations, Conditions, and Preparation](../src/content/guides/legendary-fish-guide.md) | 584 | 已有条件表，但最关键的抛竿落点交给外站；补五个位置图/可描述的定位步骤及技能加成示例。 |
| P2 | [Lightning Rods and Battery Packs: Prepare Before the Storm](../src/content/guides/lightning-rods-battery-packs-guide.md) | 806 | 无半径保护的说明有价值；压缩重复容量提醒，补自然雷雨与替代电池来源对照。 |
| P2 | [Luau Soup: Reserve One Reliable Ingredient Before Summer 11](../src/content/guides/luau-soup-ingredient-plan.md) | 407 | 可用原料清晰；补品质/尺寸边界和一条初夏可实现的备选方案，不做不必要扩写。 |
| P1 | [Mahogany Trees: Build a Hardwood Supply You Can Replant](../src/content/guides/mahogany-hardwood-renewal.md) | 406 | 正文不提供种子获取来源、具体产量，读者难开始；补来源、产量范围和带净空的补种方案。 |
| P1 | [Year 1 Income: Fishing, Crops, and Processing](../src/content/guides/make-money-year-one.md) | 742 | 作为导航页可用，作为赚钱攻略缺具体方案；补有限预算下的真实支出和回款日例子，缩短跨主题泛谈。 |
| P2 | [Lost Items After a Mine Collapse: What Marlon Can Recover](../src/content/guides/marlon-item-recovery.md) | 735 | 恢复一项及被新死亡覆盖的说明实用；补可执行的 Guild 营业时间、选择到收信流程。 |
| P2 | [Minecarts: Unlock the Network and Put Its Stops to Use](../src/content/guides/minecart-unlock-daily-routes.md) | 679 | 站点用途表可保留；补站点简图和到 Clint 的实际营业时间，精简归仓内容。 |
| P0 | [Mining for Beginners: Checkpoints, Ore, and Safe Trips](../src/content/guides/mining-guide-beginners.md) | 700 | 已确认 Skeleton 楼层写成20+，普通矿井应为71–79；镐升级应说明减少敲击次数，不是直接加快挥速；Dust Sprite“coal-bombers”会误导，复核整段敌人说明。 |
| P2 | [Monster Eradication Goals: Pick a Reward Before Repeating Floors](../src/content/guides/monster-goals-reward-planning.md) | 684 | 奖励目标表有用；补各目标的可执行楼层区间，删一部分简单除法与通用收包建议。 |
| P1 | [Museum Donation Guide: Organize Finds Without Losing Useful Reserves](../src/content/guides/museum-donation-guide.md) | 835 | 缺具体珍贵首件的处理建议；补 Dinosaur Egg、Prismatic Shard、Ancient Seed 的不同取舍及关键奖励表。 |
| P2 | [Mushroom Logs: Choose Nearby Trees Without Blocking Collection](../src/content/guides/mushroom-log-tree-placement.md) | 717 | 产量与种类分开解释不错；补7×7树木图、数量阈值及可访问通道。 |
| P2 | [Night Market Guide: Plan Submarine Fishing Without Missing the Last Boat](../src/content/guides/night-market-guide.md) | 844 | 时段规划清楚；补 Mermaid 精确时间与潜艇入场/下潜/返程时间轴，可把谜底折叠。 |
| P2 | [Rain Totems: Plan Tomorrow’s Weather Without Assuming a Storm](../src/content/guides/rain-totem-weather-planning.md) | 692 | 天气地域与雷雨区别有用；补一次真实钓鱼/工具升级的时间轴，避免重复预算说明。 |
| P2 | [Recycling Machine Guide: Turn Fishing Trash into Useful Supplies](../src/content/guides/recycling-machine-guide.md) | 749 | 确定性输入解释好；补完整概率/产量表或明确只讲入门，精简整理储备重复句。 |
| P1 | [Scarecrows and Rarecrows: Check the Corners Before Expanding](../src/content/guides/scarecrow-range-rarecrow-checklist.md) | 689 | 标题说 checklist 却没有八种 Rarecrow 的逐项位置/价格；补完整表及自身覆盖图，避免核心信息全部外链。 |
| P2 | [Carrots, Squash, Broccoli, and Powdermelons: Use Small Seed Finds Well](../src/content/guides/seasonal-seed-spot-crops.md) | 403 | 四作物表有用，但标题提 Seed Spot 正文未讲如何识别挖掘；补外观、获取窗口及普通 Artifact Spot 的区别。 |
| P2 | [Secret Woods Guide: Unlock Hardwood and Make Each Visit Count](../src/content/guides/secret-woods-hardwood-guide.md) | 820 | 十二硬木与五次路线计算实用；补两个隐藏入口图/方向描述，不让最难一步只停留“找边缘”。 |
| P2 | [Seed Maker Guide: When Saving Crops for Seeds Makes Sense](../src/content/guides/seed-maker-guide.md) | 821 | 机会成本解释较好；补可购种与稀有种两类真实案例，用概率而非保证平均数。 |
| P2 | [Shipping Bin or Shop? Choose the Sale Route by When You Need Gold](../src/content/guides/shipping-bin-or-shop.md) | 721 | 付款时点和回收限制明确；补主要商人的接受类别，减少与背包篇重叠。 |
| P2 | [Silo and Hay Guide: Plan Animal Feed Before Winter](../src/content/guides/silo-hay-winter-feeding-guide.md) | 1181 | 手动与自动喂食、保守预算解释扎实；压缩重复例句，补料槽/漏斗示意。 |
| P0 | [Skull Cavern: Entry Requirements and Trip Preparation](../src/content/guides/skull-cavern-guide.md) | 670 | 删/正未定义的 Dust Skulls；修正深度自动增加随机宝箱房概率的说法，分开普通概率与100/200/300固定奖励；把20+炸弹/楼梯改成分目标装备建议。 |
| P2 | [Spring Crop Planning: Parsnips, Potatoes, and Strawberries](../src/content/guides/spring-crop-guide.md) | 680 | 日期和基础价表可用；补一组资金受限的田块配置，删去正文中的旧错误修订闲话。 |
| P1 | [Sprinkler Guide: Coverage, Materials, and Field Spacing](../src/content/guides/sprinkler-guide.md) | 805 | 布局文需要图；核对 basic checkerboard 描述，修正“forage unaffected”对 Wild Seed 种植物的误导，明确 Beach Farm 等限制。 |
| P2 | [SquidFest: Two Days, Two Separate Catch Targets](../src/content/guides/squidfest-daily-targets.md) | 382 | 两天门槛表准确直观；补实际各档关键奖励，便于选择文中反复提及的目标档位。 |
| P2 | [Stable and Horse: Is Riding the Next Useful Farm Upgrade?](../src/content/guides/stable-horse-travel.md) | 713 | 成本说明清楚；补实际移动效果、通行宽度和后期召回选项，减少重复抽象预算。 |
| P2 | [Stardew Valley Fair Guide: Build a Better Nine-Item Grange Display](../src/content/guides/stardew-valley-fair-grange-guide.md) | 829 | 评分拆解有用；补一套已按表验算的具体九件展品，保留普通可替换候选，不假称游戏实测。 |
| P2 | [Stardrop Checklist: Pick the Next Energy Upgrade You Can Reach](../src/content/guides/stardrop-sources-checklist.md) | 690 | 七来源清单完成度较好；补相关任务/入口精确链接，核实平台小版本的收集差异。 |
| P2 | [Summer Crop Planning: Blueberries, Melons, and Starfruit](../src/content/guides/summer-crop-guide.md) | 693 | 采收日历和现金流解释合格；补真实田块预算及重种成本，与加工篇少重复。 |
| P2 | [Tapper Guide: Build a Reliable Supply of Resin, Syrup, and Tar](../src/content/guides/tapper-tree-products-guide.md) | 804 | 树种与周期对照有用；补树形识别图和一个扩建十台 Keg 所需的 Resin 供应日历。 |
| P2 | [Tea Saplings in 1.6: Grow a Hedge or Sell the Batch?](../src/content/guides/tea-saplings-growing-or-selling.md) | 709 | 250g版本区别和材料总账清楚；补 Caroline 事件触发地点/时段，避免读者只知道要看事件却不知道怎么触发。 |
| P0 | [25 Farm, Fishing, and Town Tips](../src/content/guides/tips-and-tricks.md) | 987 | 已确认生日历位置写成 Pierre lobby，实际在商店门外；“multiply everything”过宽，补特殊输入/品质例外；全面与专题对账后再作入口推荐。 |
| P2 | [Tool Upgrades: Costs, Priorities, and Collection Timing](../src/content/guides/tool-upgrades-guide.md) | 678 | 价格、取回时点和斧头门槛较完整；补升级效果对照，移走面向编辑的历史错误说明。 |
| P2 | [Trout Derby: Pack Bait, Collect Tags, and Leave Time to Claim](../src/content/guides/trout-derby-tags-plan.md) | 402 | 标签保存与兑换顺序清楚；补关键奖励节点及目标鱼饵的一次实用准备示例。 |
| P2 | [Sell Truffles or Make Oil? Check Artisan First](../src/content/guides/truffle-oil-or-raw-sale.md) | 377 | 原料与油增量表直接解决问题，是新批次较好的文章；补不同品质行即可。 |
| P1 | [Volcano Dungeon: Reach the Forge With a Way Home](../src/content/guides/volcano-dungeon-first-forge-route.md) | 408 | 讲了目标但逐层辨路仍泛；补起点/出口/按钮图、五层与九层节点及一份明确装包清单。 |
| P2 | [Winter Planning: Feed, Fishing, Upgrades, and Spring Preparation](../src/content/guides/winter-guide.md) | 682 | 作为季节导航合理；补两条不同进度的可选周计划，新增活动文内链。 |
| P2 | [Workbench Layout: Keep Materials Adjacent and an Aisle Open](../src/content/guides/workbench-crafting-corner.md) | 422 | 八邻格范围有用；补可站立的文字网格图和放错两格时的反例，减少重复储备提醒。 |
| P2 | [Worm Bins: Match Daily Bait Output to Your Route](../src/content/guides/worm-bin-bait-supply.md) | 399 | 最低日产量推算实用；标清 Deluxe 对 Crab Pot 的具体作用，补购饵与建机的成本比较。 |

## 建议执行顺序与验收

1. 先修 P0 六篇，逐条对齐题目、摘要、速览、表格和正文。保持现有 URL；本次没有理由批量删除或全部 noindex。
2. 补齐 P1 的核心信息。布局类至少有可检查的范围/坐标图；地点类给定位步骤；比较类用真实候选和计算条件；节日类列目标与奖励、获取方式。
3. 精修 P2。删可随意放进别篇的通用段落；保留与该篇机制直接相关的提醒。避免为了统一字数扩写。
4. 给较强收益专题补真实物品例子；有条件时提供真实游戏截图，注明版本。未经实机验证的表格称“按机制计算”，不得称实测。
5. 每篇完成后检查：读者不跳去 Wiki 是否能完成标题承诺的任务？答案是否正确？条件是否写清？来源是否可追溯？摘要是否如实？内链是否只在需要时出现？

## Google 要求的边界

[AdSense 页面准备指南](https://support.google.com/adsense/answer/7299563?hl=en) 强调独特内容、相关性和用户体验。[Google Search 的生成式 AI 指引](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) 要求准确性、质量与相关性，并指出没有附加价值的大规模生成可能违反搜索垃圾内容政策。搜索政策与 AdSense 审核不是同一套评分。两者均不能被简化成“83篇达标”或某个检测器分数；本报告不提供通过率。


## 本轮执行记录：21 篇整改

用户确认执行后，已修正 P0 六篇并补强 P1 十五篇，文章数量保持 83，URL 均保留。原审阅结论保留为整改前快照。

- 六篇纠错：制作配方及来源、送礼标题/摘要、普通矿井敌人楼层和镐机制、骷髅洞穴随机宝箱房规则、新手销售/留存矛盾、技巧篇生日历及加工泛化。
- 布局与范围：农场、温室、洒水器、稻草人补原创 SVG；桃花心木补种植图，火山补路线节点图。全部图示带文字替代与可打开的完整矢量图。专属 CSS 避免被原有32像素道具图标规则缩小。
- 具体方案：社区中心补季节作物与 Boiler Room 精确清单；传奇鱼补五种站位和落点条件；鱼塘补三种候选、请求链和处理产品；沙漠节补任务、兑换与三天计划；Forge 补宝石效果和分项预算；烹饪补四种实际食品、恢复和替换实例；职业补重选流程与价格失效时点；博物馆补三类首件取舍与奖励表；赚钱篇补带献祭留存的1000g种植现金流。
- 版本：鱼塘明确传奇鱼支持从1.6.9开始；桃花心木的浣熊交易明确需要1.6.6。保留各篇原始发布日期，更新 substantive revision 日期为2026-10-25。
- 本地验证：生产构建97页；83篇保留；修改文章集合与P0/P1清单一致；全站本地文件链接、修改页目录锚点、图示替代文本和SVG结构检查通过。温室116种植位、田块32种植位、稻草人249格及示例现金流已独立复算。
- 边界：未进行游戏实机通关验证。当前环境的Chrome/Quick Look渲染尝试失败，因此不声称完成浏览器截图验收；图示的XML、坐标、边界与响应式CSS已检查。其余62篇及独立随机提示数据不属于本轮修改范围。
