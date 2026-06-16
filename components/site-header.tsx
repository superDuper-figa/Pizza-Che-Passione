"use client";

import { Navigation } from "lucide-react";
import Link from "next/link";
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
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8"
        aria-label="Navigazione principale"
      >
        <Link href="/#top" className={`focus-ring flex items-center gap-3 transition-colors duration-100 ${textClass}`}>
          <span className="grid size-10 place-items-center border border-charcoal bg-charcoal text-base font-semibold text-panna md:size-11 md:text-lg">
            PC
          </span>
          <span>
            <span className="block font-display text-lg leading-none md:text-xl">
              Pizza Che Passione
            </span>
            <span className={`text-[0.65rem] uppercase tracking-[0.16em] md:text-xs md:tracking-[0.18em] ${mutedTextClass}`}>
              Ex Pizzeria Unica
            </span>
          </span>
        </Link>
        <div
          className={`hidden items-center gap-8 text-sm font-black uppercase tracking-[0.14em] transition-colors duration-100 md:flex ${navTextClass}`}
        >
          <Link className="focus-ring hover:text-basil" href="/#storia">
            Storia
          </Link>
          <Link className="focus-ring hover:text-tomato" href="/menu">
            Menu
          </Link>
          <Link className="focus-ring hover:text-basil" href="/#eventi">
            Eventi
          </Link>
          <Link className="focus-ring hover:text-tomato" href="/#commenti">
            Commenti
          </Link>
          <Link className="focus-ring hover:text-basil" href="/#contatti">
            Contatti
          </Link>
        </div>
        <a
          className="focus-ring inline-flex items-center gap-2 border border-charcoal/80 bg-charcoal/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-panna shadow-sm transition hover:border-tomato hover:bg-tomato md:px-4 md:py-3 md:text-sm"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Navigation size={16} aria-hidden />
          Mappa
        </a>
      </nav>
      <nav
        className={`mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 pb-3 text-xs font-black uppercase tracking-[0.14em] transition-colors duration-100 md:hidden ${navTextClass}`}
        aria-label="Navigazione mobile"
      >
        <Link className="focus-ring shrink-0 hover:text-basil" href="/#storia">
          Storia
        </Link>
        <Link className="focus-ring shrink-0 hover:text-tomato" href="/menu">
          Menu
        </Link>
        <Link className="focus-ring shrink-0 hover:text-basil" href="/#eventi">
          Eventi
        </Link>
        <Link className="focus-ring shrink-0 hover:text-tomato" href="/#commenti">
          Commenti
        </Link>
        <Link className="focus-ring shrink-0 hover:text-basil" href="/#contatti">
          Contatti
        </Link>
      </nav>
    </header>
  );
}
