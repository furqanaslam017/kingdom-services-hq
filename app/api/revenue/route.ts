import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Revenue from "@/models/Revenue";

export async function GET() {
  try {
    await connectDB();
    const revenue = await Revenue.find().sort({ createdAt: -1 });
    const total = revenue.reduce((sum, item) => sum + item.amount, 0);
    return NextResponse.json({ success: true, data: revenue, total });
  } catch (error) {
    console.error("[revenue] GET failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch revenue" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const revenue = await Revenue.create(body);
    return NextResponse.json(
      { success: true, data: revenue },
      { status: 201 }
    );
  } catch (error) {
    console.error("[revenue] POST failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to add revenue" },
      { status: 500 }
    );
  }
}
