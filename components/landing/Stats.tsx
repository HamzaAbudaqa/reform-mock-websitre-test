const stats = [
  { value: "2M+", label: "deployments monitored", color: "from-yellow-300 to-orange-500", emoji: "🚀" },
  { value: "800+", label: "engineering teams", color: "from-lime-300 to-green-600", emoji: "👥" },
  { value: "99.98%", label: "platform uptime", color: "from-cyan-300 to-blue-600", emoji: "⚡" },
  { value: "42%", label: "reduction in MTTR", color: "from-pink-300 to-fuchsia-600", emoji: "📉" },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-r from-red-600 via-fuchsia-600 via-purple-700 via-blue-700 to-cyan-500 py-16 border-t-8 border-b-8 border-yellow-400 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(255,255,255,0.2)_24px,rgba(255,255,255,0.2)_26px),repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(255,255,255,0.2)_24px,rgba(255,255,255,0.2)_26px)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-black text-yellow-300 uppercase tracking-[0.35em] [text-shadow:2px_2px_0_rgba(0,0,0,0.5)]">
            ✦✦ BY THE NUMBERS ✦✦
          </p>
          <h2 className="mt-2 text-5xl font-black text-white italic [text-shadow:3px_3px_0_rgba(0,0,0,0.6),6px_6px_0_rgba(236,72,153,0.6)]">
            Teams that SHIP with DeployFlow!
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border-[6px] border-yellow-300 rounded-md py-8 px-3 shadow-[6px_6px_0_rgba(0,0,0,0.45)] transform hover:scale-105 transition-transform"
            >
              <div className="text-3xl mb-2">{s.emoji}</div>
              <div
                className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${s.color} bg-clip-text text-transparent italic`}
              >
                {s.value}
              </div>
              <div className="text-[11px] text-gray-800 font-black uppercase tracking-widest mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
