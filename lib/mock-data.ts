import type { Campaign, Merchant, ProductionQuote, PublishPackage } from "@/lib/types";

export const merchants: Merchant[] = [
  {
    id: "m-001",
    storeName: "阿强小龙虾馆",
    industry: "餐饮美食",
    city: "杭州",
    contactName: "阿强",
    phone: "13800000000",
    address: "西湖区文三路 18 号",
    membershipLevel: "营销版会员"
  }
];

export const campaigns: Campaign[] = [
  {
    id: "c-001",
    merchantId: "m-001",
    title: "小龙虾99元双人套餐",
    industry: "餐饮美食",
    activityType: "套餐促销",
    mainProduct: "麻辣小龙虾、蒜蓉小龙虾",
    priceText: "99元",
    startDate: "2026-05-19",
    endDate: "2026-05-25",
    status: "ACTIVE"
  },
  {
    id: "c-002",
    merchantId: "m-001",
    title: "奶茶新品上市",
    industry: "餐饮美食",
    activityType: "新品上市",
    mainProduct: "杨枝甘露冰茶",
    priceText: "18元",
    startDate: "2026-05-12",
    endDate: "2026-05-19",
    status: "COMPLETED"
  }
];

export const publishPackages: PublishPackage[] = [
  {
    id: "p-001",
    campaignId: "c-001",
    platform: "小红书",
    title: "小龙虾99元双人套餐｜夏日必吃榜",
    content: "麻辣鲜香，肉质Q弹，适合朋友聚餐和下班夜宵。",
    tags: "#小龙虾 #夏日美食 #探店打卡",
    status: "GENERATED"
  },
  {
    id: "p-002",
    campaignId: "c-001",
    platform: "朋友圈",
    title: "今晚吃虾，双人套餐 99 元",
    content: "到店就能用，数量有限，先到先得。",
    tags: "#到店福利 #双人套餐",
    status: "COPIED"
  }
];

export const productionQuotes: ProductionQuote[] = [
  {
    id: "q-001",
    supplierName: "A广告店",
    distanceKm: 1.2,
    rating: 4.8,
    price: 68,
    deliveryText: "明天交付",
    tags: ["认证商家", "含配送", "支持安装"]
  },
  {
    id: "q-002",
    supplierName: "B图文快印",
    distanceKm: 2.6,
    rating: 4.6,
    price: 58,
    deliveryText: "后天交付",
    tags: ["认证商家", "含配送"]
  }
];

export const dashboardStats = {
  newMerchantsToday: 28,
  generatedCampaignsToday: 116,
  publishPackagesToday: 342,
  productionOrdersToday: 47,
  revenueToday: 12860
};
