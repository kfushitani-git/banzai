"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenDiagnosis: () => void;
}

export default function Navbar({ onOpenBooking, onOpenDiagnosis }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "特長", href: "#features" },
    { name: "セミナー", href: "#seminar" },
    { name: "研修の強み", href: "#handson" },
    { name: "カリキュラム", href: "#curriculum" },
    { name: "プラン", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-10 w-40 sm:w-52 flex items-center">
            <Image
              src="/fushitani-ai-logo.png"
              alt="FUSHITANI AI支援"
              width={207}
              height={60}
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="hidden xl:flex flex-col border-l border-zinc-200 pl-3">
            <span className="text-[11px] font-bold text-red-600 tracking-wide">
              岡山特化・対面講師派遣型
            </span>
            <span className="text-xs font-semibold text-zinc-700">
              Google Workspace × Gemini 実践AI研修
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-red-600 hover:font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDiagnosis}
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-50/60 px-4 py-2 text-xs font-bold text-red-700 transition hover:bg-red-100"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            30秒診断
          </button>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-red-600 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            無料相談・お見積り
          </button>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-600 hover:text-zinc-900 focus:outline-none"
              aria-label="メニュー開閉"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-200 bg-white px-5 py-5 shadow-lg">
          <nav className="flex flex-col gap-3.5 text-sm font-medium text-zinc-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-red-600 border-b border-zinc-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDiagnosis();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-red-300 bg-red-50 py-2.5 text-xs font-bold text-red-700"
              >
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                30秒AI活用度を無料診断する
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white"
              >
                <Calendar className="w-4 h-4" />
                無料相談・お見積りを予約する
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
