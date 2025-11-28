import Link from "next/link";
import Button from "../atom/Button";
import Image from "next/image";
import type { HeroSectionProps } from "../../types/api";
const HeroSection = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  subTitle,
  primaryButton = "Get Started",
  secondaryButton = "Learn More",
  image,
  reverse = false,
  className = "",
  center = false,
}: HeroSectionProps) => {
  const isCneter =
    center === true
      ? "flex justify-center items-center flex-col text-center"
      : "";

  return (
    <section
      className={`bg-bg dark:bg-dark-primary container h-[90vh] py-16 lg:py-5 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid grid-cols-1 items-center gap-30 lg:grid-cols-2 ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content */}
          <div className={`${reverse ? "lg:col-start-2" : ""} ${isCneter}`}>
            <h1 className="text-dark-primary dark:text-light-primary mb-6 text-4xl leading-tight font-bold lg:text-[38px]">
              {title1} <span className="text-primary">{title2}</span> <br />{" "}
              {title3} <span className="text-primary">{title4} </span>
              {title5}
            </h1>

            {subTitle && (
              <p className="dark:text-light-secondary text-bg mb-8 text-lg leading-relaxed">
                {subTitle}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {primaryButton && (
                <Link href="sign-in">
                  <Button variant="primary" size="md">
                    {primaryButton}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Link href="/learn-more">
                  <Button variant="outline1" size="md">
                    {secondaryButton}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={`${reverse ? "lg:col-start-1" : ""}`}>
              <div className="relative">
                <Image
                  src={image}
                  alt="image"
                  className="h-auto w-[95%] rounded-lg sm:ml-[0%]"
                />
                {/* Optional decorative elements */}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
