import { cn } from "@/lib/utils";

type Tone = "default" | "tinted";
type HeaderVariant = "default" | "on-image";

type Props = {
	id?: string;
	tone?: Tone;
	headerVariant?: HeaderVariant;
	eyebrow?: string;
	title: string;
	description?: string;
	children: React.ReactNode;
	background?: React.ReactNode;
	className?: string;
};

export function SectionShell({
	id,
	tone = "default",
	headerVariant = "default",
	eyebrow,
	title,
	description,
	children,
	background,
	className,
}: Props) {
	return (
		<section
			id={id}
			className={cn(
				"scroll-mt-24 py-20",
				tone === "tinted" && "bg-accent/25",
				background && "relative overflow-hidden",
				className
			)}
		>
			{background}

			<div className="relative z-10 mx-auto max-w-6xl px-4">
				<header className="max-w-2xl">
					{eyebrow && (
						<div
							className={cn(
								"inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em]",
								headerVariant === "on-image"
									? "text-white/85"
									: "text-muted-foreground"
							)}
						>
							<span
								className={cn(
									"h-px w-10",
									headerVariant === "on-image" ? "bg-white/25" : "bg-border"
								)}
							/>
							<span className="font-mono">{eyebrow}</span>
						</div>
					)}
					<h2
						className={cn(
							"mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
							headerVariant === "on-image" && "text-white"
						)}
					>
						{title}
					</h2>
					{description && (
						<p
							className={cn(
								"mt-4 text-pretty text-base leading-7",
								headerVariant === "on-image"
									? "text-white/85"
									: "text-muted-foreground"
							)}
						>
							{description}
						</p>
					)}
				</header>

				<div className="mt-10">{children}</div>
			</div>
		</section>
	);
}
