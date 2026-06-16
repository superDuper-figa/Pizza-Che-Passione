import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Menu testuale di Pizza Che Passione: pizze tradizionali, speciali, calzoni, mezzo metro, panini, fritti, supplementi e bibite."
};

const traditional = [
  ["Stria", "Olio, origano", "3,00", "4,00"],
  ["Marinara", "Pomodoro, origano, aglio", "3,50", "4,50"],
  ["Margherita", "Pomodoro, mozzarella", "4,00", "5,00"],
  ["Pugliese", "Pomodoro, mozzarella, cipolla", "4,50", "6,50"],
  ["Napoli", "Pomodoro, mozzarella, acciughe, origano", "4,50", "6,50"],
  ["Funghi", "Pomodoro, mozzarella, funghi", "4,50", "6,50"],
  ["Wurstel", "Pomodoro, mozzarella, wurstel", "4,50", "6,50"],
  ["Prosciutto cotto", "Pomodoro, mozzarella, prosciutto cotto", "4,50", "6,50"],
  ["Romana", "Pomodoro, mozzarella, acciughe, capperi, origano", "4,50", "7,00"],
  ["Salsiccia", "Pomodoro, mozzarella, salsiccia", "4,50", "6,50"],
  ["Rucola", "Pomodoro, mozzarella, rucola", "4,50", "6,50"],
  ["Cotto e funghi", "Pomodoro, mozzarella, cotto, funghi", "5,00", "7,00"],
  ["Diavola", "Pomodoro, mozzarella, salame piccante", "5,00", "7,00"],
  ["Gorgonzola", "Pomodoro, mozzarella, gorgonzola", "4,50", "6,50"],
  ["Speciale", "Pomodoro, mozzarella di bufala, pomodorini", "5,00", "7,50"],
  ["Quattro stagioni", "Pomodoro, mozzarella, funghi, cotto, salsiccia, carciofi", "5,00", "7,50"],
  ["Quattro formaggi", "Pomodoro, mozzarella, fontina, hemmenthal, gorgonzola", "5,00", "7,50"],
  ["Capricciosa", "Pomodoro, mozzarella, funghi, carciofi, wurstel, salsiccia, cotto", "5,00", "7,50"],
  ["Bufala", "Pomodoro, mozzarella di bufala", "4,50", "6,50"],
  ["Tonno e cipolla", "Pomodoro, mozzarella, tonno, cipolla", "5,00", "7,00"],
  ["Porcini", "Pomodoro, mozzarella, funghi porcini", "5,00", "7,00"],
  ["Crudo", "Pomodoro, mozzarella, prosciutto crudo", "5,00", "7,50"],
  ["Vegetariana", "Pomodoro, mozzarella, zucchine, melanzane, peperoni in forno", "6,00", "8,50"],
  ["Stracchino e rucola", "Pomodoro, mozzarella, stracchino, rucola", "5,00", "7,50"],
  ["Gamberetti e rucola", "Pomodoro, mozzarella, gamberetti, rucola", "5,00", "7,50"],
  ["Speck e rucola", "Pomodoro, mozzarella, speck, rucola", "5,50", "8,50"],
  ["Pancetta e rucola", "Pomodoro, mozzarella, pancetta, rucola", "5,50", "8,50"],
  ["Siciliana", "Pomodoro, mozzarella, acciughe, capperi, olive, origano", "5,00", "8,00"],
  ["Patatina", "Pomodoro, mozzarella, patatine fritte", "4,50", "6,50"],
  ["Funghi misti", "Pomodoro, mozzarella, funghi misti", "5,50", "8,00"],
  ["Funghi freschi", "Pomodoro, mozzarella, funghi freschi", "4,50", "6,50"],
  ["Salmone", "Pomodoro, mozzarella, salmone affumicato", "5,00", "8,00"],
  ["Nduja", "Pomodoro, mozzarella, nduja", "5,00", "7,00"],
  ["Salsiccia e patate", "Pomodoro, mozzarella, salsiccia, patate", "5,50", "8,50"]
];

