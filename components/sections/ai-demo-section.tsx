"use client";

import { useMemo, useState } from "react";
import { LoaderCircle, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Industry = "餐饮" | "茶饮" | "美容" | "培训" | "服装";
type CampaignType = "开业" | "满减" | "节日促销" | "新品上市" | "会员活动";

type DemoOutput = {
  title: string;
  moments: string;
  poster: string;
  video: string;
  advice: string[];
};

const industryOptions: Industry[] = ["餐饮", "茶饮", "美容", "培训", "服装"];
const campaignOptions: CampaignType[] = ["开业", "满减", "节日促销", "新品上市", "会员活动"];

const industryHooks: Record<Industry, string[]> = {
  餐饮: ["招牌套餐", "到店人气", "晚市翻台", "门店烟火感"],
  茶饮: ["新品颜值", "打卡分享", "社群裂变", "季节限定"],
  美容: ["预约咨询", "变美体验", "会员储值", "节日礼遇"],
  培训: ["试听转化", "家长信任", "招生节点", "口碑推荐"],
  服装: ["上新橱窗", "穿搭灵感", "节日折扣", "到店试穿"]
};

const campaignHooks: Record<CampaignType, string[]> = {
  开业: ["新店亮相", "到店有礼", "限时体验"],
  满减: ["满额立减", "凑单转化", "客单提升"],
  节日促销: ["节日氛围", "限时福利", "热点借势"],
  新品上市: ["新品尝鲜", "上新首发", "第一波种草"],
  会员活动: ["老客复购", "私域沉淀", "会员权益强化"]
};

function buildDemoCopy(storeName: string, industry: Industry, campaignType: CampaignType): DemoOutput {
  const safeStoreName = storeName.trim() || "你的门店";
  const industryWords = industryHooks[industry];
  const campaignWords = campaignHooks[campaignType];
  const headline = `${safeStoreName}${campaignType === "开业" ? "正式开业" : campaignType}，这次主打${industryWords[0]}和${campaignWords[1]}`;

  return {
    title: headline,
    moments:
      `${safeStoreName}这次把${campaignType}做得更直接一点。\n` +
      `围绕${industryWords[0]}、${industryWords[1]}和${campaignWords[0]}，我们准备了一波更适合本地用户转发和到店的福利内容。\n` +
      `如果你最近正想找一家更值得去的${industry}店，这次真的可以来看看。`,
    poster:
      `${safeStoreName}\n` +
      `${campaignType}主视觉\n` +
      `突出 ${industryWords[0]} · ${campaignWords[0]} · ${campaignWords[2]}\n` +
      `用更清晰的大标题和更有氛围感的视觉，把门店这次活动亮点直接讲明白。`,
    video:
      `镜头1：门头或店内主画面，字幕“${safeStoreName}${campaignType}来了”。\n` +
      `镜头2：快速切到产品/服务亮点，强调${industryWords[0]}与${industryWords[1]}。\n` +
      `镜头3：老板或店员出镜口播，“这次我们重点做了${campaignWords[0]}和${campaignWords[1]}，欢迎来店体验。”\n` +
      `镜头4：结尾给到福利提醒和到店引导。`,
    advice: [
      `建议首发海报突出“${campaignWords[0]}”和“${industryWords[0]}”，标题不要太长。`,
      `朋友圈和社群内容要强调“为什么现在来”，把${campaignWords[2]}讲清楚。`,
      `如果门店适合拍摄，短视频封面建议围绕“${industryWords[1]}”做第一视觉。`
    ]
  };
}

export function AiDemoSection() {
  const [industry, setIndustry] = useState<Industry>("餐饮");
  const [campaignType, setCampaignType] = useState<CampaignType>("节日促销");
  const [storeName, setStoreName] = useState("狸掌柜示范店");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState<DemoOutput>(() =>
    buildDemoCopy("狸掌柜示范店", "餐饮", "节日促销")
  );

  const previewLabels = useMemo(
    () => [...industryHooks[industry].slice(0, 2), ...campaignHooks[campaignType].slice(0, 2)],
    [campaignType, industry]
  );

  const handleGenerate = () => {
    setLoading(true);
    window.setTimeout(() => {
      setGenerated(buildDemoCopy(storeName, industry, campaignType));
      setLoading(false);
    }, 700);
  };

  return (
    <section className="section-space" id="ai-demo">
      <div className="container-shell">
        <div className="mb-14 flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm text-violet-700">
            <WandSparkles className="h-4 w-4" />
            AI 生成演示区
          </div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            现场模拟一次生成过程，让客户一眼看懂狸掌柜到底能帮门店产出什么。
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            这里先用前端本地模拟，不接真实 API，也能完整展示活动标题、朋友圈文案、海报文案、短视频脚本和营销建议。
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
          <Card className="rounded-[2rem] border-white/70 bg-white/82">
            <CardHeader className="pb-5">
              <CardTitle className="text-[1.7rem]">生成条件</CardTitle>
              <CardDescription className="text-base leading-7">
                选择行业、活动类型，再填门店名称，就能模拟产出完整营销内容。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">行业</span>
                <select
                  value={industry}
                  onChange={(event) => setIndustry(event.target.value as Industry)}
                  className="h-12 w-full rounded-2xl border border-white/70 bg-white/86 px-4 text-sm text-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.04)] outline-none ring-0"
                >
                  {industryOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">活动类型</span>
                <select
                  value={campaignType}
                  onChange={(event) => setCampaignType(event.target.value as CampaignType)}
                  className="h-12 w-full rounded-2xl border border-white/70 bg-white/86 px-4 text-sm text-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.04)] outline-none ring-0"
                >
                  {campaignOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">店铺名称</span>
                <Input
                  value={storeName}
                  onChange={(event) => setStoreName(event.target.value)}
                  placeholder="例如：阿强小龙虾馆"
                />
              </label>

              <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-4">
                <div className="text-sm font-medium text-slate-700">本次生成会重点体现</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {previewLabels.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-100 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Button className="w-full" size="xl" onClick={handleGenerate} disabled={loading}>
                {loading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    正在模拟生成
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    立即生成演示内容
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-5">
            <Card className="rounded-[2rem] border-white/70 bg-[linear-gradient(180deg,#0f172a_0%,#13203d_100%)] text-white shadow-[0_30px_100px_rgba(15,23,42,0.24)]">
              <CardHeader className="pb-4">
                <CardTitle className="text-[1.65rem]">AI 生成结果</CardTitle>
                <CardDescription className="text-slate-300">
                  演示的是门店实际能拿到的内容结果，不是空泛说明。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">活动标题</div>
                  <div className="mt-3 text-2xl font-semibold leading-tight">{generated.title}</div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <div className="text-sm font-medium text-white">朋友圈文案</div>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">
                      {generated.moments}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <div className="text-sm font-medium text-white">海报文案</div>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">
                      {generated.poster}
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <div className="text-sm font-medium text-white">短视频脚本</div>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">{generated.video}</p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <div className="text-sm font-medium text-white">营销建议</div>
                  <div className="mt-3 space-y-3">
                    {generated.advice.map((item) => (
                      <div key={item} className="rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
