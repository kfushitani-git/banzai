"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "岡山市や倉敷市など、岡山県内のオフィスに対面で来てくれますか？",
      a: "はい、岡山市・倉敷市・津山市・総社市など岡山県内全域のオフィスへ講師が直接訪問いたします。また、他県（広島・香川・関西圏・全国）への出張訪問やオンラインとのハイブリッド開催も承っております。",
    },
    {
      q: "ITツールやパソコン操作が苦手な社員がいてもついていけますか？",
      a: "はい、全く問題ありません。banz-AIの研修は「プログラミング知識ゼロ」を前提に設計されています。講師が受講者のPC画面を見ながら寄り添ってサポートするため、置いてけぼりになる心配がありません。",
    },
    {
      q: "Google Workspaceの契約プランはどのエディションが必要ですか？",
      a: "運営会社であるFUSHITANI株式会社自身も、社内実務で【Google Workspace Business Standard】を導入・フル活用しております。そのため、同プランをご契約中の企業様には、自社で実証済みのノウハウをそのまま最もスムーズにご導入いただけます。なお、Business StarterやPlusなど他エディションをお使いの場合も柔軟に対応いたしますので、現在のご利用環境をお気軽にお知らせください。",
    },
    {
      q: "Claude CodeやChatGPT、Copilotの研修もお願いできますか？",
      a: "はい、対応可能です。Google Workspace × Geminiを主力としつつ、エンジニア向け「Claude Code実践開発」や全社向け「ChatGPTプロンプト活用」など、お客様のご要望に応じたハイブリッド構成の研修も柔軟に提供しております。",
    },
    {
      q: "社内の機密データがAIの学習に使われてしまうリスクはありませんか？",
      a: "Google WorkspaceのGemini（ビジネス向け）は、お客様の企業データ、プロンプト、入力内容をモデルの学習に利用しない規約となっております。研修内でもセキュリティ設定の確認と、安全な社内運用ガイドラインの策定まで徹底してサポートいたします。",
    },
    {
      q: "問い合わせから最短どれくらいで研修を実施できますか？",
      a: "最短2週間〜1ヶ月程度での開催が可能です。カリキュラムの調整や日程の空き状況によりますので、まずはお気軽にご相談ください。",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-800 mb-3">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            よくあるご質問
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            研修の導入に関して多くいただくご質問にお答えします。
          </p>
        </div>

        {/* FAQ Accordion List (Black, White, Orange) */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 bg-white transition-all overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-700 text-xs font-black">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-orange-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3.5 bg-zinc-50/50">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-200 text-zinc-800 text-xs font-black">
                        A
                      </span>
                      <p className="mt-0.5">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