const specials = [
  ["Unica", "Pomodoro, mozzarella, pomodorini, bufala, verdure, porcini, frutti di mare", "6,00", "11,00"],
  ["Golfo di Napoli", "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, frutti di mare", "6,00", "10,00"],
  ["Tricolore", "Pomodoro fresco, mozzarella, pomodorini, scamorza affumicata, rucola", "5,50", "9,00"],
  ["Italiana", "Pomodoro, mozzarella, crudo, rucola, scaglie di parmigiano", "6,00", "9,50"],
  ["Croccopizza", "Bianca con mozzarella, prosciutto cotto, panna, crocchette di patate", "6,00", "9,00"],
  ["Fume'", "Speciale con speck e scamorza", "6,00", "9,50"],
  ["Broccoli e salsiccia", "Bianca con mozzarella, broccoli, salsiccia", "5,50", "9,00"],
  ["Boscaiola", "Pomodoro, mozzarella, prosciutto cotto, funghi, piselli, parmigiano", "5,50", "9,00"],
  ["Stella", "Bianca con mozzarella, prosciutto cotto, mais, panna", "5,50", "8,50"],
  ["Ortolana", "Pomodoro, mozzarella, asparagi, pancetta, parmigiano", "6,00", "9,00"],
  ["Toscana", "Pomodoro, mozzarella, mascarpone, speck", "5,50", "9,00"],
  ["Gaetano", "Bianca con mozzarella, pancetta, salame piccante e gorgonzola", "6,00", "9,50"],
  ["Mare e monti", "Pomodoro, mozzarella, frutti di mare, funghi", "6,00", "10,00"],
  ["Calabrese", "Pomodoro, mozzarella, acciughe, capperi, olive, salame piccante, origano", "5,50", "9,00"],
  ["Super trevigiana", "Bianca con mozzarella, scamorza, gorgonzola, radicchio, scaglie di parmigiano, aceto balsamico", "6,00", "9,50"],
  ["Braccio di ferro", "Bianca con mozzarella, spinaci, prosciutto cotto, ricotta, scaglie di parmigiano", "6,00", "9,50"],
  ["Stuzzicosa", "Pomodoro, mozzarella, porcini, pancetta, scaglie di parmigiano", "6,00", "9,50"],
  ["Golosa", "Pomodoro, mozzarella, gorgonzola, asparagi, prosciutto crudo", "6,00", "9,50"],
  ["Ragu'", "Pomodoro, mozzarella, ragu', funghi, scaglie di parmigiano", "6,00", "9,00"],
  ["Fresca", "Stria, mozzarella di bufala, prosciutto crudo, rucola, pomodorini", "6,00", "10,00"],
  ["Bresaola", "Pomodoro, mozzarella, bresaola, rucola, pomodorini, scaglie di parmigiano, aceto balsamico", "6,50", "10,50"],
  ["Pizza della casa", "Bianca mozzarella, mascarpone, funghi, bresaola, scaglie di parmigiano, rucola", "6,50", "11,50"],
  ["Maresciallo", "Pomodoro, mozzarella, nduja, salame piccante, pancetta", "6,00", "9,50"],
  ["Speck e brie", "Pomodoro, mozzarella, speck, brie", "5,50", "9,00"],
  ["Campagnola", "Pomodoro, mozzarella, prosciutto crudo, gorgonzola, noci", "6,00", "10,00"],
  ["Parmigiana", "Bianca mozzarella, ragu', melanzane, parmigiano, salsiccia", "6,00", "10,00"],
  ["Pancetta patate al forno", "Bianca mozzarella, pancetta e patate al forno", "5,50", "9,00"],
  ["Boh", "Bianca mozzarella, salmone, pomodorini, rucola", "6,00", "10,00"],
  ["Soleggiata", "Pomodoro, mozzarella, rucola, pomodorini sott'olio", "5,50", "7,50"],
  ["Tartufata", "Bianca mozzarella, salsiccia, panna, funghi porcini, crema al tartufo", "6,00", "10,50"],
  ["Datterino giallo", "Bianca mozzarella, acciughe, pomodorini, datterino giallo", "5,50", "8,50"],
  ["Felinese", "Bianca mozzarella, ricotta, salame dolce", "5,50", "9,00"],
  ["Regina di cuori", "Bianca mozzarella, zucca, pancetta, scamorza", "6,00", "9,50"],
  ["Saporita", "Bianca mozzarella, gorgonzola, zucca", "5,00", "8,00"],
  ["Frutti di mare", "Pomodoro, mozzarella, seppie, polpo, surimi", "6,00", "10,00"]
];

const calzoni = [
  ["Normale", "Pomodoro, mozzarella, prosciutto cotto", "4,50", "6,50"],
  ["Farcito", "Pomodoro, mozzarella, prosciutto cotto, salsiccia, wurstel, carciofi, funghi", "5,00", "7,50"],
  ["Alla napoletana", "Pomodoro, mozzarella, prosciutto cotto, ricotta", "5,50", "8,50"],
  ["Vesuvio", "Bianca, mozzarella, salame dolce, ricotta, pepe", "5,50", "9,00"],
  ["Nutella", "", "4,00", "6,00"],
  ["Fritto margherita", "Pomodoro, mozzarella", "", "5,00"],
  ["Fritto prosciutto", "Pomodoro, mozzarella, prosciutto cotto", "", "5,50"]
];

