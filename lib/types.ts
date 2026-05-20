export type UserRole = "MERCHANT" | "SUPPLIER" | "ADMIN";

export type CampaignStatus =
  | "DRAFT"
  | "GENERATED"
  | "PUBLISHING"
  | "PUBLISHED"
  | "ACTIVE"
  | "COMPLETED";

export type PublishStatus = "GENERATED" | "COPIED" | "DOWNLOADED" | "PUBLISHED";

export type ProductionRequestStatus = "REQUESTED" | "QUOTED" | "SELECTED" | "ORDERED" | "CANCELED";

export interface Merchant {
  id: string;
  storeName: string;
  industry: string;
  city: string;
  contactName: string;
  phone: string;
  address: string;
  membershipLevel: string;
}

export interface Campaign {
  id: string;
  merchantId: string;
  title: string;
  industry: string;
  activityType: string;
  mainProduct: string;
  priceText: string;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
}

export interface PublishPackage {
  id: string;
  campaignId: string;
  platform: string;
  title: string;
  content: string;
  tags: string;
  status: PublishStatus;
}

export interface ProductionQuote {
  id: string;
  supplierName: string;
  distanceKm: number;
  rating: number;
  price: number;
  deliveryText: string;
  tags: string[];
}
