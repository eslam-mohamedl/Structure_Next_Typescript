import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  href?: string;
};

export default function Logo({ src, alt, width = 180, height = 60, className, href }: LogoProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  );

  if (href) {
    return <Link href={href}>{image}</Link>;
  }

  return image;
}
