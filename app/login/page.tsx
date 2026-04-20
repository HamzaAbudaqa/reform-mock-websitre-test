import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-4 py-12">

      {/* Brand header above card */}
      <header className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 no-underline group">
          <div className="h-9 w-9 rounded-[3px] bg-[#337ab7] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10 L10 4 L16 10 L10 16 Z" fill="white" opacity="0.9" />
              <circle cx="10" cy="10" r="3" fill="white" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-[#333] tracking-tight">DeployFlow</span>
        </Link>
        <p className="mt-2 text-sm text-[#777]">Sign in to your account</p>
      </header>

      {/* Main login card */}
      <main className="w-full max-w-md">
        <div className="bg-white border border-[#ddd] rounded-[3px] shadow-sm overflow-hidden">

          {/* Form section */}
          <section className="p-8">
            <form
              method="post"
              action="/dashboard"
              className="space-y-5"
            >
              {/* Email field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-[#555] uppercase tracking-wide"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-[3px] border border-[#ccc] px-3 py-2.5 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#337ab7] focus:ring-1 focus:ring-[#337ab7]"
                />
              </div>

              {/* Password field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold text-[#555] uppercase tracking-wide"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-[#337ab7] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-[3px] border border-[#ccc] px-3 py-2.5 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#337ab7] focus:ring-1 focus:ring-[#337ab7]"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded-[2px] border border-[#ccc] accent-[#337ab7] cursor-pointer"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="text-sm text-[#555] cursor-pointer select-none"
                >
                  Keep me signed in
                </label>
              </div>

              {/* Primary CTA */}
              <div className="pt-1">
                <Button type="submit" fullWidth size="lg">
                  Sign in
                </Button>
              </div>
            </form>
          </section>

          {/* Divider */}
          <div className="px-8 flex items-center gap-3">
            <div className="h-px bg-[#e7e7e7] flex-1" />
            <span className="text-xs text-[#aaa] font-medium">or continue with</span>
            <div className="h-px bg-[#e7e7e7] flex-1" />
          </div>

          {/* Social login section */}
          <section className="p-8 pt-5 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {/* Google */}
              <button className="flex items-center justify-center gap-2 border border-[#ccc] bg-white rounded-[3px] py-2.5 text-sm text-[#333] font-medium hover:bg-[#f5f5f5] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>

              {/* GitHub */}
              <button className="flex items-center justify-center gap-2 border border-[#ccc] bg-white rounded-[3px] py-2.5 text-sm text-[#333] font-medium hover:bg-[#f5f5f5] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#333" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>

            {/* SSO full width */}
            <button className="w-full flex items-center justify-center gap-2 border border-[#ccc] bg-white rounded-[3px] py-2.5 text-sm text-[#555] hover:bg-[#f5f5f5] transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Continue with SSO
            </button>
          </section>
        </div>

        {/* Footer link */}
        <footer className="mt-6 text-center">
          <p className="text-sm text-[#777]">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-[#337ab7] font-medium hover:underline">
              Create a free account
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}