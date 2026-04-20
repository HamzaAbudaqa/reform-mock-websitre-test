import Card from "../ui/Card";
import { TeamMember } from "@/lib/mockData";

interface Props {
  members: TeamMember[];
}

const dotColor: Record<TeamMember["status"], string> = {
  active: "bg-[#5cb85c]",
  away: "bg-[#f0ad4e]",
  offline: "bg-[#bbb]",
};

export default function TeamWidget({ members }: Props) {
  return (
    <Card
      title="Team"
      action={
        <a href="#" className="text-xs text-[#337ab7] hover:underline">
          Invite
        </a>
      }
      padded={false}
    >
      <ul>
        {members.map((m, i) => (
          <li
            key={m.id}
            className={`flex items-center justify-between px-4 py-2.5 border-t border-[#eee] ${i === 0 ? "border-t-0" : ""}`}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="h-7 w-7 rounded-full bg-[#777] flex items-center justify-center text-[11px] font-bold text-white">
                  {m.avatarInitials}
                </div>
                <span
                  className={`absolute bottom-0 right-0 h-2 w-2 rounded-full ring-2 ring-white ${dotColor[m.status]}`}
                />
              </div>
              <div>
                <p className="text-sm text-[#333]">{m.name}</p>
                <p className="text-xs text-[#777]">{m.role}</p>
              </div>
            </div>
            <span className="text-xs text-[#999] capitalize">{m.status}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
