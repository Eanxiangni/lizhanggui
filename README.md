# 狸掌柜 AI 本地商户营销平台官网

这是一个基于 `Next.js + Tailwind CSS` 搭建的官网项目，定位为面向本地商户的 AI 设计与营销平台。

当前版本已经包含一套可直接继续开发和展示的官网基础：

- 高级感响应式官网首页
- 前端模拟的 AI 营销物料生成器
- 工作台入口页
- 后台入口页
- Mock API 路由
- 基础 UI 组件体系

## 技术栈

- Next.js
- React
- Tailwind CSS
- shadcn/ui 风格组件结构
- TypeScript

## 当前包含的页面

- `/` 官网首页
- `/workspace` 工作台入口
- `/admin` 后台入口

## AI 演示区功能

首页内置前端模拟 AI 营销物料生成器，用户可以：

- 选择行业：餐饮、茶饮、美容、培训、服装
- 选择活动类型：开业、满减、节日促销、新品上市、会员活动
- 输入店铺名称

点击后会模拟生成：

- 活动标题
- 朋友圈文案
- 海报文案
- 短视频脚本
- 营销建议

## 本地启动

在项目目录执行：

```bash
npm install
npm run dev
```

启动后打开：

```bash
http://localhost:3000
```

如果你在 Windows PowerShell 下遇到 `npm.ps1` 执行限制，可以改用：

```bash
"C:\Program Files\nodejs\npm.cmd" install
"C:\Program Files\nodejs\npm.cmd" run dev
```

## 生产打包

```bash
npm run build
npm run start
```

## 目录结构

```bash
app/
  page.tsx
  workspace/page.tsx
  admin/page.tsx
  api/
components/
  sections/
  ui/
lib/
  mock-data.ts
  types.ts
  utils.ts
```

## 后续建议

1. 把联系表单接到真实提交接口
2. 把 AI 演示区升级为真实 API 调用
3. 增加案例详情页、价格详情页和登录注册页
4. 继续把工作台能力迁入正式 Next.js 页面
