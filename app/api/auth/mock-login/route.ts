import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    phone: "13800000000",
    role: "MERCHANT",
    token: "mock-token-merchant"
  });
}
