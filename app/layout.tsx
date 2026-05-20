import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "狸掌柜 | 本地商户 AI 设计与营销平台",
  description: "面向本地商户的 AI 设计与营销平台，帮助门店快速生成海报、文案、活动图、短视频脚本与营销方案。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
