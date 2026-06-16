import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://pizza-che-passione.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pizza Che Passione | Pizzeria a San Polo d'Enza",
    template: "%s | Pizza Che Passione"
  },
  description:
    "Pizza Che Passione, ex Pizzeria Unica, e una pizzeria in Via Gramsci a San Polo d'Enza, Reggio Emilia.",
  applicationName: "Pizza Che Passione",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    title: "Pizza Che Passione | Pizzeria a San Polo d'Enza",
    description:
      "Impasti curati, ingredienti semplici e sapore di casa in Via Gramsci a San Polo d'Enza.",
    siteName: "Pizza Che Passione",
    images: [
      {
        url: "/images/hero-pizza.png",
        width: 1536,
        height: 1024,
        alt: "Pizza appena sfornata su banco di pizzeria"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Che Passione | Pizzeria a San Polo d'Enza",
    description:
      "Pizzeria locale in Via Gramsci, San Polo d'Enza. Ex Pizzeria Unica.",
    images: ["/images/hero-pizza.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
