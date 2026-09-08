"use client";

import Image from "next/image";
import { Calendar, Clock, Video, Users, ArrowRight, Bell } from "lucide-react";
import { SEMINAR } from "@/lib/site";

interface SeminarSectionProps {
  onOpenSeminar: () => void;
}

export default function SeminarSection({ onOpenSeminar }: SeminarSectionProps) {
  const points = [
    { icon: Calendar, label: SEMINAR.date },
    { icon: Clock, label: `${SEMINAR.time}（60分）` },
    { icon: Video, label: SEMINAR.format },
    { icon: Users, label: `${SEMINAR.fee}・${SEMINAR.capacity}` },
  ];

  return (
    <section id="seminar" className="py-16 sm:py-24 bg-gradient-to-b from-red-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold text-red-800 mb-3">
            <Bell className="w-3.5 h-3.5 text-red-600" />
            開催予定の無料セミナー
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            まずは1時間、
            <span className="text-red-600">オンラインで体験</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            「対面研修を頼む前に、どんな内容か見てみたい」という企業様向けに、
            <br className="hidden sm:inline" />
            画面共有によるライブデモと質疑応答つきの無料セミナーを開催します。
          </p>
        </div>

        {/* Seminar Card */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5">
          <div className="grid md:grid-cols-2">
            {/* Banner */}
            <div className="relative aspect-[1200/630] md:aspect-auto md:min-h-[280px] bg-zinc-100">
              <Image
                src="/seminar-banner.jpg"
                alt={`${SEMINAR.title} ${SEMINAR.subtitle}｜${SEMINAR.date} ${SEMINAR.time} オンライン無料セミナー`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-left"
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-red-600 tracking-tight">
                  {SEMINAR.dateShort}
                </span>
                <span className="text-sm font-bold text-zinc-700">{SEMINAR.time}</span>
                <span className="text-xs font-semibold text-zinc-500">オンライン</span>
              </div>

              <h3 className="mt-3 text-lg sm:text-xl font-extrabold text-zinc-950 leading-snug">
                {SEMINAR.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-zinc-500">
                {SEMINAR.subtitle}
              </p>

              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Geminiの基礎から、それがGmail・スプレッドシート・ドキュメント<strong className="font-semibold text-zinc-800">の中で</strong>そのまま動く様子までをライブデモ。
                「入れているのに使えていない」を、この1時間で解消します。
              </p>

              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {points.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-zinc-700">
                    <Icon className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-2">
                <button
                  onClick={onOpenSeminar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 active:scale-98"
                >
                  無料セミナーに申し込む
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-2 text-[11px] text-zinc-400">
                  Google フォームが開きます。当日参加できない方にはアーカイブ配信あり。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
