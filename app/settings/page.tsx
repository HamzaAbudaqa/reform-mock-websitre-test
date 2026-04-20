import Header from "@/components/dashboard/Header";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { team } from "@/lib/mockData";

const apiKeys = [
  { label: "Production key", prefix: "df_live_a93f2c1...", created: "Jan 4, 2026" },
  { label: "Staging key", prefix: "df_test_7c1aa0b...", created: "Feb 22, 2026" },
  { label: "CI key", prefix: "df_ci_b02ee41...", created: "Mar 11, 2026" },
];

export default function SettingsPage() {
  return (
    <>
      <Header
        title="Settings"
        subtitle="Manage your account, team, and workspace preferences."
      />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card title="Profile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Full name
                </label>
                <input
                  defaultValue="Hamza Daqa"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Email
                </label>
                <input
                  defaultValue="hamza@deployflow.io"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Role
                </label>
                <input
                  defaultValue="Engineering Lead"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Timezone
                </label>
                <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                  <option>America/New_York</option>
                  <option>America/Los_Angeles</option>
                  <option>Europe/London</option>
                  <option>Asia/Tokyo</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <Button size="sm">Save profile</Button>
            </div>
          </Card>

          <Card title="Team members" padded={false}>
            <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                {team.length} members · 3 pending invites
              </p>
              <Button size="sm" variant="secondary">Invite member</Button>
            </div>
            <ul className="divide-y divide-gray-100">
              {team.map((m) => (
                <li
                  key={m.id}
                  className="px-5 py-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700">
                      {m.avatarInitials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">{m.role}</span>
                    <select className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs">
                      <option>Admin</option>
                      <option>Member</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Billing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 border border-gray-200 rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Team plan
                    </p>
                    <p className="text-xs text-gray-500">
                      $49 / month · renews Apr 28, 2026
                    </p>
                  </div>
                  <Badge tone="indigo">Active</Badge>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="secondary">
                    Change plan
                  </Button>
                  <Button size="sm" variant="ghost">
                    View invoices
                  </Button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-md p-4">
                <p className="text-xs text-gray-500">Payment method</p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  Visa ending 4242
                </p>
                <p className="text-xs text-gray-500">Exp 08 / 2028</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Update card →
                </a>
              </div>
            </div>
          </Card>

          <Card title="API keys" padded={false}>
            <ul className="divide-y divide-gray-100">
              {apiKeys.map((k) => (
                <li
                  key={k.label}
                  className="px-5 py-3 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {k.label}
                    </p>
                    <p className="text-xs font-mono text-gray-500">
                      {k.prefix}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">
                      Created {k.created}
                    </span>
                    <Button size="sm" variant="secondary">Copy</Button>
                    <Button size="sm" variant="ghost">Revoke</Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-5 py-3 border-t border-gray-200">
              <Button size="sm" variant="secondary">
                + Create new key
              </Button>
            </div>
          </Card>

          <Card title="Notifications">
            <ul className="space-y-3">
              {[
                { label: "Deployment success", desc: "Email me when a production deploy succeeds.", on: false },
                { label: "Deployment failure", desc: "Always notify me when a deploy fails.", on: true },
                { label: "New incidents", desc: "Page me when a new incident is opened.", on: true },
                { label: "Weekly summary", desc: "Get a Monday summary of the past week.", on: true },
                { label: "Billing alerts", desc: "Notify me before upcoming charges.", on: false },
              ].map((n) => (
                <li
                  key={n.label}
                  className="flex items-start justify-between gap-4 py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {n.label}
                    </p>
                    <p className="text-xs text-gray-500">{n.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      defaultChecked={n.on}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-indigo-600 transition-colors" />
                    <div className="absolute left-0.5 top-0.5 h-4 w-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </label>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            title="Danger zone"
            className="border-red-200"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Transfer ownership
                  </p>
                  <p className="text-xs text-gray-500">
                    Move this workspace to another account.
                  </p>
                </div>
                <Button size="sm" variant="secondary">Transfer</Button>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Delete workspace
                  </p>
                  <p className="text-xs text-gray-500">
                    Permanently delete this workspace and all projects. This
                    cannot be undone.
                  </p>
                </div>
                <Button size="sm" variant="danger">Delete</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
