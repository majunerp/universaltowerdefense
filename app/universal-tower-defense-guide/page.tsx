import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { howToObtainUnits, lastUpdated, summonRates } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Guide - Beginner Tips & Progression (Dec 2025)",
  description:
    "Universal Tower Defense (UTD) guide: beginner progression, economy timing, team roles, summon planning, and practical tips to clear more waves consistently.",
  alternates: { canonical: "/universal-tower-defense-guide" },
  openGraph: {
    title: "Universal Tower Defense Guide - Beginner Tips & Progression",
    description:
      "A practical UTD guide: progression, economy, and team building tips for consistent clears.",
  },
};

export default function UTDGuidePage() {
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
            Universal Tower Defense Guide
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            UTD is won by repeatable decisions: efficient economy, strong early coverage, and upgrading at the right
            breakpoints. This guide focuses on fundamentals that work across most maps and updates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-codes"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
            >
              Get codes
            </Link>
            <Link
              href="/universal-tower-defense-tier-list"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              View tier list
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Core roles (simple)</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                A consistent team usually covers four needs: early wave coverage, single-target damage, crowd control,
                and “economy timing” (having enough resources to upgrade when it matters).
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Early coverage: cheap unit that prevents leaks while you build economy.
                </li>
                <li>
                  Main DPS: your primary scaling unit for mid-to-late waves.
                </li>
                <li>
                  Utility: slows, stuns, or debuffs that increase overall team efficiency.
                </li>
                <li>
                  Flex slot: fills a weakness based on the map or wave type.
                </li>
              </ul>
              <p>
                If you are stuck, it is usually because one of these roles is missing. Fix the missing role first before
                summoning for “better rarity”.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Upgrade timing</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                The most common mistake is upgrading too early. If you spend all resources upgrading one unit while your
                path is still leaking, you lose the run. A safer approach is:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Stabilize early waves with cheap coverage.</li>
                <li>Place your main DPS once economy is stable.</li>
                <li>Upgrade at breakpoints (when the next upgrade prevents leaks or clears a wave faster).</li>
                <li>Then scale damage for late waves.</li>
              </ol>
              <p>
                Use the{" "}
                <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                  calculator
                </Link>{" "}
                to compare breakpoints before committing.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Summon planning</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Summons are RNG. Planning is what keeps RNG from destroying your account economy. Use rates, set a budget,
              and stop when you hit a usable unit.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {summonRates.map((item) => (
              <div
                key={item.rarity}
                className="rounded-3xl border border-white/10 bg-zinc-900/30 p-5 text-center"
              >
                <div className={`mx-auto mb-3 h-12 w-12 rounded-2xl ${item.colorClass} shadow-lg`} />
                <p className="font-[family-name:var(--font-orbitron)] text-sm font-extrabold text-white">{item.rarity}</p>
                <p className="mt-1 text-xs font-semibold text-sky-200">{item.chance}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {howToObtainUnits.map((row) => (
              <div key={row.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-center">
                <p className="text-sm font-bold text-white">{row.title}</p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{row.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">A simple “do this next” loop</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>Use this loop for consistent progress:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Redeem codes at the start of a session.</li>
                <li>Summon with a target and a Gems budget.</li>
                <li>Upgrade only when it prevents leaks or speeds clears.</li>
                <li>Record what failed (leaks, DPS, CC) and fix that role.</li>
              </ol>
              <p>
                This loop is boring—and it works. Most players fail because they skip steps 2 and 3.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Recommended pages</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="/universal-tower-defense-codes" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Codes
                  </Link>{" "}
                  to redeem rewards quickly
                </li>
                <li>
                  <Link href="/universal-tower-defense-tier-list" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Tier List
                  </Link>{" "}
                  to decide where to invest
                </li>
                <li>
                  <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Calculator
                  </Link>{" "}
                  to compare upgrade breakpoints
                </li>
                <li>
                  <Link href="/universal-tower-defense-wiki" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Wiki
                  </Link>{" "}
                  for structured reference info
                </li>
              </ul>
              <p className="text-xs text-zinc-500">
                If you want updates and resources, check the Community page.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

