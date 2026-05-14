export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-6xl rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 flex items-center justify-between shadow-2xl">
        <h1 className="text-xl font-bold text-cyan-400 tracking-wide">
          SpaceWeather
        </h1>

        <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <button className="hover:text-cyan-400 transition-colors">
            Dashboard
          </button>

          <button className="hover:text-cyan-400 transition-colors">
            Alerts
          </button>

          <button className="hover:text-cyan-400 transition-colors">
            Architecture
          </button>
        </div>
      </div>
    </nav>
  );
}
