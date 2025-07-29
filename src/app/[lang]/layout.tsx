// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { translations } from "@/locale/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: "es" | "en" | "pl" | "nl" | "it" | "fr" | "de" | "pt";
  }>;
}): Promise<Metadata> {
  const { lang } = await params;
  type Locale = keyof typeof translations;
  const locale: Locale = (lang in translations ? lang : "en") as Locale;
  const t = translations[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    lang: "es" | "en" | "pl" | "nl" | "it" | "fr" | "de" | "pt";
  }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
