import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";

// PATCH update booking
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await request.json();
    const { id } = await params;
    const bookingRaw = await Booking.findByIdAndUpdate(id, body, { new: true }).lean();
    if (!bookingRaw)
      return NextResponse.json(
        { success: false, error: "Booking not found" },
        { status: 404 }
      );
    const booking = { ...bookingRaw, id: (bookingRaw as any)._id.toString() };
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error("[bookings] PATCH failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to update booking" },
      { status: 500 }
    );
  }
}

// DELETE booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    await Booking.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Booking deleted" });
  } catch (error) {
    console.error("[bookings] DELETE failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
