import LandingHeader from "@/features/landing/components/LandingHeader";
import LandingHero from "@/features/landing/components/LandingHero";
import Benefits from "@/features/landing/components/Benefits";
import Features from "@/features/landing/components/Features";

export default function HomePage() {
  return (
    <main className="flex-1 bg-background text-text">
      <LandingHeader />
      <LandingHero />
      <Benefits />
      <Features />
    </main>
  );
}
