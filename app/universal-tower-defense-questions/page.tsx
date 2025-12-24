import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Questions - FAQ & Safety Guide (Dec 2025)",
  description:
    "Frequently asked questions for Universal Tower Defense (UTD): codes, summons, team roles, progression, and safety tips for Discord and community links.",
  alternates: { canonical: "/universal-tower-defense-questions" },
  openGraph: {
    title: "Universal Tower Defense Questions - FAQ & Safety Guide",
    description:
      "UTD FAQ covering codes, summons, team building, progression, and safe community practices.",
  },
};

const faqSections = [
  {
    title: "Getting started",
    items: [
      {
        q: "What is Universal Tower Defense (UTD)?",
        a: "Universal Tower Defense (UTD) is a Roblox tower defense experience where you collect units, build teams by role, and clear waves using placement and upgrade timing.",
      },
      {
        q: "What should I do first as a new player?",
        a: "Redeem working codes, build a basic role-balanced team (early coverage + DPS + utility), and avoid spending Gems blindly until you understand what you need.",
      },
      {
        q: "Where can I see recommended roles for my team?",
        a: "Use the Team Builder to plan six slots by role, then cross-check the Tier List for priorities.",
      },
    ],
  },
  {
    title: "Codes",
    items: [
      {
        q: "Where do I redeem codes?",
        a: "Redeem codes inside the UTD lobby via the in-game Codes button/menu. If you don’t see it after an update, rejoin a fresh server.",
      },
      {
        q: "Why does a code say “Invalid code” or “Code not found”?",
        a: "Most often it’s expired, typed with an extra space, or the server is outdated after a patch. Copy-paste the code and try a new server.",
      },
      {
        q: "What rewards do codes usually give?",
        a: "Common rewards include Gems and Trait Rerolls. Reward amounts change after updates, so always check the latest list.",
      },
    ],
  },
  {
    title: "Summons & units",
    items: [
      {
        q: "Should I summon as soon as I get Gems?",
        a: "Not always. Summoning without a plan can waste Gems. Set a budget, check what’s featured, and summon when it improves your team’s role coverage.",
      },
      {
        q: "Is higher rarity always better?",
        a: "No. A unit that fixes your current bottleneck (early leaks, crowd control, boss damage) often outperforms a higher-rarity unit that doesn’t match your needs.",
      },
      {
        q: "Where can I learn how units are obtained?",
        a: "Use the Units page for an overview of summon rates and acquisition methods, plus an example showcase list.",
      },
    ],
  },
  {
    title: "Team building & progression",
    items: [
      {
        q: "Why do I leak early waves?",
        a: "Usually you lack early coverage, placement is inefficient, or you delayed upgrades too long. Add a reliable early unit or crowd control and upgrade sooner.",
      },
      {
        q: "Why do I time out on late waves?",
        a: "You likely need more scaling DPS, better upgrade timing, or stronger single-target damage for bosses. Use calculators to compare upgrade paths.",
      },
      {
        q: "How do I decide what to upgrade first?",
        a: "Upgrade at breakpoints: the cheapest upgrade that stops leaks, keeps pace with wave scaling, or unlocks a new placement strategy.",
      },
    ],
  },
  {
    title: "Discord & community safety",
    items: [
      {
        q: "How do I find the official Discord safely?",
        a: "Never trust random invites from comments or DMs. Use official Roblox game links, verified announcements, or trusted hub pages. Use the Discord page on this site for a checklist.",
      },
      {
        q: "How do I avoid scams?",
        a: "Avoid links promising “free Robux”, “instant secret units”, or asking for account/session info. Official teams do not need your password.",
      },
    ],
  },
] as const;

export default function UTDQuestionsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
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

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10">
        <section className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100">
            Updated: {lastUpdated}
          </div>
          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-extrabold tracking-tight text-white text-glow">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            Quick answers for codes, summons, teams, and safer community browsing. If you’re looking for a fast next
            step: redeem codes, build role coverage, and only summon with a plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-codes"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30 active:scale-[0.98]"
            >
              Go to Codes
            </Link>
            <Link
              href="/universal-tower-defense-units"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Browse Units
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">The role coverage cheat sheet</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Most “I can’t clear” problems are role problems: early coverage, crowd control, scaling DPS, or boss
              damage. Use this as a quick checklist.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <img
              src="/images/utd-team-roles.svg"
              alt="Team role coverage diagram"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-200">Fast path</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Redeem codes → choose a role-balanced team → invest into one scaling DPS → add utility when you leak.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-200">Avoid</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Blind summoning, spending Gems without a plan, and copying random Discord links from comments.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-200">Tools</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Use the Team Builder to plan roles and the Calculator to compare upgrade paths instead of guessing.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          {faqSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4"
            >
              <h2 className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-extrabold text-white text-glow">
                {section.title}
              </h2>
              <div className="grid gap-3">
                {section.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-white/10 bg-zinc-900/30 px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-sm font-bold text-white flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="text-sky-200 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="relative overflow-hidden space-y-3 rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-900/35 via-violet-900/15 to-black p-8 text-center shadow-2xl shadow-black/40">
          <h2 className="relative font-[family-name:var(--font-orbitron)] text-2xl font-extrabold text-white md:text-3xl text-glow">
            Still stuck?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-zinc-200 leading-relaxed">
            Use the guide for progression structure and the community page for safe resource links.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/universal-tower-defense-guide"
              className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Open Guide
            </Link>
            <Link
              href="/universal-tower-defense-community"
              className="rounded-full border border-white/10 bg-zinc-950/40 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/25"
            >
              Community Hub
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </div>
  );
}

