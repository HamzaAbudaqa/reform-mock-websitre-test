const features = [
  {
    title: "Deployment Monitoring!",
    description:
      "Real-time status across every environment, with rollback in one click when something slips through.",
    icon: "🚀",
    bg: "bg-orange-200",
    border: "border-orange-600",
    badgeBg: "bg-gradient-to-br from-orange-400 to-red-600",
    badgeRing: "ring-yellow-300",
  },
  {
    title: "Incident Tracking!",
    description:
      "Capture, triage, and resolve incidents alongside the deployments that caused them.",
    icon: "⚠️",
    bg: "bg-red-100",
    border: "border-red-600",
    badgeBg: "bg-gradient-to-br from-pink-400 to-red-700",
    badgeRing: "ring-yellow-300",
  },
  {
    title: "Environments!",
    description:
      "Promote builds from preview to staging to production with consistent configs.",
    icon: "🧭",
    bg: "bg-teal-100",
    border: "border-teal-600",
    badgeBg: "bg-gradient-to-br from-cyan-300 to-teal-700",
    badgeRing: "ring-pink-300",
  },
  {
    title: "Team Activity!",
    description:
      "See who shipped what, when, and why — without digging through Slack threads.",
    icon: "👥",
    bg: "bg-pink-100",
    border: "border-pink-600",
    badgeBg: "bg-gradient-to-br from-pink-400 to-fuchsia-700",
    badgeRing: "ring-yellow-300",
  },
  {
    title: "Unified Logs!",
    description:
      "Stream logs from every service into one searchable view, with level-based filtering.",
    icon: "📄",
    bg: "bg-yellow-100",
    border: "border-yellow-600",
    badgeBg: "bg-gradient-to-br from-yellow-300 to-orange-600",
    badgeRing: "ring-purple-400",
  },
  {
    title: "Permissions!",
    description:
      "Role-based access controls per project and environment, with audit trails built in.",
    icon: "🔒",
    bg: "bg-purple-100",
    border: "border-purple-600",
    badgeBg: "bg-gradient-to-br from-indigo-400 to-purple-700",
    badgeRing: "ring-lime-300",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 ugly-stripes border-t-8 border-b-8 border-pink-600 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.15),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-black text-red-600 uppercase tracking-[0.4em] blink">
            ✦✦✦ FEATURES ✦✦✦
          </p>
          <h2 className="mt-3 text-5xl font-black [text-shadow:3px_3px_0_rgba(236,72,153,0.7)]">
            Everything You Need to{" "}
            <span className="rainbow-text [text-shadow:none]">SHIP FASTER!!</span>
          </h2>
          <p className="mt-4 text-gray-800 max-w-2xl mx-auto font-sans text-lg">
            Stop stitching together five different tools. DeployFlow brings
            deployments, incidents, and environments{" "}
            <mark className="bg-yellow-300 px-1">under one roof.</mark>
          </p>
          <div className="mt-4 mx-auto h-2 w-48 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-cyan-500 to-purple-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`border-4 ${i % 3 === 0 ? "rounded-2xl" : i % 3 === 1 ? "rounded-none" : "rounded"} p-6 ${f.bg} ${f.border} ugly-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform relative`}
            >
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rotate-6 border-2 border-white shadow">
                NEW!
              </div>
              <div
                className={`h-16 w-16 rounded-full ${f.badgeBg} flex items-center justify-center text-3xl mb-4 border-4 border-white ring-4 ${f.badgeRing} shadow-lg`}
              >
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 italic">
                {f.title}
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed font-sans">
                {f.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-black uppercase tracking-widest text-red-600 hover:text-purple-700"
              >
                ➜ Learn More!
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
