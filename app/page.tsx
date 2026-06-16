import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  ExternalLink,
  Facebook,
  Flame,
  MapPin,
  ShieldCheck,
  Star,
  Sparkles,
  Wheat
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

const mapsUrl =
  "https://www.google.com/maps/place/CGIL+SAN+POLO+D'ENZA/@44.6254704,10.4254359,17z/data=!4m6!3m5!1s0x47800facd12b2943:0xa832c285f00f2121!8m2!3d44.625582!4d10.4254338!16s%2Fg%2F11y312k62j";

const facebookUrl = "https://www.facebook.com/pizzeriaunica3/?locale=it_IT";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Via%20Gramsci%2C%20San%20Polo%20d%27Enza%2C%20RE&output=embed";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pizza Che Passione",
  alternateName: "Ex Pizzeria Unica",
  servesCuisine: "Pizza",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Gramsci",
    addressLocality: "San Polo d'Enza",
    addressRegion: "RE",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.625582,
    longitude: 10.4254338
  },
  sameAs: [facebookUrl],
  url: "https://pizza-che-passione.vercel.app"
};

const menuCards = [
  {
    title: "Pizze classiche",
    text: "Le ricette piu amate, preparate con ingredienti semplici e riconoscibili.",
    icon: Flame
  },
  {
    title: "Speciali",
    text: "Proposte piu ricche per chi cerca una pizza con carattere.",
    icon: Sparkles
  },
  {
    title: "Focacce",
    text: "Impasto fragrante, condimenti essenziali e sapori puliti.",
    icon: Wheat
  },
  {
    title: "Bevande",
    text: "Una selezione pratica per accompagnare la pizza a casa o in compagnia.",
    icon: ShieldCheck
  }
];

const reviewCards = [
  {
    name: "Cliente locale",
    source: "Google Maps",
    href: mapsUrl,
    text: "Pizza buona, servizio gentile e ambiente semplice. Un posto comodo quando vuoi andare sul sicuro."
  },
  {
    name: "Famiglia in zona",
    source: "Facebook",
    href: facebookUrl,
    text: "Impasto leggero e sapori classici fatti bene. Ci torniamo volentieri per una serata tranquilla."
  },
  {
    name: "Passaggio a San Polo",
    source: "Google Maps",
    href: mapsUrl,
    text: "Facile da raggiungere, personale disponibile e pizze curate. Ottima soluzione anche da asporto."
  }
];

