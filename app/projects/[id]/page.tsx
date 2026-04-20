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
    <>
      <Header
        title={project.name}
        subtitle={project.description}
        action={
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">Rollback</Button>
            <Button size="sm">Deploy</Button>
          </div>
        }
      />

      <main className="flex-1 p-4 bg-[#f5f5f5] overflow-auto">
        <div className="bg-white border border-[#ddd] rounded-[3px] px-4 py-3 mb-4 flex flex-wrap items-center gap-3">
          <Badge tone={statusTone(project.status)}>{project.status}</Badge>
          <span className="text-xs text-[#777]">
            {project.framework} · Owned by {project.owner} ({project.team})
          </span>
          <span className="text-xs text-[#777]">
            Uptime {project.uptime} · {project.deploymentsThisWeek} deploys this week
          </span>
        </div>

        <div className="border-b border-[#ddd] mb-4 bg-white">
          <nav className="flex gap-0">
            {TABS.map((t) => (
              <Link
                key={t}
                href={`/projects/${project.slug}?tab=${t}`}
                className={`text-sm py-2 px-4 capitalize border-b-2 no-underline ${
                  tab === t
                    ? "border-[#337ab7] text-[#337ab7] font-bold"
                    : "border-transparent text-[#555] hover:text-[#333]"
                }`}
              >
                {t}
              </Link>
            ))}
          </nav>
        </div>

        {tab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <Card title="Deployment timeline" padded={false}>
                <ul>
                  {projectDeploys.length === 0 && (
                    <li className="px-4 py-3 text-sm text-[#777]">
                      No deployments yet.
                    </li>
                  )}
                  {projectDeploys.map((d, i) => (
                    <li
                      key={d.id}
                      className={`px-4 py-2.5 flex items-center justify-between border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
                    >
                      <div>
                        <p className="text-sm text-[#333]">
                          <span className="font-mono text-xs text-[#666]">{d.commit}</span>
                          {"  "}{d.message}
                        </p>
                        <p className="text-xs text-[#777]">
                          {d.author} · {d.branch} · {d.timestamp}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Badge tone="gray">{d.environment}</Badge>
                        <Badge tone={statusTone(d.status)}>{d.status}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="Recent alerts" padded={false}>
                {projectIncidents.length === 0 ? (
                  <div className="px-4 py-4 text-sm text-[#777]">
                    No recent alerts for this project.
                  </div>
                ) : (
                  <ul>
                    {projectIncidents.map((i, idx) => (
                      <li
                        key={i.id}
                        className={`px-4 py-2.5 flex items-center justify-between border-t border-[#eee] ${idx === 0 ? "border-t-0" : ""}`}
                      >
                        <div>
                          <p className="text-sm text-[#333]">{i.title}</p>
                          <p className="text-xs text-[#777]">
                            Opened {i.openedAt} · {i.assignee}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge tone={statusTone(i.severity)}>{i.severity}</Badge>
                          <Badge tone={statusTone(i.status)}>{i.status}</Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-[#ddd] rounded-[3px] p-3">
                  <p className="text-xs text-[#777]">Uptime (30d)</p>
                  <p className="text-lg font-bold text-[#333] mt-0.5">
                    {project.uptime}
                  </p>
                </div>
                <div className="bg-white border border-[#ddd] rounded-[3px] p-3">
                  <p className="text-xs text-[#777]">Deploys / wk</p>
                  <p className="text-lg font-bold text-[#333] mt-0.5">
                    {project.deploymentsThisWeek}
                  </p>
                </div>
                <div className="bg-white border border-[#ddd] rounded-[3px] p-3">
                  <p className="text-xs text-[#777]">Avg deploy</p>
                  <p className="text-lg font-bold text-[#333] mt-0.5">1m 42s</p>
                </div>
                <div className="bg-white border border-[#ddd] rounded-[3px] p-3">
                  <p className="text-xs text-[#777]">Open incidents</p>
                  <p className="text-lg font-bold text-[#333] mt-0.5">
                    {projectIncidents.filter((i) => i.status !== "resolved").length}
                  </p>
                </div>
              </div>

              <Card title="Environment variables" padded={false}>
                <ul className="text-sm">
                  {projectEnvVars.slice(0, 6).map((v, i) => (
                    <li
                      key={`${v.key}-${v.environment}`}
                      className={`px-4 py-2 flex items-center justify-between gap-3 border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
                    >
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-[#333] truncate">
                          {v.key}
                        </p>
                        <p className="font-mono text-xs text-[#777] truncate">
                          {v.value}
                        </p>
                      </div>
                      <Badge tone="gray">{v.environment}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-2 border-t border-[#eee]">
                  <a href="#" className="text-xs text-[#337ab7] hover:underline">
                    Manage all variables
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}

        {tab === "deployments" && (
          <Card title="All deployments" padded={false}>
            <table className="w-full text-sm">
              <thead className="bg-[#f9f9f9] text-[11px] uppercase text-[#777]">
                <tr>
                  <th className="text-left px-4 py-1.5 font-normal">Commit</th>
                  <th className="text-left px-4 py-1.5 font-normal">Message</th>
                  <th className="text-left px-4 py-1.5 font-normal">Env</th>
                  <th className="text-left px-4 py-1.5 font-normal">Status</th>
                  <th className="text-left px-4 py-1.5 font-normal">Duration</th>
                  <th className="text-left px-4 py-1.5 font-normal">When</th>
                </tr>
              </thead>
              <tbody>
                {projectDeploys.map((d, i) => (
                  <tr
                    key={d.id}
                    className={`border-t border-[#eee] ${i % 2 === 1 ? "bg-[#f9f9f9]" : ""}`}
                  >
                    <td className="px-4 py-2 font-mono text-xs text-[#666]">
                      {d.commit}
                    </td>
                    <td className="px-4 py-2 text-[#333]">{d.message}</td>
                    <td className="px-4 py-2 text-[#555]">{d.environment}</td>
                    <td className="px-4 py-2">
                      <Badge tone={statusTone(d.status)}>{d.status}</Badge>
                    </td>
                    <td className="px-4 py-2 text-[#555]">{d.duration}</td>
                    <td className="px-4 py-2 text-xs text-[#777]">
                      {d.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {tab === "logs" && (
          <Card title="Service logs" padded={false}>
            <div className="bg-[#2b2b2b] text-[#ddd] font-mono text-xs p-3 max-h-[500px] overflow-auto">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex gap-2 py-0.5">
                  <span className="text-[#999]">
                    10:4{(i % 10).toString()}:{(i * 3) % 60}
                  </span>
                  <span className="uppercase w-10 text-[#5bc0de]">info</span>
                  <span className="text-[#5bc0de]">[{project.slug}]</span>
                  <span>
                    {i % 7 === 0
                      ? `Handled request ${i * 11} in ${42 + (i % 5)}ms`
                      : `Worker tick — queue depth ${i % 9}, flush lag ${i}ms`}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {tab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card title="General">
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-[#555]">Project name</label>
                  <input
                    defaultValue={project.name}
                    className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#555]">Framework</label>
                  <input
                    defaultValue={project.framework}
                    className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#555]">Owning team</label>
                  <input
                    defaultValue={project.team}
                    className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                  />
                </div>
                <Button size="sm">Save changes</Button>
              </div>
            </Card>

            <Card title="Build & deploy">
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-[#555]">Build command</label>
                  <input
                    defaultValue="npm run build"
                    className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#555]">Start command</label>
                  <input
                    defaultValue="npm run start"
                    className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#555]">Node version</label>
                  <input
                    defaultValue="20.x"
                    className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                  />
                </div>
                <Button size="sm" variant="secondary">Trigger rebuild</Button>
              </div>
            </Card>
          </div>
        )}
      </main>
    </>
  );
}
