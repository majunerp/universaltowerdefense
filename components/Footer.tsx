import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

export default function Footer() {
  const extraLinks = [
    { href: "/universal-tower-defense-resources", label: "Resources" },
    { href: "/universal-tower-defense-questions", label: "Questions" },
    { href: "/universal-tower-defense-units", label: "Units" },
  ];

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-sm relative z-10">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6 py-10 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-lg border border-white/10">
                  <span className="font-[family-name:var(--font-orbitron)] text-lg font-extrabold text-sky-200">
                    U
                  </span>
                </div>
                <span className="font-[family-name:var(--font-orbitron)] text-lg font-extrabold tracking-wide text-white">
                  Universal Tower Defense
                </span>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                A fan-made Universal Tower Defense (UTD) resource hub: codes, tier lists, calculators, and guides.
                Learn faster, build better teams, and clear waves more efficiently.
              </p>
              <p className="text-sm font-semibold text-sky-300 italic">Strategy. Efficiency. Progress.</p>
            </div>

            <div className="flex flex-col space-y-3 md:items-center">
              <h3 className="text-base font-semibold text-zinc-300">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {NAV_ITEMS.filter((item) => item.href !== "/").map((item) => (
                  <Link
                    key={item.href}
                    className="text-zinc-500 hover:text-sky-300 transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
                {extraLinks.map((item) => (
                  <Link
                    key={item.href}
                    className="text-zinc-500 hover:text-sky-300 transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:items-end">
              <h3 className="text-base font-semibold text-zinc-300">Legal</h3>
              <Link className="text-sm text-zinc-500 hover:text-sky-300 transition-colors" href="/privacy">Privacy Policy</Link>
              <Link className="text-sm text-zinc-500 hover:text-sky-300 transition-colors" href="/terms">Terms of Service</Link>
              <p className="text-sm text-zinc-500">
                Contact: <a href="mailto:support@universaltowerdefense.app" className="hover:text-sky-300 transition-colors">support@universaltowerdefense.app</a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
            <p className="text-sm text-zinc-500">2025 UTD Resource Hub. All rights reserved.</p>
            <p className="mt-3 text-xs text-zinc-600">
              This is a fan-made website and is not affiliated with or endorsed by Roblox Corporation or the game’s
              developers. All game names, assets, and trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
