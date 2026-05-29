import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  style = {},
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center uppercase font-[var(--font-chivo)] transition-all duration-300 cursor-pointer whitespace-nowrap";

  const sizeClasses = {
    sm: "h-[45px] px-8 text-[11px] sm:text-[12px] rounded-[10px]",
    md: "h-[49px] px-8 sm:px-10 text-[14px] sm:text-[15px] rounded-[10px]",
    lg: "px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-xl",
  };

  const variantClasses = {
    primary: "text-white hover:opacity-90 hover:scale-105",
    secondary: "text-white bg-[#01141B] hover:bg-[#021A24]",
    outline:
      "border border-[#E9F4F9]/50 text-white hover:bg-white hover:text-black hover:border-white",
    text: "text-[#00B4FD] hover:opacity-80 p-0 h-auto font-medium",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Apply gradient background for primary variant
  const customStyle = {
    fontFamily: "Chivo Mono, monospace",
    ...(variant === "primary"
      ? {
          background:
            "linear-gradient(90deg, rgba(0,180,253,1) 0%, rgba(0,58,206,1) 100%)",
        }
      : {}),
    ...style,
  };

  return (
    <button className={combinedClasses} style={customStyle} {...props}>
      {children}
    </button>
  );
}
