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
      className={`bg-white border-4 border-black rounded-sm shadow-[5px_5px_0_rgba(0,0,0,0.35)] ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between px-5 py-3 border-b-4 border-black bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
          <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] italic">
            ★ {title}
          </h3>
          {action}
        </div>
      )}
      <div className={padded ? "p-5" : ""}>{children}</div>
    </div>
  );
}
