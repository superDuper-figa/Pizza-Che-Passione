# Pizza Che Passione - Relazione Codia

## FASE A - Analisi attivita

Pizza Che Passione, ex Pizzeria Unica, e una pizzeria locale in Via Gramsci a San Polo d'Enza. Non risulta un sito proprietario fornito; la presenza digitale utile oggi passa da Facebook e Google Maps.

Punti forti:
- cambio nome chiaro, da rendere subito riconoscibile;
- intenzione locale forte: San Polo d'Enza, Via Gramsci, Reggio Emilia;
- settore ad alta conversione mobile: mappa, contatti, social.

Criticita:
- assenza sito ufficiale;
- dati operativi non confermati: telefono, orari, menu e prezzi;
- Google Maps fornito punta a coordinate/luogo da verificare prima del deploy definitivo.

## FASE B - Analisi competitor

Competitor locali probabili: pizzerie, ristoranti/pizzerie, rosticcerie e locali con asporto nell'area San Polo d'Enza e comuni vicini. Il vantaggio competitivo del sito vetrina e battere le schede social-only con una pagina veloce, indicizzabile e centrata su ricerca locale.

## FASE C - Strategia

Obiettivo: trasformare ricerche locali in azioni rapide.

Strategia:
- H1 brand + localita nel primo viewport;
- CTA primarie: mappa e contatto;
- copy prudente senza inventare orari, telefono, recensioni o prezzi;
- JSON-LD Restaurant;
- asset hero locale e appetitoso;
- privacy/cookie predisposte.

## FASE D - Wireframe

1. Header sticky: logo, nav, CTA mappa.
2. Hero: brand, ex nome, promessa, CTA.
3. Trust/local identity.
4. Storia/rebranding.
5. Menu preview per categorie.
6. Contatti + mappa visuale + link Google Maps/Facebook.
7. Footer GDPR.

## FASE E - Design system

Palette:
- charcoal `#171412`;
- tomato `#b73524`;
- basil `#28633d`;
- brass `#b88a45`;
- panna `#fff8ed`;
- flour `#f8eddc`.

Tipografia:
- serif display per tono premium/artigianale;
- sans per navigazione, CTA e testi.

Componenti:
- CTA rettangolari con radius minimo;
- cards menu 8px o meno;
- reveal CSS leggeri;
- mappa locale custom per evitare embed bianco/bloccato.

## FASE F - Sviluppo

Stack:
- Next.js App Router;
- React + TypeScript;
- TailwindCSS;
- lucide-react;
- Next Image;
- sitemap/robots dinamici.

File principali:
- `app/page.tsx`;
- `app/layout.tsx`;
- `app/globals.css`;
- `components/reveal.tsx`;
- `app/sitemap.ts`;
- `app/robots.ts`.

## FASE G - Animazioni

Animazioni leggere CSS:
- reveal-up con easing premium;
- hover CTA;
- rispetto `prefers-reduced-motion`.

Niente 3D, come richiesto.

## FASE H - SEO

Incluso:
- title e description locali;
- Open Graph/Twitter;
- JSON-LD Restaurant;
- canonical;
- sitemap.xml;
- robots.txt;
- favicon SVG;
- keyword locali in H1, hero, contatti e footer.

Da completare prima del deploy:
- telefono reale;
- orari reali;
- URL dominio definitivo;
- verifica Google Business Profile;
- Search Console se prevista.

## FASE I - Testing

Build production superata.

QA renderizzata:
- URL `http://localhost:3000`;
- desktop 1440x1100;
- mobile 390x844;
- H1 visibile;
- CTA mappa e Facebook visibili;
- click nav Menu verificato;
- nessun overlay Next;
- console senza errori;
- mobile senza overflow orizzontale.

Nota ambiente:
- `npm install` tramite wrapper locale si blocca su questa macchina;
- verifica completata usando dipendenze Next gia presenti in `App_Organizzazione` con junction `node_modules`.

## FASE J - Checklist finale

- Homepage: ok.
- Pagine informative: privacy/cookie predisposte.
- Contatti: ok, senza dati non confermati.
- Mappa: ok, visuale locale + link Google Maps.
- Responsive: ok.
- SEO locale: ok.
- Google Business: da verificare lato cliente.
- GDPR: predisposto, da finalizzare con dati legali.
- Favicon: ok.
- Meta social: ok.
- Performance: build statica, first load JS circa 107 kB.

## FASE K - Preview navigabile

Preview locale attiva: `http://localhost:3000`.

## FASE L - Istruzioni deploy

1. Verificare `package.json`.
2. Eseguire `npm install`.
3. Eseguire `npm run build`.
4. Deploy su Vercel.
5. Impostare dominio definitivo.
6. Aggiornare `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.
7. Collegare Search Console se richiesto.

## FASE M - Manuale cliente

Per modifiche rapide:
- testo homepage: `app/page.tsx`;
- colori: `tailwind.config.ts` e `app/globals.css`;
- immagine hero: `public/images/hero-pizza.png`;
- logo/favicon: `app/icon.svg`;
- privacy/cookie: `app/privacy/page.tsx`, `app/cookie/page.tsx`.

Prima della pubblicazione definitiva chiedere al cliente:
- telefono;
- orari;
- menu reale;
- conferma indirizzo esatto;
- ragione sociale/P.IVA se necessarie;
- preferenze su cookie banner e analytics.
