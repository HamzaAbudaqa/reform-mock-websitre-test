const testimonials = [
  {
    quote:
      "DeployFlow cut our incident response time almost in half. Our on-call engineers actually sleep now.",
    name: "Rachel Stone",
    role: "VP of Engineering, Northwind",
    initials: "RS",
    stars: 5,
    ring: "ring-orange-400",
  },
  {
    quote:
      "We replaced three different internal dashboards with DeployFlow. The team adopted it in under a week.",
    name: "Miguel Alvarez",
    role: "Staff Engineer, Parallax",
    initials: "MA",
    stars: 5,
    ring: "ring-teal-400",
  },
  {
    quote:
      "Environment previews per PR is the feature we didn't know we desperately needed. Reviews are faster.",
    name: "Nina Okafor",
    role: "Director of Platform, Foundry",
    initials: "NO",
    stars: 5,
    ring: "ring-pink-400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fff7ed] to-[#fef3c7] border-t-2 border-orange-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-black text-pink-600 uppercase tracking-[0.25em]">
            ★ ★ ★ ★ ★
          </p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            Loved by platform teams
          </h2>
          <p className="mt-3 text-gray-700 font-sans">
            Real feedback from engineers using DeployFlow every day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-md border-2 border-gray-300 p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-yellow-500 text-lg mb-3">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-gray-800 leading-relaxed font-sans italic">
                “{t.quote}”
              </p>
              <div className="mt-6 pt-4 border-t border-dashed border-gray-300 flex items-center gap-3">
                <div
                  className={`h-11 w-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-black text-white ring-4 ${t.ring}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
