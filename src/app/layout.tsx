import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://banz-ai.jp"),
  title: "banz-AI | 対面講師派遣型 Google Workspace × Gemini 実践AI研修",
  description: "いつものGoogle Workspaceが、明日から最強のAIアシスタントに変わる。貴社オフィスへプロ講師が直接訪問し、実務フローに合わせてGeminiの活用を現場に定着させる対面ハンズオンAI研修「banz-AI」。Claude CodeやChatGPT研修も対応。",
  keywords: ["banz-AI", "Google Workspace研修", "Gemini研修", "AI研修 対面", "企業向けAI研修", "講師派遣", "Claude Code研修", "DX推進"],
  openGraph: {
    title: "banz-AI | 対面講師派遣型 Google Workspace × Gemini 実践AI研修",
    description: "既存のGoogle環境を活かし、社員全員が明日から即実践できる超実務型AI研修。無料相談・30秒削減診断実施中。",
    images: ["/banz-ai-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#FDFDFD] text-slate-800 antialiased selection:bg-orange-100 selection:text-orange-900`}>
        {children}
      </body>
    </html>
  );
}
