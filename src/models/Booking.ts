import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  customer_name: string;
  phone: string;
  email?: string;
  service_type: string;
  address: string;
  preferred_date?: string;
  time_slot?: string;
  notes?: string;
  status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled";
  booking_ref: string;
  distance_mi?: number;
  price_estimate?: number;
  created_at: Date;
  updated_at: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    customer_name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    service_type: { type: String, required: true },
    address: { type: String, required: true },
    preferred_date: { type: String, default: "" },
    time_slot: { type: String, default: "" },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "confirmed", "in_progress", "completed", "cancelled"],
      default: "pending",
    },
    booking_ref: { type: String, required: true },
    distance_mi: { type: Number, default: null },
    price_estimate: { type: Number, default: null },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", BookingSchema);
