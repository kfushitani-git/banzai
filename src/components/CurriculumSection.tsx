"use client";

import { useState } from "react";
import { Mail, FileSpreadsheet, Presentation, Video, Code2, Bot, Check, Sparkles } from "lucide-react";

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<"google" | "custom">("google");

  const googleModules = [
    {
      step: "MODULE 01",
      icon: Sparkles,
      title: "Geminiの基礎と社内安全ガイドライン",
      badge: "導入・基本",
      desc: "AIの仕組みと、実務で外せないプロンプトの原則。社内機密を守るセキュリティルールと誤情報防止策を網羅。",
      items: [
        "生成AIのビジネス活用全体像とGeminiの強み",
        "社内情報漏洩を防ぐセキュアな設定とNGプロンプト",
        "指示通りに動かす「前提・制約・出力形式」のプロンプト構成術",
      ],
    },
    {
      step: "MODULE 02",
      icon: Mail,
      title: "Gmail & Google ドキュメント即効作成術",
      badge: "文章・作成",
      desc: "長文メールの要約、丁寧なお断り・お礼メールの自動ドラフト作成。企画書や報告書のドラフトを数秒で立ち上げる技を体得。",
      items: [
        "Gmailサイドパネルでの返信文・問い合わせ対応文の秒速生成",
        "Google Docsでの企画書・報告書構成案の作成",
        "社内トーン＆マナーに合わせた文章トーンの自動調整",
      ],
    },
    {
      step: "MODULE 03",
      icon: FileSpreadsheet,
      title: "Google スプレッドシート × AI データ分析",
      badge: "集計・分析",
      desc: "関数を覚える必要はありません。「店舗別の売上集計をして」と日本語で指示するだけで、適切な数式や集計テーブルを出力。",
      items: [
        "スマートな表作成と分類による業務シートの自動生成",
        "複雑なVLOOKUP・QUERY等の数式自動生成と解説",
        "CSV売上データの傾向分析・インサイト抽出の自動化",
      ],
    },
    {
      step: "MODULE 04",
      icon: Presentation,
      title: "Google スライド × AI プレゼン資料骨子作成",
      badge: "提案・発表",
      desc: "白紙のスライドから悩む時間をゼロに。企画概要からスライド構成・各ページのキーメッセージまで一気に生成。",
      items: [
        "提案書のストーリーライン（目次・構成）の瞬時作成",
        "スライドごとの箇条書き要約とスピーカーノートの生成",
        "プレゼンに適したビジュアルイメージ作成",
      ],
    },
    {
      step: "MODULE 05",
      icon: Video,
      title: "Google Meet & チーム協働・議事録自動化",
      badge: "会議・連携",
      desc: "長引く会議や定例ミーティングの生産性を向上。リアルタイムの要約・決定事項のタスク化・ネクストアクションの自動整理を実践。",
      items: [
        "Google Meetの自動議事録・要約機能の活用",
        "会議内容からToDoリストと担当者の自動抽出",
        "Google Chatでの情報共有・スマートリプライ連携",
      ],
    },
  ];

  const customModules = [
    {
      step: "CUSTOM 01",
      icon: Code2,
      title: "【カスタマイズ】Claude Code 実践・開発自動化コース",
      badge: "情シス・先進DX向け",
      desc: "Anthropicの最新CLIツール「Claude Code」を実務に導入。プログラミング、バグ調査、社内定常業務のスクリプト作成を劇的に効率化します。",
      items: [
        "Claude Codeのインストール・初期設定・権限管理",
        "ターミナルからのコード解析・リファクタリング実践",
        "GAS（Google Apps Script）等による社内定常業務の自動化",
      ],
    },
    {
      step: "CUSTOM 02",
      icon: Bot,
      title: "【カスタマイズ】ChatGPT / Microsoft Copilot 活用コース",
      badge: "マルチツール対応",
      desc: "すでにChatGPTやCopilotをお使いの企業様向けに、既存ツールとGoogle Workspaceを併用した社内業務の最適化を指導します。",
      items: [
        "社内専用プロンプト集の整備とチーム共有",
        "Excel / PowerPointでの効果的プロンプトテクニック",
        "GeminiとChatGPTの使い分け・適材適所ルールの策定",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-zinc-50 relative border-y border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-bold text-zinc-800 mb-3">
            カリキュラム
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            現場で即使えるスキルだけを凝縮した<br />
            <span className="text-red-600">実践型カリキュラム</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            受講者のITスキルに合わせて講義と演習の比率を柔軟に調整します。
          </p>

          {/* Tab Switcher (Monochrome + Orange) */}
          <div className="mt-7 inline-flex p-1 rounded-xl bg-zinc-200/80 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("google")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "google"
                  ? "bg-white text-zinc-950 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              【メイン】Google Workspace × Gemini
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "custom"
                  ? "bg-white text-zinc-950 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              【カスタマイズ】Claude Code / ChatGPT
            </button>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-3.5 max-w-5xl mx-auto">
          {(activeTab === "google" ? googleModules : customModules).map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col md:flex-row gap-5 items-start md:items-center justify-between hover:border-zinc-300 transition"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-xl bg-zinc-100 text-red-600 shrink-0 border border-zinc-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-black text-red-600">
                        {mod.step}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded">
                        {mod.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900">
                      {mod.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>

                {/* Checklist Items */}
                <div className="w-full md:w-72 shrink-0 bg-zinc-50 rounded-xl p-3.5 border border-zinc-100">
                  <div className="text-[10px] font-bold text-zinc-500 mb-1.5 uppercase">習得内容</div>
                  <ul className="space-y-1.5">
                    {mod.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-tight">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <div className="mt-8 max-w-4xl mx-auto text-center p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-zinc-700">
          💡 <strong>自社業務に合わせたカリキュラムの調整・カスタマイズは無料</strong>です。
          「営業部門のメールや提案書を中心に」「スプレッドシートの集計に特化したい」などご希望をお聞かせください。
        </div>
      </div>
    </section>
  );
}
