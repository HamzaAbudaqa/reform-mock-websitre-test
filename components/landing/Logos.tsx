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
    <section id="customers" className="py-12 bg-white border-b-2 border-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs text-gray-500 uppercase tracking-[0.3em] font-bold mb-8">
          ✦ Trusted by engineering teams at fast-moving companies ✦
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 items-center">
          {logos.map((name, i) => (
            <div
              key={name}
              className={`text-center font-black tracking-wide text-lg py-3 border-2 border-gray-200 bg-gray-50 ${
                i % 2 === 0 ? "text-indigo-700" : "text-orange-600"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
