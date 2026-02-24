import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/landing/section-shell";
import { SectionBackground } from "@/components/landing/section-background";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type PriceRow = { people: string; price: string; note?: string };

type Season = {
	key: string;
	label: string;
	badge: string;
	hint: string;
	rows: PriceRow[];
};

const baseRowsOff: PriceRow[] = [
	{ people: "4名まで", price: "46,000円", note: "1階ベッドのみ使用" },
	{ people: "5名", price: "48,500円", note: "1階・2階ベッド使用" },
	{ people: "6名", price: "51,000円", note: "1階・2階ベッド使用" },
	{ people: "7名", price: "53,500円", note: "1階・2階ベッド使用" },
	{ people: "8名", price: "56,000円", note: "1階・2階ベッド使用" },
];

const baseRowsRegular: PriceRow[] = [
	{ people: "4名まで", price: "53,000円", note: "1階ベッドのみ使用" },
	{ people: "5名", price: "56,500円", note: "1階・2階ベッド使用" },
	{ people: "6名", price: "60,000円", note: "1階・2階ベッド使用" },
	{ people: "7名", price: "63,500円", note: "1階・2階ベッド使用" },
	{ people: "8名", price: "67,000円", note: "1階・2階ベッド使用" },
];

const baseRowsHigh: PriceRow[] = [
	{ people: "4名まで", price: "58,000円", note: "1階ベッドのみ使用" },
	{ people: "5名", price: "61,500円", note: "1階・2階ベッド使用" },
	{ people: "6名", price: "65,000円", note: "1階・2階ベッド使用" },
	{ people: "7名", price: "68,500円", note: "1階・2階ベッド使用" },
	{ people: "8名", price: "72,000円", note: "1階・2階ベッド使用" },
];

const baseRowsTop: PriceRow[] = [
	{ people: "4名まで", price: "63,000円", note: "1階ベッドのみ使用" },
	{ people: "5名", price: "66,500円", note: "1階・2階ベッド使用" },
	{ people: "6名", price: "70,000円", note: "1階・2階ベッド使用" },
	{ people: "7名", price: "73,500円", note: "1階・2階ベッド使用" },
	{ people: "8名", price: "77,000円", note: "1階・2階ベッド使用" },
];

const supRows: PriceRow[] = [
	{ people: "1台", price: "3,000円" },
	{ people: "2台", price: "5,000円" },
	{ people: "3台", price: "7,000円" },
	{ people: "4台", price: "9,000円" },
];

const seasons: Season[] = [
	{
		key: "off",
		label: "オフシーズン",
		badge: "OFF",
		hint: "レギュラー/ハイ/トップ以外。4名まで：1名追加ごとに+2,000円。",
		rows: baseRowsOff,
	},
	{
		key: "regular",
		label: "レギュラーシーズン",
		badge: "REGULAR",
		hint: "日曜/祝日/春休み等（除外条件あり）。4名まで：1名追加ごとに+3,000円。",
		rows: baseRowsRegular,
	},
	{
		key: "high",
		label: "ハイシーズン",
		badge: "HIGH",
		hint: "土曜/祝前日/三連休2日目/7/10〜9/10等（お盆除く）。4名まで：+3,000円。",
		rows: baseRowsHigh,
	},
	{
		key: "top",
		label: "トップシーズン",
		badge: "TOP",
		hint: "GW/お盆/SW/年末年始(12/28〜1/7)等。4名まで：+3,000円。",
		rows: baseRowsTop,
	},
];

function formatRange(rows: PriceRow[]) {
	if (rows.length === 0) return "";
	const first = rows[0]?.price;
	const last = rows[rows.length - 1]?.price;
	if (!first || !last) return "";
	return first === last ? first : `${first}〜${last}`;
}

