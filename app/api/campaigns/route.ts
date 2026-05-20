import { NextResponse } from "next/server";
import { campaigns } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(campaigns);
}

export async function POST() {
  return NextResponse.json({
    ok: true,
    message: "Mock 创建活动成功"
  });
}
