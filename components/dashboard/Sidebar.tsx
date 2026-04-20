"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Deployments", href: "/dashboard" },
  { name: "Incidents", href: "/dashboard" },
  { name: "Logs", href: "/dashboard" },
  { name: "Environments", href: "/dashboard" },
  { name: "Team", href: "/dashboard" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex md:w-56 bg-[#f5f5f5] border-r border-[#ddd] flex-col">
      <div className="px-4 h-[50px] flex items-center border-b border-[#ddd]">
        <Link href="/" className="font-bold text-[#333] no-underline">
          DeployFlow
        </Link>
      </div>

      <nav className="flex-1 py-2">
        {nav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-4 py-2 text-sm no-underline border-l-[3px] ${
              isActive(item.href)
                ? "bg-white text-[#337ab7] border-[#337ab7] font-bold"
                : "text-[#555] hover:bg-[#eee] border-transparent"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="px-4 py-3 border-t border-[#ddd] text-xs text-[#777]">
        <p>Trial ends in 9 days.</p>
        <Link href="/settings" className="text-[#337ab7] hover:underline">
          Upgrade
        </Link>
      </div>
    </aside>
  );
}
