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
    <section id="pricing" className="py-14 bg-white border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#222]">Pricing</h2>
          <p className="mt-2 text-sm text-[#777]">
            Start free. Upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`bg-white p-5 flex flex-col rounded-[3px] border ${
                p.highlight ? "border-[#337ab7]" : "border-[#ddd]"
              }`}
            >
              {p.highlight && (
                <div className="-mx-5 -mt-5 mb-4 px-5 py-1.5 bg-[#337ab7] text-white text-xs text-center font-bold rounded-t-[3px]">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-bold text-[#333]">{p.name}</h3>
              <p className="text-xs text-[#777] mt-1">{p.description}</p>

              <div className="mt-4 mb-4 pb-4 border-b border-[#eee]">
                <span className="text-3xl font-bold text-[#333]">{p.price}</span>
                <span className="text-sm text-[#777]">{p.cadence}</span>
              </div>

              <ul className="space-y-1.5 text-sm text-[#555] mb-5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#5cb85c]">✓</span>
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
