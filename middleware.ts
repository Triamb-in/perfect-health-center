import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Generate random cryptographic nonce (base64)
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // Determine if requesting Sanity Studio
  const isStudio = request.nextUrl.pathname.startsWith("/studio");

  // Strict CSP policy:
  // - Regular pages: strict nonce-based CSP with 'strict-dynamic' (NO 'unsafe-inline' or 'unsafe-eval' for scripts)
  // - Studio pages: scoped permissions for Sanity Studio SPA runtime
  const cspHeader = isStudio
    ? `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.sanity.io https://*.sanity.cdn.io https://cdn.sanity.io;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com data:;
        img-src 'self' data: blob: https://*.sanity.io https://*.sanity.cdn.io https://cdn.sanity.io https://images.unsplash.com;
        media-src 'self' blob: https://cdn.sanity.io https://*.sanity.io;
        connect-src 'self' https://*.sanity.io https://*.sanity.cdn.io https://cdn.sanity.io wss://*.sanity.io https://*.upstash.io https://api.resend.com;
        worker-src 'self' blob:;
        frame-src 'self' https://*.sanity.io;
        object-src 'none';
        base-uri 'self';
      `.replace(/\s{2,}/g, " ").trim()
    : `
        default-src 'self';
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com data:;
        img-src 'self' data: blob: https://images.unsplash.com https://cdn.sanity.io https://i.ytimg.com https://img.youtube.com https://*.ytimg.com https://*.youtube.com;
        connect-src 'self' https://*.sanity.io https://*.upstash.io https://api.resend.com;
        frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com https://www.youtube-nocookie.com https://youtube.com;
        frame-ancestors 'self';
        worker-src 'self' blob:;
        object-src 'none';
        base-uri 'self';
      `.replace(/\s{2,}/g, " ").trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const permissionsPolicy =
    'camera=(), microphone=(), geolocation=(), autoplay=(self "https://www.youtube.com" "https://www.youtube-nocookie.com"), encrypted-media=(self "https://www.youtube.com" "https://www.youtube-nocookie.com"), fullscreen=*, picture-in-picture=*';

  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Permissions-Policy", permissionsPolicy);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api/media (public watermarked media vault)
     * - _next/static (static assets)
     * - _next/image (image optimization cache)
     * - favicon.ico, images/, public static assets
     */
    {
      source:
        "/((?!api/media|_next/static|_next/image|favicon.ico|images/|robots.txt|sitemap.xml).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
