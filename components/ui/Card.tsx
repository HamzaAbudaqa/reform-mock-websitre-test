import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  action?: ReactNode;
  className?: string;
  padded?: boolean;
}

export default function Card({
  children,
  title,
  action,
  className = "",
  padded = true,
}: Props) {
  return (
    <div
      className={`bg-white border border-[#ddd] rounded-[3px] ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#ddd] bg-[#f5f5f5]">
          <h3 className="text-sm font-bold text-[#333]">{title}</h3>
          {action}
        </div>
      )}
      <div className={padded ? "p-4" : ""}>{children}</div>
    </div>
  );
}
