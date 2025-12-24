import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "UTD Weapon Tier List - Practical Framework (Dec 2025)",
  description:
    "A practical weapon tier framework for Universal Tower Defense-related weapon progression (mode-dependent). Use as a checklist, not a hard rule.",
  alternates: { canonical: "/universal-tower-defense-weapon-tier-list" },
  openGraph: {
    title: "UTD Weapon Tier List - Practical Framework",
    description:
      "A practical tier framework for weapon-style progression (mode-dependent).",
  },
};

type TierRow = {
  tier: "S" | "A" | "B" | "C";
  bestFor: string;
  notes: string;
};

const weaponTiers: TierRow[] = [
  {
    tier: "S",
    bestFor: "High-leverage utility or scaling options",
    notes: "Top picks usually provide strong scaling or utility that stays relevant across waves and modes.",
  },
  {
    tier: "A",
    bestFor: "Reliable core progression",
    notes: "Great value, often easier to obtain and upgrade without destroying your economy.",
  },
  {
    tier: "B",
    bestFor: "Situational / niche play",
    notes: "Use when the map or mode specifically rewards the weapon’s strengths.",
  },
  {
    tier: "C",
    bestFor: "Early fillers",
    notes: "Fine for starting out, but usually replaced quickly once you have better options.",
  },
];

export default function UTDWeaponTierListPage() {
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
            Weapon Tier List (Framework)
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            The reference site includes weapon-related tools and tiers. This page provides a practical framework you can
            use to evaluate weapon-style progression in your current mode. Treat it as a checklist and validate with your
            own runs after patches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-guide"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
            >
              Read guide
            </Link>
            <Link
              href="/universal-tower-defense-community"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Community checklist
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-lg shadow-black/30 overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Tier breakdown</h2>
            <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
              Use this to rank your own weapons: ask “does it scale late?”, “does it add utility?”, and “is it affordable
              to maintain?”
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[900px]">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Tier</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Best for</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                {weaponTiers.map((row) => (
                  <tr key={row.tier} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-extrabold text-sky-200">{row.tier}</td>
                    <td className="px-6 py-4 text-sm text-zinc-200">{row.bestFor}</td>
                    <td className="px-6 py-4 text-sm text-zinc-400 leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">How to evaluate a weapon</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>Use this quick evaluation:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Impact: does it solve a real problem in your runs (leaks, bosses, timing)?</li>
                <li>Scaling: does it stay relevant as waves scale?</li>
                <li>Economy: can you afford upgrades without collapsing your team?</li>
                <li>Synergy: does it pair well with your current comp and roles?</li>
              </ul>
              <p className="text-xs text-zinc-500">
                If you need help with economy timing, use the Upgrade Cost planner.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Related tools</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 leading-relaxed">
              <li>
                <Link href="/universal-tower-defense-upgrade-cost" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Upgrade Cost
                </Link>{" "}
                to compare upgrade paths
              </li>
              <li>
                <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                  DPS Calculator
                </Link>{" "}
                to validate damage impact
              </li>
              <li>
                <Link href="/universal-tower-defense-tier-list" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Unit Tier List
                </Link>{" "}
                to avoid low-value investments
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

