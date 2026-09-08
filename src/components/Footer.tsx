"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 text-zinc-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-zinc-100">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="relative h-10 w-44">
              <Image
                src="/fushitani-ai-logo.png"
                alt="FUSHITANI AI支援"
                width={173}
                height={50}
                className="object-contain object-left"
              />
            </div>
            <p className="text-zinc-500 text-xs text-center md:text-left leading-relaxed">
              岡山の中小企業向け 対面型 Google Workspace × Gemini 実践AI研修<br />
              <span className="text-zinc-700 font-semibold">運営会社：FUSHITANI株式会社（FUSHITANI Co., Ltd.）</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-zinc-600 font-medium">
            <Link href="/#seminar" className="hover:text-red-600 transition">無料セミナー</Link>
            <Link href="/#handson" className="hover:text-red-600 transition">対面研修の強み</Link>
            <Link href="/#curriculum" className="hover:text-red-600 transition">カリキュラム</Link>
            <Link href="/#pricing" className="hover:text-red-600 transition">プラン</Link>
            <Link href="/#faq" className="hover:text-red-600 transition">FAQ</Link>
            <Link href="/privacy" className="hover:text-red-600 transition">プライバシーポリシー</Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p className="text-center md:text-left">
            ※ Google、Google Workspace、Gemini、Gmail は Google LLC の商標または登録商標です。<br className="hidden sm:inline" />
            ※ Claude は Anthropic PBC、ChatGPT は OpenAI OpCo, LLC の商標です。
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} FUSHITANI Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
