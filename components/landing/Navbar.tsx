import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="w-full border-b-4 border-indigo-700 bg-white">
      <div className="bg-orange-500 text-white text-xs py-1.5 text-center font-bold uppercase tracking-wider">
        🎉 New! DeployFlow 2.4 is here — environment previews, faster builds, and more. Read the announcement →
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-indigo-600 flex items-center justify-center text-white text-sm font-black border-2 border-indigo-900 shadow">
            DF
          </div>
          <span className="font-black text-gray-900 text-xl tracking-tight">
            Deploy<span className="text-orange-500">Flow</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 font-semibold uppercase tracking-wider">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#customers" className="hover:text-indigo-600">Customers</a>
          <Link href="/dashboard" className="hover:text-indigo-600">Product</Link>
          <a href="#" className="hover:text-indigo-600">Docs</a>
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
    </header>
  );
}
