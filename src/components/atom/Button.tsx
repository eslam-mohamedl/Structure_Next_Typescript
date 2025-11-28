import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline1"
    | "outline2"
    | "light"
    | "toggleActive"
    | "toggleInactive";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
  center?: boolean;
  isRounded?: boolean;
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
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium  transition-all duration-200 hover:scale-[1.04]  focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-md";

  const variants = {
    primary: "bg-primary text-white capitalize focus:ring-blue-500 cursor-pointer hover:opacity-95",
    secondary:
      "bg-secondary text-white capitalize hover:opacity-95 focus:ring-secondary-600 cursor-pointer",

    light:
      "bg-white text-primary capitalize hover:opacity-95 focus:ring-secondary-600 cursor-pointer",

    outline1:
      "border-2 border-primary text-primary  capitalize focus:ring-primary-500 cursor-pointer",
    outline2: "border-2 text-dark capitalize cursor-pointer",
    toggleInactive:
      "bg-bg-alt  dark:bg-dark-secondary text-gray-600  hover:scale-[1] dark:text-white cursor-pointer",
    toggleActive: "bg-primary  text-white cursor-pointer  hover:scale-[1] dark:text-dark",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-[8px] text-[17px]",
    lg: "px-6 py-3 text-[20px]",
    xl: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const rounded = isRounded ? "!rounded-full" : "rounded-lg";

  const classes = `${baseClasses} rounded-md ${variants[variant]}  ${sizes[size]} ${widthClass} ${rounded} ${className}`;

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
