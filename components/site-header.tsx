"use client";

import { Navigation } from "lucide-react";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  mapsUrl: string;
  initialTone?: "dark" | "light";
};

export function SiteHeader({ mapsUrl, initialTone = "dark" }: SiteHeaderProps) {
  const [tone, setTone] = useState<"dark" | "light">(initialTone);
  const isDark = tone === "dark";
  const textClass = isDark ? "text-panna" : "text-charcoal";
  const mutedTextClass = isDark ? "text-panna/70" : "text-charcoal/60";
  const navTextClass = isDark ? "text-panna" : "text-charcoal/86";

  useEffect(() => {
    const updateTone = () => {
      const sampleY = Math.min(96, window.innerHeight - 1);
      const samples = [
        window.innerWidth * 0.25,
        window.innerWidth * 0.5,
        window.innerWidth * 0.75
      ];

      const nextTone =
        samples
          .flatMap((x) => document.elementsFromPoint(x, sampleY))
          .map((element) => element.closest<HTMLElement>("[data-nav-tone]"))
          .find(Boolean)
          ?.dataset.navTone === "dark"
          ? "dark"
          : "light";

      setTone(nextTone);
    };

    updateTone();
    window.addEventListener("scroll", updateTone, { passive: true });
    window.addEventListener("resize", updateTone);

    return () => {
      window.removeEventListener("scroll", updateTone);
      window.removeEventListener("resize", updateTone);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-panna/36 shadow-[0_10px_32px_rgba(17,17,17,0.1)] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8"
        aria-label="Navigazione principale"
      >
        <a href="/#top" className={`focus-ring flex items-center gap-3 transition-colors duration-100 ${textClass}`}>
          <span className="grid size-11 place-items-center border border-charcoal bg-charcoal text-lg font-semibold text-panna">
            PC
          </span>
          <span>
            <span className="block font-display text-xl leading-none">
              Pizza Che Passione
            </span>
            <span className={`text-xs uppercase tracking-[0.18em] ${mutedTextClass}`}>
              Ex Pizzeria Unica
            </span>
          </span>
        </a>
        <div
          className={`hidden items-center gap-8 text-sm font-black uppercase tracking-[0.14em] transition-colors duration-100 md:flex ${navTextClass}`}
        >
          <a className="focus-ring hover:text-basil" href="/#storia">
            Storia
          </a>
          <a className="focus-ring hover:text-tomato" href="/menu">
            Menu
          </a>
          <a className="focus-ring hover:text-basil" href="/#eventi">
            Eventi
          </a>
          <a className="focus-ring hover:text-tomato" href="/#commenti">
            Commenti
          </a>
          <a className="focus-ring hover:text-basil" href="/#contatti">
            Contatti
          </a>
        </div>
        <a
          className="focus-ring inline-flex items-center gap-2 border border-charcoal/80 bg-charcoal/90 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-panna shadow-sm transition hover:border-tomato hover:bg-tomato"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Navigation size={16} aria-hidden />
          Mappa
        </a>
      </nav>
    </header>
  );
}
