export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">System Architecture</h1>

      <div className="bg-slate-900 border border-white/10 rounded-3xl p-10">
        <p className="text-slate-300 text-lg leading-relaxed">
          NOAA APIs → Scheduler → Service Layer → PostgreSQL → WebSockets →
          Frontend Dashboard
        </p>
      </div>
    </div>
  );
}
