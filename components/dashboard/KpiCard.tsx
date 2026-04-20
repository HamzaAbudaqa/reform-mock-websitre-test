interface Props {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

export default function KpiCard({ label, value, delta, positive }: Props) {
  return (
    <div className="bg-white border border-[#ddd] rounded-[3px] p-4">
      <p className="text-xs text-[#777]">{label}</p>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-[#333]">{value}</span>
        <span
          className={`text-xs ${positive ? "text-[#5cb85c]" : "text-[#d9534f]"}`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}