function PriceTable({ rows }: { rows: PriceRow[] }) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-28">人数</TableHead>
					<TableHead>料金</TableHead>
					<TableHead className="hidden sm:table-cell">備考</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{rows.map((r) => (
					<TableRow key={r.people}>
						<TableCell className="font-medium">
							<div>{r.people}</div>
							{r.note && (
								<div className="mt-1 text-xs text-muted-foreground sm:hidden">
									{r.note}
								</div>
							)}
						</TableCell>
						<TableCell className="whitespace-nowrap">{r.price}</TableCell>
						<TableCell className="hidden text-muted-foreground sm:table-cell">
							{r.note ?? "—"}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export function PlanSection() {
	return (
		<SectionShell
			id="plan"
			eyebrow="PLAN"
			title="料金はシンプルに、明確に。"
			description="まずは固定の料金表として掲載しています。将来的にシミュレーション化する前提で、見やすさを優先しました（清掃費込み）。"
			headerVariant="on-image"
			background={
				<SectionBackground
					src="/imgs/hero-building.JPG"
					alt="外観（背景）"
					overlayClassName="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/85"
				/>
			}
			className="min-h-[85svh]"
		>
			<Card className="relative overflow-hidden rounded-[2rem] border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur md:p-9">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<div>
						<div className="text-sm font-medium tracking-wide">宿泊料金</div>
						<p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
							シーズン別の料金をまとめました。各シーズンを開いてご確認ください。
						</p>
					</div>
					<div className="flex flex-wrap items-center gap-2">
						<Badge variant="secondary" className="bg-background/60">
							清掃費込み
						</Badge>
						<Badge variant="outline" className="border-border/70 bg-background/60">
							最大8名
						</Badge>
					</div>
				</div>

				<Separator className="my-6" />

				<Accordion type="single" collapsible defaultValue="off" className="-mx-2">
					{seasons.map((season) => (
						<AccordionItem
							key={season.key}
							value={season.key}
							className="border-border/60 px-2"
						>
							<AccordionTrigger className="hover:no-underline">
								<div className="flex w-full items-start justify-between gap-4">
									<div>
										<div className="flex flex-wrap items-center gap-3">
											<div className="text-sm font-medium">{season.label}</div>
											<Badge
												variant="outline"
												className="border-border/70 bg-background/60"
											>
												{season.badge}
											</Badge>
										</div>
										<div className="mt-1 text-xs leading-5 text-muted-foreground">
											{season.hint}
										</div>
									</div>
									<div className="mt-0.5 hidden text-xs text-muted-foreground sm:block">
										{formatRange(season.rows)}
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="pb-6">
								<div className="rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur">
									<PriceTable rows={season.rows} />
								</div>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Card>

			<div className="mt-8 grid gap-4 lg:grid-cols-2">
				<Card className="rounded-[2rem] border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur">
					<div className="flex items-start justify-between gap-3">
						<div>
							<div className="text-sm font-medium">SUPレンタル料（1日）</div>
							<p className="mt-2 text-xs leading-5 text-muted-foreground">
								2人乗り重量100kg：1日あたり。
							</p>
						</div>
						<Badge variant="outline" className="border-border/70 bg-background/60">
							RENTAL
						</Badge>
					</div>
					<Separator className="my-5" />
					<PriceTable rows={supRows} />
				</Card>

				<Card className="rounded-[2rem] border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur">
					<div className="flex items-start justify-between gap-3">
						<div className="text-sm font-medium">キャンセルポリシー</div>
						<Badge variant="outline" className="border-border/70 bg-background/60">
							POLICY
						</Badge>
					</div>
					<Separator className="my-5" />
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>・7日〜3日前：ご利用料の30%</li>
						<li>・2日〜1日前：ご利用料の50%</li>
						<li>・当日：ご利用料の100%</li>
					</ul>
					<p className="mt-4 text-xs text-muted-foreground">
						上記金額をご請求させていただきます。
					</p>
				</Card>
			</div>
		</SectionShell>
	);
}
