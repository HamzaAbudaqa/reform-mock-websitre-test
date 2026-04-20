import Link from "next/link";
import Header from "@/components/dashboard/Header";
import Button from "@/components/ui/Button";
import Badge, { statusTone } from "@/components/ui/Badge";
import { projects } from "@/lib/mockData";

export default function ProjectsPage() {
  return (
    <>
      <Header
        title="Projects"
        subtitle="All services and applications managed by your team."
        action={<Button size="sm">New project</Button>}
      />

      <main className="flex-1 p-4 bg-[#f5f5f5] overflow-auto">
        <div className="bg-white border border-[#ddd] rounded-[3px]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#ddd] bg-[#f9f9f9]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Filter projects..."
                className="w-56 rounded-[3px] border border-[#ccc] bg-white px-2 py-1 text-sm text-[#333] focus:outline-none focus:border-[#337ab7]"
              />
              <select className="rounded-[3px] border border-[#ccc] bg-white px-2 py-1 text-sm text-[#333]">
                <option>All teams</option>
                <option>Payments</option>
                <option>Platform</option>
                <option>Growth</option>
                <option>Data Platform</option>
              </select>
              <select className="rounded-[3px] border border-[#ccc] bg-white px-2 py-1 text-sm text-[#333]">
                <option>All statuses</option>
                <option>Healthy</option>
                <option>Degraded</option>
                <option>Down</option>
              </select>
            </div>
            <div className="text-xs text-[#777]">
              {projects.length} projects
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#f9f9f9] text-[11px] uppercase text-[#777]">
              <tr>
                <th className="text-left px-4 py-1.5 font-normal">Name</th>
                <th className="text-left px-4 py-1.5 font-normal">Status</th>
                <th className="text-left px-4 py-1.5 font-normal">Environments</th>
                <th className="text-left px-4 py-1.5 font-normal">Uptime</th>
                <th className="text-left px-4 py-1.5 font-normal">Owner</th>
                <th className="text-left px-4 py-1.5 font-normal">Updated</th>
                <th className="px-4 py-1.5" />
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr
                  key={p.id}
                  className={`border-t border-[#eee] ${i % 2 === 1 ? "bg-[#f9f9f9]" : ""}`}
                >
                  <td className="px-4 py-2">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-[#337ab7] hover:underline"
                    >
                      {p.name}
                    </Link>
                    <p className="text-xs text-[#777]">{p.description}</p>
                  </td>
                  <td className="px-4 py-2">
                    <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                  </td>
                  <td className="px-4 py-2 text-xs text-[#555]">
                    {p.environments.join(", ")}
                  </td>
                  <td className="px-4 py-2 text-[#555]">{p.uptime}</td>
                  <td className="px-4 py-2 text-[#555]">{p.owner}</td>
                  <td className="px-4 py-2 text-xs text-[#777]">
                    {p.lastUpdated}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs text-[#337ab7] hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
