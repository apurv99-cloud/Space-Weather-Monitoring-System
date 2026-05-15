const stats = [
  {
    title: "Kp Index",
    value: "8.2",
    color: "text-cyan-400",
  },
  {
    title: "Solar Wind",
    value: "742 km/s",
    color: "text-yellow-400",
  },
  {
    title: "Radiation",
    value: "HIGH",
    color: "text-red-400",
  },
];

export default function Statscard() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-xl"
          >
            <p className="text-slate-400 mb-3">{item.title}</p>

            <h2 className={`text-4xl font-black ${item.color}`}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
