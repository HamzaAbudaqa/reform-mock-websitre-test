import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white text-[11px] py-1 font-black uppercase tracking-widest marquee border-b-2 border-red-800">
        <span>
          🔥🔥🔥 HUGE DEAL! 50% OFF YEARLY PLANS THIS WEEK ONLY · JOIN 800+
          TEAMS ALREADY SHIPPING WITH DEPLOYFLOW · NEW! PREVIEW ENVIRONMENTS
          FOR EVERY PR · CLICK HERE BEFORE IT'S GONE! 🔥🔥🔥
        </span>
      </div>
      <div className="bg-yellow-300 text-purple-900 text-xs py-1.5 text-center font-black uppercase tracking-wider border-b-4 border-purple-700">
        ⚡ DeployFlow 2.4 is LIVE — environment previews, faster builds, more.{" "}
        <a href="#" className="underline decoration-double">Read the announcement →</a>
      </div>
      <div className="bg-white border-b-[6px] border-pink-500 shadow-[0_4px_0_rgba(236,72,153,0.4)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 unstyled-link">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-pink-400 via-orange-400 to-lime-400 flex items-center justify-center text-white text-lg font-black border-4 border-indigo-900 shadow-[3px_3px_0_rgba(0,0,0,0.35)]">
              DF
            </div>
            <span className="font-black text-2xl tracking-tight">
              <span className="rainbow-text">Deploy</span>
              <span className="text-pink-600 italic">Flow!</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-[13px] font-black uppercase tracking-wider">
            <a href="#features" className="nav-link text-purple-700 hover:text-pink-600">Features</a>
            <span className="text-gray-300">|</span>
            <a href="#pricing" className="nav-link text-purple-700 hover:text-pink-600">Pricing</a>
            <span className="text-gray-300">|</span>
            <a href="#customers" className="nav-link text-purple-700 hover:text-pink-600">Customers</a>
            <span className="text-gray-300">|</span>
            <Link href="/dashboard" className="nav-link text-purple-700 hover:text-pink-600">Product</Link>
            <span className="text-gray-300">|</span>
            <a href="#" className="nav-link text-purple-700 hover:text-pink-600">Docs</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/login" variant="ghost" size="sm">
              Log in
            </Button>
            <Button href="/dashboard" size="sm">
              Get started ➜
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
