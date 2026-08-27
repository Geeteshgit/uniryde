import FeatureGrid from "./FeatureGrid";

export default function LandingHero() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="my-6 flex flex-col items-center gap-5 text-center sm:my-10">
          <h1 className="text-3xl font-medium sm:text-4xl lg:text-[2.5rem]">
            Welcome To Uni
            <span className="text-primary">Ryde</span>
          </h1>

          <p className="max-w-xl text-base font-light text-muted sm:text-lg">
            The All-In-One solution to all your problems within your campus!
          </p>
        </div>

        {/* Features */}
        <FeatureGrid />
      </div>
    </section>
  );
}
