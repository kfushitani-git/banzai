import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | FUSHITANI株式会社",
  description:
    "FUSHITANI株式会社（FUSHITANI AI支援）のプライバシーポリシー（個人情報保護方針）です。",
  alternates: { canonical: "/privacy" },
};

const updated = "2026年9月9日";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/fushitani-ai-logo.png"
              alt="FUSHITANI AI支援"
              width={173}
              height={50}
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 text-sm leading-relaxed text-zinc-700">
        <h1 className="text-2xl font-extrabold text-zinc-950">
          プライバシーポリシー（個人情報保護方針）
        </h1>
        <p className="mt-4">
          FUSHITANI株式会社（以下「当社」）は、当社が提供するサービスおよびウェブサイト（以下「本サイト」）において取得する個人情報を、個人情報の保護に関する法律その他の関係法令を遵守し、適切に取り扱います。
        </p>

        <Section title="1. 取得する個人情報">
          <p>
            当社は、お問い合わせ・セミナー申込・研修のお申込み等に際して、以下の情報を取得します。
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>氏名、会社名・団体名、部署名、役職</li>
            <li>メールアドレス、電話番号、所在地</li>
            <li>
              従業員数、Google Workspace の利用状況など、お客様が入力された事業に関する情報
            </li>
            <li>お問い合わせ内容、当社との商談・取引に関する情報</li>
            <li>本サイトの閲覧に関する情報（アクセスログ、Cookie 等。第6項）</li>
          </ul>
        </Section>

        <Section title="2. 利用目的">
          <ul className="list-disc pl-5 space-y-1">
            <li>お問い合わせ・ご相談への対応</li>
            <li>
              セミナー・研修のご案内、実施、運営（Google Meet 招待URLの送付を含む）
            </li>
            <li>当社サービスに関するご提案・ご連絡・営業活動</li>
            <li>当社サービスの改善、統計的分析</li>
            <li>助成金申請等、お客様からご依頼を受けた手続きの支援</li>
            <li>法令に基づく対応</li>
          </ul>
        </Section>

        <Section title="3. 第三者提供">
          <p>
            当社は、次の場合を除き、あらかじめご本人の同意を得ずに個人情報を第三者に提供しません。
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>法令に基づく場合</li>
            <li>
              人の生命・身体・財産の保護に必要で、ご本人の同意取得が困難な場合
            </li>
            <li>国の機関等への協力が必要な場合</li>
          </ul>
        </Section>

        <Section title="4. 業務委託">
          <p>
            当社は、利用目的の達成に必要な範囲で個人情報の取扱いを外部に委託することがあり、委託先との間で必要な契約を締結し、適切に監督します。当社は本サイトの運営・フォーム・データ管理に関して以下のサービスを利用しています。
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Google LLC（Google Workspace、Google フォーム、Google Meet 等）</li>
            <li>Cloudflare, Inc.（本サイトのホスティング・配信）</li>
          </ul>
          <p className="mt-2">
            これらのサービスの利用に伴い、個人情報が日本国外のサーバーで保管される場合があります。
          </p>
        </Section>

        <Section title="5. 安全管理措置">
          <p>
            当社は、個人情報への不正アクセス、紛失、漏えい等を防止するため、アクセス権限の管理その他の必要かつ適切な安全管理措置を講じます。
          </p>
        </Section>

        <Section title="6. Cookie・アクセス解析">
          <p>
            本サイトでは、利用状況の把握とサービス改善のため、Cookie 等を用いたアクセス解析ツールを利用する場合があります。これにより取得される情報は匿名で集計され、個人を特定するものではありません。ブラウザの設定により Cookie を無効にすることができます。
          </p>
        </Section>

        <Section title="7. 開示・訂正・利用停止等">
          <p>
            ご本人からの求めに応じて、保有個人データの開示、内容の訂正・追加・削除、利用の停止・消去等に対応します。第9項の窓口までご連絡ください。
          </p>
        </Section>

        <Section title="8. 保存期間">
          <p>
            当社は、利用目的の達成に必要な期間、または法令で定められた期間、個人情報を保存し、期間経過後は適切に消去します。
          </p>
        </Section>

        <Section title="9. お問い合わせ窓口">
          <p>FUSHITANI株式会社　個人情報保護管理者</p>
          <p className="mt-1">
            所在地：岡山県岡山市北区津島中3-1-1　岡山大学共創イノベーションラボ KIBINOVE
          </p>
          <p>
            メール：
            <a
              href="mailto:k.fushitani@fushitanix.co.jp"
              className="text-red-600 hover:underline"
            >
              k.fushitani@fushitanix.co.jp
            </a>
          </p>
        </Section>

        <Section title="10. 改定">
          <p>
            当社は、法令の変更等に応じて本ポリシーを改定することがあります。重要な変更がある場合は本サイト上で告知します。
          </p>
        </Section>

        <p className="mt-10 text-xs text-zinc-500">
          制定日：{updated}
          <br />
          FUSHITANI株式会社　代表取締役　伏谷健太郎
        </p>

        <p className="mt-8">
          <Link href="/" className="text-sm font-bold text-red-600 hover:underline">
            ← トップページへ戻る
          </Link>
        </p>
      </article>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-base font-bold text-zinc-950">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}
