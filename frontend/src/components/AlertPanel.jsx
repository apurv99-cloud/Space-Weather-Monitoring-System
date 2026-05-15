const alerts = [
  {
    title: "Geomagnetic Storm",
    level: "SEVERE",
    value: "Kp Index: 8.2",
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },
  {
    title: "Solar Wind Speed",
    level: "WARNING",
    value: "742 km/s",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/10",
    text: "text-yellow-300",
  },
  {
    title: "Radiation Status",
    level: "NORMAL",
    value: "Stable",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10",
    text: "text-cyan-300",
  },
];
export default function AlertPanel() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center">
          Live Alert System
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`rounded-3xl border ${alert.border} ${alert.bg} p-8 backdrop-blur-md shadow-xl`}
            >
              <p className="text-slate-400 mb-3">{alert.title}</p>

              <h3 className={`text-3xl font-black mb-4 ${alert.text}`}>
                {alert.level}
              </h3>

              <p className="text-slate-300">{alert.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
