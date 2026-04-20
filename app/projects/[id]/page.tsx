import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/dashboard/Header";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge, { statusTone } from "@/components/ui/Badge";
import {
  deployments,
  envVars,
  getProject,
  incidents,
  projects,
} from "@/lib/mockData";

interface Params {
  params: { id: string };
  searchParams: { tab?: string };
}

const TABS = ["overview", "deployments", "logs", "settings"] as const;
type Tab = (typeof TABS)[number];

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }));
}

export default function ProjectDetailPage({ params, searchParams }: Params) {
  const project = getProject(params.id);
  if (!project) notFound();

  const tab: Tab = (TABS.includes(searchParams.tab as Tab)
    ? (searchParams.tab as Tab)
    : "overview");

  const projectDeploys = deployments.filter((d) => d.projectId === project.id);
  const projectIncidents = incidents.filter((i) => i.project === project.name);
  const projectEnvVars = envVars.filter((v) =>
    project.environments.includes(v.environment),
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Page Header ── */}
      <header className="bg-white border-b border-[#ddd] px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-[#333] leading-tight">{project.name}</h1>
            {project.description && (
              <p className="text-sm text-[#777] mt-1">{project.description}</p>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <input
              type="text"
              placeholder="Search deployments, projects..."
              className="hidden md:block w-64 rounded-[3px] border border-[#ccc] bg-white px-3 py-1.5 text-sm text-[#333] placeholder-[#999] focus:outline-none focus:border-[#337ab7]"
            />
            <button
              type="button"
              className="text-sm text-[#777] hover:text-[#d9534f] border border-[#ccc] hover:border-[#d9534f] rounded-[3px] px-3 py-1.5 bg-white transition-colors"
            >
              Rollback
            </button>
            <Button size="md">Deploy now</Button>
            <div className="h-8 w-8 rounded-full bg-[#777] flex items-center justify-center text-[11px] font-bold text-white">
              HD
            </div>
          </div>
        </div>
      </header>

      {/* ── Project Meta Bar ── */}
      <section className="bg-white border-b border-[#ddd] px-6 py-3">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Status</span>
            <Badge tone={statusTone(project.status)}>{project.status}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Framework</span>
            <span className="text-sm text-[#555]">{project.framework}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Owner</span>
            <span className="text-sm text-[#555]">{project.owner}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Team</span>
            <span className="text-sm text-[#555]">{project.team}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Uptime</span>
            <span className="text-sm font-bold text-[#5cb85c]">{project.uptime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Deploys/wk</span>
            <span className="text-sm text-[#555]">{project.deploymentsThisWeek}</span>
          </div>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <nav className="bg-white border-b border-[#ddd] px-6">
        <div className="flex gap-0">
          {TABS.map((t) => (
            <Link
              key={t}
              href={`/projects/${project.slug}?tab=${t}`}
              className={`text-sm py-3 px-5 capitalize border-b-[3px] no-underline transition-colors ${
                tab === t
                  ? "border-[#337ab7] text-[#337ab7] font-bold bg-[#f0f7ff]"
                  : "border-transparent text-[#555] hover:text-[#333] hover:bg-[#f5f5f5]"
              }`}
            >
              {t}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 bg-[#f5f5f5] overflow-auto">

        {/* ── OVERVIEW TAB ── */}
        {tab === "overview" && (
          <div className="p-6 space-y-6">

            {/* Stats row */}
            <section>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
                  <p className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Uptime (30d)</p>
                  <p className="text-3xl font-bold text-[#5cb85c] mt-2">{project.uptime}</p>
                </div>
                <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
                  <p className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Deploys / week</p>
                  <p className="text-3xl font-bold text-[#333] mt-2">{project.deploymentsThisWeek}</p>
                </div>
                <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
                  <p className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Avg deploy time</p>
                  <p className="text-3xl font-bold text-[#333] mt-2">1m 42s</p>
                </div>
                <div className="bg-white border border-[#ddd] rounded-[3px] p-5">
                  <p className="text-[10px] uppercase font-bold text-[#999] tracking-wide">Open incidents</p>
                  <p className={`text-3xl font-bold mt-2 ${
                    projectIncidents.filter((i) => i.status !== "resolved").length > 0
                      ? "text-[#d9534f]"
                      : "text-[#333]"
                  }`}>
                    {projectIncidents.filter((i) => i.status !== "resolved").length}
                  </p>
                </div>
              </div>
            </section>

            {/* Two-column content */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Left: timeline + alerts */}
              <div className="lg:col-span-2 space-y-6">

                {/* Deployment timeline */}
                <div className="bg-white border border-[#ddd] rounded-[3px]">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                    <h3 className="text-sm font-bold text-[#333]">Deployment timeline</h3>
                  </div>
                  {projectDeploys.length === 0 ? (
                    <div className="px-5 py-10 text-center">
                      <p className="text-sm text-[#999]">No deployments yet.</p>
                      <p className="text-xs text-[#bbb] mt-1">Push a commit to trigger your first deploy.</p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-[#eee]">
                      {projectDeploys.map((d) => (
                        <li key={d.id} className="px-5 py-4 flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-[#333]">
                              <span className="font-mono text-xs text-[#666] bg-[#f5f5f5] px-1.5 py-0.5 rounded mr-2">{d.commit}</span>
                              {d.message}
                            </p>
                            <p className="text-xs text-[#777] mt-1.5">
                              {d.author} · {d.branch} · {d.timestamp}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <Badge tone="gray">{d.environment}</Badge>
                            <Badge tone={statusTone(d.status)}>
                              {d.status === "success" && "✓ "}{d.status === "failed" && "✕ "}{d.status === "building" && "⟳ "}{d.status}
                            </Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Recent alerts */}
                <div className="bg-white border border-[#ddd] rounded-[3px]">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                    <h3 className="text-sm font-bold text-[#333]">Recent alerts</h3>
                  </div>
                  {projectIncidents.length === 0 ? (
                    <div className="px-5 py-10 text-center">
                      <p className="text-sm text-[#999]">No recent alerts for this project.</p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-[#eee]">
                      {projectIncidents.map((i) => (
                        <li key={i.id} className="px-5 py-4 flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-[#333]">{i.title}</p>
                            <p className="text-xs text-[#777] mt-1.5">
                              Opened {i.openedAt} · {i.assignee}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <Badge tone={statusTone(i.status)}>{i.status}</Badge>
                            <Badge tone={statusTone(i.severity)}>{i.severity}</Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Right: env vars */}
              <aside className="space-y-6">
                <div className="bg-white border border-[#ddd] rounded-[3px]">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                    <h3 className="text-sm font-bold text-[#333]">Environment variables</h3>
                  </div>
                  <ul className="divide-y divide-[#eee]">
                    {projectEnvVars.slice(0, 6).map((v) => (
                      <li
                        key={`${v.key}-${v.environment}`}
                        className="px-5 py-3 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-xs text-[#333] truncate font-bold">{v.key}</p>
                          <p className="font-mono text-xs text-[#999] mt-0.5 tracking-widest">••••••••</p>
                        </div>
                        <Badge tone="gray">{v.environment}</Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 py-3 border-t border-[#eee]">
                    <Link href={`/projects/${project.slug}?tab=settings`} className="text-xs text-[#337ab7] hover:underline">
                      Manage all variables →
                    </Link>
                  </div>
                </div>
              </aside>
            </section>
          </div>
        )}

        {/* ── DEPLOYMENTS TAB ── */}
        {tab === "deployments" && (
          <div className="p-6">
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                <h3 className="text-sm font-bold text-[#333]">All deployments</h3>
                <span className="text-xs text-[#777]">{projectDeploys.length} total</span>
              </div>
              {projectDeploys.length === 0 ? (
                <div className="px-5 py-16 text-center">
                  <p className="text-base font-bold text-[#555]">No deployments yet</p>
                  <p className="text-sm text-[#999] mt-2">Push a commit or trigger a manual deploy to get started.</p>
                  <div className="mt-6">
                    <Button size="md">Deploy now</Button>
                  </div>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="bg-[#f9f9f9] text-[11px] uppercase text-[#777]">
                    <tr>
                      <th className="text-left px-5 py-2.5 font-bold">Commit</th>
                      <th className="text-left px-5 py-2.5 font-bold">Message</th>
                      <th className="text-left px-5 py-2.5 font-bold">Env</th>
                      <th className="text-left px-5 py-2.5 font-bold">Status</th>
                      <th className="text-left px-5 py-2.5 font-bold">Duration</th>
                      <th className="text-left px-5 py-2.5 font-bold">When</th>
                      <th className="text-right px-5 py-2.5 font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eee]">
                    {projectDeploys.map((d) => (
                      <tr key={d.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="px-5 py-3 font-mono text-xs text-[#666] bg-[#f5f5f5] rounded">
                          {d.commit}
                        </td>
                        <td className="px-5 py-3 text-[#333]">{d.message}</td>
                        <td className="px-5 py-3 text-[#555]">{d.environment}</td>
                        <td className="px-5 py-3">
                          <Badge tone={statusTone(d.status)}>
                            {d.status === "success" && "✓ "}{d.status === "failed" && "✕ "}{d.status === "building" && "⟳ "}{d.status}
                          </Badge>
                        </td>
                        <td className="px-5 py-3 text-[#555]">{d.duration}</td>
                        <td className="px-5 py-3 text-xs text-[#777]">{d.timestamp}</td>
                        <td className="px-5 py-3 text-right">
                          <button type="button" className="text-xs text-[#337ab7] hover:underline mr-3">Logs</button>
                          <button type="button" className="text-xs text-[#777] hover:text-[#333] hover:underline">Redeploy</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* ── LOGS TAB ── */}
        {tab === "logs" && (
          <div className="p-6">
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                <h3 className="text-sm font-bold text-[#333]">Service logs</h3>
                <span className="text-xs text-[#777]">Live · {project.name}</span>
              </div>
              <div className="bg-[#1a1a1a] font-mono text-xs p-5 max-h-[560px] overflow-auto">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="flex gap-3 py-1 border-b border-[#2b2b2b]">
                    <span className="text-[#888] shrink-0 w-16">
                      10:4{(i % 10).toString()}:{String((i * 3) % 60).padStart(2, "0")}
                    </span>
                    <span className="uppercase w-12 shrink-0 text-[#5bc0de] font-bold">info</span>
                    <span className="text-[#7ec8e3] shrink-0">[{project.slug}]</span>
                    <span className="text-[#e8e8e8]">
                      {i % 7 === 0
                        ? `Handled request ${i * 11} in ${42 + (i % 5)}ms`
                        : `Worker tick — queue depth ${i % 9}, flush lag ${i}ms`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SETTINGS TAB ── */}
        {tab === "settings" && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* General settings */}
              <section className="bg-white border border-[#ddd] rounded-[3px]">
                <div className="px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                  <h3 className="text-sm font-bold text-[#333]">General</h3>
                  <p className="text-xs text-[#777] mt-0.5">Basic project information</p>
                </div>
                <div className="p-5 space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1.5">Project name</label>
                    <input
                      defaultValue={project.name}
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1.5">Framework</label>
                    <input
                      defaultValue={project.framework}
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1.5">Owning team</label>
                    <input
                      defaultValue={project.team}
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div className="pt-2">
                    <Button size="md">Save changes</Button>
                  </div>
                </div>
              </section>

              {/* Build & deploy settings */}
              <section className="bg-white border border-[#ddd] rounded-[3px]">
                <div className="px-5 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                  <h3 className="text-sm font-bold text-[#333]">Build &amp; deploy</h3>
                  <p className="text-xs text-[#777] mt-0.5">Commands and runtime configuration</p>
                </div>
                <div className="p-5 space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1.5">Build command</label>
                    <input
                      defaultValue="npm run build"
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1.5">Start command</label>
                    <input
                      defaultValue="npm run start"
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1.5">Node version</label>
                    <input
                      defaultValue="20.x"
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div className="pt-2">
                    <Button size="md" variant="secondary">Trigger rebuild</Button>
                  </div>
                </div>
              </section>
            </div>

            {/* Danger zone */}
            <section className="bg-white border border-[#d9534f] rounded-[3px]">
              <div className="px-5 py-3 border-b border-[#f5c6c5] bg-[#fdf5f5]">
                <h3 className="text-sm font-bold text-[#d9534f]">Danger zone</h3>
                <p className="text-xs text-[#777] mt-0.5">These actions are irreversible. Proceed with caution.</p>
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#333]">Delete this project</p>
                  <p className="text-xs text-[#777] mt-0.5">Permanently removes all deployments, logs, and configuration.</p>
                </div>
                <Button variant="danger" size="md">Delete project</Button>
              </div>
            </section>
          </div>
        )}

      </main>
    </div>
  );
}
