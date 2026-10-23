# stardewtips.com 长期规划（ROADMAP）

> 制定于 2026-10-21（阶段 0 完成日）。配合 `HANDOFF.md` 阅读：交接文档讲"现在是什么样"，本文讲"接下来怎么长"。

---

## 阶段 0 —— 地基（✅ 已完成 2026-10-21）

- 温馨田园像素风改版（design tokens、PostCard、粘性 TOC、面包屑、上一篇/下一篇、相关文章）
- AdSense 合规要件补齐：`ads.txt`、`robots.txt`、404 页、JSON-LD（Article + BreadcrumbList + WebSite）、og:image、像素 favicon、页脚 Home 链接
- 首页 Tip Galaxy（100 条 tips，`src/data/tips.ts`）
- 20 篇攻略全部深度重写：800–1200 词/篇、统一模板（导语 → At a glance → H2 表格 → 底部 CTA）、每篇 3–5 个内链、数值对照 wiki 核验
- 分类体系重构为 5 类：Getting Started / Farming / Fishing / Mining / Community（`src/utils/categories.ts`）
- `draft` 字段全站删除（schema 默认 false，新文章不写即发布，写 `draft: true` 即隐藏）

## 阶段 1 —— 审核等待期（现在 ~ AdSense 通过）

目标：让 Google 看到"持续原创更新"，同时扩充长尾。**每周 2–3 篇**，全部走统一模板。

选题清单（按搜索价值排序）：

| 批次 | 选题 | 备注 |
|---|---|---|
| 1 | Crafting Guide for Beginners | Getting Started |
| 2 | Artisan Profits: Kegs, Preserves Jars & Cheese Press | Farming，高商业词 |
| 3 | Complete Festival Guide（12 个节日逐场） | Community，可拆 Spring/Summer/Fall/Winter 4 篇 |
| 4 | All 12 Marriage Candidates（每人一篇：生日/喜好/事件/剧情） | Community，×12 长尾金矿；已有头像图标 |
| 5 | Stardew Valley Quests Guide（Help Wanted + 主线） | Getting Started |
| 6 | 1.6 New Content Overview + Ginger Island Guide | Fishing/Community 分类各拆一篇 |
| 7 | Foraging Guide by Season（含 Secret Woods / 丛林） | Farming |
| 8 | Fish Tabs & Collection Guide（成就向） | Fishing |

配套动作（一次性）：

- [ ] 注册 **Google Search Console**，提交 `sitemap-index.xml`，盯覆盖报告
- [ ] 新文章一律：真实核验数值（wiki 503 时用 WebSearch agent + 交叉验证，见 HANDOFF §7.6 流程）、3–5 内链、缺图标先查 `items.json`
- [ ] 每篇发布后 1–2 周内做一轮"更新打磨"（改 title/description 里表现差的词，触发重新抓取）

## 阶段 2 —— 过审后 30 天内（变现落地）

- [ ] 填 **W-8BEN**（中美税收协定，预扣 10%）；绑定收款（满 $100 起付）
- [ ] AdSense 后台开启自动广告后，观察布局 → 手动在高流量文章插 2 个 in-feed 单元（文章页 `src/pages/guides/[slug].astro` 正文中部 + 相关文章上方），**不要超过 3 个/页**，避免体验分下降
- [ ] 接入 **Cloudflare Web Analytics**（免费、cookieless，不动 AdSense）
- [ ] 用 Search Console 数据找出曝光高、点击低的 5 篇，重写 title/meta

## 阶段 3 —— 增长期（流量 > 5k/月后启动）

- [ ] **物品百科页**：用现成的 `items.json`（1474 条）批量生成 `/items/<slug>/` 静态页（名称/图标/价格/用途骨架，逐步补人工内容）——纯长尾流量机器
- [ ] **利润计算器**（Crop Profit Calculator）：单个Astro 岛屿组件，作物种子价 × 天数 × 季节可种次数 → g/天表。工具页留存高、易被引用
- [ ] 邮件订阅（Buttondown/Mailchimp 免费档），把 Tip Galaxy 变成每周邮件
- [ ] 游戏大更新（1.7 / DLC 公告）48 小时内出新闻+指南文章，吃更新流量峰
- [ ] 视流量考虑第二站（Hearthstone/其他生存游戏复用同一套 Astro+CF 模板）

## 红线（永久有效）

1. **版权**：只取事实，全原创英文行文；图标为 wiki 48px 科普配图，若被质疑即替换
2. **审核期**：不删文章、不转 draft、不动 AdSense 代码位置
3. **AI 内容**：发布前人工抽查事实；数值类表述无把握就模糊化或删除（阶段 0 已有多处"agent 核验 → 自查 WebSearch 交叉验证 → 存疑则改写"的先例）
