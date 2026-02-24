"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

type Spot = {
	title: string;
	description?: string;
	addressQuery: string;
};

type Props = {
	apiKey: string;
	className?: string;
	centerQuery: string;
	spots: Spot[];
};

export function CustomGoogleMap({
	apiKey,
	className,
	centerQuery,
	spots,
}: Props) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [error, setError] = useState<string | null>(null);

	const mapsOptions = useMemo(
		() => ({
			key: apiKey,
			v: "weekly",
			language: "ja",
			region: "JP",
		}),
		[apiKey]
	);

	useEffect(() => {
		let isCancelled = false;

		async function setup() {
			try {
				setOptions(mapsOptions);
				await importLibrary("maps");
				await importLibrary("geocoding");

				const google = window.google;
				if (isCancelled) return;

				if (!containerRef.current) return;

				const map = new google.maps.Map(containerRef.current, {
					center: { lat: 35.0, lng: 139.9 },
					zoom: 14,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
				});

				const geocoder = new google.maps.Geocoder();

				const centerResult = await geocoder.geocode({
					address: centerQuery,
				});

				if (centerResult.results[0]?.geometry?.location) {
					map.setCenter(centerResult.results[0].geometry.location);
				}

				const info = new google.maps.InfoWindow();

				async function addMarker(spot: Spot) {
					const result = await geocoder.geocode({ address: spot.addressQuery });
					const location = result.results[0]?.geometry?.location;
					if (!location) return;

					const marker = new google.maps.Marker({
						map,
						position: location,
						title: spot.title,
					});

					marker.addListener("click", () => {
						const content = `
              <div style="font-size:12px;line-height:1.4">
                <div style="font-weight:600">${spot.title}</div>
                ${spot.description ? `<div style="opacity:.8">${spot.description}</div>` : ""}
              </div>
            `;
						info.setContent(content);
						info.open({ anchor: marker, map });
					});
				}

				// Add center marker first for orientation.
				await addMarker({
					title: "TATEYAMA BASE 北条",
					addressQuery: centerQuery,
				});
				for (const spot of spots) {
					await addMarker(spot);
				}
			} catch (e) {
				if (!isCancelled) {
					setError(
						e instanceof Error ? e.message : "Google Maps の読み込みに失敗しました"
					);
				}
			}
		}

		void setup();
		return () => {
			isCancelled = true;
		};
	}, [centerQuery, mapsOptions, spots]);

	if (error) {
		return (
			<div className={className}>
				<div className="grid h-full w-full place-items-center rounded-2xl border border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
					Google Maps を表示できませんでした（{error}）
				</div>
			</div>
		);
	}

	return <div ref={containerRef} className={className} />;
}
