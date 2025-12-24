import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CopyButton from "@/components/CopyButton";
import { ROBLOX_GAME_URL } from "@/lib/site";
import {
  activeCodes,
  codesLastChecked,
  codesSourceUrl,
  expiredCodes,
  redeemSteps,
  troubleshooting,
} from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Codes - Free Gems & Rewards (Dec 2025)",
  description:
    "Get the latest working Universal Tower Defense (UTD) codes for free Gems, Trait Rerolls, and rewards. Includes redeem steps, troubleshooting, and an expired archive.",
  alternates: { canonical: "/universal-tower-defense-codes" },
  openGraph: {
    title: "Universal Tower Defense Codes - Free Gems & Rewards",
    description:
      "Working UTD codes with redeem steps, troubleshooting, and an expired archive.",
  },
};

export default function UTDCodesPage() {
  const faq = [
    {
      q: "Where do I redeem Universal Tower Defense codes?",
      a: "Redeem codes inside the UTD lobby using the in-game Codes menu. If you don’t see it, rejoin a fresh server after updates.",
    },
    {
      q: "Why is a code not working?",
      a: "Most failures are expired codes or formatting issues (extra spaces). Codes can also be limited to one redemption per account.",
    },
    {
      q: "What rewards do UTD codes give?",
      a: "Common rewards include Gems, Trait Rerolls, and event boosts. Rewards can change after patches.",
    },
    {
      q: "How often do new codes drop?",
      a: "Codes typically appear around updates, milestones, and events. Bookmark this page and check after major patches.",
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
            <span className="inline-flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.35)]" />
            Last checked: {codesLastChecked}
          </div>

          <p className="text-xs text-zinc-400">
            Source list:{" "}
            <a
              href={codesSourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sky-200 hover:text-white underline underline-offset-4"
            >
              universaltowerdefensegame.com
            </a>
          </p>

          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-extrabold tracking-tight text-white text-glow">
            Universal Tower Defense Codes
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            This page tracks working UTD codes and provides a clean redemption checklist. Codes can expire quickly after
            updates, so always redeem new entries first and use the troubleshooting tips if anything fails.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={ROBLOX_GAME_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30 active:scale-[0.98]"
            >
              Play UTD
            </a>
            <Link
              href="/universal-tower-defense-tier-list"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Check tier list
            </Link>
          </div>
        </section>

        <section id="working-codes" className="space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Working codes</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Redeem the newest codes first. Codes can expire quickly after updates and milestones.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-2xl shadow-black/40">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10 text-left">
                <thead className="bg-gradient-to-r from-sky-900/30 via-violet-900/20 to-sky-900/30">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-sky-200/90">Code</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-sky-200/90">Reward</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-sky-200/90">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {activeCodes.length > 0 ? (
                    activeCodes.map((item) => (
                      <tr key={item.code} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-mono text-base font-bold text-white">{item.code}</p>
                          <p className="mt-1 text-[11px] text-zinc-400">{item.status}</p>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-200">{item.reward}</td>
                        <td className="px-6 py-4">
                          <CopyButton value={item.code} />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-6 py-8 text-sm text-zinc-300" colSpan={3}>
                        No verified working codes are listed in this build. Check official announcements and return after
                        updates.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">How to redeem</h2>
            <div className="space-y-3">
              {redeemSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
                  <p className="text-xs font-bold text-sky-200">
                    Step {index + 1}: <span className="text-white">{step.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-300 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Troubleshooting</h2>
            <div className="space-y-3">
              {troubleshooting.map((issue) => (
                <div key={issue.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
                  <p className="text-xs font-bold text-white">{issue.title}</p>
                  <p className="mt-1 text-sm text-zinc-300 leading-relaxed">{issue.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Expired archive</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              This is a helper list to prevent wasted time. Expired codes are kept for historical reference.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30">
            {expiredCodes.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {expiredCodes.map((item) => (
                  <div key={item.code} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-center">
                    <p className="font-mono text-base font-bold text-zinc-500 line-through">{item.code}</p>
                    <p className="mt-1 text-[11px] text-zinc-400">{item.reward}</p>
                    <span className="mt-3 inline-flex rounded-full bg-zinc-800/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-300">
                      Expired
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-300">
                No archived codes are listed in this build.
              </p>
            )}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 md:grid-cols-2">
          <div className="space-y-3">
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

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Next steps</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                After redeeming codes, avoid spending Gems blindly. Use the tier list to decide which units are worth
                investing in, and use the calculator to understand upgrade breakpoints.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="/universal-tower-defense-tier-list" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Tier List
                  </Link>{" "}
                  for unit investment priorities
                </li>
                <li>
                  <Link href="/universal-tower-defense-calculator" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Calculator
                  </Link>{" "}
                  for DPS comparisons
                </li>
                <li>
                  <Link href="/universal-tower-defense-guide" className="text-sky-200 hover:text-white underline underline-offset-4">
                    Guide
                  </Link>{" "}
                  for progression strategy
                </li>
              </ul>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </div>
  );
}
