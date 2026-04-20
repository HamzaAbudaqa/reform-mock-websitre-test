import Card from "../ui/Card";
import Badge, { statusTone } from "../ui/Badge";
import { Incident } from "@/lib/mockData";

interface Props {
  incidents: Incident[];
}

export default function IncidentsList({ incidents }: Props) {
  return (
    <Card
      title="Recent incidents"
      action={
        <a href="#" className="text-xs text-[#337ab7] hover:underline">
          View all
        </a>
      }
      padded={false}
    >
      <ul>
        {incidents.map((inc, i) => (
          <li
            key={inc.id}
            className={`px-4 py-2.5 border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm text-[#333] truncate">{inc.title}</p>
                <p className="text-xs text-[#777] mt-0.5">
                  {inc.project} · opened {inc.openedAt} · {inc.assignee}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Badge tone={statusTone(inc.severity)}>{inc.severity}</Badge>
                <Badge tone={statusTone(inc.status)}>{inc.status}</Badge>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
