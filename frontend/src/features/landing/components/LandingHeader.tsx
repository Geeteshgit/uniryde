import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border bg-surface px-4 sm:px-6 lg:px-8 py-4">
      <Link href="/" className="text-3xl font-medium">
        Uni<span className="text-primary">Ryde</span>
      </Link>

      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/signup"
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
            sm:px-6
          "
        >
          Signup
        </Link>

        <Link
          href="/login"
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
            sm:px-6
          "
        >
          Login
        </Link>
      </div>
    </header>
  );
}