const halfMeter = [
  ["Stria", "10,50"],
  ["Marinara / Rossa", "13,00"],
  ["Margherita / Bianca", "14,50"],
  ["Tradizionale", "20,00"],
  ["Meta' margherita + meta' tradizionale", "18,00"],
  ["Speciale", "24,00"],
  ["Meta' margherita + meta' speciale", "20,00"],
  ["Meta' tradizionale + meta' speciale", "22,00"]
];

const panini = [
  ["Il Classico", "A scelta tra cotto, crudo, pancetta + mozzarella", "6,50"],
  ["Il Paesano", "Crudo di Parma, parmigiano reggiano, aceto balsamico", "8,00"],
  ["Il Vegetariano", "Lattuga, pomodoro grappolo, cipolla rossa, stracchino", "8,00"],
  ["Il Campano", "Friarielli, salsiccia, camorza affumicata", "8,00"],
  ["Il Baraccone", "Salsiccia, peperoni, maionese", "7,00"],
  ["Il Bolo", "Mortadella, crema pistacchio, stracciatella", "9,00"],
  ["Il Calabro", "Nduja, spianata calabrese, rucola, mozzarella", "8,50"],
  ["Il Baby", "Patatine, wurstel, ketchup, maionese", "7,00"],
  ["Il Fresco", "Tonno, lattuga, bufala, maionese", "8,00"],
  ["Il Gourmet", "Speck, porcini, crema di tartufo, bufala", "10,00"]
];

const extras = [
  ["Patatine fritte", "3,50"],
  ["Crocchette di patate (6 pezzi)", "3,50"],
  ["Arancini di riso (4 pezzi)", "3,50"],
  ["Misto di verdure pastellate", "3,50"],
  ["Mozzarelline (6 pezzi)", "3,50"],
  ["Olive all'ascolana (6 pezzi)", "3,50"],
  ["Ketchup / Maionese (2 bustine)", "1,00"]
];

const supplements = [
  ["Abbondante", "1,00"],
  ["Doppia mozzarella", "1,00"],
  ["Mozzarella senza lattosio", "2,00"],
  ["Mozzarella di bufala", "2,00"],
  ["Parmigiano", "2,00"],
  ["Affettati", "2,50"],
  ["Bresaola", "3,00"],
  ["Burrata / Stracciatella", "2,50"],
  ["Creme / Pesti", "2,00"],
  ["Pomodoro", "0,50"],
  ["Aceto balsamico", "0,50"],
  ["Rucola", "1,00"],
  ["Patate", "2,00"],
  ["Scaglie di tartufo", "2,50"],
  ["Noci", "1,50"]
];

const drinks = [
  ["Acqua 0,50 lt", "1,00"],
  ["Acqua 1,50 lt", "2,50"],
  ["Bibita in lattina", "2,50"],
  ["Bibita 1,5 lt", "4,00"],
  ["Birra 33 cl", "3,00"],
  ["Birra 66 cl", "3,50"]
];

const mapsUrl =
  "https://www.google.com/maps/place/CGIL+SAN+POLO+D'ENZA/@44.6254704,10.4254359,17z/data=!4m6!3m5!1s0x47800facd12b2943:0xa832c285f00f2121!8m2!3d44.625582!4d10.4254338!16s%2Fg%2F11y312k62j";

