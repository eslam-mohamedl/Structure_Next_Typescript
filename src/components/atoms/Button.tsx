import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline1" | "none";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  center?: boolean;
  isRounded?: boolean;
  bgBtn?: "pink" | "green" | "yellow" | "purple" | "primary";
}
const Button = ({
  children,
  variant = "primary",
  size = "lg",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  center = false,
  isRounded = false,
  bgBtn,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold  transition-all duration-200 hover:scale-[1.04]  focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "ds-bg-primary text-white capitalize focus:ring-blue-500 cursor-pointer hover:opacity-95",
    secondary:
      "ds-bg-secondary text-white capitalize hover:opacity-95 focus:ring-secondary-600 cursor-pointer",
    outline1:
      "ds-border-secondary ds-text border-2 border-white text-black w-full  capitalize focus:ring-primary-500 cursor-pointer",
    none: "",
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-md",
    lg: "px-6 py-4 text-lg",
  };
  const bgVariants = {
    pink: "bg-pink text-black border-pink",
    purple: "bg-purple text-black border-purple",
    yellow: "bg-yellow text-black border-yellow",
    green: "bg-green text-black border-green",
    primary: "bg-primary ",
  };
  const content = (
    <button
      type={type}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        isRounded ? "rounded-full" : "rounded-lg",
        bgBtn ? bgVariants[bgBtn] : "",
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className={cn(center ? "flex justify-center" : "", fullWidth ? "w-full" : "")}>
      {content}
    </div>
  );
};

export default Button;
