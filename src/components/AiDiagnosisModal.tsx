"use client";

import { useState } from "react";
import { X, Sparkles, ArrowRight, RotateCcw, Clock, TrendingUp, Award } from "lucide-react";
import confetti from "canvas-confetti";

interface AiDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyWithDiagnosis: (result: {
    workTimeSaved: string;
    recommendedPlan: string;
    focusArea: string;
    companyScale: string;
  }) => void;
}

export default function AiDiagnosisModal({
  isOpen,
  onClose,
  onApplyWithDiagnosis,
}: AiDiagnosisModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    gwUsage: "",
    bottleneck: "",
    aiStatus: "",
    teamSize: "",
  });
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      step: 1,
      title: "社内のGoogle Workspace（Gmail, Sheets等）の利用状況は？",
      subtitle: "現在の社内環境をお選びください",
      field: "gwUsage",
      options: [
        { label: "全社員が日常的にGmailやスプレッドシートを使用している" },
        { label: "メール中心で、スプレッドシートやDocsは一部の社員のみ" },
        { label: "最近Google Workspaceを導入したばかり / 検討中" },
      ],
    },
    {
      step: 2,
      title: "日常で最も「時間がかかって効率化したい」業務は？",
      subtitle: "最も負担の大きい業務をお選びください",
      field: "bottleneck",
      options: [
        { label: "メールの文面作成・返信や議事録の要約作成" },
        { label: "スプレッドシートの関数入力・データ集計・分析" },
        { label: "企画書・提案スライド・プレゼン骨子の作成" },
        { label: "技術・コード開発や社内問い合わせ対応の効率化" },
      ],
    },
    {
      step: 3,
      title: "現在、社内での生成AI（ChatGPT等）の活用状況は？",
      subtitle: "現場での活用浸透度をお選びください",
      field: "aiStatus",
      options: [
        { label: "個人で使っている社員はいるが、社内共通ルールや教育はない" },
        { label: "セキュリティや情報漏洩が心配で、利用を制限・禁止している" },
        { label: "社員のほとんどが生成AIを業務で使ったことがない" },
      ],
    },
    {
      step: 4,
      title: "研修を実施・検討したい対象の規模は？",
      subtitle: "受講を検討している人数感を教えてください",
      field: "teamSize",
      options: [
        { label: "5〜15名（まずは特定チーム・部署単位で試したい）" },
        { label: "16〜30名（複数部署・管理職やキーマン中心）" },
        { label: "30名以上（全社的なDX推進・一括展開）" },
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
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
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

  const getResult = () => {
    let plan = "Google Workspace × Gemini 対面1Day集中研修";
    let hours = "月間 約35〜45時間 / 1人あたり";
    let focus = "日常業務（Gmail・Docs・スプレッドシート）の即効自動化";

    if (answers.bottleneck.includes("コード") || answers.bottleneck.includes("技術")) {
      plan = "Google × Gemini ＋ Claude Code 実践導入研修";
      hours = "月間 約50〜70時間 / 1人あたり";
      focus = "Claude Codeによる開発・社内業務スクリプト自動化";
    } else if (answers.teamSize.includes("30名以上") || answers.aiStatus.includes("セキュリティ")) {
      plan = "現場定着スタンダードコース（全3回・利用規定策定つき）";
      hours = "全社で月間 約250時間以上の削減見込み";
      focus = "全社横断の活用定着 ＆ 安全なセキュリティルール構築";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-zinc-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900">
                30秒 AI活用度＆削減時間シミュレーター
              </h3>
              <p className="text-[11px] text-zinc-500">
                登録不要・タップのみで瞬時に診断
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!isCompleted ? (
            <div>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-500 mb-1.5">
                  <span>質問 {currentStep} / {questions.length}</span>
                  <span>{Math.round((currentStep / questions.length) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all duration-300"
                    style={{ width: `${(currentStep / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mb-5">
                <span className="text-[11px] font-black uppercase text-orange-600 tracking-wider">
                  STEP 0{currentStep}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-zinc-900 mt-0.5 leading-snug">
                  {currentQ.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-1">
                  {currentQ.subtitle}
                </p>
              </div>

              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(currentQ.field, opt.label)}
                    className="w-full flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-3.5 text-left text-xs sm:text-sm font-semibold text-zinc-800 hover:border-orange-500 hover:bg-orange-50/30 transition group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-orange-600 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result */
            <div className="text-center animate-in zoom-in-95 duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-zinc-900">
                貴社の診断シミュレーション結果
              </h4>
              <p className="text-xs text-zinc-500 mt-0.5">
                Google Workspace × Geminiの導入による試算
              </p>

              <div className="mt-5 space-y-3 text-left">
                <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-800 mb-1">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    想定される業務時間削減効果
                  </div>
                  <div className="text-xl font-black text-zinc-900">
                    {getResult().workTimeSaved}
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-zinc-900" />
                    おすすめの研修カリキュラム
                  </div>
                  <div className="text-sm font-bold text-zinc-900">
                    {getResult().recommendedPlan}
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    重点領域：{getResult().focusArea}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onApplyWithDiagnosis(getResult());
                    onClose();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-xs sm:text-sm font-bold text-white hover:bg-orange-600 transition"
                >
                  この診断結果を持って無料相談する
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-zinc-400 hover:text-zinc-700 py-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  もう一度やり直す
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
