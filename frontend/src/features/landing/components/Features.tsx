import React from "react";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "ri-map-pin-line",
    title: "Find a carpool",
    description: "Browse rides based on pickup point, destination, and time.",
  },
  {
    icon: "ri-steering-2-line",
    title: "Offer a ride",
    description:
      "Heading somewhere? Create a carpool and offer your empty seats.",
  },
  {
    icon: "ri-user-add-line",
    title: "Join a ride",
    description:
      "Request a spot in a carpool that matches your route and schedule.",
  },
  {
    icon: "ri-chat-3-line",
    title: "Coordinate in chat",
    description:
      "Message your carpool directly and figure out the details together.",
  },
];

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-primary">What you can do</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
            <br />
            for the ride.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="group rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-primary/20">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <i className={`${icon} text-xl`} />
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white transition-all group group-hover:text-primary">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/40">{description}</p>

      <div className="mt-6 h-px w-8 bg-white/10 transition-all group-hover:w-12 group-hover:bg-primary/50" />
    </div>
  );
}

export default Features;
