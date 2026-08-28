import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-4 sm:px-8">
        <Link href="/" className="text-3xl font-medium">
          Uni<span className="text-primary">Ryde</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/auth"
            className="
          rounded-md
          bg-primary
          px-4
          py-2
          font-medium
          transition
          duration-200
          hover:bg-primary-hover
          hover:scale-[1.03]
          "
          >
            Signup
          </Link>

          <Link
            href="/auth"
            className="
          rounded-md
          border
          border-white
          bg-surface
          px-4
          py-2
          font-medium
          transition
          duration-200
          hover:scale-[1.03]
          "
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
