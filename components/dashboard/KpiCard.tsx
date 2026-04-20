interface Props {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

const colorBars = [
  "bg-orange-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-indigo-600",
];

let counter = 0;

export default function KpiCard({ label, value, delta, positive }: Props) {
  const bar = colorBars[counter++ % colorBars.length];

  return (
    <div className="bg-white border-2 border-gray-300 rounded-sm shadow-md overflow-hidden">
      <div className={`h-1.5 w-full ${bar}`} />
      <div className="p-5">
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
          {label}
        </p>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-3xl font-black text-gray-900 font-serif">
            {value}
          </span>
          <span
            className={`text-xs font-black px-2 py-0.5 rounded-sm border ${
              positive
                ? "text-green-700 bg-green-50 border-green-300"
                : "text-red-700 bg-red-50 border-red-300"
            }`}
          >
            {positive ? "▲" : "▼"} {delta}
          </span>
        </div>
      </div>
    </div>
  );
}
