const testimonials = [
  {
    quote:
      "DeployFlow cut our incident response time almost in half. Our on-call engineers actually sleep now.",
    name: "Rachel Stone",
    role: "VP of Engineering, Northwind",
    initials: "RS",
    stars: 5,
    bg: "bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100",
    ring: "ring-orange-500",
    avatarBg: "bg-gradient-to-br from-red-500 to-pink-600",
  },
  {
    quote:
      "We replaced three different internal dashboards with DeployFlow. The team adopted it in under a week.",
    name: "Miguel Alvarez",
    role: "Staff Engineer, Parallax",
    initials: "MA",
    stars: 5,
    bg: "bg-gradient-to-br from-cyan-100 via-teal-100 to-green-100",
    ring: "ring-teal-500",
    avatarBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    quote:
      "Environment previews per PR is the feature we didn't know we desperately needed. Reviews are faster.",
    name: "Nina Okafor",
    role: "Director of Platform, Foundry",
    initials: "NO",
    stars: 5,
    bg: "bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100",
    ring: "ring-pink-500",
    avatarBg: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 ugly-stripes border-t-8 border-b-8 border-purple-600 relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="text-5xl text-yellow-500 drop-shadow mb-2">
            ★ ★ ★ ★ ★
          </div>
          <p className="text-xs font-black text-pink-600 uppercase tracking-[0.35em]">
            ✦ 5-STAR RATED ✦
          </p>
          <h2 className="mt-2 text-5xl font-black italic [text-shadow:3px_3px_0_rgba(236,72,153,0.5)]">
            Loved by Platform Teams!
          </h2>
          <p className="mt-3 text-gray-700 font-sans text-lg">
            Real feedback from engineers shipping with DeployFlow every day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative ${t.bg} rounded-md border-4 border-black p-6 shadow-[6px_6px_0_rgba(0,0,0,0.45)] ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}
            >
              <div className="absolute -top-3 -left-3 bg-yellow-400 text-red-700 font-black text-[10px] uppercase tracking-widest px-2 py-0.5 rotate-[-8deg] border-2 border-red-700 shadow">
                ★ Verified!
              </div>
              <div className="text-yellow-500 text-2xl mb-3 drop-shadow">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-gray-900 leading-relaxed font-sans italic font-semibold text-lg">
                <span className="text-4xl font-black text-pink-600 leading-none align-top mr-1">"</span>
                {t.quote}
                <span className="text-4xl font-black text-pink-600 leading-none align-bottom ml-1">"</span>
              </p>
              <div className="mt-6 pt-4 border-t-4 border-dashed border-purple-400 flex items-center gap-3">
                <div
                  className={`h-14 w-14 rounded-full ${t.avatarBg} flex items-center justify-center text-base font-black text-white ring-4 ${t.ring} border-4 border-white shadow`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-base font-black text-gray-900 italic">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-700 uppercase tracking-wider font-bold">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
