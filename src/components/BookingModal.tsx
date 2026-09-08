"use client";

import { useState } from "react";
import { X, Calendar, CheckCircle2, Sparkles, Building, Mail, Phone, User, ArrowRight, Video } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: "booking" | "seminar";
  initialData?: {
    workTimeSaved?: string;
    recommendedPlan?: string;
    focusArea?: string;
    companyScale?: string;
  } | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  type = "booking",
  initialData,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    location: "岡山県内",
    planInterest: initialData?.recommendedPlan || "Google Workspace × Gemini 対面実践コース",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
      });
    } catch (err) {
      // ignore
    }
  };

  const isSeminar = type === "seminar";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-zinc-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-100 text-orange-600">
              {isSeminar ? <Video className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900">
                {isSeminar ? "無料オンラインセミナー参加予約" : "研修プラン・お見積り無料相談"}
              </h3>
              <p className="text-[11px] text-zinc-500">
                {isSeminar ? "Zoomリンクをメールで即時お届けします" : "オンライン30分で課題や受講イメージをヒアリング"}
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Diagnosis Badge if provided */}
              {initialData?.workTimeSaved && (
                <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3 text-xs text-zinc-700 mb-1">
                  <div className="font-bold text-orange-900 flex items-center gap-1 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                    30秒診断結果を引き継ぎました
                  </div>
                  <p className="text-[11px] text-zinc-600">
                    想定削減：<strong>{initialData.workTimeSaved}</strong> / おすすめ：<strong>{initialData.recommendedPlan}</strong>
                  </p>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  貴社名 <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="例：FUSHITANI株式会社"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  ご担当者様 お名前 <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="例：山田 太郎"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    メールアドレス <span className="text-orange-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.co.jp"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    お電話番号
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="086-000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {!isSeminar && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">
                      オフィス所在地
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 outline-none bg-white"
                    >
                      <option value="岡山市内">岡山市内</option>
                      <option value="倉敷市内">倉敷市内</option>
                      <option value="その他岡山県内">その他岡山県内</option>
                      <option value="岡山県外・近隣県">岡山県外・近隣県</option>
                      <option value="オンライン希望">オンライン開催希望</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">
                      検討プラン
                    </label>
                    <select
                      value={formData.planInterest}
                      onChange={(e) => setFormData({ ...formData, planInterest: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 outline-none bg-white"
                    >
                      <option value="Google Workspace × Gemini 実践コース">Google Workspace × Gemini 実践コース</option>
                      <option value="1Day 集中ワークショップ">1Day 集中ワークショップ</option>
                      <option value="Claude Code / 先端AI研修">Claude Code / 先端AI研修</option>
                      <option value="助成金活用の相談">助成金活用の相談</option>
                      <option value="まずは話を聞いて検討">まずは話を聞いて検討</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  ご相談内容・受講規模など（任意）
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    isSeminar
                      ? "セミナーで特に聞きたいテーマ等があればご記入ください"
                      : "例：現在10名ほどの営業部門でGmailやスライド作成を効率化したい、等"
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-zinc-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-orange-600 transition active:scale-95"
                >
                  {isSeminar ? "無料セミナーに申し込む" : "無料相談・お見積りを予約する"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 text-center">
                ※ 強引な営業やセールスは一切行いません。プライバシー情報は厳重に管理いたします。
              </p>
            </form>
          ) : (
            <div className="py-8 text-center animate-in zoom-in-95 duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900">
                お申し込みを受け付けました
              </h4>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed max-w-sm mx-auto">
                ご入力いただいたメールアドレス（{formData.email}）へ、
                {isSeminar
                  ? "Zoom参加URLと詳細メールをお送りいたしました。"
                  : "担当コンサルタントより日程調整のご案内を即日お送りいたします。"}
              </p>

              <div className="mt-5">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition"
                >
                  閉じる
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
