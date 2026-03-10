import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 " +
      "dark:bg-blue-500 dark:hover:bg-blue-400",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 " +
      "dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 " +
      "dark:bg-red-500 dark:hover:bg-red-400",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400 " +
      "dark:text-gray-200 dark:hover:bg-gray-800",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : undefined;

  return (
    <button
      className={cx(base, variants[variant], sizes[size], disabledStyles, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

