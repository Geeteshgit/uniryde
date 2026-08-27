import { Card } from "@/shared/ui";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="group flex flex-col items-center text-center gap-2 p-5 transition duration-300 hover:border-primary/30 sm:gap-4 sm:p-6">
      <div
        className="
          flex
          items-center
          justify-center
          rounded-lg
          bg-primary-soft
          p-2.5
          text-primary
        "
      >
        <i className={`${icon} text-xl`} />
      </div>

      <h3
        className="
        text-lg
          font-medium
          transition
          duration-300
          group-hover:text-primary
        "
      >
        {title}
      </h3>

      <p className="font-light leading-relaxed text-muted">{description}</p>
    </Card>
  );
}
