# 项目交接文档 — stardewtips.com

> 本文档供接手此项目的下一个 agent / 开发者快速上手。最后更新：2026-10-21。

---

## 1. 项目概览

- **网站**：https://stardewtips.com（`www` 也已配置并解析）
- **定位**：星露谷物语（Stardew Valley）英文攻略/资讯站，目标欧美市场
- **变现**：Google AdSense（已提交审核，等待结果）
- **负责人**：Holly（中国，中文交流，程序员背景）

**商业模式**：纯静态站 → 低运维成本 → AdSense 广告分成。域名约 $12/年，其余全免费。

---

## 2. 技术栈

| 项 | 值 |
|---|---|
| 框架 | Astro 7（静态生成）+ TypeScript |
| 内容 | Markdown + Content Layer API（`loader: glob()`） |
| 托管 | Cloudflare Pages（push 后自动构建部署） |
| 代码托管 | GitHub `Holly0203/stardewtips`，分支 `master` |
| 域名 | stardewtips.com（Namecheap 购买，DNS 托管在 Cloudflare） |
| Node | >= 22.22.0 |
| 依赖 | `astro ^7.4.1`、`@astrojs/sitemap ^3.7.4`（仅这两个） |

---

## 3. 目录结构（关键文件）

```
stardewtips/
├── astro.config.mjs          # site 域名 + sitemap 集成
├── src/content.config.ts     # guides 集合定义（Content Layer API；draft 默认 false）
├── src/content/guides/*.md   # 攻略文章（20 篇，已全部深度重写）
├── src/data/tips.ts          # Tip Galaxy 的 100 条 tips 数据
├── src/utils/categories.ts   # 5 大分类定义 + 季节色映射
├── src/utils/readingTime.ts  # 阅读时长估算（200wpm）
├── src/layouts/Base.astro    # 全局布局（<head> AdSense、JSON-LD、Google Fonts、导航、页脚）
├── src/components/PostCard.astro # 复用文章卡片（分类色条）
├── src/pages/
│   ├── index.astro           # 首页：Hero + Start Here + Tip Galaxy + 最新攻略
│   ├── guides/index.astro    # 全部攻略按分类分组
│   ├── guides/[slug].astro   # 文章页：面包屑/粘性 TOC/阅读时长/上一篇下篇/相关文章
│   ├── categories/[category].astro # 5 个分类页
│   ├── 404.astro             # 品牌化 404
│   ├── about.astro / privacy.astro / contact.astro  # AdSense 要件
├── src/styles/global.css     # 温馨田园像素风 design tokens（羊皮纸/木纹/季节色）
├── public/ads.txt            # AdSense 发布商 ID（缺这个极易被拒）
├── public/robots.txt         # 允许抓取 + Sitemap 声明
├── public/favicon.svg        # 像素风嫩芽 favicon
├── public/og.png             # 1200×630 品牌分享图
├── public/images/items/      # wiki 物品图标（48x48，NPC 头像是 12 位可结婚角色）
├── items.json                # 物品索引：{name, image, category}（1454 条）
├── docs/ROADMAP.md           # 长期规划（阶段 0–3）
└── dist/                     # 构建产物（gitignore，本地生成）
```

**分类体系（5 类，写新文必须归入其一）**：`Getting Started` / `Farming` / `Fishing` / `Mining` / `Community`。旧文的 `Villagers`/`Guides`/`Money` 已全部归并。

**文章统一模板**：导语 → `> **At a glance**` 要点框（利于 featured snippet）→ H2 章节（表格+图标）→ 底部 "The bottom line" + 下一步阅读内链。每篇 800+ 词、3–5 个 `/guides/<slug>/` 内链。

---

## 4. 内容工作流（重要）

**核心机制**：`draft` frontmatter 字段控制发布（schema 默认 `false`）。**写新文时不要写 draft 字段即默认发布**；想暂存草稿就显式写 `draft: true`。20 篇存量文章已全部删除 draft 字段。

