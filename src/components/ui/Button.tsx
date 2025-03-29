"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  switch (variant) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
    case "secondary":
      return "bg-white text-blue-600 hover:bg-slate-100 focus:ring-slate-400";
    case "outline":
      return "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500";
    default:
      return "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
  }
};

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case "sm":
      return "text-sm px-3 py-1.5";
    case "md":
      return "text-base px-5 py-2";
    case "lg":
      return "text-lg px-6 py-3";
    default:
      return "text-base px-5 py-2";
  }
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button; 