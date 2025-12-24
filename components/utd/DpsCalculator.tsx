"use client";

import { useMemo, useState } from "react";

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
  hint?: string;
};

function NumberField({ label, value, onChange, min, step, hint }: NumberFieldProps) {
  return (
    <label className="space-y-1.5">
      <span className="text-xs font-bold text-white">{label}</span>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        step={step}
        className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
      />
      {hint ? <p className="text-[11px] text-zinc-400 leading-relaxed">{hint}</p> : null}
    </label>
  );
}

export default function DpsCalculator() {
  const [baseDamage, setBaseDamage] = useState(100);
  const [attacksPerSecond, setAttacksPerSecond] = useState(1);
  const [critChancePct, setCritChancePct] = useState(0);
  const [critMultiplier, setCritMultiplier] = useState(2);

  const results = useMemo(() => {
    const chance = Math.min(Math.max(critChancePct / 100, 0), 1);
    const multiplier = Math.max(critMultiplier, 1);
    const dps = baseDamage * attacksPerSecond * (1 + chance * (multiplier - 1));
    return {
      chance,
      dps,
      expectedHit: baseDamage * (1 + chance * (multiplier - 1)),
    };
  }, [attacksPerSecond, baseDamage, critChancePct, critMultiplier]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Inputs</h2>
        <div className="grid gap-3">
          <NumberField
            label="Base damage"
            value={baseDamage}
            onChange={setBaseDamage}
            min={0}
            step={1}
            hint="Damage dealt per attack (before crit)."
          />
          <NumberField
            label="Attacks per second"
            value={attacksPerSecond}
            onChange={setAttacksPerSecond}
            min={0}
            step={0.01}
            hint="How many attacks the unit performs per second."
          />
          <NumberField
            label="Crit chance (%)"
            value={critChancePct}
            onChange={setCritChancePct}
            min={0}
            step={0.1}
            hint="0 to 100. This calculator clamps values safely."
          />
          <NumberField
            label="Crit multiplier"
            value={critMultiplier}
            onChange={setCritMultiplier}
            min={1}
            step={0.05}
            hint="Example: 2.0 means crits deal 2× base damage."
          />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Results</h2>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
            <p className="text-xs font-bold text-zinc-300">Expected damage per hit</p>
            <p className="mt-1 font-mono text-2xl font-extrabold text-sky-100">
              {results.expectedHit.toFixed(2)}
            </p>
          </div>
          <div className="rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-900/25 via-zinc-950/40 to-black p-4">
            <p className="text-xs font-bold text-zinc-300">Estimated DPS</p>
            <p className="mt-1 font-mono text-3xl font-extrabold text-white">
              {results.dps.toFixed(2)}
            </p>
            <p className="mt-2 text-[11px] text-zinc-400">
              Assumes sustained attacking with an average crit chance of {(results.chance * 100).toFixed(1)}%.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
            <p className="text-xs font-bold text-zinc-300">How to use this</p>
            <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
              Compare two upgrade paths by changing base damage and attack speed. If an upgrade increases DPS less than
              a cheaper alternative, consider investing elsewhere (or check the tier list for better unit value).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

