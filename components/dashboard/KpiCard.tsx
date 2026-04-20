interface Props {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

const colorBars = [
  "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400",
  "bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500",
  "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600",
  "bg-gradient-to-r from-yellow-400 via-lime-400 to-green-500",
];

const valueColors = [
  "text-orange-600",
  "text-teal-600",
  "text-pink-600",
  "text-indigo-600",
];

let counter = 0;

export default function KpiCard({ label, value, delta, positive }: Props) {
  const idx = counter++ % colorBars.length;

  return (
    <div className="bg-white border-4 border-black rounded-sm shadow-[5px_5px_0_rgba(0,0,0,0.35)] overflow-hidden">
      <div className={`h-2.5 w-full ${colorBars[idx]}`} />
      <div className="p-5 relative">
        <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.25em]">
          {label}
        </p>
        <div className="mt-2 flex items-baseline justify-between">
          <span
            className={`text-4xl font-black italic ${valueColors[idx]} [text-shadow:2px_2px_0_rgba(0,0,0,0.15)]`}
          >
            {value}
          </span>
          <span
            className={`text-xs font-black px-2.5 py-1 rounded-sm border-2 ${
              positive
                ? "text-green-800 bg-lime-200 border-green-600"
                : "text-red-800 bg-red-100 border-red-600"
            } shadow-[2px_2px_0_rgba(0,0,0,0.2)]`}
          >
            {positive ? "▲" : "▼"} {delta}
          </span>
        </div>
      </div>
    </div>
  );
}
