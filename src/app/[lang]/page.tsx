import { translations } from "@/locale/i18n";
import ContactForm from "./contactForm";

type Props = {
  params: Promise<{
    lang: "es" | "en";
  }>;
};

export function generateStaticParams() {
  return ["es", "en"].map((lang) => ({ lang }));
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang] ?? translations["es"];

  return (
    <main className="p-6 text-center space-y-4">
      <h1 className="text-3xl font-bold">{t.landing.title}</h1>
      <p>{t.landing.description}</p>

      <ContactForm />
    </main>
  );
}
