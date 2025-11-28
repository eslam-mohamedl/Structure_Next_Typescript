interface TitleProps {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  center?: boolean;
  variant?: "primary" | "secondary" | "white";
  className?: string;
}

export default function Title({
  children,
  size = "md",
  center = true,
  variant = "white",
  className = "pt-[30px] capitalize font-semibold",
  ...props
}: TitleProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-5xl",
  };
  const variants = {
    primary: "text-primary",
    secondary: "text-dark",
    white: "text-bg",
  };
  const centerClass = center ? "text-center" : "";
  const classesHeading = `${sizes[size]}  ${variants[variant]} ${centerClass} ${className}`;
  return (
    <>
      <h2 className={classesHeading} {...props}>
        {children}
      </h2>
    </>
  );
}
