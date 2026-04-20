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
    <footer className="bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-700 text-white py-14 border-t-8 border-yellow-400 relative">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.6),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.6),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 unstyled-link">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-pink-400 via-orange-400 to-lime-400 flex items-center justify-center text-white text-sm font-black border-4 border-yellow-300 shadow">
                DF
              </div>
              <span className="font-black text-2xl tracking-tight italic">
                Deploy<span className="text-yellow-300">Flow!</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-pink-100 max-w-xs font-sans font-bold">
              The #1 deployment platform for fast-moving engineering teams!
            </p>
            <form className="mt-5 bg-white/10 border-4 border-yellow-300 p-4 rounded-md shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
              <label className="text-xs uppercase font-black tracking-widest text-yellow-300 block mb-2">
                ★ SUBSCRIBE FOR UPDATES! ★
              </label>
              <div className="flex">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-white text-gray-900 text-sm px-3 py-2 rounded-l-sm border-2 border-yellow-300 font-sans"
                />
                <button className="bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-xs font-black uppercase tracking-widest px-4 rounded-r-sm border-2 border-red-900 btn-shine">
                  JOIN!
                </button>
              </div>
              <p className="mt-2 text-[10px] text-pink-200 uppercase tracking-widest">
                No spam! Pinky promise 🤙
              </p>
            </form>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-black text-yellow-300 uppercase tracking-widest mb-4 border-b-2 border-yellow-300/50 pb-1">
                {c.title}
              </h4>
              <ul className="space-y-2 text-sm text-pink-100 font-bold">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-yellow-300 nav-link">
                      ▸ {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t-4 border-dashed border-yellow-300/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-pink-100 font-bold">
            © 2026 DeployFlow, Inc. All rights reserved. Made with 💖 in the cloud.
          </p>
          <div className="flex gap-3 text-xs font-black uppercase tracking-widest">
            {["Twitter", "GitHub", "LinkedIn"].map((l) => (
              <a
                key={l}
                href="#"
                className="bg-white/10 border-2 border-yellow-300 px-3 py-1 rounded-sm hover:bg-yellow-300 hover:text-purple-900 nav-link"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
