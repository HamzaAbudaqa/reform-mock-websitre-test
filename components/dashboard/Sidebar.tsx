"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Dashboard", href: "/dashboard", icon: "📊", color: "bg-orange-500" },
  { name: "Projects", href: "/projects", icon: "📦", color: "bg-pink-500" },
  { name: "Deployments", href: "/dashboard", icon: "🚀", color: "bg-red-500" },
  { name: "Incidents", href: "/dashboard", icon: "⚠️", color: "bg-yellow-500" },
  { name: "Logs", href: "/dashboard", icon: "📄", color: "bg-lime-500" },
  { name: "Environments", href: "/dashboard", icon: "🧭", color: "bg-cyan-500" },
  { name: "Team", href: "/dashboard", icon: "👥", color: "bg-blue-500" },
  { name: "Settings", href: "/settings", icon: "⚙️", color: "bg-purple-500" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex md:w-64 bg-gradient-to-b from-purple-900 via-fuchsia-900 to-pink-800 border-r-[6px] border-yellow-400 flex-col">
      <div className="px-5 py-5 border-b-4 border-dashed border-yellow-300/40">
        <Link href="/" className="flex items-center gap-2 unstyled-link">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 via-orange-400 to-lime-400 flex items-center justify-center text-white text-sm font-black border-4 border-yellow-300 shadow">
            DF
          </div>
          <span className="font-black text-white text-xl tracking-tight italic">
            Deploy<span className="text-yellow-300">Flow!</span>
          </span>
        </Link>
      </div>

      <div className="px-4 pt-3">
        <div className="text-[10px] text-yellow-300 uppercase tracking-widest font-black mb-2">
          ★ Workspace
        </div>
        <button className="w-full flex items-center justify-between px-3 py-2 bg-white/10 border-2 border-yellow-300 rounded-sm text-sm text-white font-bold">
          <span className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-sm bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-[10px] font-black border-2 border-yellow-300">
              HQ
            </span>
            Hamza HQ
          </span>
          <span className="text-yellow-300">▾</span>
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        <div className="text-[10px] text-yellow-300 uppercase tracking-widest font-black px-3 mb-2">
          ★ Menu
        </div>
        {nav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-sm text-xs uppercase tracking-widest font-black border-l-[6px] nav-link ${
              isActive(item.href)
                ? "bg-yellow-300 text-purple-900 border-red-600 shadow-[3px_3px_0_rgba(0,0,0,0.35)]"
                : "text-pink-100 hover:bg-white/10 border-transparent"
            }`}
          >
            <span className={`h-6 w-6 rounded-sm ${item.color} flex items-center justify-center text-sm border-2 border-white/50`}>
              {item.icon}
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="px-4 py-4 border-t-4 border-dashed border-yellow-300/40">
        <div className="rounded-md bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 p-4 text-white border-4 border-yellow-200 shadow-[4px_4px_0_rgba(0,0,0,0.35)] blink-slow">
          <p className="text-xs font-black uppercase tracking-widest [text-shadow:1px_1px_0_rgba(0,0,0,0.4)]">
            ⏰ TRIAL ENDS IN 9 DAYS!
          </p>
          <p className="text-xs text-yellow-100 mt-1 font-sans font-bold">
            Upgrade to keep ALL features unlocked.
          </p>
          <Link
            href="/settings"
            className="mt-3 block bg-white text-red-600 text-center text-xs font-black uppercase tracking-widest py-2 rounded-sm border-2 border-red-700 hover:bg-yellow-200 nav-link btn-shine"
          >
            ★ UPGRADE NOW! ★
          </Link>
        </div>
      </div>
    </aside>
  );
}
