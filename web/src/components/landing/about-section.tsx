import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function AboutSection() {
	return (
		<section
			id="about"
			className={cn("scroll-mt-24", "min-h-[85svh]")}
		>
			<div className="grid md:grid-cols-12 md:items-stretch">
				<div className="relative min-h-[52svh] overflow-hidden md:col-span-6 md:min-h-[85svh]">
					<Image
						src="/imgs/hero-building.JPG"
						alt="TATEYAMA BASE 北条"
						fill
						className="object-cover"
						sizes="(min-width: 768px) 50vw, 100vw"
						priority
						quality={95}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
				</div>

				<div className="md:col-span-6">
					<div className="mx-auto max-w-2xl px-4 py-16 md:py-20">
						<div className="rounded-[2rem] border border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur md:p-9">
							<div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-muted-foreground">
								<span className="h-px w-10 bg-border" />
								<span className="font-mono">ABOUT</span>
							</div>
							<h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
								館山の“遊び”を、滞在の中心に。
							</h2>
							<p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
								TATEYAMA BASE 北条は、アクアライン渋滞を回避して館山を遊び尽くすためのベースキャンプ。ゴルフ・SUP・釣り・街歩きまで、目的に合わせて滞在をデザインできます。
							</p>

							<Separator className="my-6" />

							<div className="text-sm font-medium tracking-wide">コンセプト</div>
							<p className="mt-3 text-base leading-7 text-muted-foreground">
								「アクアライン渋滞を回避し、館山を遊び尽くすためのベースキャンプ」。
								清潔感と開放感、そしてワクワク感を感じるモダンな滞在を。
							</p>

							<Separator className="my-6" />

							<div className="text-sm font-medium tracking-wide">こんな方に</div>
							<ul className="mt-4 space-y-3 text-sm text-muted-foreground">
								<li>アクティブに遊ぶグループ（4〜8名）</li>
								<li>渋滞回避で前泊/後泊を検討している方</li>
								<li>北条海岸の夕日や富士山、館山観光を楽しみたい方</li>
								<li>大学生グループ、ファミリー</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
