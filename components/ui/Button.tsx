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
    "bg-[#337ab7] hover:bg-[#286090] text-white border border-[#2e6da4]",
  secondary:
    "bg-white hover:bg-[#e6e6e6] text-[#333] border border-[#ccc]",
  ghost: "bg-transparent hover:bg-[#e6e6e6] text-[#333] border border-transparent",
  danger:
    "bg-[#d9534f] hover:bg-[#c9302c] text-white border border-[#d43f3a]",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-xs px-3 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
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
  const classes = `inline-flex items-center justify-center gap-1.5 rounded-[3px] ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className} no-underline`;

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
