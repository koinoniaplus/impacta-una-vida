import es from "./es";
import en from "./en";

export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];

export const translations = {
  es,
  en,
};
