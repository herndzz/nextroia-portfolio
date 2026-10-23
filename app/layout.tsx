import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NEXTROIA | Solucoes em Tecnologia e Infraestrutura",
    template: "%s | NEXTROIA",
  },
  description:
    "Infraestrutura, suporte tecnico e automacao de processos para negocios e profissionais com foco em estabilidade e eficiencia.",
  applicationName: "NEXTROIA",
  keywords: [
    "infraestrutura de redes",
    "suporte tecnico",
    "automacao de processos",
    "n8n",
    "desenvolvimento de APIs",
    "manutencao de computadores",
    "NEXTROIA",
  ],
  authors: [{ name: "NEXTROIA" }],
  creator: "NEXTROIA",
  publisher: "NEXTROIA",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "NEXTROIA",
    title: "NEXTROIA | Solucoes Avancadas em Tecnologia e Infraestrutura",
    description:
      "Do suporte tecnico especializado a automacao de processos para otimizar operacoes B2C e B2B.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NEXTROIA - Solucoes Avancadas em Tecnologia e Infraestrutura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXTROIA | Solucoes Avancadas em Tecnologia e Infraestrutura",
    description:
      "Infraestrutura, suporte tecnico e automacao para elevar a eficiencia e a confiabilidade do seu negocio.",
    creator: "@nextroia",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
