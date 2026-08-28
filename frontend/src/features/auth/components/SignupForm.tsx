import { Button, Input } from "@/shared/ui";

type SignupFormProps = {
  onLogin: () => void;
};

const SignupForm = ({ onLogin }: SignupFormProps) => {
  return (
    <form className="flex w-full max-w-md flex-col rounded-[10px] bg-surface p-6">
      <h2 className="text-2xl font-medium">Create Account</h2>

      <p className="mb-8 mt-2 text-sm text-text/60">
        Enter your details to start using UniRyde
      </p>

      <div className="flex flex-col gap-4">
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder="John"
        />

        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="name@example.com"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="New Password"
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        <Button className="mt-2">Create Account</Button>
      </div>

      {/* OR */}
      <p className="my-3 self-center text-sm text-muted">OR</p>

      {/* Google */}
      <button
        type="button"
        className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-border
              bg-elevated
              px-4
              py-2
              text-sm
              font-medium
              text-text
              transition-colors
              hover:bg-background
              cursor-pointer
            "
      >
        <i className="ri-google-fill text-lg" />
        Continue with Google
      </button>

      {/* Login */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm">
        <p className="text-text/60">Already Have An Account?</p>

        <button
          type="button"
          onClick={onLogin}
          className="text-primary hover:underline cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
