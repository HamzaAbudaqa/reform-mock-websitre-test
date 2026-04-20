import Card from "../ui/Card";
import Badge, { statusTone } from "../ui/Badge";
import { Deployment } from "@/lib/mockData";

interface Props {
  deployments: Deployment[];
}

export default function ActivityFeed({ deployments }: Props) {
  return (
    <Card
      title="Recent deployments"
      action={
        <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
          View all
        </a>
      }
      padded={false}
    >
      <ul className="divide-y divide-gray-100">
        {deployments.map((d) => (
          <li key={d.id} className="flex items-center justify-between px-5 py-3">
            <div className="flex items-start gap-3 min-w-0">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700 shrink-0">
                {d.author
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-900 truncate">
                  <span className="font-medium">{d.projectName}</span>
                  <span className="text-gray-500"> · {d.commit}</span>
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {d.message} — by {d.author}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Badge tone={statusTone(d.environment === "production" ? "info" : "gray")}>
                {d.environment}
              </Badge>
              <Badge tone={statusTone(d.status)}>{d.status}</Badge>
              <span className="text-xs text-gray-500 w-24 text-right hidden md:inline">
                {d.timestamp}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
