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
├── src/content.config.ts     # guides 集合定义（Content Layer API）
├── src/content/guides/*.md   # 所有攻略文章（20 篇）
├── src/layouts/Base.astro    # 全局布局（含 <head>、AdSense 代码、导航、页脚）
├── src/pages/
│   ├── index.astro           # 首页：列出非 draft 文章（按 pubDate 倒序）
│   ├── guides/[slug].astro   # 文章详情页（getStaticPaths 过滤 draft）
│   ├── about.astro           # AdSense 要求的 About 页
│   ├── privacy.astro         # AdSense 要求的隐私政策页（含 AdSense cookie 披露）
│   └── contact.astro         # 联系页
├── src/styles/global.css     # 全局样式
├── public/images/items/      # 1454 张 wiki 物品图标（48x48）
├── items.json                # 物品索引：{name, image, category}（1454 条）
└── dist/                     # 构建产物（gitignore，本地生成）
```

---

## 4. 内容工作流（重要）

**核心机制**：`draft` frontmatter 字段控制发布。`draft: true` 的文章**不构建、不显示**；翻成 `draft: false`（或删掉该字段）即发布。

### 新增一篇文章

1. 在 `src/content/guides/` 新建 `xxx.md`（文件名即 URL slug，用 `-` 连接小写词）。
2. 写 frontmatter：

```yaml
---
title: "标题"
description: "一句话描述（用于 SEO 和列表卡片）"
pubDate: 2026-10-21
category: "Farming"        # 任意分类字符串
tags: ["crops", "money"]   # 任意标签数组
draft: true                # 写稿时 true，审核通过后改 false
---
```

3. 正文用标准 Markdown（标题、表格、列表、引用 `>`、粗体等）。

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

3. **`draft` 过滤**在 `src/pages/guides/[slug].astro`（getStaticPaths）和 `index.astro` 两处都用 `!data.draft` 过滤，改一处逻辑要同步考虑另一处。

4. **版权红线**：
   - 中文攻略的**行文/措辞**受版权保护，**禁止逐句翻译**发布（衍生作品侵权 + AdSense"非原创/采集内容"违规）。
   - 正确做法：只取**事实**（价格、位置、数值、机制——不受版权保护），用**自己的英文**重写。
   - wiki 文本是 CC BY-NC-SA（非商业）；游戏 sprite 版权归 ConcernedApe。当前图标用于"科普配图"，同类站普遍在用；若 AdSense 因内容/版权被拒，可逐步替换为原创图。

5. **AdSense 代码**在 `src/layouts/Base.astro` 的 `<head>` 里（全站生效）。审核期间不要改动、不要删文。

---

## 8. 当前状态（截至 2026-10-21）

- ✅ 域名 + HTTPS + Cloudflare 部署完成，`stardewtips.com` 可访问
- ✅ **20 篇原创英文攻略已全部发布**（`draft: false`），全部内嵌物品图标
- ✅ 1454 张 wiki 物品图标 + `items.json` 索引已入库
- ✅ AdSense 代码已上线，**已提交 AdSense 审核（等待结果）**
- ⬜ favicon 还是 Astro 默认的，未替换

已完成的里程碑 git 提交：
```
ec2fd29 Publish 19 original guide articles
6286339 Add item icons and use them in the Spring crop guide
1602e65 Add Google AdSense auto ads script to site head
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
