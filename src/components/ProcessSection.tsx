"use client";

import { MessageSquareText, FileSpreadsheet, Users, Trophy } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: MessageSquareText,
      title: "無料オンライン相談・ヒアリング",
      desc: "現在のGoogle Workspace活用度や、効率化したい業務内容（メール・集計・資料作成など）、受講人数をお伺いします。（約30分）",
    },
    {
      num: "02",
      icon: FileSpreadsheet,
      title: "カリキュラム策定 & お見積り",
      desc: "ヒアリング内容に基づき、貴社の実際の業務に合わせたオーダーメイドのカリキュラムとお見積書をご提案します。（最短当日〜翌日）",
    },
    {
      num: "03",
      icon: Users,
      title: "岡山オフィス訪問・対面ハンズオン",
      desc: "プロ講師が貴社オフィスへ伺い、社員のPC画面を見ながら実践ワークショップを実施。その場で動くプロンプトと実務の仕組みを完成させます。",
    },
    {
      num: "04",
      icon: Trophy,
      title: "定着サポート・アフターフォロー",
      desc: "研修後も現場の疑問を解消できるよう、Q&A対応や自社専用プロンプト集の共有、受講後アンケート・効果測定レポートをご提供します。",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 relative border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-bold text-zinc-800 mb-3">
            実施の流れ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            お問い合わせから研修実施までの<br />
            <span className="text-red-600">シンプルな4ステップ</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            最短2週間でのスピード開催も可能。社内稟議に必要な資料作成もお手伝いいたします。
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-red-600 font-mono">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
