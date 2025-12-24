"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, ROBLOX_GAME_URL } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = NAV_ITEMS;
  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60 shadow-lg shadow-black/20 transition-all duration-300">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
          <Link className="col-start-2 md:col-start-1 justify-self-center md:justify-self-start flex items-center space-x-3 group shrink-0" href="/">
               <div className="relative">
                 <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
                 <div className="relative flex items-center justify-center w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 group-hover:border-sky-400/50 transition-colors">
                   <span className="font-[family-name:var(--font-orbitron)] text-xl font-extrabold text-sky-200 group-hover:text-white transition-colors">
                     U
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-orbitron)] text-lg md:text-xl font-extrabold tracking-wide text-white">
                  Universal Tower Defense
                </span>
                <span className="text-[10px] text-zinc-400 tracking-widest font-semibold">CODES • TIER LIST • TOOLS</span>
              </div>
            </Link>

          <nav className="col-start-2 hidden md:flex items-center justify-center gap-2 lg:gap-3">
               {items.map((item) => {
                 const isActive =
                   item.href === "/"
                     ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-full px-3 py-1.5 text-sm font-semibold transition-all",
                      isActive
                        ? "bg-sky-500/15 text-sky-100 border border-sky-400/30 shadow-[0_0_18px_rgba(56,189,248,0.12)]"
                        : "text-zinc-300 hover:text-white hover:bg-zinc-900/60 border border-transparent hover:border-sky-400/20",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

          <div className="col-start-3 justify-self-end flex items-center gap-2 shrink-0">
               <a
                 href={ROBLOX_GAME_URL}
                 target="_blank"
                 rel="noopener noreferrer nofollow"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30 active:scale-[0.98]"
              >
                Play Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M6 12h4" />
                  <path d="M8 10v4" />
                  <path d="M15 12h.01" />
                  <path d="M18 10h.01" />
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z" />
                </svg>
              </a>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-zinc-900/50 p-3 text-zinc-100 transition-colors hover:bg-zinc-900 hover:border-sky-400/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  {mobileOpen ? (
                    <path d="M18 6 6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/70"
            onClick={closeMobileMenu}
          />
          <div className="absolute top-0 left-0 right-0 mt-20 px-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
              <div className="p-4">
                <div className="grid gap-2">
                  {items.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={[
                          "flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors",
                          isActive
                            ? "border-sky-400/40 bg-sky-500/10"
                            : "border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-sky-400/20",
                        ].join(" ")}
                      >
                        <span className="text-sm font-bold text-white">{item.label}</span>
                        <span className="text-[11px] text-zinc-400">{item.description}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 grid gap-2">
                  <a
                    href={ROBLOX_GAME_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/30"
                  >
                    Play UTD
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/privacy"
                      onClick={closeMobileMenu}
                      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-center text-sm font-semibold text-zinc-200 hover:bg-zinc-900/60"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/terms"
                      onClick={closeMobileMenu}
                      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-center text-sm font-semibold text-zinc-200 hover:bg-zinc-900/60"
                    >
                      Terms
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
