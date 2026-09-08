"use client";

import Image from "next/image";
import { Award, CheckCircle2, Users, Building, Sparkles } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-200 bg-white p-7 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Certificate Badge Visual */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative h-36 w-36 sm:h-44 sm:w-44 flex items-center justify-center p-2 rounded-3xl border-2 border-zinc-100 bg-zinc-50/50 shadow-inner">
                <Image
                  src="/google-ai-professional-badge.png"
                  alt="Google AI Professional Certificate Completion"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
                Google Career Certificates 認定
              </span>
            </div>

            {/* Credibility Copy & Achievements */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold text-red-800 mb-2.5">
                <Award className="w-3.5 h-3.5 text-red-600" />
                Google AI Professional 認定証取得済み
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight leading-snug">
                Google公式認定のAIプロフェッショナルが、<br className="hidden sm:inline" />
                岡山県内の貴社オフィスへ直接訪問・対面指導
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                単なるツールの解説者ではなく、Googleが定める全8コース（業務効率化・データ分析・プロンプト設計・安全運用など）の厳格な要件を修了したプロフェッショナルが担当。
                さらに運営元のFUSHITANI株式会社自身も「Google Workspace Business Standard」を日常の全実務で使い倒しているため、自社で効果を実証したリアルな時短術だけを直接伝授します。
              </p>

              {/* Real Track Record Stats */}
              <div className="mt-6 pt-5 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-3.5">
                  <div className="text-[11px] font-bold text-zinc-500 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-zinc-700" />
                    支援企業実績
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 mt-0.5">
                    6<span className="text-xs font-semibold text-zinc-600 ml-0.5">社</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-3.5">
                  <div className="text-[11px] font-bold text-zinc-500 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-red-600" />
                    研修受講実績
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-red-600 mt-0.5">
                    約60<span className="text-xs font-semibold text-red-800 ml-0.5">名</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-3.5 flex flex-col justify-center">
                  <div className="text-[11px] font-bold text-zinc-500">受講者満足度</div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-950 mt-0.5">
                    98.4<span className="text-xs font-semibold text-zinc-600 ml-0.5">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
