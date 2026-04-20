import Card from "../ui/Card";
import { TeamMember } from "@/lib/mockData";

interface Props {
  members: TeamMember[];
}

const dotColor: Record<TeamMember["status"], string> = {
  active: "bg-green-500",
  away: "bg-yellow-500",
  offline: "bg-gray-300",
};

export default function TeamWidget({ members }: Props) {
  return (
    <Card
      title="Team"
      action={
        <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
          Invite
        </a>
      }
      padded={false}
    >
      <ul className="divide-y divide-gray-100">
        {members.map((m) => (
          <li key={m.id} className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700">
                  {m.avatarInitials}
                </div>
                <span
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${dotColor[m.status]}`}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{m.name}</p>
                <p className="text-xs text-gray-500">{m.role}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 capitalize">{m.status}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
