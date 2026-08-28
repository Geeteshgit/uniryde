import { Button } from "@/shared/ui";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

export default function LandingHero() {
  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 justify-center py-12 sm:py-16 px-4 sm:px-8 text-center">
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Find students in your uni
          <br className="hidden sm:block" />
          <span className="text-primary"> going your way.</span>
        </h1>

        <p className="max-w-xl text-sm leading-6 text-white/50 sm:text-base">
          UniRyde makes getting to campus easier. Find a carpool, connect with
          students, and coordinate your ride through chat.
        </p>
        <Button>
          <Link href="/auth">
            Get started <i className="ri-arrow-right-line text-base" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
