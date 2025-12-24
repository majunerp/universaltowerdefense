"use client";

import { useMemo, useState } from "react";

import CopyButton from "@/components/CopyButton";

type Role = "Main DPS" | "Support" | "CC" | "Economy" | "Flex";

type Slot = {
  name: string;
  role: Role;
  notes: string;
};

const roles: Role[] = ["Main DPS", "Support", "CC", "Economy", "Flex"];

function sanitizeLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export default function TeamBuilder() {
  const [teamName, setTeamName] = useState("My UTD Team");
  const [slots, setSlots] = useState<Slot[]>(
    Array.from({ length: 6 }, () => ({ name: "", role: "Flex", notes: "" })),
  );

  const exportText = useMemo(() => {
    const header = `UTD Team: ${sanitizeLine(teamName) || "Untitled"}`;
    const lines = slots.map((slot, index) => {
      const name = sanitizeLine(slot.name) || "(empty)";
      const role = slot.role;
      const notes = sanitizeLine(slot.notes);
      return notes
        ? `${index + 1}. ${name} — ${role} — ${notes}`
        : `${index + 1}. ${name} — ${role}`;
    });
    return [header, "", ...lines].join("\n");
  }, [slots, teamName]);

  return (
    <div className="grid gap-4 lg:grid-cols-3 items-start">
      <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Build your team</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Use this tool to plan roles and prevent common composition mistakes (too much DPS, no CC; too much economy,
            no stability). Keep it simple and iterate after failed runs.
          </p>
        </div>

        <label className="space-y-1.5">
          <span className="text-xs font-bold text-white">Team name</span>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
            placeholder="e.g., Infinite Farm Comp"
          />
        </label>

        <div className="grid gap-3">
          {slots.map((slot, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 space-y-3"
            >
              <p className="text-xs font-bold text-sky-200">Slot {index + 1}</p>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="space-y-1.5">
                  <span className="text-xs font-semibold text-zinc-200">Unit name</span>
                  <input
                    type="text"
                    value={slot.name}
                    onChange={(e) => {
                      const next = slots.slice();
                      next[index] = { ...slot, name: e.target.value };
                      setSlots(next);
                    }}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
                    placeholder="e.g., Kenpachi"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-xs font-semibold text-zinc-200">Role</span>
                  <select
                    value={slot.role}
                    onChange={(e) => {
                      const next = slots.slice();
                      next[index] = { ...slot, role: e.target.value as Role };
                      setSlots(next);
                    }}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-1.5">
                <span className="text-xs font-semibold text-zinc-200">Notes</span>
                <input
                  type="text"
                  value={slot.notes}
                  onChange={(e) => {
                    const next = slots.slice();
                    next[index] = { ...slot, notes: e.target.value };
                    setSlots(next);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
                  placeholder="e.g., place early, upgrade to breakpoint, then scale"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-black/30 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Shareable summary</h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Copy this into notes or share with teammates. Keep it short: names, roles, and one execution note.
        </p>
        <textarea
          value={exportText}
          readOnly
          className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 font-mono outline-none"
        />
        <div className="flex items-center justify-between gap-3">
          <CopyButton value={exportText} />
          <button
            type="button"
            onClick={() => {
              setTeamName("My UTD Team");
              setSlots(Array.from({ length: 6 }, () => ({ name: "", role: "Flex", notes: "" })));
            }}
            className="rounded-lg border border-white/10 bg-zinc-900/30 px-4 py-2 text-xs font-bold text-white hover:bg-zinc-900/50"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

