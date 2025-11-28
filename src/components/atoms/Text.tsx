interface TextProps {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg";
  center?: boolean;
  variant?: "primary" | "secondary" | "gray" | "main" | "black";
  className?: string;
}

export default function Text({
  children,
  size = "md",
  center = true,
  variant = "primary",
  className = "pt-[10px] capitalize font-semibold",
  ...props
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-[15px]",
    lg: "text-[18px]",
  };
  const variants = {
    primary: "text-secondary-900",
    secondary: "text-dark",
    gray: "text-gray-500",
    main: "dark:text-gray-200 text-dark",
    black: "text-dark-secondary",
  };
  const centerClass = center ? "text-center" : "";
  const classesHeading = `${sizes[size]}  ${variants[variant]} ${centerClass} ${className}`;
  return (
    <>
      <p className={classesHeading} {...props}>
        {children}
      </p>
    </>
  );
}
