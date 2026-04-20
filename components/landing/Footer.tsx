import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Blog"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Status", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-indigo-950 text-gray-300 py-14 border-t-4 border-orange-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-indigo-600 flex items-center justify-center text-white text-sm font-black border-2 border-indigo-950">
                DF
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                Deploy<span className="text-orange-400">Flow</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs font-sans">
              The deployment platform for fast-moving engineering teams.
            </p>
            <form className="mt-5">
              <label className="text-[10px] uppercase font-bold tracking-widest text-orange-300">
                Subscribe to our newsletter
              </label>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-slate-800 border-2 border-slate-700 text-white text-sm px-3 py-2 rounded-l-sm placeholder-gray-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-widest px-4 rounded-r-sm">
                  Join ➜
                </button>
              </div>
            </form>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-black text-orange-300 uppercase tracking-widest mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t-2 border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs text-gray-500">
            © 2026 DeployFlow, Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
