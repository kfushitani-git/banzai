import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://ai-kenshu.fushitanix.co.jp";
const SITE_NAME = "FUSHITANI AI支援";
const TITLE =
  "岡山のAI研修 | Google Workspace × Gemini 対面実践 | FUSHITANI株式会社";
const DESCRIPTION =
  "岡山の中小企業向けに、Google Workspace × Gemini の対面実践AI研修を提供。プロ講師が貴社オフィスへ直接訪問し、実務フローに合わせてAI活用を現場に定着させます。Claude Code・ChatGPT研修にも対応。運営：FUSHITANI株式会社（岡山）。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI研修 岡山",
    "Gemini研修 岡山",
    "Google Workspace研修",
    "生成AI研修 岡山",
    "企業向けAI研修",
    "対面 AI研修 講師派遣",
    "Claude Code研修",
    "FUSHITANI株式会社",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    title: TITLE,
    description:
      "岡山の中小企業向け 対面実践AI研修。既存のGoogle Workspaceを活かし、社員全員が明日から使える状態へ。無料相談・30秒削減診断を実施中。",
    images: ["/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/ogp.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FUSHITANI株式会社",
      alternateName: "FUSHITANI AI支援",
      url: SITE_URL,
      logo: `${SITE_URL}/fushitani-ai-logo.png`,
      founder: { "@type": "Person", name: "伏谷健太郎" },
      areaServed: { "@type": "AdministrativeArea", name: "岡山県" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ja",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      serviceType: "対面実践AI研修（Google Workspace × Gemini）",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "AdministrativeArea", name: "岡山県" },
      description: DESCRIPTION,
      audience: { "@type": "BusinessAudience", name: "中小企業" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#FDFDFD] text-slate-800 antialiased selection:bg-red-100 selection:text-red-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
