# 红马文化 · 官方网站

纯静态站点，零依赖、零构建步骤。**仓库根目录即站点根目录**，GitHub Pages 直接发布。

## 目录结构

```
index.html                页面：首屏 / 关于我们 / 业务板块 / 联系我们
styles.css                样式（配色、排版、响应式）
script.js                 最小脚本：移动端导航 + 页脚年份
.nojekyll                 告诉 GitHub Pages 不要用 Jekyll 处理
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
npx serve .

# 或 Python 3
python -m http.server 8080
```

> 直接双击 `index.html` 也能看，但用本地服务器更接近线上效果。

## 部署到 GitHub Pages

1. 仓库 **Settings → Pages**
2. **Source** 选 **`Deploy from a branch`**
3. **Branch** 选 **`main`**，目录选 **`/ (root)`**
4. 点 **Save**，等 1–2 分钟
5. 访问 **https://luchufe-code.github.io/redmane-website/**

> `.nojekyll` 已存在，确保 Pages 不启用 Jekyll——否则它会把 README.md 渲染成首页，
> 而真正的 index.html 反而不会被使用。

## 品牌视觉

- 标志为**黑白单色**（原始文件 2048×2048、白底、黑色图形），因此整站走
  「墨色 + 米白」的极简纸感。
- 色板集中在 `styles.css` 的 `:root`：

  | 变量 | 值 | 用途 |
  | --- | --- | --- |
  | `--ink` | `#1E1C1A` | 正文与标志 |
  | `--paper` | `#F6F3EE` | 页面底色 |
  | `--accent` | `#B0392B` | 朱红强调色（按钮、标题短横、悬停） |

- **换强调色只改 `--accent` 一处**，相关元素会一起变。
- 首屏标志放在白色卡片上，因为原图自带白底，避免与米白页面撞出一块突兀的方块。

## 待补充内容

搜索 `TODO` 即可定位：

| 位置 | 需要替换为 |
| --- | --- |
| `index.html` 首屏 `lede` | 一句品牌定位语 |
| `#about` 两段 | 公司真实简介 |
| `#services` 三张卡片 | 真实业务板块 |
| `#contact` | 邮箱、电话、地址 |
