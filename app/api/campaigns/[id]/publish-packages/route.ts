import { NextResponse } from "next/server";
import { publishPackages } from "@/lib/mock-data";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return NextResponse.json(publishPackages.filter((item) => item.campaignId === id));
}
