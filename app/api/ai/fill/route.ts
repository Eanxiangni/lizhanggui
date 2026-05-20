import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    title: "小龙虾99元双人套餐",
    mainProduct: "麻辣小龙虾、蒜蓉小龙虾",
    priceText: "99元",
    sellingPoints: ["鲜活现做", "麻辣入味", "双人套餐", "限时优惠"]
  });
}
