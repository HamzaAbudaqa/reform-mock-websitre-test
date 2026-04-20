import Card from "../ui/Card";
import { LogLine } from "@/lib/mockData";

const levelColor: Record<LogLine["level"], string> = {
  info: "text-blue-400",
  warn: "text-yellow-400",
  error: "text-red-400",
  debug: "text-gray-400",
};

interface Props {
  logs: LogLine[];
}

export default function LogsPreview({ logs }: Props) {
  return (
    <Card
      title="Live logs"
      action={
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-500">streaming</span>
        </div>
      }
      padded={false}
    >
      <div className="bg-gray-900 text-gray-100 font-mono text-xs p-4 rounded-b-lg max-h-72 overflow-auto">
        {logs.map((l) => (
          <div key={l.id} className="flex gap-3 py-0.5">
            <span className="text-gray-500 shrink-0">{l.timestamp}</span>
            <span className={`uppercase w-10 shrink-0 ${levelColor[l.level]}`}>
              {l.level}
            </span>
            <span className="text-indigo-300 shrink-0">[{l.service}]</span>
            <span className="text-gray-200">{l.message}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
