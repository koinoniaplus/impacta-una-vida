import { translations } from "@/locale/i18n";
import Hero from "@/components/Hero";
import Encouragements from "@/components/Encouragements";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TextSection from "@/components/TextSection";

type Props = {
  params: Promise<{
    lang: "es" | "en" | "pl" | "nl" | "it" | "fr" | "de" | "pt";
  }>;
};

export function generateStaticParams() {
  return ["es", "en"].map((lang) => ({ lang }));
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang] ?? translations["en"];

  return (
    <main className="px-4 sm:px-8 py-8 space-y-16 max-w-3xl mx-auto">
      <Hero t={t} />
      <TextSection t={t} />
      <CallToAction t={t} />
      <Encouragements t={t} />
      <ContactForm t={t} />
      <Footer t={t} />
    </main>
  );
}
