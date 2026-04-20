import Button from "../ui/Button";

const plans = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/mo",
    description: "For solo devs and small side projects.",
    features: [
      "Up to 3 projects",
      "1 production environment",
      "Community support",
      "7-day log retention",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Team",
    price: "$49",
    cadence: "/mo",
    description: "For growing engineering teams.",
    features: [
      "Unlimited projects",
      "All environments",
      "Incident tracking",
      "30-day log retention",
      "Slack + email alerts",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For platform teams at scale.",
    features: [
      "SSO + SAML",
      "Role-based access controls",
      "Dedicated support",
      "Audit logs",
      "Custom retention",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#eef1e8] border-t-2 border-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-black text-indigo-700 uppercase tracking-[0.3em]">
            $$$ Pricing
          </p>
          <h2 className="mt-2 text-4xl font-black text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-gray-700 font-sans">
            Start free, upgrade as your team grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative bg-white p-7 flex flex-col ${
                p.highlight
                  ? "border-4 border-orange-500 shadow-2xl rounded-md scale-[1.03] z-10"
                  : "border-2 border-gray-300 shadow-md rounded"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow">
                  ★ Most popular ★
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-2xl font-black text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1 font-sans">
                  {p.description}
                </p>
              </div>

              <div className="mb-6 pb-4 border-b-2 border-dashed border-gray-200">
                <span
                  className={`text-5xl font-black ${p.highlight ? "text-orange-600" : "text-indigo-700"}`}
                >
                  {p.price}
                </span>
                <span className="text-sm text-gray-500 font-bold">{p.cadence}</span>
              </div>

              <ul className="space-y-2.5 text-sm text-gray-800 mb-6 flex-1 font-sans">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 font-black ${p.highlight ? "text-orange-500" : "text-indigo-600"}`}
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/login"
                fullWidth
                variant={p.highlight ? "primary" : "secondary"}
              >
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
