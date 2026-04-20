const testimonials = [
  {
    quote:
      "DeployFlow cut our incident response time almost in half. Our on-call engineers actually sleep now.",
    name: "Rachel Stone",
    role: "VP of Engineering, Northwind",
  },
  {
    quote:
      "We replaced three different internal dashboards with DeployFlow. The team adopted it in under a week.",
    name: "Miguel Alvarez",
    role: "Staff Engineer, Parallax",
  },
  {
    quote:
      "Environment previews per PR is the feature we didn't know we needed. Reviews are faster.",
    name: "Nina Okafor",
    role: "Director of Platform, Foundry",
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 bg-[#f5f5f5] border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#222]">What customers say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[3px] border border-[#ddd] p-4"
            >
              <p className="text-sm text-[#555] leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 pt-3 border-t border-[#eee]">
                <div className="text-sm font-bold text-[#333]">{t.name}</div>
                <div className="text-xs text-[#777]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
