# 饮料测评图鉴 🥤

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-4.0-blue)](https://vitejs.dev/)
[![Preact](https://img.shields.io/badge/Preact-10.0-purple)](https://preactjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-blueviolet)](https://tailwindcss.com/)

**好喝难喝，一口见真章！** 

这是一个采用Neobrutalism风格的饮料测评Tier List网页

![网站截图](screenshot.png)

## 特点 ✨

- **Neobrutalism设计**：粗边框、鲜艳色彩、偏移阴影
- **Tier List布局**：S/A/B/C/D五级直观展示饮料评价
- **气泡小游戏**：点击气泡赢积分

## 技术栈 💻

- **框架**: [Preact](https://preactjs.com/) (轻量级React替代)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [TailwindCSS](https://tailwindcss.com/)
- **构建工具**: [Vite](https://vitejs.dev/)

## 安装与运行 🚀

```bash
# 克隆仓库
git clone https://github.com/chenxing-dev/drink-tier-list.git
cd drink-tier-list

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构 📁

```
beverage-tierlist/
├── src/
│   ├── components/     # Preact组件
│   │   ├── BubbleGameModal.tsx
│   │   ├── Header.tsx
│   │   ├── TierList.tsx
│   │   └── ...
│   ├── data/
│   │   └── drinks.ts   # 饮料数据
│   ├── index.tsx       # 应用入口
│   └── types.ts        # TypeScript类型定义
├── public/             # 静态资源
├── index.html          # 主HTML文件
├── README.md           # 项目文档
├── TODO.md             # 待办事项
└── vite.config.js      # Vite配置
```

## 贡献指南 🤝

欢迎贡献代码！请遵循以下步骤：

1. Fork 项目仓库
2. 创建新分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -am 'Add some feature'`)
4. 推送分支 (`git push origin feature/your-feature`)
5. 创建 Pull Request

## 许可证 📄

本项目采用 [MIT 许可证](LICENSE)
