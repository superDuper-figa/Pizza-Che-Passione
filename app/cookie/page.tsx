import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy"
};

const mapsUrl =
  "https://www.google.com/maps/place/CGIL+SAN+POLO+D'ENZA/@44.6254704,10.4254359,17z/data=!4m6!3m5!1s0x47800facd12b2943:0xa832c285f00f2121!8m2!3d44.625582!4d10.4254338!16s%2Fg%2F11y312k62j";

export default function CookiePage() {
  return (
    <main className="min-h-screen bg-panna text-charcoal">
      <SiteHeader mapsUrl={mapsUrl} initialTone="light" />
      <section data-nav-tone="light" className="px-5 pb-16 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm font-bold uppercase tracking-[0.14em] text-tomato">
            Torna al sito
          </Link>
          <h1 className="mt-8 font-display text-5xl">Cookie Policy</h1>
          <p className="mt-6 leading-8 text-charcoal/72">
            Il sito usa contenuti incorporati di terze parti, inclusa la mappa
            Google. La cookie policy va finalizzata con il banner consenso e con
            l&apos;elenco reale dei servizi attivati in produzione.
          </p>
        </div>
      </section>
    </main>
  );
}
