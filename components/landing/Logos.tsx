const logos = [
  "Northwind",
  "Acme Data",
  "Parallax",
  "Orbital",
  "Foundry",
  "Brightline",
];

export default function Logos() {
  return (
    <section id="customers" className="py-10 bg-white border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs text-[#777] mb-6">
          Trusted by engineering teams at fast-moving companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="text-center text-[#999] font-bold text-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
