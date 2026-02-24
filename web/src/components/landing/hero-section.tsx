import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<section id="top" className="relative min-h-[100svh]">
			<Image
				src="/imgs/hero-scenery.JPG"
				alt="北条海岸の夕日と富士山"
				fill
				priority
				className="object-cover"
				sizes="100vw"
				quality={95}
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75" />

			<div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pt-24 pb-24">
				<div className="max-w-2xl">
					<h1 className="text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
						館山を遊び尽くす、
						<span className="block">大人のベースキャンプ</span>
					</h1>

					<p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/90 drop-shadow-sm sm:text-lg">
						ゴルフ・SUP・釣り・観光。
						その日のコンディションに合わせて、自由度の高い滞在を。
						最大8名の貸別荘で、清潔感と開放感を。
					</p>

					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<Button asChild size="lg" className="shadow-sm">
							<Link href="#plan">料金・プランを見る</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="border-white/35 bg-white/5 text-white hover:bg-white/10"
						>
							<Link href="#booking">予約へ進む</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
