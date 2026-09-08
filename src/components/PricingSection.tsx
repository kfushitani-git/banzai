"use client";

import { Check, ArrowRight, Coins } from "lucide-react";

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const plans = [
    {
      name: "1Day 集中ワークショップ",
      tagline: "まずは短時間で基本操作をマスターし、効果を実感したいチームに",
      badge: "手軽にスタート",
      highlight: false,
      features: [
        "対面オフィス派遣 1日完結（約5〜6時間）",
        "受講人数：少人数チーム〜ご相談",
        "Google Workspace × Gemini 基礎〜実践演習",
        "Gmail・ドキュメント・スプレッドシート即効活用",
        "受講者全員分の演習テキスト・プロンプト集提供",
        "研修後2週間のQ&Aメールサポート",
      ],
      ctaText: "このプランで見積もり・相談",
    },
    {
      name: "現場定着 スタンダードコース",
      tagline: "全3回の実践サイクルで、自社業務にAIを完全定着させる一番人気のプラン",
      badge: "★ 一番人気",
      highlight: true,
      features: [
        "対面オフィス派遣 全3回（隔週開催・各回3時間）",
        "受講人数：〜25名程度まで（複数部署推奨）",
        "貴社の実際の業務フロー・雛形に合わせた実践ワーク",
        "スプレッドシート高度集計・スライド資料作成の自動化",
        "社内プロンプト共有ライブラリの構築支援",
        "研修期間中（1ヶ月）のチャット質問し放題サポート",
        "受講後効果測定レポートのご提出",
      ],
      ctaText: "スタンダードプランで見積もり・相談",
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-800 mb-3">
            プラン・お見積り
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            受講人数や課題に合わせた<br />
            <span className="text-orange-600">柔軟な研修プラン</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            受講人数、対象部門、ご希望の日程に合わせて個別にお見積書を作成いたします。<br className="hidden sm:inline" />
            まずはお気軽な無料相談にてご要望をお聞かせください。
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs text-zinc-700">
            <span className="font-bold text-orange-600">推奨環境:</span>
            <span>弊社も社内で活用している「Google Workspace Business Standard」導入企業様に最適です</span>
          </div>
        </div>

        {/* 2 Plans Grid (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.highlight
                  ? "border-2 border-orange-500 bg-white shadow-xl shadow-orange-500/10 ring-1 ring-orange-500"
                  : "border border-zinc-200 bg-white shadow-sm hover:border-zinc-300"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-xs">
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.highlight && (
                  <span className="inline-block text-xs font-bold text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full mb-2">
                    {plan.badge}
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-zinc-900 mt-1">
                  {plan.name}
                </h3>
                <p className="mt-2 text-xs text-zinc-500 min-h-[32px] leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="mt-4 border-y border-zinc-100 py-3.5">
                  <div className="text-xs font-bold text-orange-600">
                    料金：要お問い合わせ（無料お見積り）
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    ※ 受講人数・回数・カスタマイズ内容に応じて最適なお見積りをご提示します
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs ${
                    plan.highlight
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subsidy Note (Monochrome + Orange) */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 text-orange-600 shrink-0">
            <Coins className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h4 className="text-sm sm:text-base font-bold text-zinc-900">
              助成金・補助金を活用した研修実施のご相談も可能です
            </h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              厚生労働省の「人材開発支援助成金（人への投資促進コース／リスキリング支援）」などを活用することで、研修費用の最大75%相当の助成を受けられる可能性があります。申請要件や手続きのご相談もお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
