// src/app/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { languages } from "./locale/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Excluir rutas internas de Next, APIs y archivos estáticos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLang = segments[0];

  const isValidLocale = languages.includes(
    maybeLang as (typeof languages)[number]
  );

  if (!isValidLocale) {
    const acceptLang = request.headers.get("accept-language") || "";
    const preferredLang = acceptLang.split(",")[0].split("-")[0];
    const locale = languages.includes(
      preferredLang as (typeof languages)[number]
    )
      ? preferredLang
      : "en";
    // Quitamos el primer segmento inválido (maybeLang) y reconstruimos el path
    const newPath = segments.slice(1).join("/"); // el resto del path
    const finalPath = `/${locale}${newPath ? `/${newPath}` : ""}`;
    return NextResponse.redirect(new URL(finalPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!static|api|_next|favicon.ico).*)"],
};
