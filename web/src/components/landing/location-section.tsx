import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomGoogleMap } from "@/components/landing/custom-google-map";
import { SectionShell } from "@/components/landing/section-shell";
import { SectionBackground } from "@/components/landing/section-background";

const mapQuery = encodeURIComponent("TATEYAMA BASE 北条");
const googleMapsEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const spots = [
	{
		category: "コンビニ",
		name: "セブン-イレブン 館山北条店",
		note: "徒歩◯分（要確認）",
	},
	{
		category: "スーパー",
		name: "おどや 北条店",
		note: "地元の新鮮な魚が買える（要確認）",
	},
	{
		category: "飲食",
		name: "館山駅前エリア",
		note: "繁華街まで徒歩圏内（要確認）",
	},
	{
		category: "癒やし",
		name: "マッサージ/銭湯（候補）",
		note: "掲載候補はヒアリング後に追加",
	},
];

export function LocationSection() {
	return (
		<SectionShell
			id="location"
			eyebrow="LOCATION"
			title="徒歩圏の便利さと、館山の余白。"
			description="周辺スポットはまず“案”として掲載し、確定情報（徒歩分数/おすすめコメント）に合わせて磨き込みます。Google Maps APIキー設定時はピン付きマップを表示します。"
			headerVariant="on-image"
			background={
				<SectionBackground
					src="/imgs/hero-scenery.JPG"
					alt="館山の風景（背景）"
					overlayClassName="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/80"
				/>
			}
			className="min-h-[85svh]"
		>
			<div className="grid items-stretch gap-4 lg:grid-cols-5">
				<Card className="h-full rounded-3xl border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur lg:col-span-3">
					<div className="h-[52svh] min-h-80 w-full overflow-hidden rounded-2xl border border-border/60 bg-background/60 lg:h-full">
						{googleMapsApiKey ? (
							<CustomGoogleMap
								apiKey={googleMapsApiKey}
								centerQuery="TATEYAMA BASE 北条"
								spots={spots.map((s) => ({
									title: s.name,
									description: `${s.category} / ${s.note}`,
									addressQuery: `${s.name} 館山`,
								}))}
								className="h-full w-full"
							/>
						) : (
							<iframe
								title="TATEYAMA BASE 北条（Google Map）"
								src={googleMapsEmbedSrc}
								className="h-full w-full"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						)}
					</div>
				</Card>

				<Card className="h-full rounded-3xl border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur lg:col-span-2">
					<div className="flex items-end justify-between gap-3">
						<div>
							<div className="text-sm font-medium tracking-wide">周辺スポット</div>
							<div className="mt-1 text-xs text-muted-foreground">
								徒歩分数などは後から確定
							</div>
						</div>
					</div>

					<div className="mt-5 grid gap-3">
						{spots.map((s) => (
							<div
								key={s.name}
								className="rounded-2xl border bg-background/60 p-4"
							>
								<div className="text-xs font-medium text-muted-foreground">
									{s.category}
								</div>
								<div className="mt-1 text-sm font-medium">{s.name}</div>
								<div className="mt-2 text-xs text-muted-foreground">{s.note}</div>
							</div>
						))}
					</div>

					<div className="mt-6">
						<Button asChild variant="secondary" className="w-full rounded-full">
							<Link
								href="https://www.google.co.jp/maps/place/TATEYAMA+BASE+%E5%8C%97%E6%9D%A1/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Google Mapsで開く
							</Link>
						</Button>
					</div>
				</Card>
			</div>
		</SectionShell>
	);
}
