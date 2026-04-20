const stats = [
  { value: "2M+", label: "deployments monitored" },
  { value: "800+", label: "engineering teams" },
  { value: "99.98%", label: "platform uptime" },
  { value: "42%", label: "reduction in MTTR" },
];

export default function Stats() {
  return (
    <section className="bg-[#f5f5f5] py-12 border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#333]">{s.value}</div>
              <div className="text-xs text-[#777] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
