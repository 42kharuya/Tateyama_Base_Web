import type { Metadata } from "next";
import { Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKakuGothic = Zen_Kaku_Gothic_New({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TATEYAMA BASE 北条 | 公式サイト",
    template: "%s | TATEYAMA BASE 北条",
  },
  description:
    "千葉県館山市北条の貸別荘『TATEYAMA BASE 北条』公式サイト。渋滞回避のベースキャンプとして、ゴルフ・SUPなど館山の遊びを起点にした滞在を提案します。",
  keywords: [
    "館山 貸別荘",
    "館山カントリークラブ 宿泊",
    "北条海岸 夕日",
    "TATEYAMA BASE",
    "千葉 ゴルフ 前泊",
  ],
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: "TATEYAMA BASE 北条 | 公式サイト",
    description:
      "館山を遊び尽くす、大人のベースキャンプ。最大8名・高速Wi‑Fi・EVコンセント・スマートロック。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenKakuGothic.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
