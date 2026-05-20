import Link from "next/link";
import { ArrowLeft, LayoutDashboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.14),transparent_26%),linear-gradient(180deg,#fbfdfc_0%,#f5f8fb_100%)]">
      <div className="container-shell py-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">狸掌柜工作台入口</h1>
              <p className="text-slate-500">官网项目已建好，这里预留后续迁入真实工作台功能。</p>
            </div>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回官网
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/70 bg-white/85">
            <CardHeader>
              <CardTitle>下一步推荐</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-600">
              <p>1. 把现有 `workspace.html` 里的主生成流程迁入这里</p>
              <p>2. 接入 Mock API 与表单状态</p>
              <p>3. 拆成活动创建、生成结果、发布包、数据分析多页面</p>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/70 bg-slate-950 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-300" />
                当前状态
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300">
              <p>官网已经升级为可商用展示风格。</p>
              <p>工作台页目前保留为正式迁移入口。</p>
              <p>后续可以继续把你的本地演示控制台迁进 Next.js。</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
