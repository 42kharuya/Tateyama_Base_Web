import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionShell } from "@/components/landing/section-shell";
import { SectionBackground } from "@/components/landing/section-background";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

export function BookingSection() {
	return (
		<SectionShell
			id="booking"
			eyebrow="BOOKING"
			title="ご予約はこちら"
			description="予約は STORES 予約から。URL確定後に差し替えます。"
			headerVariant="on-image"
			background={
				<SectionBackground
					src="/imgs/hero-scenery.JPG"
					alt="館山の風景（背景）"
					overlayClassName="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/85"
				/>
			}
			className="min-h-[85svh]"
		>
			<Card className="relative overflow-hidden rounded-[2rem] border-border/60 bg-background/70 p-8 shadow-sm backdrop-blur md:p-10">
				<div className="grid gap-8 md:grid-cols-12 md:items-center">
					<div className="md:col-span-7">
						<div className="flex flex-wrap items-center gap-2">
							<div className="text-sm font-medium tracking-wide">STORES 予約</div>
							<Badge variant="outline" className="border-border/70 bg-background/60">
								公式
							</Badge>
							<Badge variant="secondary" className="bg-background/60">
								空室確認 → 予約
							</Badge>
						</div>
						<p className="mt-3 text-pretty text-base leading-7 text-muted-foreground">
							空室状況の確認から予約確定までスムーズに。
							ご不明点は運用フローに合わせて案内文を追記します。
						</p>
						<Separator className="my-6" />
						<div className="text-xs text-muted-foreground">
							ハッシュタグ：#館山カントリークラブ宿泊先 #館山ベース北条
						</div>
					</div>

					<div className="md:col-span-5">
						<div className="rounded-3xl border border-border/60 bg-background/60 p-6 backdrop-blur">
							<Button asChild size="lg" className="w-full rounded-full shadow-sm">
								<Link
									href={bookingUrl ?? "#"}
									target={bookingUrl ? "_blank" : undefined}
									rel={bookingUrl ? "noopener noreferrer" : undefined}
									aria-disabled={!bookingUrl}
								>
									STORESで予約する
								</Link>
							</Button>

							{!bookingUrl && (
								<div className="mt-3 text-xs text-muted-foreground">
									`NEXT_PUBLIC_BOOKING_URL` が未設定のため現在は無効です
								</div>
							)}
							<Separator className="my-4" />
							<div className="text-xs text-muted-foreground">
								※ 予約ページURL確定後にリンクします
							</div>
						</div>
					</div>
				</div>
			</Card>
		</SectionShell>
	);
}
