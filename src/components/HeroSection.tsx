"use client";

import { Sparkles, Calendar, ArrowRight, ShieldCheck, Award, Building2, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenDiagnosis: () => void;
}

export default function HeroSection({ onOpenBooking, onOpenDiagnosis }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-zinc-100">
      {/* Subtle radial ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-orange pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Location & Focus Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50/80 px-3.5 py-1 text-xs font-bold text-red-800 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-red-600"></span>
            岡山でGoogle Workspace・Gemini活用なら
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 text-white px-3 py-1 text-xs font-semibold">
            Google AI Professional 認定講師
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white text-zinc-800 px-3 py-1 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
            Google Workspace Standard 導入企業様に最適
          </span>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.16]">
            社内のGoogle Workspaceが、<br className="hidden sm:inline" />
            明日から<span className="text-red-600">最強のAIアシスタント</span>に変わる。
          </h1>
          
          <p className="mt-6 text-base sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto font-normal">
            動画を見るだけ・講義を聞くだけの研修はもう終わり。<br className="hidden sm:inline" />
            <strong className="font-semibold text-zinc-900">Google認定プロフェッショナル × 自社（FUSHITANI株式会社）でもStandardをフル活用</strong>しているからこそ、
            机上の空論ではない「現場で本当に時短できるノウハウ」を、岡山の貴社オフィスで対面伴走いたします。
          </p>
        </div>

        {/* Dual CTA */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 active:scale-98"
          >
            <Calendar className="w-5 h-5" />
            <span>【無料】プラン・お見積り相談</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDiagnosis}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-4 text-sm font-bold text-zinc-800 shadow-xs transition hover:bg-zinc-50 hover:border-zinc-400"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>30秒AI削減診断</span>
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-zinc-400">
          ※ 押し売り・無理な営業は一切ございません。現在の業務課題をお気軽にお聞かせください。
        </p>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3.5 border border-zinc-200">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">Google公式認定</div>
              <div className="text-sm font-bold text-zinc-950">AI Professional</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3.5 border border-zinc-200">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-200 text-zinc-800">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">支援実績</div>
              <div className="text-sm font-bold text-zinc-950">6社 / 約60名受講</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3.5 border border-zinc-200">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-200 text-zinc-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">岡山オフィス訪問</div>
              <div className="text-sm font-bold text-zinc-950">県内全域対面対応</div>
            </div>
          </div>
        </div>

        {/* Showcase Cards */}
        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-xl shadow-zinc-100">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4 px-2">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="ml-2 text-xs font-mono text-zinc-400">Google Workspace Standard × Gemini in Action</span>
            </div>
            <div className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
              FUSHITANI株式会社 自社実践実証済み
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition hover:border-red-300 hover:bg-white">
              <span className="text-xs font-bold text-red-700 bg-red-100/70 px-2 py-0.5 rounded">
                Gmail & Docs
              </span>
              <h3 className="text-sm font-bold text-zinc-900 mt-2">メール返信＆報告書・議事録の即時作成</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                長文スレッドの要約から丁寧な返信文案作成まで、Geminiサイドパネルで数秒で生成。文章作成に悩む時間をゼロへ。
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition hover:border-red-300 hover:bg-white">
              <span className="text-xs font-bold text-zinc-800 bg-zinc-200 px-2 py-0.5 rounded">
                Google Sheets
              </span>
              <h3 className="text-sm font-bold text-zinc-900 mt-2">関数作成・集計・データ分析の自動化</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                「商品別の売上推移を出して」と日本語で指示するだけで数式やテーブルが完成。VLOOKUP等で詰まる心配もありません。
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition hover:border-red-300 hover:bg-white">
              <span className="text-xs font-bold text-zinc-800 bg-zinc-200 px-2 py-0.5 rounded">
                Slides & Custom
              </span>
              <h3 className="text-sm font-bold text-zinc-900 mt-2">プレゼン骨子作成 ＆ 先端AIツール拡張</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                企画概要からスライド構成を一気に作成。技術者向けには話題のClaude Code実践カリキュラムもご用意しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
