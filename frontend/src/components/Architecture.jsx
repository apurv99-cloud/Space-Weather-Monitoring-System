export default function Architecture() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md p-10 shadow-2xl">
        <h2 className="text-4xl font-black mb-12 text-center">
          Backend Flow Architecture
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 text-center">
          <div className="px-6 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
            NOAA API
          </div>

          <span className="text-slate-500 text-2xl">→</span>

          <div className="px-6 py-4 rounded-2xl bg-blue-500/10 border border-blue-400/20">
            Scheduler
          </div>

          <span className="text-slate-500 text-2xl">→</span>

          <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
            Service Layer
          </div>

          <span className="text-slate-500 text-2xl">→</span>

          <div className="px-6 py-4 rounded-2xl bg-purple-500/10 border border-purple-400/20">
            PostgreSQL
          </div>
          <span className="text-slate-500 text-2xl">→</span>

          <div className="px-6 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
            WebSockets
          </div>
        </div>
      </div>
    </section>
  );
}
