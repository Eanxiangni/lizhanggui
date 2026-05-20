import { NextResponse } from "next/server";
import { dashboardStats } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    scanCount: 4256,
    couponClaimCount: 1248,
    couponUsedCount: 693,
    orderCount: 693,
    revenue: dashboardStats.revenueToday
  });
}
