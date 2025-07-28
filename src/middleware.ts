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

  const missingLocale = languages.every(
    (lang) => !pathname.startsWith(`/${lang}`)
  );

  if (missingLocale) {
    const locale = "es";
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!static|api|_next).*)"],
};
