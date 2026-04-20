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
        action={
          <Button size="sm">+ Create project</Button>
        }
      />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Filter projects..."
                className="w-64 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700">
                <option>All teams</option>
                <option>Payments</option>
                <option>Platform</option>
                <option>Growth</option>
                <option>Data Platform</option>
              </select>
              <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700">
                <option>All statuses</option>
                <option>Healthy</option>
                <option>Degraded</option>
                <option>Down</option>
              </select>
            </div>
            <div className="text-xs text-gray-500">
              {projects.length} projects
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-5 py-2 font-medium">Name</th>
                <th className="text-left px-5 py-2 font-medium">Status</th>
                <th className="text-left px-5 py-2 font-medium">Environments</th>
                <th className="text-left px-5 py-2 font-medium">Uptime</th>
                <th className="text-left px-5 py-2 font-medium">Owner</th>
                <th className="text-left px-5 py-2 font-medium">Updated</th>
                <th className="px-5 py-2" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="font-medium text-gray-900 hover:text-indigo-700"
                    >
                      {p.name}
                    </Link>
                    <p className="text-xs text-gray-500">{p.description}</p>
                  </td>
                  <td className="px-5 py-3">
                    <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {p.environments.map((e) => (
                        <span
                          key={e}
                          className="text-xs text-gray-600 bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-700">{p.uptime}</td>
                  <td className="px-5 py-3 text-gray-700">{p.owner}</td>
                  <td className="px-5 py-3 text-gray-500">{p.lastUpdated}</td>
                  <td className="px-5 py-3 text-right">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      View →
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
