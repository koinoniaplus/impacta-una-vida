"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "pl", label: "Polski" },
];

export default function Footer({ t }: { t: any }) {
  const pathname = usePathname(); // e.g., /es/sobre
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLang = pathname.split("/")[1]; // primer segmento

  const onChangeLanguage = (newLang: string) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLang; // reemplaza el idioma
    const newPath = `/${segments.join("/")}`;
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 mt-12">
      <p className="mb-2">{t.landing.footer?.copyright}</p>

      <div className="mt-2">
        <label htmlFor="language" className="mr-2">
          🌍 {t?.landing?.footer?.language}:
        </label>
        <select
          id="language"
          value={currentLang}
          onChange={(e) => onChangeLanguage(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {languages.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </footer>
  );
}
