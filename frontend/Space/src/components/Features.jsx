const features = [
  "NOAA API Integration",
  "WebSocket Live Updates",
  "Real-Time Monitoring",
  "Alert Evaluation Engine",
  "PostgreSQL Storage",
  "Spring Boot Backend",
];

export default function Features() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-14">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center shadow-xl"
            >
              <h3 className="text-xl font-semibold text-slate-200">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
