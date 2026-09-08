# Subata Wiki

基于 [VuePress](https://vuepress.vuejs.org/) 和 [vuepress-theme-hope](https://theme-hope.vuejs.press/) 的游戏攻略与汉化 Wiki。

## 本地开发

```bash
pnpm install
pnpm run docs:dev
```

## 构建

```bash
pnpm run build
```

构建产物输出到 `src/.vuepress/dist/`，由 GitHub Actions 自动部署到 `gh-pages` 分支。

## 项目结构

- `src/`：Markdown 内容源文件
  - `main/`、`base/`、`deep/`、`tools/`、`daily/`、`fight/`、`special/`、`manufacture/`、`other/`：文章板块
  - `template/`：面向贡献者的创作指南
  - `subatamd/`：启动器文档
- `src/.vuepress/`：主题、导航栏、侧边栏及自定义组件

## 贡献

编写新文章前，请先阅读 [创作指南](src/template/start.md)，并遵守 [书写原则](src/template/rules.md)。

## 许可证

[MIT](./LICENSE)