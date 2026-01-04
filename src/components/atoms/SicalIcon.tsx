import { type ReactNode } from "react";
import Link from "./Link";
import { cn } from "../../lib/cn";
type SocialIconProps = {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "_self" | "_blank";
};

export default function SocialIcon({
  href,
  children,
  size = "md",
  className,
  target = "_blank",
}: SocialIconProps) {
  const sizeClass = size === "sm" ? "text-xl" : size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <Link href={href} target={target} className={cn(sizeClass, className)}>
      {children}
    </Link>
  );
}
