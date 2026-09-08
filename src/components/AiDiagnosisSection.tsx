"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Clock, TrendingUp, Award, Building, FileSpreadsheet, Mail, Presentation, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface AiDiagnosisSectionProps {
  onApplyWithDiagnosis: (result: {
    workTimeSaved: string;
    recommendedPlan: string;
    focusArea: string;
    companyScale: string;
  }) => void;
}

export default function AiDiagnosisSection({ onApplyWithDiagnosis }: AiDiagnosisSectionProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    gwUsage: "",
    bottleneck: "",
    aiStatus: "",
    teamSize: "",
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      step: 1,
      title: "社内のGoogle Workspace（Gmail, Sheets等）の利用状況は？",
      subtitle: "貴社の現在のIT環境について教えてください",
      field: "gwUsage",
      options: [
        { label: "全社員が日常的にGmailやスプレッドシートを使用している", icon: "✨", score: 1 },
        { label: "メール中心で、スプレッドシートやDocsは一部の社員のみ", icon: "📧", score: 2 },
        { label: "最近Google Workspaceを導入したばかり / 検討中", icon: "🚀", score: 3 },
      ],
    },
    {
      step: 2,
      title: "日常で最も「時間がかかって効率化したい」業務は？",
      subtitle: "最も負担の大きい業務をお選びください",
      field: "bottleneck",
      options: [
        { label: "メールの文面作成・返信や議事録の要約作成", icon: "✉️", score: 1 },
        { label: "スプレッドシートの関数入力・データ集計・分析", icon: "📊", score: 2 },
        { label: "企画書・提案スライド・プレゼン骨子の作成", icon: "📑", score: 3 },
        { label: "技術・コード開発や社内問い合わせ対応の効率化", icon: "💻", score: 4 },
      ],
    },
    {
      step: 3,
      title: "現在、社内での生成AI（ChatGPT等）の活用状況は？",
      subtitle: "現場での活用浸透度を教えてください",
      field: "aiStatus",
      options: [
        { label: "個人で使っている社員はいるが、組織としての共通ルールや活用法がない", icon: "💡", score: 1 },
        { label: "セキュリティや情報漏洩が心配で、利用を制限している", icon: "🔒", score: 2 },
        { label: "社員のほとんどが生成AIを業務で使ったことがない", icon: "🌱", score: 3 },
      ],
    },
    {
      step: 4,
      title: "研修を実施・検討したい対象の規模は？",
      subtitle: "受講を検討している人数感を教えてください",
      field: "teamSize",
      options: [
        { label: "5〜15名（まずは特定チーム・部署単位で試したい）", icon: "👥", scale: "チーム規模" },
        { label: "16〜40名（複数部署・管理職やキーマン中心）", icon: "🏢", scale: "中規模" },
        { label: "40名以上（全社的なDX推進・一括展開）", icon: "🌐", scale: "全社規模" },
      ],
    },
  ];

  const handleSelect = (field: string, value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      // 紙吹雪エフェクト
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({
      gwUsage: "",
      bottleneck: "",
      aiStatus: "",
      teamSize: "",
    });
    setIsCompleted(false);
  };

  // 診断結果の計算
  const getResult = () => {
    let plan = "Google Workspace × Gemini 対面1Day集中ワークショップ";
    let hours = "月間 約35〜45時間 / 人";
    let focus = "日常業務（Gmail・Docs・スプレッドシート）の即効自動化";

    if (answers.bottleneck.includes("コード") || answers.bottleneck.includes("技術")) {
      plan = "Google × Gemini ＋ Claude Code カスタム実践コース";
      hours = "月間 約50〜70時間 / 人";
      focus = "Claude Code / 先端AIツールによる開発・業務自動化";
    } else if (answers.teamSize.includes("40名以上") || answers.aiStatus.includes("セキュリティ")) {
      plan = "全社定着伴走プラン（全3回・セキュリティ規定策定つき）";
      hours = "全社で月間 約300時間以上の削減見込み";
      focus = "全社横断の活用定着 ＆ 安全なセキュリティ運用ガイドライン構築";
    }

    return {
      workTimeSaved: hours,
      recommendedPlan: plan,
      focusArea: focus,
      companyScale: answers.teamSize || "受講検討規模に応じた最適化",
    };
  };

  const currentQ = questions[currentStep - 1];

  return (
    <section id="diagnosis" className="py-16 sm:py-24 bg-gradient-to-b from-white via-orange-50/30 to-slate-50 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 text-orange-800 px-4 py-1.5 text-xs font-bold mb-3 border border-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            カンタン4問・登録不要で即診断
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            自社の業務はどれくらい削減できる？<br />
            <span className="text-gradient">30秒 AI活用度＆削減時間シミュレーター</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            現状の業務やGoogleの利用状況を選ぶだけで、想定される業務削減時間とおすすめの研修プランを瞬時に算出します。
          </p>
        </div>

        {/* Diagnosis Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/60 transition-all">
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>質問 {currentStep} / {questions.length}</span>
                  <span>{Math.round((currentStep / questions.length) * 100)}% 完了</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Body */}
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
                  STEP 0{currentStep}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mt-1">
                  {currentQ.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3.5">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(currentQ.field, option.label)}
                    className="flex items-center gap-4 rounded-2xl border-2 border-slate-100 bg-slate-50/60 p-4 sm:p-5 text-left transition-all hover:border-orange-500 hover:bg-orange-50/40 hover:shadow-sm group focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <span className="text-2xl shrink-0 p-2 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform">
                      {option.icon}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-orange-950 flex-1">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  DIAGNOSIS COMPLETE
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  貴社のAI活用診断結果
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  ご回答内容から導き出された貴社専用のシミュレーションです
                </p>
              </div>

              {/* Metrics Result Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50/40 p-6 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-orange-800 mb-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    想定される業務時間削減効果
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-orange-600">
                    {getResult().workTimeSaved}
                  </div>
                  <p className="mt-2 text-xs text-slate-600">
                    使い慣れたGoogle Workspace × Geminiの連携により、文章作成やデータ集計などのルーティン業務を大幅に圧縮できます。
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50/40 p-6 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-blue-800 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    おすすめの研修カリキュラム
                  </div>
                  <div className="text-lg sm:text-xl font-black text-blue-900 leading-snug">
                    {getResult().recommendedPlan}
                  </div>
                  <p className="mt-2 text-xs text-slate-600">
                    重点テーマ：{getResult().focusArea}
                  </p>
                </div>
              </div>

              {/* Special Offer Box */}
              <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2.5 py-0.5 text-xs font-bold mb-1">
                    診断特典プレゼント
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    無料相談のご予約で「Gemini実務プロンプト集（全40選）」を進呈！
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    今回の診断結果をもとに、さらに詳細なカリキュラム案とお見積りを個別にご案内いたします。
                  </p>
                </div>

                <button
                  onClick={() => onApplyWithDiagnosis(getResult())}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  この診断結果で無料相談する
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Reset Button */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  もう一度診断する
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
