import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardStats } from "@/lib/mock-data";

export default function AdminPage() {
  const items = [
    ["今日新增商家", dashboardStats.newMerchantsToday],
    ["今日生成活动", dashboardStats.generatedCampaignsToday],
    ["今日发布包", dashboardStats.publishPackagesToday],
    ["今日制作订单", dashboardStats.productionOrdersToday]
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(134,239,172,0.14),transparent_22%),linear-gradient(180deg,#fbfdfc_0%,#f5f8fb_100%)]">
      <div className="container-shell py-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">狸掌柜后台入口</h1>
              <p className="text-slate-500">预留平台后台多模块扩展，当前先接数据总览风格。</p>
            </div>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回官网
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map(([label, value]) => (
            <Card key={label} className="rounded-[1.8rem] border-white/70 bg-white/85">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-500">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold tracking-tight text-slate-950">{value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
