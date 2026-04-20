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

const notifications = [
  { label: "Deployment success", desc: "Email me when a production deploy succeeds.", on: false },
  { label: "Deployment failure", desc: "Always notify me when a deploy fails.", on: true },
  { label: "New incidents", desc: "Page me when a new incident is opened.", on: true },
  { label: "Weekly summary", desc: "Get a Monday summary of the past week.", on: true },
  { label: "Billing alerts", desc: "Notify me before upcoming charges.", on: false },
];

export default function SettingsPage() {
  return (
    <>
      <Header
        title="Settings"
        subtitle="Manage your account, team, and workspace preferences."
      />

      <main className="flex-1 p-6 bg-[#f5f5f5] overflow-auto">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* ── Profile ── */}
          <section>
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="px-6 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-sm font-bold text-[#333]">Profile</h2>
                <p className="text-xs text-[#777] mt-0.5">Your personal details and timezone.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1">Full name</label>
                    <input
                      defaultValue="Hamza Daqa"
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1">Email</label>
                    <input
                      defaultValue="hamza@deployflow.io"
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1">Role</label>
                    <input
                      defaultValue="Engineering Lead"
                      className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm focus:outline-none focus:border-[#337ab7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555] mb-1">Timezone</label>
                    <select className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#337ab7]">
                      <option>America/New_York</option>
                      <option>America/Los_Angeles</option>
                      <option>Europe/London</option>
                      <option>Asia/Tokyo</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#eee] flex items-center justify-between">
                  <p className="text-xs text-[#999]">Changes are saved to your account immediately.</p>
                  <Button size="md" variant="primary">Save changes</Button>
                </div>
              </div>
            </div>
          </section>

          {/* ── Team members ── */}
          <section>
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="px-6 py-3 border-b border-[#ddd] bg-[#f5f5f5] flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-[#333]">Team members</h2>
                  <p className="text-xs text-[#777] mt-0.5">{team.length} members &middot; 3 pending invites</p>
                </div>
                <Button size="md" variant="primary">Invite member</Button>
              </div>
              <ul className="divide-y divide-[#eee]">
                {team.map((m) => (
                  <li key={m.id} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#777] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                        {m.avatarInitials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#333]">{m.name}</p>
                        <p className="text-xs text-[#777]">{m.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge tone="gray">{m.role}</Badge>
                      <a href="#" className="text-xs text-[#337ab7] hover:underline">Change role</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Billing ── */}
          <section>
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="px-6 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-sm font-bold text-[#333]">Billing</h2>
                <p className="text-xs text-[#777] mt-0.5">Your current plan and payment details.</p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 border border-[#ddd] rounded-[3px] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-bold text-[#333]">Team plan</p>
                      <p className="text-xs text-[#777] mt-1">$49 / month &middot; renews Apr 28, 2026</p>
                    </div>
                    <Badge tone="green">Active</Badge>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <Button size="md" variant="primary">Change plan</Button>
                    <a href="#" className="text-xs text-[#337ab7] hover:underline">View invoices</a>
                  </div>
                </div>
                <div className="border border-[#ddd] rounded-[3px] p-5">
                  <p className="text-xs font-bold text-[#555] uppercase tracking-wide">Payment method</p>
                  <p className="text-sm font-bold text-[#333] mt-3">Visa ending 4242</p>
                  <p className="text-xs text-[#777] mt-1">Exp 08 / 2028</p>
                  <a href="#" className="mt-4 inline-block text-xs text-[#337ab7] hover:underline">Update card</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── API keys ── */}
          <section>
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="px-6 py-3 border-b border-[#ddd] bg-[#f5f5f5] flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-[#333]">API keys</h2>
                  <p className="text-xs text-[#777] mt-0.5">Keys grant programmatic access to your workspace.</p>
                </div>
                <Button size="md" variant="primary">Create new key</Button>
              </div>
              <ul className="divide-y divide-[#eee]">
                {apiKeys.map((k) => (
                  <li key={k.label} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-[#333]">{k.label}</p>
                      <p className="text-xs font-mono text-[#777] mt-0.5">{k.prefix}</p>
                      <p className="text-xs text-[#999] mt-0.5">Created {k.created}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button size="sm" variant="secondary">Copy</Button>
                      <button
                        className="text-xs text-[#d9534f] hover:text-[#c9302c] hover:underline border border-[#d9534f] rounded-[3px] px-3 py-1"
                      >
                        Revoke
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Notifications ── */}
          <section>
            <div className="bg-white border border-[#ddd] rounded-[3px]">
              <div className="px-6 py-3 border-b border-[#ddd] bg-[#f5f5f5]">
                <h2 className="text-sm font-bold text-[#333]">Notifications</h2>
                <p className="text-xs text-[#777] mt-0.5">Choose what events you want to be notified about.</p>
              </div>
              <ul className="divide-y divide-[#eee]">
                {notifications.map((n) => (
                  <li key={n.label} className="px-6 py-4 flex items-center justify-between gap-6">
                    <div>
                      <p className="text-sm font-bold text-[#333]">{n.label}</p>
                      <p className="text-xs text-[#777] mt-0.5">{n.desc}</p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={n.on}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                        n.on ? "bg-[#337ab7]" : "bg-[#ccc]"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
                          n.on ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 border-t border-[#eee] flex justify-end">
                <Button size="md" variant="primary">Save preferences</Button>
              </div>
            </div>
          </section>

          {/* ── Danger zone ── */}
          <section>
            <div className="bg-white border-2 border-[#d9534f] rounded-[3px]">
              <div className="px-6 py-3 border-b border-[#f5c6c5] bg-[#fdf2f2]">
                <h2 className="text-sm font-bold text-[#d9534f]">Danger zone</h2>
                <p className="text-xs text-[#a94442] mt-0.5">These actions are permanent and cannot be undone.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-bold text-[#333]">Transfer ownership</p>
                    <p className="text-xs text-[#777] mt-1">Move this workspace to another account. You will lose admin access.</p>
                  </div>
                  <Button size="md" variant="secondary">Transfer</Button>
                </div>
                <div className="pt-6 border-t border-[#f5c6c5] flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-bold text-[#d9534f]">Delete workspace</p>
                    <p className="text-xs text-[#777] mt-1">Permanently delete this workspace and all projects. This cannot be reversed.</p>
                  </div>
                  <Button size="md" variant="danger">Delete workspace</Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
