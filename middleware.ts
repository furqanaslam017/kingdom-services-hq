import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "@/lib/auth";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Protect admin routes
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.nextUrl.pathname !== "/admin/login"
  ) {
    const authToken = request.cookies.get("auth_token")?.value;
    let isAdmin = false;

    if (authToken) {
      const payload = await verifyJWT(authToken);
      if (payload && payload.role === "admin") {
        isAdmin = true;
      }
    }

    // Also accept NextAuth session token for Google OAuth users
    if (!isAdmin) {
      const nextAuthToken = request.cookies.get("next-auth.session-token")?.value;
      if (nextAuthToken && process.env.NEXTAUTH_SECRET) {
        try {
          const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
          const { payload } = await jwtVerify(nextAuthToken, secret, { clockTolerance: 60 });
          if (payload.role === "admin") {
            isAdmin = true;
          }
        } catch {
          // invalid next-auth token
        }
      }
    }

    if (!isAdmin) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
