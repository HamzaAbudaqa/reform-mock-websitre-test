import Card from "../ui/Card";
import Badge, { statusTone } from "../ui/Badge";
import { environmentsOverview } from "@/lib/mockData";

export default function EnvironmentsOverview() {
  return (
    <Card title="Environments" padded={false}>
      <ul className="divide-y divide-gray-100">
        {environmentsOverview.map((e) => (
          <li
            key={e.name}
            className="flex items-center justify-between px-5 py-3"
          >
            <div>
              <p className="text-sm font-medium text-gray-900 capitalize">
                {e.name}
              </p>
              <p className="text-xs text-gray-500">
                {e.projects} projects · last deploy {e.lastDeploy}
              </p>
            </div>
            <Badge tone={statusTone(e.health === "Healthy" ? "healthy" : "degraded")}>
              {e.health}
            </Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
