import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/auth";
import { jwtVerify } from "jose";

export async function GET() {
  // Check our custom JWT first
  const user = await getCurrentUser();
  if (user) {
    return NextResponse.json({
      success: true,
      authenticated: true,
      user,
    });
  }

  // Fallback: check NextAuth session token
  const cookieStore = await cookies();
  const nextAuthToken = cookieStore.get("next-auth.session-token")?.value;
  if (nextAuthToken && process.env.NEXTAUTH_SECRET) {
    try {
      const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
      const { payload } = await jwtVerify(nextAuthToken, secret, { clockTolerance: 60 });
      return NextResponse.json({
        success: true,
        authenticated: true,
        user: {
          sub: payload.sub as string,
          email: (payload.email as string) || "",
          name: (payload.name as string) || "",
          role: (payload.role as string) || "user",
        },
      });
    } catch {
      // invalid token
    }
  }

  return NextResponse.json(
    { success: false, authenticated: false },
    { status: 401 }
  );
}
