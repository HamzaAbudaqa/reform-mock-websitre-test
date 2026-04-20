import Link from "next/link";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Careers", "Contact", "Blog"] },
  { title: "Resources", links: ["Docs", "API Reference", "Status", "Support"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#e7e7e7] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="col-span-2">
            <Link href="/" className="text-base font-bold text-[#333] no-underline">
              DeployFlow
            </Link>
            <p className="mt-2 text-xs text-[#777] max-w-xs">
              The deployment platform for engineering teams.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-bold text-[#333] uppercase mb-3">
                {c.title}
              </h4>
              <ul className="space-y-1.5 text-xs text-[#777]">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-[#333] no-underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-[#ddd] flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-[#999]">
            © 2026 DeployFlow, Inc. All rights reserved.
          </p>
          <div className="flex gap-3 text-xs text-[#999]">
            <a href="#" className="hover:text-[#333] no-underline">Twitter</a>
            <a href="#" className="hover:text-[#333] no-underline">GitHub</a>
            <a href="#" className="hover:text-[#333] no-underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
