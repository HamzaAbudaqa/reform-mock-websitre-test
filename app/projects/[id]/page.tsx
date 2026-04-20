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

  const projectDeploys = deployments.filter(
    (d) => d.projectId === project.id,
  );
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

      <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone={statusTone(project.status)}>{project.status}</Badge>
          <span className="text-xs text-gray-500">
            {project.framework} · Owned by {project.owner} ({project.team})
          </span>
          <span className="text-xs text-gray-500">
            Uptime {project.uptime} · {project.deploymentsThisWeek} deploys this
            week
          </span>
        </div>

        <div className="border-b border-gray-200">
          <nav className="flex gap-6">
            {TABS.map((t) => (
              <Link
                key={t}
                href={`/projects/${project.slug}?tab=${t}`}
                className={`text-sm py-2 -mb-px border-b-2 capitalize ${
                  tab === t
                    ? "border-indigo-600 text-indigo-700 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {t}
              </Link>
            ))}
          </nav>
        </div>

        {tab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card title="Deployment timeline" padded={false}>
                <ul className="divide-y divide-gray-100">
                  {projectDeploys.length === 0 && (
                    <li className="px-5 py-4 text-sm text-gray-500">
                      No deployments yet.
                    </li>
                  )}
                  {projectDeploys.map((d) => (
                    <li
                      key={d.id}
                      className="px-5 py-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {d.commit} — {d.message}
                        </p>
                        <p className="text-xs text-gray-500">
                          {d.author} · {d.branch} · {d.timestamp}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge tone="gray">{d.environment}</Badge>
                        <Badge tone={statusTone(d.status)}>{d.status}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="Recent alerts" padded={false}>
                {projectIncidents.length === 0 ? (
                  <div className="px-5 py-6 text-sm text-gray-500">
                    No recent alerts for this project.
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-100">
                    {projectIncidents.map((i) => (
                      <li
                        key={i.id}
                        className="px-5 py-3 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {i.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            Opened {i.openedAt} · {i.assignee}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge tone={statusTone(i.severity)}>
                            {i.severity}
                          </Badge>
                          <Badge tone={statusTone(i.status)}>{i.status}</Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500">Uptime (30d)</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">
                    {project.uptime}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500">Deploys / wk</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">
                    {project.deploymentsThisWeek}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500">Avg deploy</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">
                    1m 42s
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-500">Open incidents</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">
                    {
                      projectIncidents.filter((i) => i.status !== "resolved")
                        .length
                    }
                  </p>
                </div>
              </div>

              <Card title="Environment variables" padded={false}>
                <ul className="divide-y divide-gray-100 text-sm">
                  {projectEnvVars.slice(0, 6).map((v) => (
                    <li
                      key={`${v.key}-${v.environment}`}
                      className="px-5 py-2.5 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-gray-900 truncate">
                          {v.key}
                        </p>
                        <p className="font-mono text-xs text-gray-500 truncate">
                          {v.value}
                        </p>
                      </div>
                      <Badge tone="gray">{v.environment}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="px-5 py-3 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    Manage all variables →
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}

        {tab === "deployments" && (
          <Card title="All deployments" padded={false}>
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-5 py-2 font-medium">Commit</th>
                  <th className="text-left px-5 py-2 font-medium">Message</th>
                  <th className="text-left px-5 py-2 font-medium">Env</th>
                  <th className="text-left px-5 py-2 font-medium">Status</th>
                  <th className="text-left px-5 py-2 font-medium">Duration</th>
                  <th className="text-left px-5 py-2 font-medium">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projectDeploys.map((d) => (
                  <tr key={d.id}>
                    <td className="px-5 py-3 font-mono text-xs text-gray-700">
                      {d.commit}
                    </td>
                    <td className="px-5 py-3 text-gray-900">{d.message}</td>
                    <td className="px-5 py-3 text-gray-700">{d.environment}</td>
                    <td className="px-5 py-3">
                      <Badge tone={statusTone(d.status)}>{d.status}</Badge>
                    </td>
                    <td className="px-5 py-3 text-gray-700">{d.duration}</td>
                    <td className="px-5 py-3 text-gray-500">{d.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {tab === "logs" && (
          <Card title="Service logs" padded={false}>
            <div className="bg-gray-900 text-gray-100 font-mono text-xs p-4 rounded-b-lg max-h-[500px] overflow-auto">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex gap-3 py-0.5">
                  <span className="text-gray-500">
                    10:4{(i % 10).toString()}:{(i * 3) % 60}
                  </span>
                  <span className="uppercase w-10 text-blue-400">info</span>
                  <span className="text-indigo-300">[{project.slug}]</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="General">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Project name
                  </label>
                  <input
                    defaultValue={project.name}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Framework
                  </label>
                  <input
                    defaultValue={project.framework}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Owning team
                  </label>
                  <input
                    defaultValue={project.team}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <Button size="sm">Save changes</Button>
              </div>
            </Card>

            <Card title="Build & deploy">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Build command
                  </label>
                  <input
                    defaultValue="npm run build"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Start command
                  </label>
                  <input
                    defaultValue="npm run start"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">
                    Node version
                  </label>
                  <input
                    defaultValue="20.x"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
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
