import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST() {
  try {
    await connectDB();

    const existing = await User.findOne({ email: "admin@kingdom.com" });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Admin already exists" },
        { status: 409 }
      );
    }

    await User.create({
      name: "Admin",
      email: "admin@kingdom.com",
      password: "KCS2024!",
      role: "admin",
    });

    return NextResponse.json({
      success: true,
      message: "Admin user created: admin@kingdom.com / KCS2024!",
    });
  } catch (error) {
    console.error("[seed] failed", error);
    return NextResponse.json(
      { success: false, error: "Seed failed" },
      { status: 500 }
    );
  }
}
