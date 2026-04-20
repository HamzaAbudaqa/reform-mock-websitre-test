import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              DF
            </div>
            <span className="font-semibold text-gray-900">DeployFlow</span>
          </Link>

          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-600 mt-1">
            Log in to your DeployFlow workspace.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <Button href="/dashboard" fullWidth>
              Log in
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button className="border border-gray-300 rounded-md py-2 text-sm hover:bg-gray-50">
              Google
            </button>
            <button className="border border-gray-300 rounded-md py-2 text-sm hover:bg-gray-50">
              GitHub
            </button>
            <button className="border border-gray-300 rounded-md py-2 text-sm hover:bg-gray-50">
              SSO
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-500 text-center">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800">
              Sign up
            </a>
          </p>
        </div>
      </div>

      <div className="hidden md:flex bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Trusted by 800+ engineering teams
          </div>
          <h2 className="text-3xl font-bold leading-tight">
            Ship faster, with fewer surprises.
          </h2>
          <p className="mt-3 text-indigo-100">
            Monitor deployments, track incidents, and manage environments — all
            in one workspace.
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white/10 border border-white/20 rounded-md p-4">
              <p className="text-sm text-white/90">
                "Our on-call engineers actually sleep now."
              </p>
              <p className="text-xs text-indigo-100 mt-2">
                Rachel Stone — VP of Engineering, Northwind
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-md p-4">
              <p className="text-sm text-white/90">
                "We replaced three internal dashboards with DeployFlow."
              </p>
              <p className="text-xs text-indigo-100 mt-2">
                Miguel Alvarez — Staff Engineer, Parallax
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
