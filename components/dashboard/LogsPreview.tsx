import Card from "../ui/Card";
import { LogLine } from "@/lib/mockData";

const levelColor: Record<LogLine["level"], string> = {
  info: "text-[#5bc0de]",
  warn: "text-[#f0ad4e]",
  error: "text-[#d9534f]",
  debug: "text-[#999]",
};

interface Props {
  logs: LogLine[];
}

export default function LogsPreview({ logs }: Props) {
  return (
    <Card title="Logs" padded={false}>
      <div className="bg-[#2b2b2b] text-[#ddd] font-mono text-xs p-3 max-h-72 overflow-auto">
        {logs.map((l) => (
          <div key={l.id} className="flex gap-2 py-0.5">
            <span className="text-[#999] shrink-0">{l.timestamp}</span>
            <span className={`uppercase w-10 shrink-0 ${levelColor[l.level]}`}>
              {l.level}
            </span>
            <span className="text-[#5bc0de] shrink-0">[{l.service}]</span>
            <span>{l.message}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