### 新增一篇文章

1. 在 `src/content/guides/` 新建 `xxx.md`（文件名即 URL slug，用 `-` 连接小写词）。
2. 写 frontmatter（`updatedDate` 每次实质修改都要更新，页面会显示 "Last updated"）：

```yaml
---
title: "标题"
description: "120–160 字符，用于 SEO 和列表卡片"
pubDate: 2026-10-21
updatedDate: 2026-10-21
category: "Farming"        # 必须是 5 类之一：Getting Started / Farming / Fishing / Mining / Community
tags: ["crops", "money"]   # 小写规范
---
```

3. 正文按统一模板：导语 → `> **At a glance**` 要点框 → H2 章节（图标表格）→ "The bottom line" + 内链。800+ 词、3–5 个站内链接。

### 事实核验流程（写作前必做）

stardewvalleywiki.com 与中文 wiki 经常 503（Varnish 限流），WebFetch 也被域名安全策略拦截。可行路径：

1. 用 **Agent + WebSearch** 批量核验数值（价格/天数/解锁条件/NPC 喜好/生日）；
2. 对 agent 结论中的**可疑项自己再 WebSearch 交叉验证**（阶段 0 实测：agent 和计划书都会出错，如 "Crafts Room 奖励不是 Quarry" 对 1.6 是错的、"Training Rod 涨价到 500g" 也是错的）；
3. 仍存疑的数值：**模糊化表述或直接删掉**，宁可少写不可写错。

### 插入物品图标

图标已下载到 `public/images/items/`，路径形如 `/images/items/<slug>.png`。查 slug 用 `items.json`：

```bash
python3 -c "import json; d=json.load(open('items.json')); print([x for x in d if 'Blueberry' in x['name']])"
```

Markdown 内联写法（表格里也能用）：

```markdown
![Blueberry](/images/items/blueberry.png) Blueberries
```

**注意**：部分物品在 wiki 里没有图标（动物、基础工具、部分海滩采集物如 Coconut/Coral），写文前先查 `items.json` 确认存在，避免裂图。

### 本地预览

```bash
npm run dev        # 开发服务器 localhost:4321
npm run build      # 构建到 dist/（会列出所有生成的页面）
```

---

## 5. 部署流程

**触发方式**：`git push` 到 `master` → Cloudflare Pages 自动构建部署，无需手动操作。

```bash
git add <files>
git commit -m "描述"
git push origin master
```

- Cloudflare 使用 `npm ci`，所以 **`package.json` 和 `package-lock.json` 必须同步**（改依赖后先本地 `npm install` 再提交）。
- 构建产物目录为 `dist/`（Cloudflare 已按 Astro 预设自动配置，无需手动填）。

---

## 6. 账号与凭证（⚠️ 不含密钥）

- **GitHub**：账号 `Holly0203`，仓库 `Holly0203/stardewtips`
  - 认证：`git config --global credential.helper '!gh auth git-credential'`（依赖 `gh` CLI 已登录）
  - Token：用 **classic token（`ghp_` 前缀）**，配 `repo` + `workflow` 权限；**不要用 fine-grained（`github_pat_`）**，会导致 403
- **Cloudflare**：Pages 项目 + 自定义域名 stardewtips.com（apex + www）
- **域名**：Namecheap，DNS 已指向 Cloudflare
- **Google AdSense**：发布商 ID `ca-pub-5982979765306851`（已写入全站 `<head>`）
- **Gmail**：已注册，**两步验证未开启**（当时报"无法验证身份"，需等账号"养" 3-7 天后再试）

---

## 7. 关键坑 / 注意事项（务必先读）

