import mongoose, { Schema, Document } from "mongoose";

export interface IRevenue extends Document {
  jobDescription: string;
  amount: number;
  serviceType: string;
  customerName: string;
  completedDate: string;
  createdAt: Date;
}

const RevenueSchema = new Schema<IRevenue>(
  {
    jobDescription: { type: String, required: true },
    amount: { type: Number, required: true },
    serviceType: { type: String, required: true },
    customerName: { type: String, default: "" },
    completedDate: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Revenue ||
  mongoose.model<IRevenue>("Revenue", RevenueSchema);
