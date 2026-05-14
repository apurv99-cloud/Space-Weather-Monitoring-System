import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-md text-cyan-300 text-sm font-medium mb-8 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Real-Time Monitoring Platform
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 text-white">
          Monitor
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Space Weather
          </span>
          <br />
          In Real Time
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Advanced real-time monitoring platform powered by NOAA APIs,
          WebSockets, and event-driven backend architecture for tracking
          geomagnetic storms, solar radiation, and space anomalies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <button
            onClick={() => navigate("/dashboard")}
            className="
              group
              px-8 py-4
              rounded-2xl
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-white
              font-semibold
              shadow-[0_10px_40px_rgba(6,182,212,0.35)]
              hover:scale-105
              hover:shadow-[0_15px_50px_rgba(6,182,212,0.45)]
              transition-all duration-300
            "
          >
            Open Dashboard
          </button>

          <button
            onClick={() => navigate("/architecture")}
            className="
              px-8 py-4
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              text-slate-200
              font-medium
              hover:bg-white/10
              hover:border-cyan-400/20
              transition-all duration-300
            "
          >
            View Architecture
          </button>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl">
            <p className="text-slate-400 mb-2">Kp Index</p>

            <h3 className="text-4xl font-bold text-cyan-400">8.2</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl">
            <p className="text-slate-400 mb-2">Solar Wind</p>

            <h3 className="text-4xl font-bold text-blue-400">742 km/s</h3>
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 backdrop-blur-md p-6 shadow-xl">
            <p className="text-red-300 mb-2">Radiation</p>

            <h3 className="text-4xl font-bold text-red-400">HIGH</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
