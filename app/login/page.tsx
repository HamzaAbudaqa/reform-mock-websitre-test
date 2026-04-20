import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm bg-white border border-[#ddd] rounded-[3px] p-6">
        <div className="text-center mb-5">
          <Link href="/" className="text-lg font-bold text-[#333] no-underline">
            DeployFlow
          </Link>
          <p className="text-xs text-[#777] mt-1">Sign in to your account</p>
        </div>

        <form className="space-y-3">
          <div>
            <label className="text-xs text-[#555]">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1.5 text-sm focus:outline-none focus:border-[#337ab7]"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs text-[#555]">Password</label>
              <a href="#" className="text-xs text-[#337ab7] hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1.5 text-sm focus:outline-none focus:border-[#337ab7]"
            />
          </div>

          <label className="flex items-center gap-2 text-xs text-[#555]">
            <input type="checkbox" /> Remember me
          </label>

          <Button href="/dashboard" fullWidth>
            Sign in
          </Button>
        </form>

        <div className="my-4 flex items-center gap-2">
          <div className="h-px bg-[#ddd] flex-1" />
          <span className="text-[11px] text-[#999]">or</span>
          <div className="h-px bg-[#ddd] flex-1" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button className="border border-[#ccc] bg-white rounded-[3px] py-1.5 text-xs hover:bg-[#f5f5f5]">
            Google
          </button>
          <button className="border border-[#ccc] bg-white rounded-[3px] py-1.5 text-xs hover:bg-[#f5f5f5]">
            GitHub
          </button>
          <button className="border border-[#ccc] bg-white rounded-[3px] py-1.5 text-xs hover:bg-[#f5f5f5]">
            SSO
          </button>
        </div>

        <p className="mt-5 text-xs text-[#777] text-center">
          Don't have an account?{" "}
          <a href="#" className="text-[#337ab7] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
