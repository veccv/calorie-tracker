import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const loginPath = '/';
  const { pathname } = req.nextUrl;

  // Allow Next.js internals, API routes, static files, and authentication callbacks to pass through.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }

  // Strona logowania ("/") zawsze powinna być dostępna.
  if (pathname === loginPath) {
    return NextResponse.next();
  }

  // Dla wszystkich innych ścieżek (chronionych) pobieramy token.
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET || "default-secret",
    secureCookie: process.env.NODE_ENV === 'production'
  });

  // Jeśli token nie istnieje, przekieruj użytkownika na stronę logowania.
  if (!token) {
    return NextResponse.redirect(new URL(loginPath, req.url));
  }

  // Allow the request to proceed.
  return NextResponse.next();
}

export const config = {
  // Matcher, który obejmuje wszystkie strony z wyjątkiem: Next.js, API, plików statycznych.
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
