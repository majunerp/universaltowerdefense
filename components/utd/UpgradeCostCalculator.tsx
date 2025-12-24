"use client";

import { useMemo, useState } from "react";

type Model = "Linear" | "Exponential";

function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export default function UpgradeCostCalculator() {
  const [model, setModel] = useState<Model>("Linear");
  const [baseCost, setBaseCost] = useState(100);
  const [levels, setLevels] = useState(10);
  const [linearStep, setLinearStep] = useState(25);
  const [growthRate, setGrowthRate] = useState(1.15);

  const result = useMemo(() => {
    const n = clampNumber(Math.floor(levels), 0, 999);
    const base = clampNumber(baseCost, 0, 1_000_000_000);
    const step = clampNumber(linearStep, 0, 1_000_000_000);
    const rate = clampNumber(growthRate, 1, 100);

    const costs: number[] = [];
    for (let i = 0; i < n; i += 1) {
      if (model === "Linear") {
        costs.push(base + i * step);
      } else {
        costs.push(base * Math.pow(rate, i));
      }
    }
    const total = costs.reduce((sum, v) => sum + v, 0);
    const average = n > 0 ? total / n : 0;
    return { costs, total, average };
  }, [baseCost, growthRate, levels, linearStep, model]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Inputs</h2>

        <label className="space-y-1.5">
          <span className="text-xs font-bold text-white">Model</span>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as Model)}
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
          >
            <option value="Linear">Linear (base + step)</option>
            <option value="Exponential">Exponential (base × rate)</option>
          </select>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            This is a generic planner to compare upgrade paths. It is not an official in-game formula.
          </p>
        </label>

        <div className="grid gap-3 md:grid-cols-2">
          <label className="space-y-1.5">
            <span className="text-xs font-bold text-white">Base cost</span>
            <input
              type="number"
              value={baseCost}
              min={0}
              onChange={(e) => setBaseCost(Number(e.target.value))}
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
            />
          </label>
          <label className="space-y-1.5">
            <span className="text-xs font-bold text-white">Levels</span>
            <input
              type="number"
              value={levels}
              min={0}
              step={1}
              onChange={(e) => setLevels(Number(e.target.value))}
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
            />
          </label>
        </div>

        {model === "Linear" ? (
          <label className="space-y-1.5">
            <span className="text-xs font-bold text-white">Step per level</span>
            <input
              type="number"
              value={linearStep}
              min={0}
              onChange={(e) => setLinearStep(Number(e.target.value))}
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
            />
          </label>
        ) : (
          <label className="space-y-1.5">
            <span className="text-xs font-bold text-white">Growth rate</span>
            <input
              type="number"
              value={growthRate}
              min={1}
              step={0.01}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/15"
            />
          </label>
        )}
      </div>

      <div className="rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-md p-6 shadow-lg shadow-black/30 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white text-glow">Results</h2>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-900/25 via-zinc-950/40 to-black p-4">
            <p className="text-xs font-bold text-zinc-300">Total cost</p>
            <p className="mt-1 font-mono text-3xl font-extrabold text-white">
              {result.total.toFixed(0)}
            </p>
            <p className="mt-2 text-[11px] text-zinc-400">
              Average per level: {result.average.toFixed(1)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4">
            <p className="text-xs font-bold text-zinc-300">First 10 levels</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-zinc-200 font-mono">
              {result.costs.slice(0, 10).map((v, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2">
                  L{i + 1}: {v.toFixed(0)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-sm text-zinc-300 leading-relaxed">
            Use this tool to compare two options: if one upgrade path consumes most of your economy, consider a different
            unit or role mix. Pair with the DPS calculator and tier list.
          </div>
        </div>
      </div>
    </div>
  );
}

