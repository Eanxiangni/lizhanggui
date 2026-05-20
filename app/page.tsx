import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCheck,
  ChevronRight,
  Clock3,
  FileImage,
  LayoutDashboard,
  LayoutTemplate,
  MessageSquareText,
  Paintbrush2,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  Users2,
  Video,
  WalletCards
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AiDemoSection } from "@/components/sections/ai-demo-section";

const navItems = [
  { label: "产品功能", href: "#features" },
  { label: "适用商户", href: "#merchant-fit" },
  { label: "案例展示", href: "#cases" },
  { label: "价格方案", href: "#pricing" }
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "更统一的品牌输出",
    description: "同一门店的海报、文案、活动图和脚本风格保持一致，更像成熟品牌而不是临时拼内容。"
  },
  {
    icon: Clock3,
    title: "更快进入发布状态",
    description: "从活动想法到可发内容，不再反复找人、找图、改字、催设计。"
  },
  {
    icon: BarChart3,
    title: "更接近转化结果",
    description: "内容结构会优先围绕门店到店、咨询、预约、转发和复购目标来组织。"
  }
];

const painPoints = [
  "活动总是临时做，视觉不统一，发出去像临时拼的海报。",
  "不会写朋友圈和短视频文案，内容发了也不知道能不能带来咨询。",
  "节日节点、上新节点、拉新节点来得太快，门店根本来不及准备。",
  "长期请设计师和外包团队成本太高，小店很难持续投入。"
];

const features = [
  {
    icon: FileImage,
    title: "AI 海报生成",
    description: "输入活动主题、优惠和门店卖点，快速生成适合商户传播的主视觉海报。"
  },
  {
    icon: MessageSquareText,
    title: "AI 文案生成",
    description: "自动生成朋友圈、小红书、社群群发、团购说明等多版本营销文案。"
  },
  {
    icon: LayoutTemplate,
    title: "菜单设计",
    description: "把新品、套餐、招牌推荐整理成更适合打印、上墙和线上展示的菜单版式。"
  },
  {
    icon: Sparkles,
    title: "活动策划",
    description: "围绕节日、开业、上新、拉新、复购，自动生成更贴近门店经营的活动方案。"
  },
  {
    icon: Send,
    title: "朋友圈营销",
    description: "输出可直接发送的推广内容、配图方向和转化动作建议，减少试错。"
  },
  {
    icon: Video,
    title: "短视频脚本",
    description: "一键生成门店短视频脚本、镜头结构、口播文案和封面标题。"
  }
];

const merchantFits = [
  {
    title: "餐饮店",
    detail: "适合做套餐促销、节日节点、晚市引流、到店福利。"
  },
  {
    title: "茶饮店",
    detail: "适合做新品上新、打卡传播、门店联名和社群裂变。"
  },
  {
    title: "美容美甲店",
    detail: "适合做节日礼遇、会员复购、预约转化和私域邀约。"
  },
  {
    title: "服装店",
    detail: "适合做上新海报、穿搭内容、门店陈列和节假日活动。"
  },
  {
    title: "培训机构",
    detail: "适合做试听转化、招生节点、家长社群传播和活动课包装。"
  },
  {
    title: "社区小店",
    detail: "适合做到店福利、邻里转介绍、会员活动和日常促活。"
  }
];

const beforeAfter = [
  {
    label: "做活动准备",
    before: "想到活动后开始到处找海报模板、找人写文案、来回沟通修改。",
    after: "确定行业和活动目标后，几分钟内拿到可直接发的整套内容。 "
  },
  {
    label: "内容统一度",
    before: "每次活动风格都不一样，像临时凑出来的宣传物料。",
    after: "标题、文案、海报、短视频脚本和门店方案在同一品牌调性下输出。"
  },
  {
    label: "执行效率",
    before: "节日节点常常来不及，活动上线总是慢半拍。",
    after: "节日、开业、上新、会员活动都能快速切到对应模板和内容结构。"
  }
];

const steps = [
  {
    index: "01",
    title: "选择行业",
    description: "先匹配门店类型，自动套入适合这个行业的营销模板和内容逻辑。"
  },
  {
    index: "02",
    title: "输入活动",
    description: "填写主题、优惠、卖点和时间，系统自动理解门店这次要推广什么。"
  },
  {
    index: "03",
    title: "生成物料",
    description: "同时生成海报、活动图、朋友圈文案、短视频脚本和门店营销建议。"
  },
  {
    index: "04",
    title: "一键下载或发布",
    description: "导出图片与文本内容，直接发到朋友圈、社群、短视频平台或门店现场。"
  }
];

