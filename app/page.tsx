import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import Logos from "@/components/landing/Logos";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-[#e7e7e7] shadow-sm">
        <Navbar />
      </header>

      <main className="flex-1">
        {/* Hero — full-width, visually separated from nav */}
        <section className="bg-[#f5f5f5] border-b border-[#e7e7e7]">
          <Hero />
        </section>

        {/* Social proof strip */}
        <section className="bg-white border-b border-[#e7e7e7] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#999] mb-8">
              Trusted by engineering teams at fast-moving companies
            </p>
            <Logos />
          </div>
        </section>

        {/* Stats — card grid with big numbers */}
        <section className="bg-[#f5f5f5] border-b border-[#e7e7e7] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <Stats />
          </div>
        </section>

        {/* Features — icon-anchored cards */}
        <section id="features" className="bg-white border-b border-[#e7e7e7] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl font-bold text-[#222] mb-4">Everything your team needs</h2>
              <p className="text-base text-[#555] leading-relaxed">
                One platform to monitor deployments, track incidents, and manage environments — without the context switching.
              </p>
            </div>
            <Features />
          </div>
        </section>

        {/* Testimonials — avatar-backed trust cards */}
        <section id="customers" className="bg-[#f5f5f5] border-b border-[#e7e7e7] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-14">
              <h2 className="text-3xl font-bold text-[#222] mb-4">What customers say</h2>
              <p className="text-base text-[#555]">Real teams. Real results.</p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Pricing — clear plan hierarchy */}
        <section id="pricing" className="bg-white border-b border-[#e7e7e7] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-14">
              <h2 className="text-3xl font-bold text-[#222] mb-4">Simple, transparent pricing</h2>
              <p className="text-base text-[#555]">Start free. Upgrade as you grow.</p>
            </div>
            <Pricing />
          </div>
        </section>

        {/* Closing CTA band */}
        <section className="bg-[#337ab7] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to ship with confidence?</h2>
            <p className="text-base text-white opacity-80 mb-8 leading-relaxed">
              Join 800+ engineering teams already using DeployFlow to monitor deployments and resolve incidents faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-[3px] bg-white hover:bg-[#f5f5f5] text-[#337ab7] border border-white font-bold text-base px-8 py-3 no-underline"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="text-white opacity-80 hover:opacity-100 text-sm underline no-underline"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-xs text-white opacity-60">No credit card required. 14-day free trial.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f5f5] border-t border-[#e7e7e7]">
        <Footer />
      </footer>
    </div>
  );
}