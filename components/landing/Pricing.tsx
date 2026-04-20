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
    cta: "Get Started",
    highlight: false,
    priceColor: "text-green-600",
    border: "border-green-400",
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
    cta: "Start Free Trial!",
    highlight: true,
    priceColor: "text-red-600",
    border: "border-red-600",
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
    cta: "Contact Sales",
    highlight: false,
    priceColor: "text-purple-600",
    border: "border-purple-400",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-yellow-100 to-pink-100 border-t-8 border-b-8 border-red-600 relative"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="text-sm font-black text-red-600 uppercase tracking-[0.4em] blink">
            $$$ PRICING $$$
          </p>
          <h2 className="mt-2 text-5xl font-black italic [text-shadow:3px_3px_0_rgba(236,72,153,0.5)]">
            <span className="bg-yellow-300 px-3 inline-block rotate-[-1deg] border-4 border-red-600">
              SIMPLE
            </span>{" "}
            Transparent Pricing!
          </h2>
          <p className="mt-4 text-gray-800 font-sans text-lg">
            Start free, upgrade as your team grows.
          </p>
          <div className="mt-3 inline-block bg-red-500 text-white font-black uppercase text-sm px-4 py-1 tracking-widest rotate-[-2deg] border-4 border-yellow-300 shadow-[4px_4px_0_rgba(0,0,0,0.35)] blink">
            🔥 SAVE 50% — LIMITED TIME! 🔥
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative bg-white p-7 flex flex-col ${
                p.highlight
                  ? "border-[6px] border-red-600 shadow-[8px_8px_0_rgba(236,72,153,0.8)] rounded-md scale-[1.05] z-10 bg-gradient-to-b from-yellow-50 to-white"
                  : `border-4 ${p.border} rounded shadow-[4px_4px_0_rgba(0,0,0,0.25)]`
              }`}
            >
              {p.highlight && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-sm border-2 border-yellow-300 shadow blink">
                    ★ MOST POPULAR ★
                  </div>
                  <div className="absolute -top-6 -right-6 h-20 w-20 rotate-[12deg] bg-yellow-300 border-4 border-red-600 text-red-700 font-black text-xs uppercase flex flex-col items-center justify-center text-center leading-tight shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                    SAVE
                    <span className="text-lg">50%</span>
                  </div>
                </>
              )}
              <div className="mb-4">
                <h3 className="text-3xl font-black text-gray-900 italic">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-700 mt-1 font-sans">
                  {p.description}
                </p>
              </div>

              <div className="mb-6 pb-4 border-b-4 border-dashed border-gray-300">
                <span className={`text-6xl font-black italic ${p.priceColor} [text-shadow:2px_2px_0_rgba(0,0,0,0.15)]`}>
                  {p.price}
                </span>
                <span className="text-base text-gray-600 font-black">
                  {p.cadence}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm text-gray-900 mb-6 flex-1 font-sans">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600 font-black text-base">
                      ✔
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
                {p.cta} {p.highlight ? "➜" : ""}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
