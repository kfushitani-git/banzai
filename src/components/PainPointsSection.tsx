"use client";

import { AlertCircle, X, ArrowDown } from "lucide-react";

export default function PainPointsSection() {
  const pains = [
    {
      title: "Google Workspaceを契約しているのに、Geminiが活用されていない",
      desc: "ライセンスはあるものの、社内への使い方の周知や教育がなく、従来のやり方のまま業務を続けてしまっている。",
      tag: "ツールの宝の持ち腐れ",
    },
    {
      title: "オンライン動画研修を導入したが、現場に定着しなかった",
      desc: "「忙しくて受講する時間がない」「自分の実務にどう活かせばいいか分からない」と放置され、成果につながらなかった。",
      tag: "学習の形骸化",
    },
    {
      title: "メール作成・議事録・集計作業で一日が終わってしまう",
      desc: "定型的な事務作業や資料作成に追われ、本来注力すべき企画や商談、顧客対応などのコア業務に時間を割けていない。",
      tag: "ルーティン業務の圧迫",
    },
    {
      title: "セキュリティや社内規定が心配で、AI活用に踏み切れない",
      desc: "「社内機密情報がAIの学習に使われてしまうのでは？」という不安や、情シスとの調整ハードルが高く足踏みしている。",
      tag: "ガバナンスへの不安",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3.5 py-1 text-xs font-bold text-red-400 mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            岡山県内の企業様からよくいただくご相談
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            多くの企業が「AIを導入しただけ」で<br />
            <span className="text-red-500">現場の活用が進まない壁</span>に直面しています
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            最新ツールを契約しても、現場の社員が「自分の業務でどう使うか」を体感しなければ定着しません。
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {pains.map((pain, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 transition hover:border-zinc-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-red-500 border border-zinc-700">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/50 mb-2">
                    {pain.tag}
                  </span>
                  <h3 className="text-base font-bold text-zinc-100 leading-snug">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pain.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold text-red-400 mb-2">
              そのお悩み、FUSHITANIのAI研修が対面ハンズオンで解決します
            </span>
            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-red-500 border border-zinc-800 animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
