import { Card } from "@/components/ui/card";
import { Bus, Car, Ship, Train } from "lucide-react";
import { SectionShell } from "@/components/landing/section-shell";
import { SectionBackground } from "@/components/landing/section-background";

const accessItems = [
	{
		icon: Car,
		title: "車",
		lines: [
			"東京方面から：アクアライン → 館山道（ルート詳細は追記予定）",
			"現地駐車・EV充電：EVコンセント2台（詳細は追記予定）",
		],
	},
	{
		icon: Train,
		title: "電車",
		lines: [
			"最寄り駅（例）：館山駅（詳細・徒歩/タクシー時間は追記予定）",
			"特急・在来線の案内は追記予定",
		],
	},
	{
		icon: Bus,
		title: "バス",
		lines: [
			"高速バス：都内方面 → 館山（便・所要時間は追記予定）",
			"最寄りバス停は追記予定",
		],
	},
	{
		icon: Ship,
		title: "フェリー",
		lines: [
			"東京湾フェリー等：港 → 館山方面（詳細は追記予定）",
			"港からの移動手段は追記予定",
		],
	},
];

export function AccessSection() {
	return (
		<SectionShell
			id="access"
			eyebrow="ACCESS"
			title="迷わず辿り着ける、館山。"
			description="車・バス・電車・フェリーの各ルートは、確定情報に合わせて最短で分かる形に整えます。"
			headerVariant="on-image"
			background={
				<SectionBackground
					src="/imgs/hero-building.JPG"
					alt="外観（背景）"
					overlayClassName="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/85"
				/>
			}
			className="min-h-[85svh]"
		>
			<div className="grid gap-4 sm:grid-cols-2">
				{accessItems.map((item) => {
					const Icon = item.icon;
					return (
						<Card
							key={item.title}
							className="group relative overflow-hidden rounded-3xl border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur transition-colors hover:bg-background/75"
						>
							<div className="flex items-center gap-4">
								<div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
									<Icon className="h-5 w-5" />
								</div>
								<div className="text-sm font-medium tracking-wide">
									{item.title}
								</div>
							</div>
							<ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
								{item.lines.map((line) => (
									<li key={line}>{line}</li>
								))}
							</ul>
						</Card>
					);
				})}
			</div>
		</SectionShell>
	);
}
