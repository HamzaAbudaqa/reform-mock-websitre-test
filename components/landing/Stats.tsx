const stats = [
  { value: "2M+", label: "deployments monitored", color: "text-orange-300" },
  { value: "800+", label: "engineering teams", color: "text-teal-300" },
  { value: "99.98%", label: "platform uptime", color: "text-yellow-300" },
  { value: "42%", label: "reduction in MTTR", color: "text-pink-300" },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 py-16 border-t-4 border-b-4 border-orange-500">
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_22px)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-black text-yellow-300 uppercase tracking-[0.3em]">
            ✦ By the numbers ✦
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Teams that ship with DeployFlow
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 border-2 border-white/30 rounded-md py-6 backdrop-blur-sm"
            >
              <div className={`text-4xl md:text-5xl font-black ${s.color} drop-shadow`}>
                {s.value}
              </div>
              <div className="text-xs text-white font-bold uppercase tracking-wider mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
