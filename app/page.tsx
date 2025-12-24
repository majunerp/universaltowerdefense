import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CopyButton from "@/components/CopyButton";
import { NAV_ITEMS, ROBLOX_GAME_URL, SITE_NAME } from "@/lib/site";
import {
  activeCodes,
  homeFaq,
  howToObtainUnits,
  lastUpdated,
  moreTools,
  summonRates,
} from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense - Codes, Tier List, Guides & Calculator | UTD Roblox",
  description:
    "Complete Universal Tower Defense resource hub! Get the latest working codes, tier lists, DPS calculators, team guides, and wiki for UTD Roblox game. Master every wave with our tools and strategies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Universal Tower Defense - Codes, Tier List, Guides & Calculator | UTD Roblox",
    description:
      "Complete Universal Tower Defense resource hub: working codes, tier lists, calculators, guides, and wiki for UTD Roblox.",
  },
};

export default function HomePage() {
  const latest = activeCodes[0];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((item) => ({
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-12">
        <section className="pt-4 md:pt-10">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100">
              <span className="inline-flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.35)]" />
              Updated: {lastUpdated}
            </div>

            <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-extrabold tracking-tight text-white text-glow">
              Universal Tower Defense Hub
            </h1>
            <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
              {SITE_NAME} is a practical resource hub for UTD Roblox: working codes, tier lists, a DPS calculator, and
              step-by-step guides. Use it to build stronger teams faster, plan upgrades, and clear waves efficiently.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/universal-tower-defense-codes"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30 active:scale-[0.98]"
              >
                View working codes
              </Link>
              <a
                href={ROBLOX_GAME_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
              >
                Play Now on Roblox
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3 items-stretch">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Quick start</h2>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Start with codes, then invest smartly. UTD rewards efficiency: the right unit upgrades at the right time
              can outperform raw rarity.
            </p>
            <ol className="mt-5 space-y-3 text-sm text-zinc-200 leading-relaxed list-decimal list-inside">
              <li>
                Redeem the newest codes on{" "}
                <Link
                  href="/universal-tower-defense-codes"
                  className="text-sky-200 hover:text-white underline underline-offset-4"
                >
                  Codes
                </Link>
                .
              </li>
              <li>
                Check{" "}
                <Link
                  href="/universal-tower-defense-tier-list"
                  className="text-sky-200 hover:text-white underline underline-offset-4"
                >
                  Tier List
                </Link>{" "}
                before spending Gems.
              </li>
              <li>
                Use the{" "}
                <Link
                  href="/universal-tower-defense-calculator"
                  className="text-sky-200 hover:text-white underline underline-offset-4"
                >
                  Calculator
                </Link>{" "}
                to compare DPS and upgrade breakpoints.
              </li>
              <li>
                Follow{" "}
                <Link
                  href="/universal-tower-defense-guide"
                  className="text-sky-200 hover:text-white underline underline-offset-4"
                >
                  Guide
                </Link>{" "}
                for wave strategy, economy pacing, and team composition tips.
              </li>
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Latest code snapshot</h2>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              If you only want the most recent code, copy it here. For redemption steps and troubleshooting, open the full
              Codes page.
            </p>

            {latest ? (
              <div className="mt-5 rounded-2xl border border-sky-400/25 bg-gradient-to-br from-sky-900/25 via-zinc-950/40 to-black p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-left space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      {latest.status}
                      {latest.added ? ` • Added ${latest.added}` : ""}
                    </p>
                    <p className="font-mono text-2xl font-extrabold text-sky-100 tracking-wider">{latest.code}</p>
                    <p className="text-sm text-zinc-200">
                      Reward: <span className="font-semibold text-white">{latest.reward}</span>
                    </p>
                  </div>
                  <CopyButton value={latest.code} />
                </div>
                {latest.note ? <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{latest.note}</p> : null}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-sm text-zinc-300">
                No verified active codes are listed on this build. Check the Codes page and the official channels for new
                drops.
              </div>
            )}

            <div className="mt-4 flex justify-center">
              <Link
                href="/universal-tower-defense-codes"
                className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/30 px-5 py-2 text-xs font-bold text-white hover:bg-zinc-900/50 hover:border-sky-400/25"
              >
                Open Codes page →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3 text-glow">See It In Action</h2>
            <p className="text-slate-400">Watch the official gameplay trailer and sneak peeks.</p>
          </div>

          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video group">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/iUKWhPyhndI"
              title="Universal Tower Defense - Release Trailer"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="text-center mt-8">
            <a
              href={ROBLOX_GAME_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-lg shadow-red-600/20 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="6" x2="10" y1="11" y2="11" />
                <line x1="8" x2="8" y1="9" y2="13" />
                <line x1="15" x2="15.01" y1="12" y2="12" />
                <line x1="18" x2="18.01" y1="10" y2="10" />
                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
              </svg>
              Play on Roblox Now
            </a>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Summon rates</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Use these rates as a planning baseline. If you are chasing high rarity units, set a Gems budget and avoid
              tilt summoning.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {summonRates.map((item) => (
              <div
                key={item.rarity}
                className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-5 text-center shadow-lg shadow-black/20"
              >
                <div className={`mx-auto mb-3 h-14 w-14 rounded-2xl ${item.colorClass} shadow-lg`} />
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">{item.rarity}</p>
                <p className="mt-1 text-sm font-semibold text-sky-200">{item.chance} Drop Rate</p>
                <p className="mt-2 text-xs text-zinc-400">Plan banners around expected variance.</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30">
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-extrabold text-white text-center">
              How to obtain units
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {howToObtainUnits.map((row) => (
                <div key={row.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-center">
                  <p className="text-sm font-bold text-white">{row.title}</p>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Explore tools & guides</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Each page is focused on a single job: codes, tier list, calculator, guides, and reference info.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {NAV_ITEMS.filter((item) => item.href !== "/").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-zinc-950/55 backdrop-blur-md p-6 shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-zinc-950/70"
              >
                <div className="space-y-2">
                  <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                    {item.label}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  <p className="text-xs font-semibold text-sky-200/90">Open page →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">More tools</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Inspired by the reference hub’s “More Tools” section: small utilities to help you plan comps, costs, and
              progression decisions.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {moreTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-3xl border border-white/10 bg-zinc-950/55 backdrop-blur-md p-6 shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-zinc-950/70"
              >
                <div className="space-y-2">
                  <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                    {tool.title}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{tool.description}</p>
                  <p className="text-xs font-semibold text-sky-200/90">Open tool →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Resources & FAQ</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Extra pages for quick answers, safer community browsing, and unit role planning.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/universal-tower-defense-resources"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
            >
              <img
                src="/images/utd-upgrade-breakpoints.svg"
                alt="Upgrade breakpoint concept chart"
                className="h-36 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 space-y-2">
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                  Tools & Resources
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Checklists, navigation, and safe link guidance.
                </p>
                <p className="text-xs font-semibold text-sky-200/90">Open resources →</p>
              </div>
            </Link>

            <Link
              href="/universal-tower-defense-questions"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
            >
              <img
                src="/images/utd-team-roles.svg"
                alt="Team role coverage diagram"
                className="h-36 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 space-y-2">
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                  Questions (FAQ)
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Codes, summons, progression, and safety tips.
                </p>
                <p className="text-xs font-semibold text-sky-200/90">Open FAQ →</p>
              </div>
            </Link>

            <Link
              href="/universal-tower-defense-units"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
            >
              <img
                src="/images/utd-summon-flow.svg"
                alt="Summon flow diagram"
                className="h-36 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 space-y-2">
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                  Units Overview
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Summon rates, obtain methods, and roles.
                </p>
                <p className="text-xs font-semibold text-sky-200/90">Browse units →</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Why this hub works</h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                UTD is a game of small advantages: efficient team building, smart upgrade timing, and avoiding wasted
                Gems. Most players fall behind not because of skill, but because they spend resources without a plan. This
                site is structured to keep decisions simple: get codes, check tier list, calculate DPS, then follow a
                guide.
              </p>
              <p>
                Use it like a workflow. If you are new, follow the Quick start checklist. If you are returning after an
                update, re-check Codes, then scan Tier List changes before spending Gems.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">FAQ</h2>
            <div className="space-y-3">
              {homeFaq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-left transition-colors hover:bg-zinc-900/50"
                >
                  <p className="text-xs font-bold text-white mb-1.5">{item.q}</p>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden space-y-3 rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-900/35 via-violet-900/15 to-black p-8 text-center shadow-2xl shadow-black/40">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl animate-pulse delay-700" />

          <h2 className="relative font-[family-name:var(--font-orbitron)] text-2xl font-extrabold text-white md:text-4xl text-glow text-center">
            Ready to clear more waves?
          </h2>
          <p className="mx-auto w-full max-w-2xl text-center text-sm text-zinc-200 md:text-base leading-relaxed">
            Redeem codes first, then invest in units with the best impact. Use the tier list and calculator to make every
            Gem count.
          </p>
          <div className="relative pt-2 flex justify-center gap-3 flex-col sm:flex-row">
            <Link
              href="/universal-tower-defense-codes"
              className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Get codes
            </Link>
            <Link
              href="/universal-tower-defense-tier-list"
              className="rounded-full border border-white/10 bg-zinc-950/40 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/25"
            >
              View tier list
            </Link>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </div>
  );
}
