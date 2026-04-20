const features = [
  {
    title: "Deployment monitoring",
    description:
      "Real-time status across every environment, with rollback in one click when something slips through.",
    icon: "🚀",
    color: "bg-orange-100 border-orange-400",
    badge: "bg-orange-500",
  },
  {
    title: "Incident tracking",
    description:
      "Capture, triage, and resolve incidents alongside the deployments that caused them.",
    icon: "⚠️",
    color: "bg-red-100 border-red-400",
    badge: "bg-red-500",
  },
  {
    title: "Environment management",
    description:
      "Promote builds from preview to staging to production with consistent configs.",
    icon: "🧭",
    color: "bg-teal-100 border-teal-400",
    badge: "bg-teal-500",
  },
  {
    title: "Team activity feed",
    description:
      "See who shipped what, when, and why — without digging through Slack threads.",
    icon: "👥",
    color: "bg-pink-100 border-pink-400",
    badge: "bg-pink-500",
  },
  {
    title: "Unified logs",
    description:
      "Stream logs from every service into one searchable view, with level-based filtering.",
    icon: "📄",
    color: "bg-yellow-100 border-yellow-500",
    badge: "bg-yellow-500",
  },
  {
    title: "Granular permissions",
    description:
      "Role-based access controls per project and environment, with audit trails built in.",
    icon: "🔒",
    color: "bg-indigo-100 border-indigo-400",
    badge: "bg-indigo-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-[#eef1e8] border-t-4 border-b-4 border-indigo-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-black text-orange-600 uppercase tracking-[0.25em]">
            ✦ Features ✦
          </p>
          <h2 className="mt-3 text-4xl font-black text-gray-900">
            Everything you need to ship with confidence
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-sans">
            Stop stitching together five different tools. DeployFlow brings
            deployments, incidents, and environments under one roof.
          </p>
          <div className="mt-4 mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`border-2 ${i % 2 === 0 ? "rounded-lg" : "rounded"} p-6 bg-white shadow-md hover:shadow-xl transition-shadow ${f.color}`}
            >
              <div
                className={`h-14 w-14 ${i % 3 === 0 ? "rounded-full" : "rounded-md"} ${f.badge} flex items-center justify-center text-2xl mb-4 border-2 border-white shadow-md`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                {f.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-xs font-black uppercase tracking-widest text-indigo-700 hover:text-orange-600"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
