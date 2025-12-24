"use client";

import { useMemo, useState } from "react";

import type { UTDUnit, UnitRarity, UnitRole } from "@/lib/utd";

type Props = {
  units: UTDUnit[];
};

const ROLE_OPTIONS: Array<UnitRole | "All"> = [
  "All",
  "DPS",
  "Support",
  "Crowd Control",
  "Hybrid",
  "Economy",
];

const RARITY_OPTIONS: Array<UnitRarity | "All"> = [
  "All",
  "Common",
  "Rare",
  "Epic",
  "Mythic",
  "Secret",
  "Unknown",
];

function badgeColorClass(rarity: UnitRarity) {
  switch (rarity) {
    case "Common":
      return "bg-zinc-500/15 text-zinc-200 border-zinc-400/20";
    case "Rare":
      return "bg-emerald-500/15 text-emerald-200 border-emerald-400/20";
    case "Epic":
      return "bg-sky-500/15 text-sky-200 border-sky-400/20";
    case "Mythic":
      return "bg-red-500/15 text-red-200 border-red-400/20";
    case "Secret":
      return "bg-violet-600/15 text-violet-200 border-violet-400/20";
    case "Unknown":
      return "bg-white/10 text-zinc-200 border-white/10";
  }
}

export default function UnitBrowser({ units }: Props) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<(typeof ROLE_OPTIONS)[number]>("All");
  const [rarity, setRarity] = useState<(typeof RARITY_OPTIONS)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return units.filter((unit) => {
      if (role !== "All" && unit.role !== role) return false;
      if (rarity !== "All" && unit.rarity !== rarity) return false;
      if (!q) return true;
      const haystack = [
        unit.name,
        unit.role,
        unit.rarity,
        unit.obtain,
        unit.notes,
        ...(unit.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, rarity, role, units]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-3">
        <label className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
          <span className="block text-xs font-bold text-zinc-200 uppercase tracking-widest">
            Search
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: mythic, banner, quest, CC…"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-sky-400/35"
          />
        </label>

        <label className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
          <span className="block text-xs font-bold text-zinc-200 uppercase tracking-widest">
            Role
          </span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as (typeof ROLE_OPTIONS)[number])}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-sky-400/35"
          >
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
          <span className="block text-xs font-bold text-zinc-200 uppercase tracking-widest">
            Rarity
          </span>
          <select
            value={rarity}
            onChange={(e) =>
              setRarity(e.target.value as (typeof RARITY_OPTIONS)[number])
            }
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-sky-400/35"
          >
            {RARITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex items-center justify-between gap-4 text-sm text-zinc-300">
        <p>
          Showing <span className="font-semibold text-white">{filtered.length}</span>{" "}
          of <span className="font-semibold text-white">{units.length}</span> units
          in this showcase list.
        </p>
        <button
          type="button"
          className="rounded-full border border-white/10 bg-zinc-900/30 px-4 py-2 text-xs font-bold text-white hover:bg-zinc-900/50 hover:border-sky-400/20"
          onClick={() => {
            setQuery("");
            setRole("All");
            setRarity("All");
          }}
        >
          Reset
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((unit) => (
          <article
            key={unit.name}
            className="group rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:border-sky-400/25"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-[family-name:var(--font-orbitron)] text-base font-extrabold text-white">
                {unit.name}
              </h3>
              <span
                className={[
                  "inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                  badgeColorClass(unit.rarity),
                ].join(" ")}
              >
                {unit.rarity}
              </span>
            </div>

            <p className="mt-2 text-xs font-semibold text-sky-200">
              Role: <span className="text-white">{unit.role}</span>
            </p>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              {unit.notes}
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-300">
                Obtain
              </p>
              <p className="mt-1 text-sm text-zinc-200">{unit.obtain}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {unit.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