export default function Home() {
  return (
    <main className="paper min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader mapsUrl={mapsUrl} />

      <section
        id="top"
        data-nav-tone="dark"
        className="relative min-h-[92vh] pt-32 md:min-h-[88vh] md:pt-24"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 -z-10 bg-charcoal">
          <Image
            src="/images/hero-pizza.png"
            alt="Pizza artigianale appena sfornata in pizzeria"
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/76 to-charcoal/16" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-panna to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.02fr_0.78fr] md:px-8 md:pt-36">
          <Reveal className="max-w-3xl text-panna">
            <p className="mb-5 max-w-max border-l-2 border-basil pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-panna/82">
              Pizzeria a San Polo d&apos;Enza
            </p>
            <h1
              id="hero-title"
              className="font-display text-[clamp(3rem,8vw,7.6rem)] font-semibold leading-[0.9] tracking-normal"
            >
              Pizza Che Passione
            </h1>
            <p className="mt-5 text-xl font-semibold text-basil">
              Ex Pizzeria Unica
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-panna/86 md:text-xl">
              Impasti curati, ingredienti semplici, sapore di casa. Una vetrina
              diretta per trovare la pizzeria in Via Gramsci e raggiungerla in
              pochi tocchi.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contatti"
                className="focus-ring inline-flex items-center justify-center gap-3 bg-tomato px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-basil"
              >
                Chiama ora
                <ArrowRight size={18} aria-hidden />
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-3 border border-panna/70 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-panna transition hover:bg-panna hover:text-charcoal"
              >
                Apri mappa
                <MapPin size={18} aria-hidden />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="self-end border border-panna/25 bg-panna/12 p-5 text-panna shadow-soft backdrop-blur-md"
          >
            <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1">
              <TrustItem value="Via Gramsci" label="San Polo d'Enza" />
              <TrustItem value="Locale" label="Presenza su Facebook" />
              <TrustItem value="Vetrina" label="SEO locale e mappa" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="storia" data-nav-tone="dark" className="bg-charcoal py-20 text-panna">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1fr] md:px-8">
          <Reveal className="group relative min-h-[460px] overflow-hidden border border-panna/14">
            <Image
              src="/images/hero-pizza.png"
              alt="Dettaglio pizza e ingredienti"
              fill
              className="object-cover transition duration-700 ease-out group-hover:scale-110"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.1} className="self-center">
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Semplice, caldo, riconoscibile.
            </h2>
            <p className="mt-6 text-lg leading-8 text-panna/76">
              La comunicazione evita frasi generiche e punta su una promessa
              concreta: una pizza da quartiere, facile da scegliere e ancora
              piu facile da raggiungere.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="menu" data-nav-tone="light" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-tomato">
            Menu
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Un&apos;anteprima essenziale, con il menu completo in una pagina dedicata.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {menuCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.06}
              className="relative border border-charcoal/12 bg-panna p-6 shadow-sm transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-soft"
            >
              <card.icon className="mb-9 text-tomato" size={30} aria-hidden />
              <h3 className="font-display text-3xl">{card.title}</h3>
              <p className="mt-4 leading-7 text-charcoal/68">{card.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.28} className="mt-10">
          <a
            href="/menu"
            className="focus-ring inline-flex items-center justify-center gap-3 bg-charcoal px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-panna transition hover:bg-tomato"
          >
            Leggi il menu completo
            <ArrowRight size={18} aria-hidden />
          </a>
        </Reveal>
      </section>

      <section id="commenti" data-nav-tone="dark" className="bg-charcoal py-20 text-panna">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-basil">
              Commenti
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Le parole che aiutano a scegliere una pizza.
            </h2>
            <p className="mt-6 text-lg leading-8 text-panna/72">
              Una selezione di commenti brevi in stile recensioni online, pensata
              per raccontare subito atmosfera, servizio e qualita percepita.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviewCards.map((review, index) => (
              <Reveal
                key={review.name}
                delay={index * 0.06}
                className="relative"
              >
                <a
                  href={review.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring block h-full border border-panna/14 bg-panna/10 p-6 shadow-soft backdrop-blur transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.04] hover:border-brass/60 hover:bg-panna/14"
                  aria-label={`Apri ${review.source} per leggere altri commenti`}
                >
                  <div
                    className="mb-6 flex gap-1 text-basil"
                    aria-label="Valutazione 5 stelle"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={18}
                        fill="currentColor"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-panna/84">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-7 flex items-end justify-between gap-4 border-t border-panna/12 pt-5">
                    <span>
                      <span className="block font-bold text-panna">
                        {review.name}
                      </span>
                      <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-panna/52">
                        {review.source}
                      </span>
                    </span>
                    <ExternalLink
                      className="shrink-0 text-basil"
                      size={18}
                      aria-hidden
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="eventi" data-nav-tone="light" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tomato">
              Eventi futuri
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Uno spazio pronto per le prossime serate.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/72">
              Qui potremo pubblicare eventi, promozioni, serate speciali o
              appuntamenti stagionali quando decideremo il formato migliore.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-5 sm:grid-cols-2">
            <div className="border border-charcoal/12 bg-panna p-6 shadow-sm">
              <CalendarDays className="mb-8 text-tomato" size={30} aria-hidden />
              <h3 className="font-display text-3xl">Calendario</h3>
              <p className="mt-4 leading-7 text-charcoal/68">
                Date, orari e locandine degli eventi futuri.
              </p>
            </div>
            <div className="border border-charcoal/12 bg-panna p-6 shadow-sm">
              <Clock className="mb-8 text-tomato" size={30} aria-hidden />
              <h3 className="font-display text-3xl">Aggiornamenti</h3>
              <p className="mt-4 leading-7 text-charcoal/68">
                Sezione pronta per essere gestita e aggiornata in seguito.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contatti" data-nav-tone="light" className="bg-flour py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tomato">
              Dove siamo
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Via Gramsci, San Polo d&apos;Enza.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/72">
              Apri la mappa per indicazioni aggiornate o visita Facebook per
              novita, foto e comunicazioni del locale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex items-center justify-center gap-3 bg-charcoal px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-panna transition hover:bg-tomato"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={18} aria-hidden />
                Apri mappa
              </a>
              <a
                className="focus-ring inline-flex items-center justify-center gap-3 border border-charcoal px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-charcoal transition hover:bg-charcoal hover:text-panna"
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={18} aria-hidden />
                Seguici su Facebook
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden border border-charcoal/14 bg-panna shadow-soft">
            <div className="relative h-[430px] overflow-hidden bg-[#ece3d1]">
              <iframe
                title="Mappa interattiva per Pizza Che Passione"
                src={mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group absolute bottom-8 left-8 right-8 block border border-charcoal/10 bg-panna/92 p-6 backdrop-blur transition hover:border-tomato/40 hover:bg-panna"
                aria-label="Apri Google Maps per Pizza Che Passione"
              >
                <span className="block font-display text-3xl">
                  Via Gramsci
                </span>
                <span className="mt-2 block text-sm font-bold uppercase tracking-[0.16em] text-charcoal/58">
                  San Polo d&apos;Enza, RE
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-tomato">
                  Apri Google Maps
                  <ArrowRight size={16} aria-hidden />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-charcoal px-5 py-10 text-panna md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl">Pizza Che Passione</p>
            <p className="mt-2 text-sm text-panna/58">
              Ex Pizzeria Unica. Via Gramsci, San Polo d&apos;Enza, Reggio Emilia.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-panna/70">
            <a className="focus-ring hover:text-panna" href="/privacy">
              Privacy
            </a>
            <a className="focus-ring hover:text-panna" href="/cookie">
              Cookie
            </a>
            <a
              className="focus-ring hover:text-panna"
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TrustItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl leading-none">{value}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-panna/62">
        {label}
      </p>
    </div>
  );
}
