import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";
interface ImageFooterProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  bg?: "pink" | "purple" | "yellow" | "green";
}
export default function Images({ src, alt, className, width, height, bg }: ImageFooterProps) {
  const baseClasses = "w-full  flex justify-center items-center p-4 rounded-md";
  const bgVairants = {
    pink: "bg-pink",
    purple: "bg-purple",
    yellow: "bg-yellow",
    green: "bg-green",
  };
  return (
    <div className={cn(baseClasses, className, bg ? bgVairants[bg] : "")}>
      <Image src={src} alt={alt} quality={100} width={width} height={height} />
    </div>
  );
}
