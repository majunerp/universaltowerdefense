import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Tier List - Best Units (Dec 2025)",
  description:
    "Universal Tower Defense (UTD) tier list with practical roles and upgrade advice. Use it to prioritize summons and avoid wasting Gems on low-impact units.",
  alternates: { canonical: "/universal-tower-defense-tier-list" },
  openGraph: {
    title: "Universal Tower Defense Tier List - Best Units",
    description:
      "UTD tier list with roles and upgrade advice for smarter team building.",
  },
};

type TierRow = {
  tier: "S" | "A" | "B" | "C";
  focus: string;
  examples: string;
  notes: string;
};

const tiers: TierRow[] = [
  {
    tier: "S",
    focus: "Endgame carries / top banner pulls",
    examples: "Kenpachi, Kirito, Sasuke (example picks)",
    notes: "Strong scaling, high impact per slot. Prioritize upgrades and synergy.",
  },
  {
    tier: "A",
    focus: "Reliable core units",
    examples: "Admiral (example pick), strong supports",
    notes: "Excellent value; often easier to build around than ultra-rare picks.",
  },
  {
    tier: "B",
    focus: "Situational / niche roles",
    examples: "Specialized slows, economy fillers",
    notes: "Useful with the right map or comp. Don’t over-invest early.",
  },
  {
    tier: "C",
    focus: "Early fillers",
    examples: "Low-scaling starters",
    notes: "Fine for early waves, but typically replaced as your roster grows.",
  },
];

export default function UTDTierListPage() {
  const faq = [
    {
      q: "How should I use a tier list in UTD?",
      a: "Use it to decide where to spend Gems and upgrade materials. A tier list is most useful as a “what to invest in” filter, not as a strict rule for every map.",
    },
    {
      q: "Why do tier lists change after updates?",
      a: "Balance patches can change unit scaling, traits, evolutions, and map interactions. Always re-check before spending large amounts of Gems.",
    },
    {
      q: "Should I summon only for S-tier units?",
      a: "Not always. A well-rounded team of strong A-tier units can clear more consistently than gambling everything for a single rare pull.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 selection:bg-sky-500/30 selection:text-sky-100 flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/image.png"
          alt="Universal Tower Defense key art"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-12">
        <section className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100">
            Updated: {lastUpdated}
          </div>

          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-extrabold tracking-tight text-white text-glow">
            UTD Tier List
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            This tier list is designed for practical decisions: what to summon for, what to upgrade first, and how to
            build a team that clears waves consistently. Use it as a priority filter, then verify your comp with the DPS
            calculator.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-calculator"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
            >
              Open DPS calculator
            </Link>
            <Link
              href="/universal-tower-defense-codes"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Get codes
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-lg shadow-black/30 overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Tier overview</h2>
            <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
              Higher tiers generally provide better scaling or stronger utility. However, team synergy and upgrade timing
              often matter more than a single unit’s raw tier.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[900px]">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Tier</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Best for</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Examples</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((row) => (
                  <tr key={row.tier} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-extrabold text-sky-200">{row.tier}</td>
                    <td className="px-6 py-4 text-sm text-zinc-200">{row.focus}</td>
                    <td className="px-6 py-4 text-sm text-zinc-300">{row.examples}</td>
                    <td className="px-6 py-4 text-sm text-zinc-400 leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">How to invest smarter</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Tier lists are most valuable when they prevent bad spending. Before you summon, decide what role you need
                next: main DPS, support, slow, or economy. Then summon with a target and stop when you hit a “good enough”
                pick.
              </p>
              <p>
                After summoning, compare upgrade paths with the calculator. Many players lose value by upgrading too early
                on a unit that gets replaced quickly. Aim for upgrades that improve your wave stability first, then chase
                pure DPS.
              </p>
              <p className="text-xs text-zinc-500">
                For broader strategy, use the{" "}
                <Link href="/universal-tower-defense-guide" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">FAQ</h2>
            <div className="space-y-3">
              {faq.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-left">
                  <p className="text-xs font-bold text-white mb-1.5">{item.q}</p>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden space-y-3 rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-900/35 via-violet-900/15 to-black p-8 text-center shadow-2xl shadow-black/40">
          <h2 className="relative font-[family-name:var(--font-orbitron)] text-2xl font-extrabold text-white md:text-3xl text-glow">
            Next: verify DPS and upgrade breakpoints
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-zinc-200 leading-relaxed">
            Use the DPS calculator to compare upgrade paths and understand which unit gives the best value per Gem.
          </p>
          <div className="pt-2">
            <Link
              href="/universal-tower-defense-calculator"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Open calculator
            </Link>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </div>
  );
}
