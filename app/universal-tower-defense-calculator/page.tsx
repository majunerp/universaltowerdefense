import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import DpsCalculator from "@/components/utd/DpsCalculator";
import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "UTD Calculator - DPS & Upgrade Planner (Dec 2025)",
  description:
    "Universal Tower Defense DPS calculator and upgrade planner. Compare unit damage, attack speed, and crit stats to make smarter upgrade decisions in UTD Roblox.",
  alternates: { canonical: "/universal-tower-defense-calculator" },
  openGraph: {
    title: "UTD Calculator - DPS & Upgrade Planner",
    description:
      "Calculate DPS and compare upgrades for Universal Tower Defense (UTD) Roblox.",
  },
};

export default function UTDCalculatorPage() {
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
            UTD DPS Calculator
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            Use this calculator to compare upgrade paths and estimate damage-per-second. It is designed for quick
            decisions: “is this upgrade worth it?” and “which unit should I invest in next?”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-tier-list"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
            >
              View tier list
            </Link>
            <Link
              href="/universal-tower-defense-guide"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Read guide
            </Link>
          </div>
        </section>

        <DpsCalculator />

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Notes</h2>
          <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
            <p>
              This is a simplified model intended for fast comparisons. Real in-game performance depends on range,
              placement, targeting behavior, enemy resistances, map pathing, and team synergy.
            </p>
            <p>
              Use the calculator to avoid obvious mis-investments, then validate the final decision with your team
              composition and the current meta.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

