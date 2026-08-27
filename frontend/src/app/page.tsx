import LandingHeader from "@/features/landing/components/LandingHeader";
import LandingHero from "@/features/landing/components/LandingHero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <LandingHeader />
      <LandingHero />
    </main>
  );
}
