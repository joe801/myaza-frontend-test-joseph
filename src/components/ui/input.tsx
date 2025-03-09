import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input"> & { type?: string }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-[3rem] w-full min-w-0 rounded-sm border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "text-input",
          isPassword ? "pr-16" : "",
          className,
        )}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={togglePasswordVisibility}
          tabIndex={-1}
        >
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
          {showPassword ? (
            <span className="cursor-pointer">Hide</span>
          ) : (
            <span className="cursor-pointer">Show</span>
          )}
        </button>
      )}
    </div>
  );
}

export { Input };
