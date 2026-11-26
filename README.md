# Michelle · 影像作品集

这是个人作品集的第一版。尚未提供真实影片、个人履历或联系方式，因此页面暂用 Michelle 作为名称，以诚实的空作品状态展示结构与视觉方向。

深色电影感的单页设计，适用于 GitHub Pages。纯 HTML、CSS 和 JavaScript，无需安装依赖或构建。

## 当前内容

- 顶部导航和「浏览作品」会跳转至对应区块。
- 「精选作品」目前显示整理中的提示，没有虚构影片、经历或项目职务。
- 「联系」跳转至页尾 GitHub 主页链接；尚未添加邮箱。
- 首页海岸图为 AI 生成的氛围视觉，不代表真实作品剧照，页面已标注来源。

## 文件

- `index.html`：页面结构、标题、关于与页尾文案。
- `styles.css`：配色、字体、桌面与手机布局。
- `portfolio-data.js`：姓名、简介、GitHub 地址和作品列表。
- `script.js`：读取个人资料与作品列表，以及尊重系统减少动态效果偏好的淡入动画。
- `coast.webp`：首页海岸氛围图。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

## 修改个人资料

打开 `portfolio-data.js`，修改 `displayName`（页眉英文名称）、`name`（正文姓名）、`intro`（首页短句）及 `githubUrl`。目前使用 Michelle 作为第一版名称，可随时替换。

关于区的正文位于 `index.html`。如需添加邮箱，可在页尾新增 `mailto:` 链接，并使用你希望公开的真实地址。页面标题会跟随 `name` 更新，搜索引擎简介在 `index.html` 的 `meta description` 中修改。

`reelUrl` 是留给未来 showreel 的字段，当前为 `null`，不会生成播放器或播放按钮。

## 添加真实作品

把封面放入网站目录，再把真实信息添加到 `portfolio-data.js` 的 `projects` 数组。例如下面所有文字都是待替换的字段说明，不是实际作品：

```js
projects: [
  {
    title: "替换为真实作品名称",
    year: "替换为年份",
    role: "替换为你实际担任的职务",
    description: "替换为简短的真实作品介绍。",
    thumbnail: "替换为封面文件名.webp",
    thumbnailAlt: "替换为封面画面的简短描述",
    url: "https://替换为可公开访问的作品链接",
  },
],
```

只需要 `title`，其他字段都可以省略。省略封面时，作品会使用纯文字排版。省略链接时，不显示观看入口。添加作品后，「作品正在整理中」会自动替换为作品列表。

封面建议使用 16:9 的 JPG 或 WebP。上传后检查文件名大小写是否与配置完全一致。网页使用相对文件路径，可直接放在 GitHub Pages 的仓库子路径中。

如果关闭 JavaScript，当前静态页面仍可阅读与导航；新增作品列表需要 JavaScript 渲染。

## 发布到 GitHub Pages

把本目录的**全部内容**上传到仓库根目录，包括 `.nojekyll` 和 `coast.webp`。在 GitHub 仓库的 **Settings → Pages** 中，使用 **Deploy from a branch**，选择包含这些文件的分支及 **/ (root)**。保存后等待 GitHub Pages 发布完成。

修改文件并提交到同一发布分支后，GitHub Pages 会更新网站。自定义域名可在以后通过 Pages 设置添加。

## 设计与可访问性

桌面采用错位的大标题与海岸图片，手机端按标题、图片、内容的顺序排列。字体优先使用设备自带的宋体与衬线字体，不加载第三方字体服务。页面包含键盘焦点、跳转主内容入口、语义区块和减少动态效果支持。
