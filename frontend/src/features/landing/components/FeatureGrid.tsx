import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "ri-taxi-line",
    title: "Carpooling",
    description:
      "Travelling expenses getting a little too high? Share rides with fellow students. Save money and reduce your carbon footprint.",
  },
];

export default function FeatureGrid() {
  return (
    <div
      className="
        grid
        gap-4
        sm:grid-cols-2
      "
    >
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}
