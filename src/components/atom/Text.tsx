interface TextProps {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg";
  center?: boolean;
  variant?: "primary" | "secondary" | "gray" | "light";
  className?: string;
}

export default function Text({
  children,
  size = "md",
  center = true,
  variant = "primary",
  className = "pt-2.5 capitalize font-semibold",
  ...props
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-[15px]",
    lg: "text-[18px]",
  };
  const variants = {
    primary: "text-bg",
    secondary: "text-dark",
    gray: "text-gray-300",
    light: "text-bg",
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