export default function MenuPage() {
  return (
    <main className="paper min-h-screen">
      <SiteHeader mapsUrl={mapsUrl} />

      <section data-nav-tone="dark" className="bg-charcoal px-5 pb-20 pt-36 text-panna md:px-8 md:pt-32">
        <Reveal className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-basil">
            Menu reale
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-6xl leading-none md:text-8xl">
            Tutte le proposte, scritte in chiaro.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-panna/76">
            Trascrizione testuale dalle foto del menu. I prezzi sono indicati in euro e possono variare:
            per conferme e disponibilita conviene contattare direttamente la pizzeria.
          </p>
        </Reveal>
      </section>

      <section data-nav-tone="light" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <MenuTable title="Pizze tradizionali" items={traditional} note="Alta +1,00 - Tirata +1,50 - Integrale +1,50 - Senza glutine +3,50" />
        <MenuTable title="Pizze speciali" items={specials} note="Alta +1,00 - Tirata +1,50 - Integrale +1,50 - Senza glutine +3,50" />

        <div className="grid gap-8 lg:grid-cols-2">
          <MenuTable title="Calzoni" items={calzoni} note="Alta +1,00 - Tirata +1,50 - Integrale +1,50" />
          <SimpleTable title="1/2 metro" items={halfMeter} note="Alta +1,50" />
        </div>

        <SimpleTable title="Panini" items={panini} note="Pane artigianale di nostra produzione" hasDescription />

        <div className="grid gap-8 lg:grid-cols-3">
          <SimpleTable title="Altre specialita'" items={extras} />
          <SimpleTable title="Supplementi" items={supplements} note="Creme/pesti: tartufo, ortica, pistacchio, basilico, zucca." />
          <SimpleTable title="Bibite" items={drinks} />
        </div>
      </section>

      <section id="eventi" data-nav-tone="dark" className="bg-charcoal px-5 py-20 text-panna md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-basil">
              Eventi futuri
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Uno spazio pronto per serate, offerte e appuntamenti.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-5 sm:grid-cols-3">
            <EventPlaceholder icon={CalendarDays} title="Date" text="Qui inseriremo giorno e ora degli eventi." />
            <EventPlaceholder icon={MapPin} title="Luogo" text="Evento in pizzeria, asporto o consegna speciale." />
            <EventPlaceholder icon={Clock} title="Gestione" text="Pronto per decidere insieme formato e aggiornamenti." />
          </Reveal>
        </div>
      </section>

      <section id="info" data-nav-tone="light" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Info title="Consegne a domicilio" lines={["San Polo d'Enza - Barcaccia - Corniano - Pazzola: 2,50", "Ciano d'Enza - Quattro Castella: 3,50", "Traversetolo - Grassano: 4,00"]} />
          <Info title="Orari di apertura" lines={["Lunedi-sabato: 11.45-14.00 / 18.00-22.30", "Domenica e festivi: 18.00-22.30", "Chiusi tutti i martedi"]} />
          <Info title="Contatti" lines={["San Polo d'Enza (RE)", "Via Gramsci 23A/A", "0522 877 057"]} />
        </div>
      </section>
    </main>
  );
}

function MenuTable({
  title,
  items,
  note
}: {
  title: string;
  items: string[][];
  note?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="mb-5 flex flex-col gap-2 border-b border-charcoal/12 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-4xl text-basil md:text-5xl">{title}</h2>
          {note ? <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-charcoal/58">{note}</p> : null}
        </div>
        <div className="grid grid-cols-2 gap-4 text-right text-xs font-bold uppercase tracking-[0.16em] text-charcoal/50">
          <span>Piccola</span>
          <span>Normale</span>
        </div>
      </div>
      <div className="grid gap-3">
        {items.map(([name, description, small, normal]) => (
          <article key={`${title}-${name}`} className="grid gap-3 border border-charcoal/10 bg-panna/80 p-4 shadow-sm md:grid-cols-[1fr_6rem_6rem] md:items-start">
            <div>
              <h3 className="text-lg font-black uppercase text-charcoal">{name}</h3>
              {description ? <p className="mt-1 text-sm font-semibold uppercase leading-5 text-basil">{description}</p> : null}
            </div>
            <Price value={small} />
            <Price value={normal} />
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function SimpleTable({
  title,
  items,
  note,
  hasDescription = false
}: {
  title: string;
  items: string[][];
  note?: string;
  hasDescription?: boolean;
}) {
  return (
    <Reveal className="mb-12">
      <div className="mb-5 border-b border-charcoal/12 pb-4">
        <h2 className="font-display text-4xl text-basil md:text-5xl">{title}</h2>
        {note ? <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-charcoal/58">{note}</p> : null}
      </div>
      <div className="grid gap-3">
        {items.map(([name, descriptionOrPrice, maybePrice]) => (
          <article key={`${title}-${name}`} className="border border-charcoal/10 bg-panna/80 p-4 shadow-sm">
            <div className="flex gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-black uppercase text-charcoal">{name}</h3>
                {hasDescription && maybePrice ? (
                  <p className="mt-1 leading-6 text-charcoal/68">{descriptionOrPrice}</p>
                ) : null}
              </div>
              <Price value={maybePrice ?? descriptionOrPrice} />
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function Price({ value }: { value?: string }) {
  return (
    <p className="text-right text-lg font-black text-tomato">
      {value ? `€ ${value}` : "-"}
    </p>
  );
}

function EventPlaceholder({
  icon: Icon,
  title,
  text
}: {
  icon: typeof CalendarDays;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-panna/14 bg-panna/10 p-6 shadow-soft">
      <Icon className="mb-6 text-basil" size={28} aria-hidden />
      <h3 className="font-display text-3xl">{title}</h3>
      <p className="mt-3 leading-7 text-panna/70">{text}</p>
    </div>
  );
}

function Info({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="border border-charcoal/10 bg-panna p-6 shadow-sm">
      <h2 className="font-display text-3xl text-charcoal">{title}</h2>
      <div className="mt-4 space-y-2 text-sm font-semibold uppercase leading-6 text-charcoal/68">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
