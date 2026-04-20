import Button from "../ui/Button";

interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function Header({ title, subtitle, action }: Props) {
  return (
    <>
      <div className="bg-orange-500 text-white text-xs py-1.5 px-6 font-bold uppercase tracking-wider flex items-center justify-between">
        <span>⚠ You are using 72% of your plan's deployment quota this month</span>
        <a href="#" className="underline">Upgrade →</a>
      </div>
      <header className="bg-white border-b-4 border-indigo-700 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900 font-serif">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-0.5 font-sans">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="🔍 Search..."
                className="w-64 rounded-sm border-2 border-gray-300 bg-gray-50 px-3 py-1.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button className="h-9 w-9 rounded-sm border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 text-sm relative">
              🔔
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border border-white">
                3
              </span>
            </button>
            {action}
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-black text-white ring-2 ring-orange-400">
              HD
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
