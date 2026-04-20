import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-700 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,200,0,0.6),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-300 bg-yellow-100 px-4 py-1 text-xs font-black text-yellow-900 uppercase tracking-widest mb-6 shadow-md">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          🚀 NEW — Preview environments for every PR
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white max-w-3xl mx-auto leading-[1.05] drop-shadow-lg">
          Ship software{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent italic">
            faster
          </span>
          , with fewer surprises.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-indigo-50 max-w-2xl mx-auto font-sans leading-relaxed">
          DeployFlow gives engineering teams a single place to monitor
          deployments, track incidents, and manage environments — so you can
          spend less time firefighting and more time building.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/dashboard" size="lg" className="!bg-gradient-to-b !from-orange-400 !to-orange-600 !border-orange-800">
            ▶ Start free trial
          </Button>
          <Button href="#features" variant="secondary" size="lg">
            See how it works
          </Button>
        </div>

        <p className="mt-4 text-xs text-indigo-100 font-semibold uppercase tracking-wide">
          No credit card required · 14-day free trial · Cancel anytime
        </p>

        <div className="mt-14 mx-auto max-w-5xl">
          <div className="rounded-md border-4 border-white bg-white shadow-2xl p-4">
            <div className="flex items-center gap-1.5 pb-3 border-b-2 border-gray-300">
              <span className="h-3 w-3 rounded-full bg-red-500 border border-red-700" />
              <span className="h-3 w-3 rounded-full bg-yellow-400 border border-yellow-600" />
              <span className="h-3 w-3 rounded-full bg-green-500 border border-green-700" />
              <span className="ml-3 text-xs text-gray-500 font-mono">
                app.deployflow.io/dashboard
              </span>
            </div>
            <div className="grid grid-cols-12 gap-3 pt-4">
              <div className="col-span-3 space-y-2">
                <div className="h-8 rounded bg-gray-200 border border-gray-300" />
                <div className="h-8 rounded bg-gray-200 border border-gray-300" />
                <div className="h-8 rounded bg-indigo-200 border border-indigo-400" />
                <div className="h-8 rounded bg-gray-200 border border-gray-300" />
                <div className="h-8 rounded bg-gray-200 border border-gray-300" />
              </div>
              <div className="col-span-9 space-y-3">
                <div className="grid grid-cols-4 gap-3">
                  <div className="h-16 rounded border-2 border-orange-300 bg-orange-50" />
                  <div className="h-16 rounded border-2 border-teal-300 bg-teal-50" />
                  <div className="h-16 rounded border-2 border-pink-300 bg-pink-50" />
                  <div className="h-16 rounded border-2 border-indigo-300 bg-indigo-50" />
                </div>
                <div className="h-40 rounded border-2 border-gray-300 bg-gray-50" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded border-2 border-gray-300 bg-gray-50" />
                  <div className="h-24 rounded border-2 border-gray-300 bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
