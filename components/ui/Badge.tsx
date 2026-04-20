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
  gray: "bg-gray-100 text-gray-700 border-gray-200",
  green: "bg-green-50 text-green-700 border-green-200",
  red: "bg-red-50 text-red-700 border-red-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
};

export default function Badge({ children, tone = "gray", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border ${toneStyles[tone]} ${className}`}
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
