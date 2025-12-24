import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "UTD Script Info - Safety Notes & What to Avoid (Dec 2025)",
  description:
    "Universal Tower Defense script page: safety notes, common risks, and how to avoid scams. This site does not provide exploit scripts.",
  alternates: { canonical: "/universal-tower-defense-script" },
  openGraph: {
    title: "UTD Script Info - Safety Notes & What to Avoid",
    description:
      "Safety-first information about scripts and scams related to UTD. No exploit scripts provided.",
  },
};

export default function UTDScriptPage() {
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
            UTD Scripts: Safety Notes
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            This page is informational and safety-focused. We do not provide exploit scripts, executors, or bypass
            methods. If you see “free script” claims, treat them as high-risk: many are malware, scams, or ban traps.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Common risks</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 leading-relaxed">
              <li>Account bans or progress loss from rule violations.</li>
              <li>Malware delivered via “executors”, downloads, or suspicious browser extensions.</li>
              <li>Phishing links that steal Roblox credentials.</li>
              <li>Fake “Discord verification” bots requesting login tokens.</li>
            </ul>
            <p className="text-xs text-zinc-500">
              Safer path: use codes, learn strategy, and optimize your team with the tier list and calculator.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Better alternatives</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Most players looking for scripts actually want faster progression. These pages solve the same problem
                safely:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="/universal-tower-defense-codes" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Codes
                  </Link>{" "}
                  for free Gems and rewards
                </li>
                <li>
                  <Link href="/universal-tower-defense-tier-list" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Tier List
                  </Link>{" "}
                  to invest in the right units
                </li>
                <li>
                  <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Calculator
                  </Link>{" "}
                  to avoid wasteful upgrades
                </li>
                <li>
                  <Link href="/universal-tower-defense-guide" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Guide
                  </Link>{" "}
                  for repeatable wave-clearing strategy
                </li>
              </ul>
              <p>
                These are the highest-leverage improvements: they increase clears per hour without risking your account.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white text-glow">If you want the official Discord</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            The safest way to find the official Discord is via the game’s Roblox page or in-game announcements. Use the
            Discord page on this site for a checklist and scam warnings.
          </p>
          <div className="pt-1">
            <Link
              href="/universal-tower-defense-discord"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Open Discord checklist
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

