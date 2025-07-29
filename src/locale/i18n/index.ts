import es from "./es";
import en from "./en";
import pl from "./pl";
import nl from "./nl";
import it from "./it";
import fr from "./fr";
import de from "./de";
import pt from "./pt";

export const languages = [
  "es",
  "en",
  "pl",
  "nl",
  "it",
  "fr",
  "de",
  "pt",
] as const;
export type Lang = (typeof languages)[number];

export const translations = {
  es,
  en,
  pl,
  nl,
  it,
  fr,
  de,
  pt,
};