1. **大陆网络**：访问 GitHub / wiki 必须走代理。git 已配置：
   ```
   http.proxy  = socks5://127.0.0.1:7897
   https.proxy = socks5://127.0.0.1:7897
   ```
   代理工具是 **Clash Verge**（进程 `verge-mih`，端口 7897）。**必须用 socks5**，用 http 会报 `SSL_ERROR_SYSCALL`。若 push 失败先确认 Clash 在跑、节点正常。

2. **Astro 7 用 Content Layer API**：`src/content.config.ts` 里用 `loader: glob({...})`，**不是**旧的 `type: 'content'`（旧的会返回空集合）。取文章 ID 用 `guide.id`，**不是** `guide.slug`（否则报 "Missing parameter: slug"）。

3. **`draft` 过滤**在 `src/pages/guides/[slug].astro`（getStaticPaths）、`index.astro`、`guides/index.astro`、`categories/[category].astro` 四处都用 `!data.draft`，改一处逻辑要同步考虑其余三处。

4. **版权红线**：
   - 中文攻略的**行文/措辞**受版权保护，**禁止逐句翻译**发布（衍生作品侵权 + AdSense"非原创/采集内容"违规）。
   - 正确做法：只取**事实**（价格、位置、数值、机制——不受版权保护），用**自己的英文**重写。
   - wiki 文本是 CC BY-NC-SA（非商业）；游戏 sprite 版权归 ConcernedApe。当前图标用于"科普配图"，同类站普遍在用；若 AdSense 因内容/版权被拒，可逐步替换为原创图。

5. **AdSense 代码**在 `src/layouts/Base.astro` 的 `<head>` 里（全站生效）。审核期间不要改动、不要删文。

---

## 8. 当前状态（截至 2026-10-21）

- ✅ 域名 + HTTPS + Cloudflare 部署完成，`stardewtips.com` 可访问
- ✅ **温馨田园像素风改版 + Tip Galaxy 首页**（commit `d271ab5`，已部署）
- ✅ **20 篇原创英文攻略全部深度重写**（800–1200 词/篇、统一模板、wiki 核验数值、5 分类、每篇 3–5 内链）——**尚未 commit/push，待 Holly 确认后部署**
- ✅ AdSense 合规：`ads.txt`、`robots.txt`、404、JSON-LD、og.png、像素 favicon 全部就位
- ✅ 1454 张 wiki 物品图标 + `items.json` 索引已入库
- ✅ AdSense 代码已上线，**已提交 AdSense 审核（等待结果）**
- 📋 长期规划见 `docs/ROADMAP.md`（阶段 1 是审核等待期的选题清单）

已完成的里程碑 git 提交：
```
d271ab5 Redesign site and launch Tip Galaxy homepage
0754828 Add project handoff document
ec2fd29 Publish 19 original guide articles
```

---

## 9. 待办事项

| # | 任务 | 状态 |
|---|---|---|
| 1 | 注册 Gmail | ✅ 完成 |
| 2 | 购买域名 | ✅ 完成 |
| 3 | 搭建 Astro 静态站并部署 | ✅ 完成 |
| 4 | 产出 20 篇原创内容 | ✅ 完成 |
| 5 | 申请 AdSense | 🔄 已提交，等待审核（几天~2周） |
| 6 | 填 W-8BEN + 绑定收款 | ⬜ 等审核通过后做 |
| 7 | 持续更新内容等流量 | ⬜ 进行中 |

**审核通过后的下一步（任务 6）**：
1. 填 **W-8BEN 税务表**（中美税收协定，降低预扣税率）。
2. 绑定**收款方式**（需能收 AdSense 美元的银行账户，满 $100 起付）。

**持续运营建议**：等审核期间继续加新文章（Google 喜欢活跃增长的站）；可补 favicon；后续关注 Search Console 收录。

---

## 10. 常用命令速查

```bash
npm run dev                 # 本地开发
npm run build               # 构建（检查页面生成情况）
git status && git log --oneline -10   # 看状态/历史
git push origin master      # 部署（触发 Cloudflare）
```

查询物品图标：`items.json`（项目根目录）。
