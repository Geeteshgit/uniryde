import React from "react";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: "ri-wallet-3-line",
    title: "Save on travel",
    description: "Share rides and reduce the cost of your everyday commute.",
  },
  {
    icon: "ri-user-community-line",
    title: "Meet your uni",
    description: "Connect with students from your own university.",
  },
  {
    icon: "ri-time-line",
    title: "Save time",
    description:
      "Find a suitable ride without searching through scattered groups.",
  },
  {
    icon: "ri-lock-line",
    title: "Your number stays private",
    description:
      "Chat and coordinate with your carpool without giving out your personal number.",
  },
];

const Benefits = () => {
  return (
    <section className="border-y border-white/5 bg-surface/40">
      <div className="mx-auto max-w-7xl py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-primary">Why UniRyde?</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Make your daily commute
            <br />a little better.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/40 sm:text-base">
            Built for students who already travel the same routes, but
            don&apos;t always know who else is going with them.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <Benefit
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function Benefit({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-white/5 bg-surface p-6 text-center transition-colors hover:border-primary/20">
      <div className="flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <i className={`${icon} text-xl`} />
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white transition-all group-hover:text-primary">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/40 transition-colors group-hover:text-white/60 sm:text-sm">
        {description}
      </p>
    </div>
  );
}

export default Benefits;
