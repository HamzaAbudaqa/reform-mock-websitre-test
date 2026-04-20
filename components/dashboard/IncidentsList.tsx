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
        <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
          View all
        </a>
      }
      padded={false}
    >
      <ul className="divide-y divide-gray-100">
        {incidents.map((inc) => (
          <li key={inc.id} className="px-5 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {inc.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {inc.project} · opened {inc.openedAt} · {inc.assignee}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
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
