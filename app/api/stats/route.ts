import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";
import Revenue from "@/models/Revenue";

export async function GET() {
  try {
    await connectDB();

    const totalBookings = await Booking.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: "pending" });
    const confirmedBookings = await Booking.countDocuments({
      status: "confirmed",
    });
    const completedBookings = await Booking.countDocuments({
      status: "completed",
    });

    const revenueData = await Revenue.find();
    const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);

    return NextResponse.json({
      success: true,
      data: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        completedBookings,
        totalRevenue,
      },
    });
  } catch (error) {
    console.error("[stats] GET failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
