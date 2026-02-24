import Image from "next/image";

type Props = {
	src: string;
	alt: string;
	overlayClassName?: string;
	quality?: number;
};

export function SectionBackground({ src, alt, overlayClassName, quality = 90 }: Props) {
	return (
		<div className="absolute inset-0">
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
				sizes="100vw"
				quality={quality}
			/>
			<div
				className={
					overlayClassName ??
					"absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70"
				}
			/>
		</div>
	);
}
