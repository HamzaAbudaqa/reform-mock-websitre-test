import { ReactNode } from "react";

type Tone =
  | "gray"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "indigo"
  | "purple";

interface Props {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const toneStyles: Record<Tone, string> = {
  gray: "bg-[#777] text-white",
  green: "bg-[#5cb85c] text-white",
  red: "bg-[#d9534f] text-white",
  yellow: "bg-[#f0ad4e] text-white",
  blue: "bg-[#5bc0de] text-white",
  indigo: "bg-[#337ab7] text-white",
  purple: "bg-[#5e548e] text-white",
};

export default function Badge({ children, tone = "gray", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold rounded-full ${toneStyles[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function statusTone(
  status: string,
):
  | "gray"
  | "green"
  | "red"
  | "yellow"
  | "blue" {
  switch (status) {
    case "healthy":
    case "success":
    case "active":
    case "resolved":
      return "green";
    case "down":
    case "failed":
    case "critical":
    case "high":
      return "red";
    case "degraded":
    case "warn":
    case "medium":
    case "investigating":
    case "away":
      return "yellow";
    case "building":
    case "queued":
    case "open":
    case "low":
    case "info":
      return "blue";
    default:
      return "gray";
  }
}
