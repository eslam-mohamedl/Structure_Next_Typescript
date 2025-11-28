"use client";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  placeholder?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, className = "mb-3", ...props }, ref) => {
    const locale = useLocale();

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          {...props}
          placeholder={placeholder}
          dir={locale === "en" ? "ltr" : "rtl"}
          className={clsx(
            "w-full rounded-md border-2 border-[#89A59B] p-[15px] outline-none placeholder:text-gray-400",
            className,
            {
              "text-right placeholder:text-right": locale === "ar",
              "text-left placeholder:text-left": locale !== "ar",
            }
          )}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
