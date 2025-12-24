"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
};

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-zinc-900/80 px-3 py-1.5 text-xs font-semibold text-sky-200 transition-all hover:border-sky-300 hover:text-white hover:shadow-lg hover:shadow-sky-500/10 active:translate-y-px"
      aria-label={`Copy code ${value}`}
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <rect x="10" y="10" width="10" height="10" rx="2" />
      </svg>
      <span className="font-mono tracking-wide">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
