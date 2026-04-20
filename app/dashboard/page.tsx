import Header from "@/components/dashboard/Header";
import KpiCard from "@/components/dashboard/KpiCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import IncidentsList from "@/components/dashboard/IncidentsList";
import LogsPreview from "@/components/dashboard/LogsPreview";
import EnvironmentsOverview from "@/components/dashboard/EnvironmentsOverview";
import TeamWidget from "@/components/dashboard/TeamWidget";
import Button from "@/components/ui/Button";
import { deployments, incidents, kpis, logs, team } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Rebuilt header — tall, breathable, single dominant CTA */}
      <header className="bg-white border-b border-[#ddd] px-6 py-5 sticky top-0 z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#333] leading-tight">Dashboard</h1>
            <p className="text-sm text-[#777] mt-0.5">Overview of deployments across your projects.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search deployments, projects..."
              className="w-64 rounded-[3px] border border-[#ccc] bg-white px-3 py-2 text-sm text-[#333] placeholder-[#999] focus:outline-none focus:border-[#337ab7]"
            />
            <Button size="md" href="/projects">
              New deployment
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 overflow-auto">

        {/* KPI strip — full width, generous cards */}
        <section className="mb-8">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-widest mb-4">At a glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((k) => (
              <div key={k.label} className="bg-white border border-[#ddd] rounded-[3px] p-6">
                <p className="text-xs font-bold text-[#999] uppercase tracking-wide">{k.label}</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-4xl font-bold text-[#333] leading-none">{k.value}</span>
                  <span className={`flex items-center gap-1 text-sm font-bold ${
                    k.positive ? "text-[#5cb85c]" : "text-[#d9534f]"
                  }`}>
                    {k.positive ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main content — 2/3 primary + 1/3 sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Primary column */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Recent Deployments — scrollable table with overflow */}
            <section className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-base font-bold text-[#333]">Recent Deployments</h2>
                <a href="#" className="text-xs text-[#337ab7] hover:underline">View all</a>
              </div>
              <div className="overflow-x-auto">
                <ActivityFeed deployments={deployments.slice(0, 6)} />
              </div>
            </section>

            {/* Logs — dark terminal panel */}
            <section className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-base font-bold text-[#333]">Live Logs</h2>
              </div>
              <div className="bg-[#1a1a1a] font-mono text-xs p-5 max-h-72 overflow-auto">
                {logs.map((l) => (
                  <div key={l.id} className="flex gap-3 py-1">
                    <span className="text-[#aaa] shrink-0">{l.timestamp}</span>
                    <span className={`uppercase w-10 shrink-0 font-bold ${
                      l.level === "info" ? "text-[#5bc0de]" :
                      l.level === "warn" ? "text-[#f0ad4e]" :
                      l.level === "error" ? "text-[#d9534f]" :
                      "text-[#bbb]"
                    }`}>{l.level}</span>
                    <span className="text-[#7ec8e3] shrink-0">[{l.service}]</span>
                    <span className="text-[#e8e8e8]">{l.message}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar column */}
          <aside className="flex flex-col gap-6">

            {/* Incidents */}
            <section className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-base font-bold text-[#333]">Incidents</h2>
                <a href="#" className="text-xs text-[#337ab7] hover:underline">View all</a>
              </div>
              <ul className="divide-y divide-[#eee]">
                {incidents.map((inc) => (
                  <li key={inc.id} className="px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#333] truncate">{inc.title}</p>
                        <p className="text-xs text-[#777] mt-1">{inc.project} · {inc.openedAt}</p>
                        <p className="text-xs text-[#999] mt-0.5">{inc.assignee}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold rounded-full ${
                          inc.severity === "critical" || inc.severity === "high" ? "bg-[#d9534f] text-white" :
                          inc.severity === "medium" ? "bg-[#f0ad4e] text-white" :
                          "bg-[#5bc0de] text-white"
                        }`}>{inc.severity}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold rounded-full ${
                          inc.status === "resolved" ? "bg-[#5cb85c] text-white" :
                          inc.status === "investigating" ? "bg-[#f0ad4e] text-white" :
                          "bg-[#5bc0de] text-white"
                        }`}>{inc.status}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Environments */}
            <section className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="px-5 py-4 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-base font-bold text-[#333]">Environments</h2>
              </div>
              <EnvironmentsOverview />
            </section>

            {/* Team */}
            <section className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-base font-bold text-[#333]">Team</h2>
                <a href="#" className="text-xs text-[#337ab7] hover:underline">Invite</a>
              </div>
              <TeamWidget members={team.slice(0, 5)} />
            </section>

          </aside>
        </div>
      </main>
    </div>
  );
}