const cases = [
  {
    title: "餐饮门店",
    tag: "爆品套餐",
    description: "围绕双人套餐做海报、朋友圈文案和门店引流活动。",
    metric: "活动曝光提升 182%"
  },
  {
    title: "茶饮门店",
    tag: "新品上新",
    description: "为季节新品生成封面图、社群海报和短视频脚本。",
    metric: "上新效率提升 4 倍"
  },
  {
    title: "美容美甲",
    tag: "节日促活",
    description: "快速输出预约海报、私域邀约文案和门店福利图。",
    metric: "预约咨询提升 63%"
  },
  {
    title: "培训机构",
    tag: "招生转化",
    description: "生成试听邀约物料、家长群传播内容和课程活动页文案。",
    metric: "招新线索提升 91%"
  }
];

const planCards = [
  {
    name: "体验版",
    price: "¥0",
    desc: "适合第一次感受 AI 营销工具价值的小店主",
    cta: "先试 1 周",
    features: ["基础海报生成", "基础文案生成", "有限次数试用", "单门店体验"]
  },
  {
    name: "标准版",
    price: "¥199 / 月",
    desc: "适合需要经常做活动、上新、节日营销的门店",
    featured: true,
    badge: "最容易成交",
    cta: "申请门店试用",
    features: ["完整宣传物料", "多平台营销文案", "活动方案推荐", "商用导出能力", "AI 生成演示区同类能力"]
  },
  {
    name: "门店版",
    price: "¥599 / 月",
    desc: "适合多门店、连锁品牌、团队协作与统一出品",
    cta: "预约顾问演示",
    features: ["多门店切换", "品牌模板库", "营销数据看板", "团队协作权限"]
  }
];

const compareRows = [
  {
    label: "单次活动准备成本",
    designer: "要么内部自己拼，要么额外找设计和文案支持",
    product: "按月固定投入，日常活动都能直接复用"
  },
  {
    label: "修改效率",
    designer: "改标题、改价格、改活动时间都要来回沟通",
    product: "自己改输入条件，马上重新生成新版本"
  },
  {
    label: "适配范围",
    designer: "通常只给单一海报或单一稿件",
    product: "一次生成海报、文案、脚本、活动建议等整套内容"
  },
  {
    label: "长期沉淀",
    designer: "每次活动像重新开始，资产不连续",
    product: "门店内容结构、活动模板和品牌风格可持续沉淀"
  }
];

const faqs = [
  {
    q: "不会设计也能用吗？",
    a: "可以。狸掌柜就是给不会设计、不会写文案的小店主准备的，按步骤填写即可生成内容。"
  },
  {
    q: "内容可以直接商用吗？",
    a: "可以直接作为商用初稿使用，也可以作为门店长期营销模板继续调整和复用。"
  },
  {
    q: "支持哪些行业？",
    a: "目前优先适配餐饮、茶饮、美容、美甲、服装、培训机构等高频本地商户场景。"
  },
  {
    q: "后续可以接入工作台和后台吗？",
    a: "可以。项目结构已经按产品化方式拆开，后续可继续接工作台、后台、API 和真实数据。"
  }
];

