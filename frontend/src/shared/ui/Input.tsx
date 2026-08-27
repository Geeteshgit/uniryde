import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text/80">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          w-full
          rounded-md
          border
          bg-surface
          px-3
          py-2.5
          text-sm
          text-text
          outline-none
          placeholder:text-muted
          transition
          focus:border-primary
          ${error ? "border-red-500" : "border-border"}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
