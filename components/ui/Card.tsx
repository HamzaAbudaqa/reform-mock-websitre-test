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
      className={`bg-white border-2 border-gray-300 rounded-sm shadow-md ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
          <h3 className="text-xs font-black text-gray-800 uppercase tracking-[0.15em]">
            {title}
          </h3>
          {action}
        </div>
      )}
      <div className={padded ? "p-5" : ""}>{children}</div>
    </div>
  );
}
