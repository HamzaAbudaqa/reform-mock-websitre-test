const logos = [
  "Northwind",
  "Acme Data",
  "Parallax",
  "Orbital",
  "Foundry",
  "Brightline",
];

const colors = [
  "text-red-600 border-red-400 bg-red-50",
  "text-orange-600 border-orange-400 bg-orange-50",
  "text-green-700 border-green-400 bg-green-50",
  "text-blue-700 border-blue-400 bg-blue-50",
  "text-purple-700 border-purple-400 bg-purple-50",
  "text-pink-700 border-pink-400 bg-pink-50",
];

export default function Logos() {
  return (
    <section
      id="customers"
      className="py-14 bg-white border-y-4 border-dashed border-purple-600"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-purple-700 uppercase tracking-[0.3em] font-black mb-8">
          ★ TRUSTED BY 800+ FAST-MOVING TEAMS ★
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 items-center">
          {logos.map((name, i) => (
            <div
              key={name}
              className={`text-center font-black tracking-wide text-lg py-4 border-4 ugly-shadow italic ${colors[i % colors.length]}`}
            >
              {name}™
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
