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

      <main className="flex-1 p-4 bg-[#f5f5f5] overflow-auto">
        <div className="max-w-3xl mx-auto space-y-4">
          <Card title="Profile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#555]">Full name</label>
                <input
                  defaultValue="Hamza Daqa"
                  className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-[#555]">Email</label>
                <input
                  defaultValue="hamza@deployflow.io"
                  className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-[#555]">Role</label>
                <input
                  defaultValue="Engineering Lead"
                  className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-[#555]">Timezone</label>
                <select className="mt-1 w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm bg-white">
                  <option>America/New_York</option>
                  <option>America/Los_Angeles</option>
                  <option>Europe/London</option>
                  <option>Asia/Tokyo</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <Button size="sm">Save</Button>
            </div>
          </Card>

          <Card title="Team members" padded={false}>
            <div className="px-4 py-2 border-b border-[#eee] flex items-center justify-between">
              <p className="text-xs text-[#777]">
                {team.length} members · 3 pending invites
              </p>
              <Button size="sm" variant="secondary">Invite</Button>
            </div>
            <ul>
              {team.map((m, i) => (
                <li
                  key={m.id}
                  className={`px-4 py-2.5 flex items-center justify-between border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-full bg-[#777] flex items-center justify-center text-[11px] font-bold text-white">
                      {m.avatarInitials}
                    </div>
                    <div>
                      <p className="text-sm text-[#333]">{m.name}</p>
                      <p className="text-xs text-[#777]">{m.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#777]">{m.role}</span>
                    <select className="rounded-[3px] border border-[#ccc] bg-white px-1.5 py-0.5 text-xs">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2 border border-[#ddd] rounded-[3px] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#333]">Team plan</p>
                    <p className="text-xs text-[#777]">
                      $49 / month · renews Apr 28, 2026
                    </p>
                  </div>
                  <Badge tone="blue">Active</Badge>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="secondary">Change plan</Button>
                  <Button size="sm" variant="ghost">View invoices</Button>
                </div>
              </div>
              <div className="border border-[#ddd] rounded-[3px] p-3">
                <p className="text-xs text-[#777]">Payment method</p>
                <p className="text-sm text-[#333] mt-1">Visa ending 4242</p>
                <p className="text-xs text-[#777]">Exp 08 / 2028</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-xs text-[#337ab7] hover:underline"
                >
                  Update card
                </a>
              </div>
            </div>
          </Card>

          <Card title="API keys" padded={false}>
            <ul>
              {apiKeys.map((k, i) => (
                <li
                  key={k.label}
                  className={`px-4 py-2.5 flex items-center justify-between border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
                >
                  <div>
                    <p className="text-sm text-[#333]">{k.label}</p>
                    <p className="text-xs font-mono text-[#777]">{k.prefix}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#777]">
                      Created {k.created}
                    </span>
                    <Button size="sm" variant="secondary">Copy</Button>
                    <Button size="sm" variant="ghost">Revoke</Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-4 py-2 border-t border-[#eee]">
              <Button size="sm" variant="secondary">
                Create new key
              </Button>
            </div>
          </Card>

          <Card title="Notifications">
            <ul className="space-y-2">
              {[
                { label: "Deployment success", desc: "Email me when a production deploy succeeds.", on: false },
                { label: "Deployment failure", desc: "Always notify me when a deploy fails.", on: true },
                { label: "New incidents", desc: "Page me when a new incident is opened.", on: true },
                { label: "Weekly summary", desc: "Get a Monday summary of the past week.", on: true },
                { label: "Billing alerts", desc: "Notify me before upcoming charges.", on: false },
              ].map((n) => (
                <li
                  key={n.label}
                  className="flex items-start justify-between gap-3 py-2 border-b border-[#eee] last:border-0"
                >
                  <div>
                    <p className="text-sm text-[#333]">{n.label}</p>
                    <p className="text-xs text-[#777]">{n.desc}</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={n.on}
                    className="mt-1"
                  />
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Danger zone">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-[#333]">Transfer ownership</p>
                  <p className="text-xs text-[#777]">
                    Move this workspace to another account.
                  </p>
                </div>
                <Button size="sm" variant="secondary">Transfer</Button>
              </div>
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#eee]">
                <div>
                  <p className="text-sm text-[#333]">Delete workspace</p>
                  <p className="text-xs text-[#777]">
                    Permanently delete this workspace and all projects.
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
