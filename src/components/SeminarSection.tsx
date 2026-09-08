"use client";

import { Calendar, Clock, Video, Users, CheckCircle, ArrowRight, Sparkles, Bell } from "lucide-react";

interface SeminarSectionProps {
  onOpenSeminarModal: () => void;
}

export default function SeminarSection({ onOpenSeminarModal }: SeminarSectionProps) {
  // 今後のセミナー予定データ（編集や追加が容易な構造）
  const upcomingSeminar = {
    badge: "次回オンライン開催",
    status: "参加者受付中",
    date: "2025年 随時開催中（直近枠受付中）",
    time: "14:00〜15:00（60分）",
    format: "オンライン（Zoom / Google Meet）途中入退場OK・カメラOFF可",
    fee: "無料（各回先着15社限定）",
    title: "【実践デモ公開】Google Workspace × Gemini で業務時間を半減させる「今日から使える」プロンプト活用術",
    description:
      "「Geminiって何ができるの？」「ChatGPTと何が違うの？」という疑問を、実際のGoogle画面を共有しながらライブデモで完全解消。対面研修の内容を凝縮した60分の無料体験セミナーです。",
    highlights: [
      "Gmailの返信＆長文スレッド要約の秒速テクニック実演",
      "スプレッドシートの集計・データ分析をGeminiに任せる方法",
      "企業で安全に使うためのセキュリティ設定とNGプロンプト",
      "受講者限定特典：そのまま使える「実務プロンプト集（PDF）」プレゼント",
    ],
  };

  return (
    <section id="seminar" className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-4 py-1.5 text-xs font-bold mb-3 border border-red-200">
            <Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" />
            {upcomingSeminar.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            まずは雰囲気や効果を体験！<br />
            <span className="text-gradient">無料オンライン体験セミナー</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            「本格的な対面研修を依頼する前に、まずはどんな内容か見てみたい」という企業様向けに、<br className="hidden sm:inline" />
            画面共有によるリアルなデモと質疑応答つきのオンラインセミナーを定期開催しています。
          </p>
        </div>

        {/* Seminar Card */}
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-red-200 bg-white p-6 sm:p-10 shadow-xl shadow-red-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-red-500 text-white text-xs font-bold px-6 py-1.5 rounded-bl-2xl shadow-sm">
            {upcomingSeminar.status}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-red-600" />
              {upcomingSeminar.date}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {upcomingSeminar.time}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
              <Video className="w-3.5 h-3.5" />
              {upcomingSeminar.fee}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
            {upcomingSeminar.title}
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {upcomingSeminar.description}
          </p>

          {/* Highlights */}
          <div className="mt-6 rounded-2xl bg-red-50/70 border border-red-100 p-5">
            <div className="text-xs font-bold text-red-900 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-red-600" />
              本セミナーで学べる内容・アジェンダ
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
              {upcomingSeminar.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seminar CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              ※ Zoomの参加リンクは、お申し込み後すぐに自動メールでお送りします。<br />
              同業他社様のご参加はご遠慮いただく場合がございます。
            </div>
            
            <button
              onClick={onOpenSeminarModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:scale-105 hover:shadow-red-500/30"
            >
              無料セミナーに参加予約する
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
