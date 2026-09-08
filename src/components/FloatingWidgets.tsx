"use client";

import { useState } from "react";
import { Sparkles, Calendar, Video, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface FloatingWidgetsProps {
  onOpenDiagnosisModal: () => void;
  onOpenSeminarModal: () => void;
}

export default function FloatingWidgets({
  onOpenDiagnosisModal,
  onOpenSeminarModal,
}: FloatingWidgetsProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside aria-label="セミナー・診断案内" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 max-w-[340px] sm:max-w-[380px] w-full px-2 sm:px-0 pointer-events-none">
      {/* 30-Sec Diagnosis Trigger Button (Floating above seminar banner) */}
      <button
        onClick={onOpenDiagnosisModal}
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-red-300 bg-white/95 px-4 py-2.5 text-xs font-bold text-zinc-900 shadow-xl shadow-red-500/10 backdrop-blur transition-all hover:scale-105 hover:border-red-500 hover:shadow-red-500/20 active:scale-95"
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white">
          <Sparkles className="w-3 h-3" />
        </div>
        <span>自社の削減時間を無料診断（30秒）</span>
        <span className="rounded-full bg-red-100 text-red-800 text-[10px] px-1.5 py-0.2 font-extrabold">
          無料
        </span>
      </button>

      {/* Upcoming Seminar Bottom-Right Floating Banner */}
      {isBannerVisible && (
        <div className="pointer-events-auto w-full rounded-2xl border border-zinc-200 bg-white/95 p-3.5 sm:p-4 shadow-2xl shadow-zinc-900/15 backdrop-blur transition-all">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[11px] font-extrabold text-red-600 tracking-wide uppercase">
                次回オンライン無料セミナー
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1 text-zinc-400 hover:text-zinc-700 rounded-md transition"
                title={isCollapsed ? "展開する" : "折りたたむ"}
              >
                {isCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsBannerVisible(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700 rounded-md transition"
                title="閉じる"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!isCollapsed ? (
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                【岡山・全国】Google Workspace × Gemini 実践ライブデモ体験会
              </h4>
              <p className="mt-1 text-[11px] text-zinc-500 line-clamp-2">
                Gmail要約やスプレッドシート集計など、実際の画面で効果を体感できる60分の無料体験会。
              </p>

              <div className="mt-2.5 flex items-center justify-between gap-2">
                <div className="text-[10px] text-zinc-600 font-medium">
                  Zoom開催 / カメラOFF・途中退場可
                </div>
                <button
                  onClick={onOpenSeminarModal}
                  className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-red-600 transition active:scale-95 shrink-0"
                >
                  詳細・参加予約
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-800">
                Google × Gemini 無料体験会（Zoom）
              </span>
              <button
                onClick={onOpenSeminarModal}
                className="text-xs font-bold text-red-600 hover:underline"
              >
                予約する
              </button>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
