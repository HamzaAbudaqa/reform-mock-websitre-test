import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] border-b border-[#e7e7e7]">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-[#222] max-w-3xl mx-auto leading-tight">
          Ship software faster, with fewer surprises.
        </h1>

        <p className="mt-4 text-base text-[#555] max-w-2xl mx-auto leading-relaxed">
          DeployFlow gives engineering teams a single place to monitor
          deployments, track incidents, and manage environments.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <Button href="/dashboard" size="lg">
            Start free trial
          </Button>
          <Button href="#features" variant="secondary" size="lg">
            Learn more
          </Button>
        </div>

        <p className="mt-3 text-xs text-[#777]">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  );
}
