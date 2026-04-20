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
    "bg-gradient-to-b from-indigo-500 to-indigo-700 text-white border-2 border-indigo-800 uppercase tracking-wider font-bold btn-shine hover:from-indigo-600 hover:to-indigo-800",
  secondary:
    "bg-gradient-to-b from-white to-gray-100 text-gray-800 border-2 border-gray-400 uppercase tracking-wider font-bold hover:from-gray-50 hover:to-gray-200",
  ghost:
    "bg-transparent text-indigo-700 hover:underline hover:bg-transparent border-2 border-transparent uppercase tracking-wider font-bold",
  danger:
    "bg-gradient-to-b from-red-500 to-red-700 text-white border-2 border-red-800 uppercase tracking-wider font-bold btn-shine",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

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
