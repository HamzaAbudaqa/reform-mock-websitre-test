const features = [
  {
    title: "Deployment monitoring",
    description:
      "Real-time status across every environment, with one-click rollback.",
  },
  {
    title: "Incident tracking",
    description:
      "Capture, triage, and resolve incidents alongside the deployments that caused them.",
  },
  {
    title: "Environment management",
    description:
      "Promote builds from preview to staging to production with consistent configs.",
  },
  {
    title: "Team activity feed",
    description:
      "See who shipped what, when, and why — without digging through Slack threads.",
  },
  {
    title: "Unified logs",
    description:
      "Stream logs from every service into one searchable view.",
  },
  {
    title: "Granular permissions",
    description:
      "Role-based access controls per project and environment, with audit trails.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-14 bg-white border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#222]">Features</h2>
          <p className="mt-2 text-sm text-[#777] max-w-xl mx-auto">
            Everything you need to monitor deployments and manage environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-[#ddd] rounded-[3px] p-4 bg-white"
            >
              <h3 className="text-base font-bold text-[#333] mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
