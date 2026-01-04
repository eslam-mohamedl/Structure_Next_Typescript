import { cn } from "../../lib/cn";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  centered?: boolean;
  className?: string;
}

export function SeparatorLine({
  orientation = "horizontal",
  centered = false,
  className,
}: SeparatorProps) {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? centered
            ? "mx-auto h-px w-full bg-gray-200"
            : "h-px w-full bg-gray-200"
          : centered
            ? "my-auto h-1/2 bg-gray-200 sm:h-2/3 md:h-3/4"
            : "h-full w-px bg-gray-200",
        className
      )}
    ></div>
  );
}
