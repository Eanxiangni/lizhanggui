import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json([
    { styleName: "清爽促销", imageUrl: "/mock/posters/crayfish-green.png" },
    { styleName: "高级质感", imageUrl: "/mock/posters/crayfish-black.png" },
    { styleName: "爆款吸睛", imageUrl: "/mock/posters/crayfish-red.png" }
  ]);
}
