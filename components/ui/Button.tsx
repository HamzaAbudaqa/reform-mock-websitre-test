import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-pink-400 via-fuchsia-600 to-purple-700 text-white border-4 border-yellow-300 uppercase tracking-widest font-black btn-shine italic",
  secondary:
    "bg-gradient-to-b from-yellow-200 to-orange-400 text-gray-900 border-4 border-red-600 uppercase tracking-widest font-black btn-shine italic",
  ghost:
    "bg-white text-purple-700 border-4 border-purple-700 uppercase tracking-widest font-black btn-shine italic",
  danger:
    "bg-gradient-to-b from-red-400 to-red-800 text-white border-4 border-yellow-300 uppercase tracking-widest font-black btn-shine italic",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-[11px] px-3 py-1.5",
  md: "text-xs px-4 py-2",
  lg: "text-sm px-6 py-3",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  fullWidth,
  className = "",
  onClick,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm transition-transform hover:translate-y-[-1px] active:translate-y-[1px] ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className} unstyled-link`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
