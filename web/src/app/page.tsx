import { AboutSection } from "@/components/landing/about-section";
import { AccessSection } from "@/components/landing/access-section";
import { BookingSection } from "@/components/landing/booking-section";
import { FacilitiesSection } from "@/components/landing/facilities-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LocationSection } from "@/components/landing/location-section";
import { PlanSection } from "@/components/landing/plan-section";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/20 text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <LocationSection />
        <PlanSection />
        <AccessSection />
        <BookingSection />
      </main>

      <footer className="border-t bg-background/60 py-12 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="text-xs font-medium tracking-wide text-muted-foreground">
              © {new Date().getFullYear()} TATEYAMA BASE 北条
            </div>
            <div className="text-xs text-muted-foreground">
              千葉県館山市北条（住所等は公開情報確定後に追記）
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
