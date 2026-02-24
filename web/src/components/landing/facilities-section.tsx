import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/landing/section-shell";
import { SectionBackground } from "@/components/landing/section-background";
import {
	BatteryCharging,
	KeyRound,
	Router,
	Table,
	Table2,
} from "lucide-react";

const facilityHighlights = [
	{ icon: Router, label: "高速Wi‑Fi" },
	{ icon: BatteryCharging, label: "EVコンセント(2台)" },
	{ icon: KeyRound, label: "スマートロック" },
	{ icon: Table2, label: "麻雀" },
	{ icon: Table, label: "卓球" },
];

export function FacilitiesSection() {
	return (
		<SectionShell
			id="facilities"
			tone="tinted"
			headerVariant="on-image"
			eyebrow="FACILITIES"
			title="過ごしやすさも、遊び心も。"
			description="最大8名。設備とアクティビティを“ちょうど良く”揃えた、モダンで清潔な貸別荘です。"
			background={
				<SectionBackground
					src="/imgs/sup.jpg"
					alt="アクティビティ（背景）"
					overlayClassName="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75"
				/>
			}
			className="min-h-[85svh]"
		>
			<div className="flex items-center justify-between gap-4">
				<div className="text-sm text-white/80">
					1階・2階・屋上・ウッドテラス（詳細は写真/間取り確定後に追記）
				</div>
				<Badge variant="secondary" className="rounded-full">
					最大8名
				</Badge>
			</div>

			<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{facilityHighlights.map((item) => {
					const Icon = item.icon;
					return (
						<Card
							key={item.label}
							className="rounded-3xl border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur"
						>
							<div className="flex items-center gap-4">
								<div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
									<Icon className="h-5 w-5" />
								</div>
								<div className="text-sm font-medium tracking-wide">
									{item.label}
								</div>
							</div>
						</Card>
					);
				})}
			</div>

			<div className="mt-8 grid gap-4">
				<Card className="rounded-3xl border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur">
					<div className="text-sm font-medium tracking-wide">フロア</div>
					<div className="mt-4 grid gap-3">
						<div className="rounded-2xl border bg-background/60 p-4">
							<div className="text-xs font-medium text-muted-foreground">
								1階
							</div>
							<div className="mt-1 text-sm font-medium">ベッド（〜4名）</div>
						</div>
						<div className="rounded-2xl border bg-background/60 p-4">
							<div className="text-xs font-medium text-muted-foreground">
								2階
							</div>
							<div className="mt-1 text-sm font-medium">追加ベッド（5〜8名）</div>
						</div>
						<div className="rounded-2xl border bg-background/60 p-4">
							<div className="text-xs font-medium text-muted-foreground">
								屋上 / ウッドテラス
							</div>
							<div className="mt-1 text-sm font-medium">開放感のある外空間</div>
						</div>
					</div>
				</Card>
			</div>
		</SectionShell>
	);
}
