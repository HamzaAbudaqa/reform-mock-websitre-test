interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function Header({ title, subtitle, action }: Props) {
  return (
    <header className="bg-white border-b border-[#ddd] px-4 h-[50px] flex items-center">
      <div className="flex items-center justify-between gap-3 w-full">
        <div>
          <h1 className="text-base font-bold text-[#333]">{title}</h1>
          {subtitle && (
            <p className="text-xs text-[#777]">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block w-56 rounded-[3px] border border-[#ccc] bg-white px-2 py-1 text-sm text-[#333] placeholder-[#999] focus:outline-none focus:border-[#337ab7]"
          />
          {action}
          <div className="h-7 w-7 rounded-full bg-[#777] flex items-center justify-center text-[11px] font-bold text-white">
            HD
          </div>
        </div>
      </div>
    </header>
  );
}
