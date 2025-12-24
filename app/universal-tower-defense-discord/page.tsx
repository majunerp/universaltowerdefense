import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ROBLOX_GAME_URL } from "@/lib/site";
import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Discord - How to Find the Official Link (Dec 2025)",
  description:
    "How to safely find the official Universal Tower Defense (UTD) Discord link, plus scam warnings and best practices. This page does not share random invites.",
  alternates: { canonical: "/universal-tower-defense-discord" },
  openGraph: {
    title: "Universal Tower Defense Discord - How to Find the Official Link",
    description:
      "A safety-first checklist for finding the official UTD Discord and avoiding scams.",
  },
};

export default function UTDDiscordPage() {
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
            UTD Discord (Official Link Checklist)
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            We do not post random Discord invites. Instead, this page teaches you how to safely find the official UTD
            Discord link and avoid scams.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Where to find the official Discord</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the game’s Roblox page.</li>
                <li>Check the description, social links, or group section for the official Discord.</li>
                <li>Confirm the invite is posted by the developer/team (not a random user).</li>
                <li>Join only from official sources; avoid “free gems” or “free script” servers.</li>
              </ol>
              <div className="pt-1">
                <a
                  href={ROBLOX_GAME_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 hover:shadow-sky-500/30"
                >
                  Open UTD on Roblox
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Scam warnings</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 leading-relaxed">
              <li>Never “verify” by entering your Roblox password on a third-party site.</li>
              <li>Avoid servers promising “free scripts”, “free Robux”, or “instant mythics”.</li>
              <li>Do not download executables or browser extensions from Discord DMs.</li>
              <li>Be suspicious of look-alike server names and fake staff roles.</li>
            </ul>
            <p className="text-xs text-zinc-500">
              If you are unsure, do not click. A missed Discord invite is cheaper than a stolen account.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Use the hub instead of risky shortcuts</h2>
          <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
            <p>
              If you are trying to progress faster, these pages are safer and usually more effective than random Discord
              “tools”:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link href="/universal-tower-defense-codes" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Codes
                </Link>{" "}
                for rewards
              </li>
              <li>
                <Link href="/universal-tower-defense-tier-list" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Tier List
                </Link>{" "}
                for investment decisions
              </li>
              <li>
                <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                  Calculator
                </Link>{" "}
                for upgrade comparisons
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

