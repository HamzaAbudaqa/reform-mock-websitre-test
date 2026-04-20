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
    <>
      <Header
        title="Dashboard"
        subtitle="Overview of deployments across your projects."
        action={
          <Button size="sm" href="/projects">
            New deployment
          </Button>
        }
      />

      <main className="flex-1 p-4 bg-[#f5f5f5] space-y-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {kpis.map((k) => (
            <KpiCard key={k.label} {...k} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <ActivityFeed deployments={deployments.slice(0, 6)} />
            <LogsPreview logs={logs} />
          </div>

          <div className="space-y-4">
            <IncidentsList incidents={incidents} />
            <EnvironmentsOverview />
            <TeamWidget members={team.slice(0, 5)} />
          </div>
        </div>
      </main>
    </>
  );
}
