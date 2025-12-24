import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { howToObtainUnits, lastUpdated, summonRates } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Wiki - Units, Summons & Systems (Dec 2025)",
  description:
    "Universal Tower Defense (UTD) wiki-style reference: summon rates, unit acquisition methods, and practical system notes to help you plan teams and upgrades.",
  alternates: { canonical: "/universal-tower-defense-wiki" },
  openGraph: {
    title: "Universal Tower Defense Wiki - Units, Summons & Systems",
    description:
      "A structured UTD reference: summon rates, unit acquisition, and system notes.",
  },
};

export default function UTDWikiPage() {
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
            UTD Wiki
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            This page is a structured reference for Universal Tower Defense. It is intentionally “wiki-like”: short,
            scannable sections you can consult quickly while planning summons, team roles, and upgrades.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link
            href="#summon-rates"
            className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">Summon rates</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Baseline probabilities for planning Gems budgets and banner strategy.
            </p>
          </Link>
          <Link
            href="#unit-acquisition"
            className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">Unit acquisition</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Standard summons, special banners, quests, and event methods.
            </p>
          </Link>
          <Link
            href="#systems"
            className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">Systems</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Practical notes on team roles, upgrades, and progression decisions.
            </p>
          </Link>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link
            href="/universal-tower-defense-units"
            className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">Units overview</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Summon rates + obtain methods + a searchable showcase list.
            </p>
          </Link>
          <Link
            href="/universal-tower-defense-questions"
            className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">Questions (FAQ)</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Quick answers for codes, summons, progression, and safety.
            </p>
          </Link>
          <Link
            href="/universal-tower-defense-resources"
            className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">Resources</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Checklists, safe links, and a navigation hub.
            </p>
          </Link>
        </section>

        <section id="summon-rates" className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Summon rates</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              These values are a planning baseline. Actual banners may change rates or highlight specific units.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {summonRates.map((item) => (
              <div key={item.rarity} className="rounded-3xl border border-white/10 bg-zinc-900/30 p-5 text-center">
                <div className={`mx-auto mb-3 h-12 w-12 rounded-2xl ${item.colorClass} shadow-lg`} />
                <p className="font-[family-name:var(--font-orbitron)] text-sm font-extrabold text-white">{item.rarity}</p>
                <p className="mt-1 text-xs font-semibold text-sky-200">{item.chance}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-sm text-zinc-300 leading-relaxed">
            <p>
              Practical advice: treat summoning like a budgeted activity. Set a Gems limit before you start. If you miss
              your target, stop and rebuild your currency through play and code redemptions.
            </p>
          </div>
        </section>

        <section id="unit-acquisition" className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">How to obtain units</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Different units are tied to different systems. Use this section to choose the fastest method for your goal.
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

          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-sm text-zinc-300 leading-relaxed">
            <p>
              Tip: if you are summoning for a specific unit, confirm whether it is currently on a featured banner. Many
              games rotate availability, and “random summoning” tends to waste Gems.
            </p>
          </div>
        </section>

        <section id="systems" className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Team building</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Strong teams cover roles instead of chasing only rarity. A practical team usually has early coverage,
                main DPS scaling, utility (slow/stun/debuff), and a flexible slot.
              </p>
              <p>
                If you are leaking, you likely need early coverage or utility. If you are timing out late waves, you
                likely need more scaling DPS or better upgrade timing.
              </p>
              <p className="text-xs text-zinc-500">
                For recommended investments, use{" "}
                <Link href="/universal-tower-defense-tier-list" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Tier List
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Upgrades & breakpoints</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Upgrades are most valuable at breakpoints: when they prevent leaks, improve clear speed enough to keep up
                with wave scaling, or enable a new placement strategy.
              </p>
              <p>
                To avoid “upgrade spam,” compare two paths using the calculator: damage vs attack speed vs crit. Choose
                the cheapest upgrade that fixes your current bottleneck.
              </p>
              <p className="text-xs text-zinc-500">
                Use{" "}
                <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Calculator
                </Link>{" "}
                for fast comparisons.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden space-y-3 rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-900/35 via-violet-900/15 to-black p-8 text-center shadow-2xl shadow-black/40">
          <h2 className="relative font-[family-name:var(--font-orbitron)] text-2xl font-extrabold text-white md:text-3xl text-glow">
            Use the wiki as a checklist
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-zinc-200 leading-relaxed">
            Redeem codes, plan summons, invest with a tier list, and validate upgrades with the calculator.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/universal-tower-defense-codes"
              className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Codes
            </Link>
            <Link
              href="/universal-tower-defense-calculator"
              className="rounded-full border border-white/10 bg-zinc-950/40 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/25"
            >
              Calculator
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
