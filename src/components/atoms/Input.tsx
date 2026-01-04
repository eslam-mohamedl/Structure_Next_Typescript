import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "primary" | "secondary" | "error" | "success";

interface CustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  type: string;
  placeholder?: string;
  inputSize?: InputSize;
  variant?: InputVariant;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const variantClasses: Record<InputVariant, string> = {
  primary:
    "border text-bg border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  secondary:
    "border ext-bg border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400",
  error:
    "border ext-bg border-red-500 rounded-md text-red-600 placeholder-red-300 focus:ring-2 focus:ring-red-500",
  success:
    "border ext-bg border-green-500 text-green-700 rounded-md placeholder-green-300 focus:ring-2 focus:ring-green-500",
};

const Input: React.FC<CustomInputProps> = ({
  type = "email",
  placeholder,
  inputSize = "md",
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        "text-bg w-full transition-all duration-200 outline-none",
        sizeClasses[inputSize],
        variantClasses[variant],
        className
      )}
      {...rest}
    />
  );
};

export default Input;
