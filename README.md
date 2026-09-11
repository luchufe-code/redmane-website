# 红马文化 · 官方网站

纯静态站点，零依赖、零构建步骤。`public/` 目录即站点根目录，直接托管到
GitHub Pages 即可。

## 目录结构

```
public/                     ← 站点根目录（发布这个目录）
  index.html                页面：首屏 / 关于我们 / 业务板块 / 联系我们
  styles.css                样式（配色、排版、响应式都在这里）
  script.js                 最小脚本：移动端导航 + 页脚年份
  assets/
    logo-mark.webp            主标志（已裁掉原图多余留白）
    logo-mark.png             同上的 PNG 备份
    logo-full.webp            原始整幅标志
    favicon-32.png            站点图标
    apple-touch-icon.png      添加到主屏时的图标
    og-image.png              社交分享卡片
README.md
.gitignore
```

## 本地预览

```bash
# Node
npx serve public

# 或 Python 3
python -m http.server 8080 --directory public
```

> 直接双击 `public/index.html` 也能看，但用本地服务器更接近线上效果。

## 部署到 GitHub Pages

本站用 GitHub Pages 自带的「从分支目录发布」，**不需要任何工作流文件**：

1. 打开仓库 **Settings → Pages**
2. **Source** 选 **`Deploy from a branch`**（不要选 GitHub Actions）
3. **Branch** 选 **`main`**，目录选 **`/public`**
4. 点 **Save**，等 1–2 分钟
5. 访问 **https://luchufe-code.github.io/redmane-website/**

站点发布在子路径 `/redmane-website/` 下，站内所有资源都用相对路径，无需额外配置。

> 若之后绑定自定义域名，在 `public/` 下新建一个 `CNAME` 文件，内容填域名即可。

## 品牌视觉

- 标志为**黑白单色**（原始文件 2048×2048、白底、黑色图形），因此整站走
  「墨色 + 米白」的极简纸感。
- 色板集中在 `public/styles.css` 的 `:root`：

  | 变量 | 值 | 用途 |
  | --- | --- | --- |
  | `--ink` | `#1E1C1A` | 正文与标志 |
  | `--paper` | `#F6F3EE` | 页面底色 |
  | `--accent` | `#B0392B` | 朱红强调色（按钮、标题短横、悬停） |

- **换强调色只改 `--accent` 一处**，相关元素会一起变。
- 首屏标志放在白色卡片上，是因为原图自带白底，避免与米白页面撞出一块突兀的方块。

## 待补充内容

代码里已用 `TODO` 注释标出，搜索 `TODO` 即可定位：

| 位置 | 需要替换为 |
| --- | --- |
| `public/index.html` 首屏 `lede` | 一句品牌定位语 |
| `#about` 两段 | 公司真实简介 |
| `#services` 三张卡片 | 真实业务板块 |
| `#contact` | 邮箱、电话、地址 |

## 浏览器支持

现代浏览器（Chrome / Edge / Safari / Firefox 近两年版本）。
样式用到 `color-mix()` 与 `backdrop-filter`，旧浏览器会降级为不透明背景，不影响阅读。
