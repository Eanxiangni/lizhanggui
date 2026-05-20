import { NextResponse } from "next/server";
import { merchants } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(merchants[0]);
}
