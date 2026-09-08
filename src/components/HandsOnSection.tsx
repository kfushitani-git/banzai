"use client";

import { Users2, Laptop, FileCheck2, ShieldCheck, Check, ArrowRight, Building } from "lucide-react";

interface HandsOnSectionProps {
  onOpenBooking: () => void;
}

export default function HandsOnSection({ onOpenBooking }: HandsOnSectionProps) {
  const features = [
    {
      icon: Users2,
      badge: "01",
      title: "プロ講師が岡山県内の貴社オフィスへ直接訪問",
      desc: "オンライン動画やウェビナーのような一方通行ではありません。講師が受講者のPC画面を横から見ながら、プロンプトの書き方やつまずきをその場で即座に解決します。",
      points: [
        "IT操作が苦手な社員も取り残さない手厚いフォロー",
        "社内の雰囲気や受講者の習熟度に合わせて進行ペースを柔軟調整",
        "その場で出た「この業務で使える？」という疑問に即答",
      ],
    },
    {
      icon: Laptop,
      badge: "02",
      title: "弊社も活用中！Google Workspace Standardに完全最適化",
      desc: "運営会社のFUSHITANI株式会社自身も「Google Workspace Business Standard」を日常の全業務でフル活用しています。同じプランを契約されている企業様なら、新しいSaaSの契約不要で、明日からすぐにGeminiを活用できます。",
      points: [
        "自社で実践・検証済みの「本当に効果が出る実務プロンプト」だけを伝授",
        "ログインやツール導入の手間・追加の初期コストがゼロ",
        "研修翌日から、使い慣れたいつもの作業画面でそのまま実践できる",
      ],
    },
    {
      icon: FileCheck2,
      badge: "03",
      title: "貴社の「実際の業務フロー・雛形」を教材化",
      desc: "教科書的な架空の例文ではなく、事前にヒアリングした貴社の実際の見積書、定例会議の議事録、顧客宛メール、月次集計データなどを題材にして演習を実施します。",
      points: [
        "受講した瞬間に「明日から使える」自社専用プロンプトが完成",
        "部門別（営業・総務・経理・人事など）の具体的ユースケースに対応",
        "現場社員が『これなら自分でもすぐ時短できる』と実感",
      ],
    },
    {
      icon: ShieldCheck,
      badge: "04",
      title: "セキュリティ安心設計＆社内利用ルールの整備",
      desc: "経営層や情報システム部門が最も懸念する「機密情報漏洩リスク」や「AIモデルの学習利用問題」を解消。安全な設定手順と、社内プロンプト利用ポリシー策定までサポートします。",
      points: [
        "Google Cloudの法人セキュリティ基準に則った安全設定の確認",
        "個人情報・機密情報の入力NGガイドラインを徹底浸透",
        "情シス部門様向けの説明資料・社内ルール雛形のご提供",
      ],
    },
  ];

  return (
    <section id="handson" className="py-16 sm:py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold text-red-800 mb-3">
            対面研修の強み
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            なぜ、FUSHITANIのAI研修は<br />
            <span className="text-red-600">「岡山での対面・現場ハンズオン」</span>にこだわるのか？
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            知識をインプットするだけの講義ではなく、社員が手を動かし「できた！」という成功体験をオフィスで作るからこそ、確実に定着します。
          </p>
        </div>

        {/* 4 Core Features (Black, White, Orange) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-zinc-200 bg-white p-7 sm:p-8 shadow-xs hover:border-red-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-red-600 font-mono bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                      FEATURE {item.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-zinc-100 pt-4 mt-auto">
                  <ul className="space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Fit Highlight Box */}
        <div className="mt-12 rounded-3xl bg-zinc-50 border border-zinc-200 p-6 sm:p-7 max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500 text-white">
            <Building className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs font-bold text-red-600">受講対象企業様について</div>
            <h4 className="text-sm sm:text-base font-bold text-zinc-900 mt-0.5">
              特に「Google Workspace Business Standard」を導入済みの企業様に強く推奨しております
            </h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              弊社自身も全く同じStandardプランで日々の業務（メール・議事録・集計）を効率化しています。
              現場のリアルな運用感やつまずきポイントを熟知しているため、貴社環境に合わせた最短距離のAI活用をご提案できます。
            </p>
          </div>
        </div>

        {/* Local Callout Banner */}
        <div className="mt-6 rounded-3xl bg-zinc-900 p-7 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div>
            <div className="text-xs font-bold text-red-400 mb-1">
              岡山市・倉敷市をはじめ岡山県内全域対応
            </div>
            <h4 className="text-base sm:text-xl font-bold">
              「自社のオフィス・会議室でも開催できる？」まずはお気軽にご相談ください
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              受講人数や会議室のWi-Fi・プロジェクター環境に合わせた最適な開催形式をご提案します。
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-red-700 transition active:scale-95"
          >
            対面研修の相談・見積もり
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
