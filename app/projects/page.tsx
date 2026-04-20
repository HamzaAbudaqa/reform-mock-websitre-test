import Link from "next/link";
import Header from "@/components/dashboard/Header";
import Button from "@/components/ui/Button";
import Badge, { statusTone } from "@/components/ui/Badge";
import { projects } from "@/lib/mockData";

const statusIcon: Record<string, string> = {
  healthy: "●",
  degraded: "▲",
  down: "■",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Page title zone — dedicated, tall, breathing room */}
      <header className="bg-white border-b border-[#ddd] px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-[#333] leading-tight">Projects</h1>
            <p className="mt-1 text-sm text-[#777]">All services and applications managed by your team.</p>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <div className="h-8 w-8 rounded-full bg-[#777] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
              HD
            </div>
            <Button size="lg">
              + New project
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-8 py-8">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Summary stat cards */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
              <p className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Total Projects</p>
              <p className="mt-2 text-3xl font-bold text-[#333]">{projects.length}</p>
            </div>
            <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
              <p className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Healthy</p>
              <p className="mt-2 text-3xl font-bold text-[#5cb85c]">
                {projects.filter((p) => p.status === "healthy").length}
              </p>
            </div>
            <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
              <p className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Degraded</p>
              <p className="mt-2 text-3xl font-bold text-[#f0ad4e]">
                {projects.filter((p) => p.status === "degraded").length}
              </p>
            </div>
            <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
              <p className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Down</p>
              <p className="mt-2 text-3xl font-bold text-[#d9534f]">
                {projects.filter((p) => p.status === "down").length}
              </p>
            </div>
          </section>

          {/* Projects table panel */}
          <section className="bg-white border border-[#ddd] rounded-[3px]">

            {/* Toolbar */}
            <div className="px-6 py-4 border-b border-[#ddd] bg-[#f9f9f9]">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Search</label>
                  <input
                    type="text"
                    placeholder="Search projects, services..."
                    className="w-full max-w-xs rounded-[3px] border border-[#ccc] bg-white px-3 py-1.5 text-sm text-[#333] focus:outline-none focus:border-[#337ab7]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Team</label>
                  <select className="rounded-[3px] border border-[#ccc] bg-white px-3 py-1.5 text-sm text-[#333] focus:outline-none focus:border-[#337ab7]">
                    <option>All teams</option>
                    <option>Payments</option>
                    <option>Platform</option>
                    <option>Growth</option>
                    <option>Data Platform</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase font-bold text-[#999] tracking-wide">Status</label>
                  <select className="rounded-[3px] border border-[#ccc] bg-white px-3 py-1.5 text-sm text-[#333] focus:outline-none focus:border-[#337ab7]">
                    <option>All statuses</option>
                    <option>Healthy</option>
                    <option>Degraded</option>
                    <option>Down</option>
                  </select>
                </div>
                <div className="sm:ml-auto text-xs text-[#777] pb-1.5 shrink-0">
                  {projects.length} projects
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f9f9f9] border-b border-[#eee]">
                  <tr>
                    <th className="text-left px-6 py-3 text-[11px] uppercase font-bold text-[#999] tracking-wide">Project</th>
                    <th className="text-left px-6 py-3 text-[11px] uppercase font-bold text-[#999] tracking-wide">Status</th>
                    <th className="text-left px-6 py-3 text-[11px] uppercase font-bold text-[#999] tracking-wide">Environments</th>
                    <th className="text-left px-6 py-3 text-[11px] uppercase font-bold text-[#999] tracking-wide">Uptime</th>
                    <th className="text-left px-6 py-3 text-[11px] uppercase font-bold text-[#999] tracking-wide">Owner</th>
                    <th className="text-left px-6 py-3 text-[11px] uppercase font-bold text-[#999] tracking-wide">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee]">
                  {projects.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-[#f5f5f5] cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/projects/${p.slug}`}
                          className="text-[#337ab7] font-bold hover:underline text-sm"
                        >
                          {p.name}
                        </Link>
                        <p className="text-xs text-[#777] mt-0.5">{p.description}</p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge tone={statusTone(p.status)}>
                          <span>{statusIcon[p.status] ?? "●"}</span>
                          {p.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {p.environments.map((env) => (
                            <Badge key={env} tone="gray">{env}</Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`font-bold text-sm ${
                            parseFloat(p.uptime) >= 99.9
                              ? "text-[#5cb85c]"
                              : parseFloat(p.uptime) >= 99
                              ? "text-[#f0ad4e]"
                              : "text-[#d9534f]"
                          }`}
                        >
                          {p.uptime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#555]">{p.owner}</td>
                      <td className="px-6 py-4 text-xs text-[#777]">{p.lastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
