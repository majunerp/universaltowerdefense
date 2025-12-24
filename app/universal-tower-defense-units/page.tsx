import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import UnitBrowser from "@/components/utd/UnitBrowser";
import { lastUpdated, howToObtainUnits, summonRates, unitShowcase } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Units - Summon Rates, Roles & Examples (Dec 2025)",
  description:
    "Universal Tower Defense (UTD) unit overview: summon rates, how to obtain units, role coverage, and a searchable showcase list to help plan your team.",
  alternates: { canonical: "/universal-tower-defense-units" },
  openGraph: {
    title: "Universal Tower Defense Units - Summon Rates, Roles & Examples",
    description:
      "UTD units overview with summon rates, obtain methods, and a searchable showcase list for planning comps.",
  },
};

export default function UTDUnitsPage() {
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

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10">
        <section className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100">
            Updated: {lastUpdated}
          </div>
          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-extrabold tracking-tight text-white text-glow">
            UTD Units
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            This page focuses on how units are acquired and how they fit into a team. Exact rosters can change with
            updates, so treat this as a planning helper rather than an authoritative in-game index.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-tier-list"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30 active:scale-[0.98]"
            >
              See tier list
            </Link>
            <Link
              href="/universal-tower-defense-team-builder"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Build a 6-slot team
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Summon flow</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Use this diagram as a mental model: summon results only matter if they improve role coverage and convert
              into power through upgrades.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <img
              src="/images/utd-summon-flow.svg"
              alt="Summon to upgrade planning flow"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section id="summon-rates" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Summon rates (baseline)</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              These values are a planning baseline. Featured banners can rotate availability and may change what’s worth
              summoning for.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {summonRates.map((item) => (
              <div
                key={item.rarity}
                className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-5 text-center shadow-lg shadow-black/20"
              >
                <div className={`mx-auto mb-3 h-14 w-14 rounded-2xl ${item.colorClass} shadow-lg`} />
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">
                  {item.rarity}
                </p>
                <p className="mt-1 text-sm font-semibold text-sky-200">{item.chance} Drop Rate</p>
                <p className="mt-2 text-xs text-zinc-400">Variance is real—plan budgets.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-to-obtain" className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">How to obtain units</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Different units are tied to different systems. Use this section to choose the fastest path for your goal.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {howToObtainUnits.map((row) => (
              <div key={row.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-center">
                <p className="text-sm font-bold text-white">{row.title}</p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{row.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-sm text-zinc-300 leading-relaxed">
              <p className="font-semibold text-white">Quick tip</p>
              <p className="mt-2">
                If you’re summoning for a specific unit, confirm whether it’s on a featured banner. Random summoning
                often wastes Gems.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-sm text-zinc-300 leading-relaxed">
              <p className="font-semibold text-white">Next step</p>
              <p className="mt-2">
                After you get a new unit, evaluate it by role first (DPS / Support / CC), then use the{" "}
                <Link
                  href="/universal-tower-defense-calculator"
                  className="text-sky-200 hover:text-white underline underline-offset-4"
                >
                  calculator
                </Link>{" "}
                to compare upgrade paths.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Showcase list (searchable)</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              This is a curated showcase list of unit examples used across the site (not a complete roster). Use it for
              role planning and notes.
            </p>
          </div>

          <UnitBrowser units={unitShowcase} />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <img
              src="/images/utd-team-roles.svg"
              alt="Team role coverage diagram"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

