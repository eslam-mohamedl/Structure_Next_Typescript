import { cn } from "../../lib/cn";

interface TitleProps {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  center?: boolean;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  weight?: "regular" | "semibold" | "bold";
}

export default function Title({
  children,
  size = "md",
  center = true,
  variant = "white",
  weight = "semibold",
  className,
  ...props
}: TitleProps) {
  const classBase = "py-0 capitalize font-semibold leading-relaxed ";
  const sizes = {
    sm: "text-sm md:text-base lg:text-lg",
    md: "text-base md:text-xl lg:text-2xl",
    lg: "text-xl md:text-2xl lg:text-3xl",
    xl: "text-lg md:text-3xl lg:text-3xl",
  };
  const variants = {
    primary: "ds-text-primary",
    secondary: "text-dark",
    white: "text-white",
  };
  const weightVariants = {
    regular: "font-regular",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <>
      <h2
        className={cn(
          sizes[size],
          variants[variant],
          weightVariants[weight],
          center ? "text-center" : "",
          classBase,
          className
        )}
        {...props}
      >
        {children}
      </h2>
    </>
  );
}
