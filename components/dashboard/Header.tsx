import Button from "../ui/Button";

interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function Header({ title, subtitle, action }: Props) {
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white text-xs py-1 font-black uppercase tracking-widest marquee border-b-2 border-red-800">
        <span>
          ⚠ YOU ARE USING 72% OF YOUR PLAN'S DEPLOYMENT QUOTA THIS MONTH · UPGRADE TO UNLIMITED · 🔥 SAVE 50% TODAY · TRIAL ENDS IN 9 DAYS · 🚀 NEW FEATURE: PREVIEW ENVIRONMENTS FOR EVERY PR
        </span>
      </div>
      <header className="bg-white border-b-[6px] border-pink-500 shadow-[0_4px_0_rgba(236,72,153,0.4)] px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 italic [text-shadow:2px_2px_0_rgba(236,72,153,0.25)]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-0.5 font-sans font-bold">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="🔍 Search..."
                className="w-60 rounded-sm border-[3px] border-purple-500 bg-yellow-50 px-3 py-1.5 text-sm font-bold placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-pink-300"
              />
            </div>
            <button className="h-10 w-10 rounded-sm border-[3px] border-purple-500 bg-yellow-50 hover:bg-yellow-100 text-base relative">
              🔔
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-white blink">
                3
              </span>
            </button>
            <button className="h-10 w-10 rounded-sm border-[3px] border-purple-500 bg-yellow-50 hover:bg-yellow-100 text-base">
              ✉️
            </button>
            {action}
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center text-xs font-black text-white ring-4 ring-yellow-300 border-2 border-white">
              HD
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
