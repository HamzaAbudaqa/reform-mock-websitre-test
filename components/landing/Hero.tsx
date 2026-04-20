import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-fuchsia-500 via-yellow-400 to-cyan-400 overflow-hidden border-y-8 border-indigo-900">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,230,0,0.9),transparent_35%),radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.6),transparent_40%)]" />
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_1px,transparent_1px,transparent_18px)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="rotate-[-8deg] inline-block bg-red-500 text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest border-4 border-yellow-300 shadow-[4px_4px_0_rgba(0,0,0,0.35)]">
            🔥 HOT NEW FEATURE!
          </div>
          <div className="rotate-[5deg] inline-block bg-yellow-300 text-purple-900 px-4 py-1.5 text-xs font-black uppercase tracking-widest border-4 border-pink-500 shadow-[4px_4px_0_rgba(0,0,0,0.35)] blink">
            ⭐ #1 RATED 2026!
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-black text-white max-w-4xl mx-auto leading-[0.95] drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] [text-shadow:3px_3px_0_#000,6px_6px_0_rgba(236,72,153,0.8)]">
          SHIP SOFTWARE{" "}
          <span className="rainbow-text italic underline decoration-wavy decoration-yellow-300 [text-shadow:none]">
            10X FASTER
          </span>
          , WITH{" "}
          <span className="bg-yellow-300 text-purple-900 px-3 inline-block rotate-[-2deg] border-4 border-purple-700 [text-shadow:none]">
            FEWER
          </span>{" "}
          SURPRISES!!!
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-white max-w-3xl mx-auto font-sans leading-relaxed font-bold [text-shadow:2px_2px_0_rgba(0,0,0,0.4)]">
          DeployFlow gives engineering teams{" "}
          <span className="bg-pink-600 px-1.5">
            a single place
          </span>{" "}
          to monitor deployments, track incidents, and manage environments — so
          you can spend less time firefighting{" "}
          <u className="decoration-yellow-300 decoration-4">and more time building.</u>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/dashboard"
            size="lg"
            className="!bg-gradient-to-b !from-lime-300 !via-lime-500 !to-green-700 !border-green-900 !text-black !text-lg"
          >
            ▶▶ START FREE TRIAL ▶▶
          </Button>
          <Button
            href="#features"
            size="lg"
            className="!bg-gradient-to-b !from-pink-400 !to-fuchsia-700 !border-fuchsia-900 !text-white !text-lg"
          >
            👉 SEE HOW IT WORKS
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-black uppercase tracking-widest text-white">
          <span className="bg-black/30 px-2 py-1 rounded-sm">✅ NO CREDIT CARD</span>
          <span className="bg-black/30 px-2 py-1 rounded-sm">✅ 14-DAY TRIAL</span>
          <span className="bg-black/30 px-2 py-1 rounded-sm">✅ CANCEL ANYTIME</span>
          <span className="bg-red-600 px-2 py-1 rounded-sm blink">🔴 237 LIVE USERS NOW</span>
        </div>

        <div className="mt-14 mx-auto max-w-5xl relative">
          <div className="absolute -top-6 -left-6 rotate-[-12deg] bg-yellow-300 text-red-700 font-black text-xs uppercase tracking-widest px-3 py-2 border-4 border-red-700 shadow-[4px_4px_0_rgba(0,0,0,0.35)] z-10">
            ★ See the dashboard! ★
          </div>
          <div className="rounded-md border-[6px] border-indigo-900 bg-white shadow-[8px_8px_0_rgba(236,72,153,0.8)] p-4">
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
                <div className="h-8 rounded bg-orange-200 border-2 border-orange-400" />
                <div className="h-8 rounded bg-lime-200 border-2 border-lime-500" />
                <div className="h-8 rounded bg-pink-300 border-2 border-pink-600" />
                <div className="h-8 rounded bg-cyan-200 border-2 border-cyan-500" />
                <div className="h-8 rounded bg-yellow-200 border-2 border-yellow-500" />
              </div>
              <div className="col-span-9 space-y-3">
                <div className="grid grid-cols-4 gap-3">
                  <div className="h-16 rounded border-4 border-orange-500 bg-orange-100" />
                  <div className="h-16 rounded border-4 border-teal-500 bg-teal-100" />
                  <div className="h-16 rounded border-4 border-pink-500 bg-pink-100" />
                  <div className="h-16 rounded border-4 border-indigo-500 bg-indigo-100" />
                </div>
                <div className="h-40 rounded border-4 border-purple-500 bg-gradient-to-br from-yellow-50 to-pink-100" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded border-4 border-red-500 bg-red-50" />
                  <div className="h-24 rounded border-4 border-green-500 bg-green-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
