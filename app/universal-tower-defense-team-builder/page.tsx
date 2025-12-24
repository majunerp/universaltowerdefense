import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import TeamBuilder from "@/components/utd/TeamBuilder";
import { lastUpdated } from "@/lib/utd";

export const metadata: Metadata = {
  title: "UTD Team Builder - Plan Comps & Roles (Dec 2025)",
  description:
    "Universal Tower Defense team builder: plan a 6-slot comp, assign roles, and generate a shareable summary for teammates.",
  alternates: { canonical: "/universal-tower-defense-team-builder" },
  openGraph: {
    title: "UTD Team Builder - Plan Comps & Roles",
    description:
      "Build a 6-slot team with roles and a shareable summary for Universal Tower Defense (UTD).",
  },
};

export default function UTDTeamBuilderPage() {
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
            Team Builder
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-zinc-200 leading-relaxed">
            Plan your comp before you queue. Assign roles, write one execution note per slot, and export a clean summary.
            This is a generic planner (names are free-form) so you can use it for any meta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/universal-tower-defense-tier-list"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
            >
              View tier list
            </Link>
            <Link
              href="/universal-tower-defense-calculator"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-zinc-950/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-900/60 hover:border-sky-400/30"
            >
              Open DPS calculator
            </Link>
          </div>
        </section>

        <TeamBuilder />
      </div>
    </div>
  );
}

