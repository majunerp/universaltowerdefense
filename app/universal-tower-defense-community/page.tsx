import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ROBLOX_GAME_URL } from "@/lib/site";
import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "UTD Community - Updates, Resources & How to Stay Current (Dec 2025)",
  description:
    "Universal Tower Defense (UTD) community page with practical resources: how to stay updated, where codes drop, and what to check after patches.",
  alternates: { canonical: "/universal-tower-defense-community" },
  openGraph: {
    title: "UTD Community - Updates, Resources & How to Stay Current",
    description:
      "Community resources and update checklist for Universal Tower Defense (UTD).",
  },
};

export default function UTDCommunityPage() {
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
            UTD Community
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            This page is a “stay current” toolkit. Universal Tower Defense updates can shift the value of units, banners,
            and upgrade paths. Use the checklist below after patches to avoid wasting Gems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={ROBLOX_GAME_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
            >
              Open UTD on Roblox
            </a>
            <Link
              href="/universal-tower-defense-discord"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Discord checklist
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Where codes usually drop</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Codes typically appear around updates, milestones, and limited-time events. The safest sources are
                official announcements and the game page.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>In-game announcements</li>
                <li>Roblox game description and update notes</li>
                <li>Official Discord announcements (avoid fake invites)</li>
                <li>Creator posts tied to events</li>
              </ul>
              <p className="text-xs text-zinc-500">
                When a code drops, redeem it immediately—some expire quickly after the next patch.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Post-update checklist</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <ol className="list-decimal list-inside space-y-2">
                <li>Check Codes and redeem new entries.</li>
                <li>Scan Tier List changes before summoning.</li>
                <li>Use the Calculator to compare upgrade paths.</li>
                <li>Adjust your team roles for the current maps.</li>
              </ol>
              <p>
                This checklist prevents the most expensive mistake: spending Gems based on outdated assumptions.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Use these pages together</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 text-sm">
            <Link
              href="/universal-tower-defense-codes"
              className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-center hover:bg-zinc-900/50"
            >
              <p className="font-bold text-white">Codes</p>
              <p className="mt-1 text-xs text-zinc-400">Redeem rewards quickly</p>
            </Link>
            <Link
              href="/universal-tower-defense-tier-list"
              className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-center hover:bg-zinc-900/50"
            >
              <p className="font-bold text-white">Tier List</p>
              <p className="mt-1 text-xs text-zinc-400">Invest smarter</p>
            </Link>
            <Link
              href="/universal-tower-defense-calculator"
              className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-center hover:bg-zinc-900/50"
            >
              <p className="font-bold text-white">Calculator</p>
              <p className="mt-1 text-xs text-zinc-400">Compare DPS</p>
            </Link>
            <Link
              href="/universal-tower-defense-guide"
              className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-center hover:bg-zinc-900/50"
            >
              <p className="font-bold text-white">Guide</p>
              <p className="mt-1 text-xs text-zinc-400">Build consistent clears</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

