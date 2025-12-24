import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { NAV_ITEMS, ROBLOX_GAME_URL } from "@/lib/site";
import { lastUpdated, moreTools } from "@/lib/utd";

export const metadata: Metadata = {
  title: "Universal Tower Defense Resources - Tools, Links & Checklists (Dec 2025)",
  description:
    "Universal Tower Defense (UTD) resource directory: internal tools, guides, and safe external links for Roblox players. Quick checklists for codes, teams, and upgrades.",
  alternates: { canonical: "/universal-tower-defense-resources" },
  openGraph: {
    title: "Universal Tower Defense Resources - Tools, Links & Checklists",
    description:
      "UTD resource directory: tools, guides, and safe links with quick checklists.",
  },
};

export default function UTDResourcesPage() {
  const primary = NAV_ITEMS.filter((i) => i.href !== "/");

  const checklists = [
    {
      title: "After an update",
      items: [
        "Rejoin a fresh server (old servers can hide features).",
        "Redeem newest codes first and confirm rewards.",
        "Avoid blind summoning until you verify the current featured banner.",
      ],
    },
    {
      title: "Before you summon",
      items: [
        "Set a Gems budget and stick to it.",
        "Summon for roles you’re missing (DPS / CC / support).",
        "Plan upgrades before spending everything on summons.",
      ],
    },
    {
      title: "If you’re stuck",
      items: [
        "Leaking early: add early coverage or crowd control.",
        "Timing out late: add scaling DPS or boss damage.",
        "Use calculators to choose the cheapest upgrade breakpoint.",
      ],
    },
  ];

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
            Tools & Resources
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            A curated directory of UTD tools, guides, and safe links. Use it as a quick navigation hub, especially when
            you return after an update.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={ROBLOX_GAME_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30 active:scale-[0.98]"
            >
              Play UTD on Roblox
            </a>
            <Link
              href="/universal-tower-defense-questions#discord-community-safety"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Discord safety FAQ
            </Link>
          </div>
        </section>

        <section
          id="quick-checklists"
          className="scroll-mt-28 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-5"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Quick checklists</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Short, practical lists you can run through in under a minute.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {checklists.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5">
                <p className="text-sm font-bold text-white">{c.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-sky-400/80" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <img
              src="/images/utd-upgrade-breakpoints.svg"
              alt="Upgrade breakpoint concept chart"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">Core pages</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              These pages cover the essentials: codes, tier list, calculator, guide, and wiki.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-zinc-950/55 backdrop-blur-md p-6 shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-zinc-950/70"
              >
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                <p className="mt-3 text-xs font-semibold text-sky-200/90">Open page →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow">More tools</h2>
            <p className="mx-auto max-w-3xl text-sm text-zinc-300 leading-relaxed">
              Small utilities for planning teams and upgrade costs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {moreTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-3xl border border-white/10 bg-zinc-950/55 backdrop-blur-md p-6 shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-zinc-950/70"
              >
                <p className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white group-hover:text-sky-100">
                  {tool.title}
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{tool.description}</p>
                <p className="mt-3 text-xs font-semibold text-sky-200/90">Open tool →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">FAQ</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Prefer fast answers? Use the FAQ page for quick explanations and a safety checklist for community links.
            </p>
            <Link
              href="/universal-tower-defense-questions"
              className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/30 px-5 py-2 text-xs font-bold text-white hover:bg-zinc-900/50 hover:border-sky-400/25"
            >
              Open Questions →
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Units overview</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Summon rates, acquisition methods, role coverage, and a searchable showcase list.
            </p>
            <Link
              href="/universal-tower-defense-units"
              className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/30 px-5 py-2 text-xs font-bold text-white hover:bg-zinc-900/50 hover:border-sky-400/25"
            >
              Open Units →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
