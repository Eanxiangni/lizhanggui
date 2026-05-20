import { NextResponse } from "next/server";
import { productionQuotes } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(productionQuotes);
}
