import Card from "../ui/Card";
import Badge, { statusTone } from "../ui/Badge";
import { environmentsOverview } from "@/lib/mockData";

export default function EnvironmentsOverview() {
  return (
    <Card title="Environments" padded={false}>
      <ul>
        {environmentsOverview.map((e, i) => (
          <li
            key={e.name}
            className={`flex items-center justify-between px-4 py-2.5 border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
          >
            <div>
              <p className="text-sm text-[#333] capitalize">{e.name}</p>
              <p className="text-xs text-[#777]">
                {e.projects} projects · last deploy {e.lastDeploy}
              </p>
            </div>
            <Badge
              tone={statusTone(e.health === "Healthy" ? "healthy" : "degraded")}
            >
              {e.health}
            </Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
