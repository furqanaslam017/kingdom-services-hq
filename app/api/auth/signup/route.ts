import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { signJWT, setAuthCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: "Name, email and password are required" },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Email already registered" },
        { status: 409 }
      );
    }

    const user = await User.create({ name, email, password });

    const token = await signJWT({
      sub: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role,
    });

    await setAuthCookie(token);

    return NextResponse.json({
      success: true,
      data: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("[auth] signup failed", error);
    return NextResponse.json(
      { success: false, error: "Signup failed" },
      { status: 500 }
    );
  }
}
