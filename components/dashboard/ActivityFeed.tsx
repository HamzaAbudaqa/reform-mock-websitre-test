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
        <a href="#" className="text-xs text-[#337ab7] hover:underline">
          View all
        </a>
      }
      padded={false}
    >
      <table className="w-full text-sm">
        <thead className="text-[11px] uppercase text-[#777] bg-[#f9f9f9]">
          <tr>
            <th className="text-left px-4 py-1.5 font-normal">Project</th>
            <th className="text-left px-4 py-1.5 font-normal">Commit</th>
            <th className="text-left px-4 py-1.5 font-normal">Author</th>
            <th className="text-left px-4 py-1.5 font-normal">Env</th>
            <th className="text-left px-4 py-1.5 font-normal">Status</th>
            <th className="text-right px-4 py-1.5 font-normal">When</th>
          </tr>
        </thead>
        <tbody>
          {deployments.map((d, i) => (
            <tr
              key={d.id}
              className={`border-t border-[#eee] ${i % 2 === 1 ? "bg-[#f9f9f9]" : ""}`}
            >
              <td className="px-4 py-2 text-[#333]">{d.projectName}</td>
              <td className="px-4 py-2 font-mono text-xs text-[#666]">
                {d.commit}
              </td>
              <td className="px-4 py-2 text-[#555]">{d.author}</td>
              <td className="px-4 py-2 text-[#555]">{d.environment}</td>
              <td className="px-4 py-2">
                <Badge tone={statusTone(d.status)}>{d.status}</Badge>
              </td>
              <td className="px-4 py-2 text-xs text-[#777] text-right">
                {d.timestamp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
