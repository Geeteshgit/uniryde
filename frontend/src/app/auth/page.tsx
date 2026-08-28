"use client";

import { useState } from "react";
import LoginForm from "@/features/auth/components/LoginForm";
import SignupForm from "@/features/auth/components/SignupForm";
import Link from "next/link";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <main className="flex min-h-full flex-1 bg-background">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-8">
        <h1 className="text-5xl font-medium tracking-tight">
          Uni<span className="text-primary">Ryde</span>
        </h1>

        {isSignup ? (
          <SignupForm onLogin={() => setIsSignup(false)} />
        ) : (
          <LoginForm onSignup={() => setIsSignup(true)} />
        )}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-1
            text-sm
            text-muted
            transition-colors
            hover:text-text
          "
        >
          <i className="ri-arrow-left-line" />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default AuthPage;
