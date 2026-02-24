import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
	{ href: "#about", label: "TATEYAMA BASE 北条について" },
	{ href: "#facilities", label: "設備" },
	{ href: "#location", label: "周辺" },
	{ href: "#plan", label: "料金" },
	{ href: "#access", label: "アクセス" },
];

export function SiteHeader() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-sm">
			<div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4">
				<Link
					href="/#top"
					className="flex items-center gap-3"
					aria-label="トップページへ"
				>
					<Image
						src="/imgs/logo.png"
						alt="TATEYAMA BASE 北条"
						width={120}
						height={32}
						className="h-auto w-28"
						priority
					/>
				</Link>

				<nav className="hidden justify-center md:flex md:items-center md:gap-8">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-base font-medium tracking-wide text-foreground/75 hover:text-foreground"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<Button
						asChild
						variant="outline"
						className="rounded-full border-border/60 bg-background/50 shadow-sm"
					>
						<Link href="#booking">予約する</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
