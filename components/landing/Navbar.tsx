import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="w-full bg-[#f8f8f8] border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-[50px]">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-bold text-[#333] text-lg">DeployFlow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm text-[#777]">
          <a href="#features" className="hover:text-[#333] no-underline">Features</a>
          <a href="#pricing" className="hover:text-[#333] no-underline">Pricing</a>
          <a href="#customers" className="hover:text-[#333] no-underline">Customers</a>
          <Link href="/dashboard" className="hover:text-[#333] no-underline">Product</Link>
          <a href="#" className="hover:text-[#333] no-underline">Docs</a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-sm text-[#777] hover:text-[#333] no-underline"
          >
            Sign in
          </Link>
          <Button href="/dashboard" size="sm">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
