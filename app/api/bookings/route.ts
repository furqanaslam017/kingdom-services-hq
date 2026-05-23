import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";
import User from "@/models/User";

// GET all bookings
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const serviceType = searchParams.get("serviceType");
    const search = searchParams.get("search");

    let query: Record<string, unknown> = {};
    if (status && status !== "all") query.status = status;
    if (serviceType && serviceType !== "all") query.service_type = serviceType;
    if (search) {
      query.$or = [
        { customer_name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { booking_ref: { $regex: search, $options: "i" } },
      ];
    }

    const bookingsRaw = await Booking.find(query).sort({ created_at: -1 }).lean();
    const bookings = bookingsRaw.map((b: any) => ({
      ...b,
      id: b._id.toString(),
    }));
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    console.error("[bookings] GET failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

// POST create new booking
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    // Auto-register user if email is provided
    if (body.email && body.email.trim()) {
      const existingUser = await User.findOne({ email: body.email.trim().toLowerCase() });
      if (!existingUser) {
        await User.create({
          name: body.customer_name || "Guest Customer",
          email: body.email.trim().toLowerCase(),
          role: "user",
        });
      }
    }

    // Generate a booking reference like KCS-XXXXXX
    const bookingRef = `KCS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const bookingRaw = await Booking.create({
      ...body,
      booking_ref: bookingRef,
    });
    const booking = { ...bookingRaw.toObject(), id: bookingRaw._id.toString() };

    return NextResponse.json(
      { success: true, data: booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("[bookings] POST failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