const caseGradients = [
  "from-sky-400 via-blue-500 to-cyan-500",
  "from-emerald-300 via-green-400 to-teal-500",
  "from-orange-200 via-rose-300 to-fuchsia-300",
  "from-violet-300 via-indigo-300 to-sky-300"
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute right-[-8rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[26rem] w-[26rem] rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
        <div className="container-shell flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-500 text-lg font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)]">
              狸
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-950">狸掌柜</div>
              <div className="text-sm text-slate-500">本地商家 AI 设计与营销平台</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex" asChild>
              <Link href="/workspace">进入工作台</Link>
            </Button>
            <Button className="px-6" asChild>
              <Link href="#contact">
                申请门店试用
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="section-space pb-12 pt-10 sm:pt-14">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              面向本地商户的 AI 设计与营销增长工具
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[2.95rem] font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-[4.4rem] lg:text-[5.4rem]">
                让门店每次做活动，
                <span className="block bg-gradient-to-r from-slate-950 via-sky-700 to-emerald-600 bg-clip-text text-transparent">
                  都像有一支小型品牌团队在背后支持
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                狸掌柜帮助本地商户快速生成海报、菜单、活动图、朋友圈文案、短视频脚本和门店营销方案，
                把“不会设计、不会写文案、做活动太慢”这件事，变成一个可复制的日常流程。
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="xl" className="px-8" asChild>
                <Link href="#contact">
                  申请门店试用
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="xl" variant="secondary" className="px-8" asChild>
                <a href="#ai-demo">
                  <Play className="mr-2 h-4 w-4" />
                  看 3 分钟演示
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "适配行业", value: "6+ 本地商户类型" },
                { label: "平均效率", value: "5 分钟完成一套活动内容" },
                { label: "适合场景", value: "节日、上新、拉新、会员活动" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-white/75 bg-white/72 px-5 py-4 shadow-[0_12px_38px_rgba(15,23,42,0.05)] backdrop-blur"
                >
                  <div className="text-sm text-slate-500">{item.label}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-emerald-200/70 blur-2xl" />

            <div className="glass-panel rounded-[2rem] p-4 sm:p-5">
              <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,#101728_0%,#16203d_100%)] p-4 text-white shadow-[0_40px_120px_rgba(10,18,35,0.28)] sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">AI 商户工作台</p>
                    <h2 className="mt-2 text-2xl font-semibold sm:text-[1.9rem]">夏季新品推广计划</h2>
                    <p className="mt-2 max-w-md text-sm leading-7 text-slate-300">
                      面向茶饮店和餐饮店的一体化营销生成流程，自动输出主视觉、文案和短视频脚本。
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-100">
                    实时生成中
                  </div>
                </div>

                <div className="mt-6 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
                  <div className="rounded-[1.6rem] border border-white/8 bg-white/6 p-4 backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.26em] text-slate-400">Preview Panel</div>
                        <div className="mt-2 text-lg font-medium">产品预览</div>
                      </div>
                      <Store className="h-5 w-5 text-emerald-300" />
                    </div>

                    <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 p-5 shadow-[0_28px_70px_rgba(59,130,246,0.34)]">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-white/16 px-3 py-1 text-xs text-white/90">活动主视觉</div>
                        <Sparkles className="h-5 w-5 text-white/90" />
                      </div>
                      <div className="mt-8 space-y-3">
                        <div className="h-3 w-24 rounded-full bg-white/60" />
                        <div className="h-9 w-4/5 rounded-full bg-white/90" />
                        <div className="h-3 w-2/3 rounded-full bg-white/45" />
                      </div>
                      <div className="mt-10 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                        <div className="space-y-2 rounded-[1.3rem] bg-white/14 p-4">
                          <div className="h-10 w-full rounded-2xl bg-white/85" />
                          <div className="h-3 w-2/3 rounded-full bg-white/45" />
                          <div className="h-3 w-1/2 rounded-full bg-white/35" />
                        </div>
                        <div className="rounded-[1.4rem] bg-white/12 p-4">
                          <div className="flex h-full items-end justify-between gap-2">
                            {[44, 76, 58, 82].map((height) => (
                              <div
                                key={height}
                                className="flex-1 rounded-full bg-white/82"
                                style={{ height }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <Card className="border-white/10 bg-white/8 text-white shadow-none backdrop-blur">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-base">生成进度</CardTitle>
                        <CardDescription className="text-slate-300">
                          海报、菜单、朋友圈文案、短视频脚本、活动方案
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {[
                          "主视觉海报已完成",
                          "朋友圈文案已完成",
                          "短视频脚本生成中"
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm"
                          >
                            <CheckCheck className="h-4 w-4 text-emerald-300" />
                            {item}
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-white/8 text-white shadow-none backdrop-blur">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">适用商户</CardTitle>
                      </CardHeader>
                      <CardContent className="grid grid-cols-2 gap-3 text-sm">
                        {merchantFits.slice(0, 6).map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-center text-slate-200"
                          >
                            {item.title}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 hidden rounded-[1.6rem] border border-white/75 bg-white/75 px-5 py-4 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur md:block">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Paintbrush2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">视觉统一度</div>
                  <div className="text-lg font-semibold text-slate-950">门店物料风格自动收口</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="container-shell">
          <Card className="rounded-[2rem] border-white/70 bg-white/78">
            <CardContent className="grid gap-5 p-6 md:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-slate-100 bg-slate-50/75 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              <Paintbrush2 className="h-4 w-4" />
              商户痛点
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              很多小店不是没有生意思路，而是缺一套足够快、足够专业、足够稳定的内容生产系统。
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              狸掌柜把设计、文案、活动策划和门店传播整合成一套简单流程，让本地商户也能做出像品牌团队出品的营销内容。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((item, index) => (
              <Card
                key={item}
                className="group gradient-stroke rounded-[1.8rem] bg-white/72 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
              >
                <CardHeader className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition group-hover:bg-sky-600">
                    0{index + 1}
                  </div>
                  <CardTitle className="text-[1.35rem] leading-8 text-slate-950">{item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="features">
        <div className="container-shell">
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">
              <LayoutDashboard className="h-4 w-4" />
              核心功能
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              功能不只是能生成，而是更像一套真正适合门店经营的内容生产系统。
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              从海报、菜单到活动策划、朋友圈文案和短视频脚本，所有模块都围绕本地商户的实际经营动作组织。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="rounded-[1.85rem] border-white/70 bg-white/78 transition duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_26px_90px_rgba(16,24,40,0.1)]"
                >
                  <CardHeader className="space-y-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 via-sky-100 to-white text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="text-[1.55rem]">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-7 text-slate-600">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space" id="merchant-fit">
        <div className="container-shell">
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm text-violet-700">
              <Users2 className="h-4 w-4" />
              适合哪些商户
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              不是给所有企业都做的，而是优先服务那些需要高频做活动、但缺少品牌内容能力的本地门店。
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {merchantFits.map((item) => (
              <Card key={item.title} className="rounded-[1.85rem] border-white/70 bg-white/82">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-[1.45rem]">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-7">{item.detail}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AiDemoSection />

      <section className="section-space">
        <div className="container-shell">
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              <BadgeCheck className="h-4 w-4" />
              使用前后对比
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              客户真正关心的不是 AI 这两个字，而是用了之后到底能省多少事、快多少、像不像一个专业品牌。
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {beforeAfter.map((item) => (
              <Card key={item.label} className="rounded-[1.9rem] border-white/70 bg-white/82">
                <CardHeader>
                  <CardTitle className="text-[1.45rem]">{item.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-[1.4rem] border border-rose-100 bg-rose-50/75 p-4">
                    <div className="text-sm font-medium text-rose-700">使用前</div>
                    <p className="mt-2 leading-7 text-slate-600">{item.before}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-emerald-100 bg-emerald-50/75 p-4">
                    <div className="text-sm font-medium text-emerald-700">使用后</div>
                    <p className="mt-2 leading-7 text-slate-700">{item.after}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Card className="overflow-hidden rounded-[2.2rem] border-none bg-[linear-gradient(180deg,#0f172a_0%,#111c36_100%)] text-white shadow-[0_34px_120px_rgba(15,23,42,0.24)]">
            <CardContent className="grid gap-px bg-white/10 p-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-slate-950/96 px-6 py-8 sm:px-8 sm:py-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  使用流程
                </div>
                <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                  从想到做活动，到内容能发出去，压缩成清晰的 4 步。
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                  不需要复杂培训，也不需要在多个软件之间来回切换，门店只要按流程输入信息就能快速拿到一套可用内容。
                </p>
              </div>

              <div className="grid gap-px bg-white/10 lg:grid-cols-2">
                {steps.map((step) => (
                  <div key={step.index} className="bg-slate-950/96 px-6 py-7 sm:px-7">
                    <div className="text-sm tracking-[0.22em] text-emerald-300">{step.index}</div>
                    <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-space" id="cases">
        <div className="container-shell">
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              <Store className="h-4 w-4" />
              案例展示
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              不同行业，都能有自己的传播节奏、视觉模板和转化重点。
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {cases.map((item, index) => (
              <Card key={item.title} className="overflow-hidden rounded-[1.9rem] border-white/70 bg-white/82">
                <div className={`h-44 bg-gradient-to-br ${caseGradients[index]}`} />
                <CardHeader className="space-y-4">
                  <div className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {item.tag}
                  </div>
                  <CardTitle className="text-[1.6rem]">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {item.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="mb-14 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-700">
              <WalletCards className="h-4 w-4" />
              为什么比请设计师更划算
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              不是说设计师不重要，而是对高频日常活动来说，门店更需要一套持续、可重复、可快速调整的生产能力。
            </h2>
          </div>

          <Card className="rounded-[2rem] border-white/70 bg-white/82">
            <CardContent className="p-0">
              <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-slate-100 text-sm font-medium text-slate-500">
                <div className="px-6 py-4">对比项</div>
                <div className="px-6 py-4">请设计师 / 外包</div>
                <div className="bg-emerald-50/70 px-6 py-4 text-emerald-700">狸掌柜</div>
              </div>
              {compareRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[1fr_1fr_1fr] border-b border-slate-100 last:border-b-0">
                  <div className="px-6 py-5 font-medium text-slate-900">{row.label}</div>
                  <div className="px-6 py-5 leading-7 text-slate-600">{row.designer}</div>
                  <div className="bg-emerald-50/45 px-6 py-5 leading-7 text-slate-700">{row.product}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-space" id="pricing">
        <div className="container-shell">
          <div className="mb-14 flex flex-col gap-4 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              <Sparkles className="h-4 w-4" />
              价格方案
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              价格结构为销售转化而设计，让客户快速判断哪一档最适合当前门店。
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              保持简单，不堆复杂条款，让咨询、试用和成交路径更直接。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {planCards.map((plan) => (
              <Card
                key={plan.name}
                className={`rounded-[2rem] border-white/70 bg-white/84 ${
                  plan.featured
                    ? "relative scale-[1.01] shadow-[0_30px_90px_rgba(37,99,235,0.16)]"
                    : "shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
                }`}
              >
                <CardHeader className="pb-5">
                  {plan.badge ? (
                    <div className="mb-4 inline-flex w-fit rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white">
                      {plan.badge}
                    </div>
                  ) : null}
                  <CardTitle className="text-[1.9rem]">{plan.name}</CardTitle>
                  <CardDescription className="text-base leading-7">{plan.desc}</CardDescription>
                  <div className="pt-4 text-4xl font-semibold tracking-tight text-slate-950">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCheck className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={plan.featured ? "default" : "secondary"}>
                    {plan.cta}
                  </Button>
                  {plan.featured ? (
                    <p className="text-center text-xs leading-6 text-slate-500">
                      更适合正在做节日活动、上新活动和高频日常营销的门店。
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="container-shell">
          <Card className="rounded-[2rem] border-white/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(22,41,79,0.94))] text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)]">
            <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                  <BadgeCheck className="h-4 w-4 text-emerald-300" />
                  适合直接发给客户看的版本
                </div>
                <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  如果你现在就想让客户感受到“这不是一个概念，而是能马上用的产品”，可以直接从演示和试用开始。
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  官网、演示区、价格结构和商户适配逻辑已经具备销售沟通基础，接下来可以继续接表单和试用流程。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button size="xl" className="min-w-[220px]" asChild>
                  <Link href="#contact">
                    申请门店试用
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="xl" variant="secondary" className="min-w-[220px]" asChild>
                  <a href="#ai-demo">查看 AI 演示区</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-5 lg:grid-cols-[1fr_0.96fr]">
          <Card className="rounded-[2rem] border-white/70 bg-white/82">
            <CardHeader>
              <CardTitle className="text-3xl">FAQ 常见问题</CardTitle>
              <CardDescription className="text-base leading-7 text-slate-600">
                把客户最常问的问题提前讲清楚，页面本身就会更像一个真实产品官网，而不是展示稿。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-[1.45rem] border border-slate-100 bg-slate-50/85 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{item.q}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card id="contact" className="rounded-[2rem] border-white/70 bg-white/88">
            <CardHeader>
              <CardTitle className="text-3xl">联系表单</CardTitle>
              <CardDescription className="text-base leading-7 text-slate-600">
                留下门店信息，我们可以继续接试用、演示、报价与后续合作。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="你的称呼" />
                <Input placeholder="联系电话" />
                <Input placeholder="门店类型，例如：茶饮店 / 美容店 / 培训机构" />
                <Textarea
                  placeholder="你现在最想解决什么营销问题？或者这次想做什么活动？"
                  className="min-h-[150px]"
                />
                <Button className="w-full" size="xl">
                  提交咨询
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/65 py-8">
        <div className="container-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 狸掌柜 Lizhanggui. 本地商家 AI 设计与营销平台。</div>
          <div className="flex items-center gap-5">
            <Link href="/workspace" className="transition hover:text-slate-950">
              工作台入口
            </Link>
            <Link href="/admin" className="transition hover:text-slate-950">
              后台入口
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
