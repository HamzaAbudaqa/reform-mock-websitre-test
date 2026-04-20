"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Projects", href: "/projects", icon: "📦" },
  { name: "Deployments", href: "/dashboard", icon: "🚀" },
  { name: "Incidents", href: "/dashboard", icon: "⚠️" },
  { name: "Logs", href: "/dashboard", icon: "📄" },
  { name: "Environments", href: "/dashboard", icon: "🧭" },
  { name: "Team", href: "/dashboard", icon: "👥" },
  { name: "Settings", href: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex md:w-64 bg-gradient-to-b from-slate-900 to-indigo-950 border-r-4 border-orange-500 flex-col">
      <div className="px-5 py-5 border-b-2 border-slate-700">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-indigo-600 flex items-center justify-center text-white text-sm font-black border-2 border-indigo-950">
            DF
          </div>
          <span className="font-black text-white text-lg tracking-tight">
            Deploy<span className="text-orange-400">Flow</span>
          </span>
        </Link>
      </div>

      <div className="px-4 pt-3">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">
          Workspace
        </div>
        <button className="w-full flex items-center justify-between px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-white">
          <span className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-sm bg-orange-500 flex items-center justify-center text-[10px] font-black">
              HQ
            </span>
            Hamza HQ
          </span>
          <span className="text-slate-400">▾</span>
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold px-3 mb-2">
          Menu
        </div>
        {nav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm uppercase tracking-wider font-bold border-l-4 ${
              isActive(item.href)
                ? "bg-orange-500/20 text-orange-300 border-orange-400"
                : "text-slate-300 hover:bg-slate-800 border-transparent"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="px-4 py-4 border-t-2 border-slate-700">
        <div className="rounded-sm bg-gradient-to-br from-orange-500 to-pink-600 p-4 text-white border-2 border-orange-300 shadow-lg">
          <p className="text-xs font-black uppercase tracking-widest">
            Trial ends in 9 days
          </p>
          <p className="text-xs text-orange-100 mt-1 font-sans">
            Upgrade to keep all features.
          </p>
          <Link
            href="/settings"
            className="mt-3 block bg-white text-orange-600 text-center text-[10px] font-black uppercase tracking-widest py-1.5 rounded-sm"
          >
            ★ Upgrade now
          </Link>
        </div>
      </div>
    </aside>
  );
}
