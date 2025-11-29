import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline1" | "outline2" | "outline3";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
  center?: boolean;
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
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium  transition-all duration-200 hover:scale-[1.04]  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white capitalize focus:ring-blue-500 cursor-pointer hover:opacity-95",
    secondary:
      "bg-secondary-600 text-white capitalize hover:opacity-95 focus:ring-secondary-600 cursor-pointer",
    light:
      "text-dark bg-light-primary hover:bg-blue-50 focus:ring-blue-500 capitalize cursor-pointer",
    outline1:
      "border-2 border-light-primary text-dark  capitalize focus:ring-blue-500 cursor-pointer",
    outline2:
      "border-2 border-secondary  dark:text-light capitalize focus:ring-blue-500 cursor-pointer",
    outline3:
      "border-2 border-secondary text-secondary  capitalize focus:ring-blue-500 cursor-pointer",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2 text-[18px]",
    xl: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} rounded-lg ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return <div className={center ? "flex justify-center" : ""}>{content}</div>;
};

export default Button;
