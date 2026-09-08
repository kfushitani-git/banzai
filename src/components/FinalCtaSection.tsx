"use client";

import { Calendar, Sparkles, ArrowRight, Check } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
  onOpenDiagnosis: () => void;
}

export default function FinalCtaSection({ onOpenBooking, onOpenDiagnosis }: FinalCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3.5 py-1 text-xs font-bold text-red-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          岡山でGoogle Workspace・Gemini研修なら
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          「AIを導入したけれど使われない」を、<br />
          <span className="text-red-500">「全社員が当たり前に使いこなす」</span>へ。
        </h2>

        <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          プロ講師がオフィスへ訪問し、受講者の画面を見ながら手厚く伴走します。<br className="hidden sm:inline" />
          まずはお気軽な無料相談・ヒアリングからお声がけください。
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white hover:bg-red-700 active:scale-95 transition"
          >
            <Calendar className="w-4 h-4" />
            無料相談・お見積り依頼
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDiagnosis}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-4 text-xs sm:text-sm font-bold text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            30秒診断を試す
          </button>
        </div>

        {/* Reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-red-400 stroke-[3]" />
            岡山県内オフィスへの講師訪問対応
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-red-400 stroke-[3]" />
            強引なセールス・勧誘一切なし
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-red-400 stroke-[3]" />
            助成金活用のご相談も可能
          </span>
        </div>
      </div>
    </section>
  );
}
