import Globe from "react-globe.gl";

export default function EarthVisulise() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Live Earth
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Space Activity
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Real-time visualization of geomagnetic storms, solar winds, aurora
              activity, and radiation anomalies powered by NOAA APIs and Spring
              Boot backend systems.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>

                <p className="text-slate-300">
                  SEVERE: Geomagnetic Storm Active
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

                <p className="text-slate-300">WARNING: Elevated Solar Wind</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-cyan-400"></div>

                <p className="text-slate-300">
                  NORMAL: Stable Space Conditions
                </p>
              </div>
            </div>
          </div>

          {/* GLOBE */}
          {/* GLOBE */}
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full flex justify-center items-center">
            <Globe
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              animateIn={true}
              width={
                typeof window !== "undefined"
                  ? window.innerWidth < 640
                    ? 300
                    : window.innerWidth < 1024
                      ? 400
                      : 500
                  : 500
              }
              height={
                typeof window !== "undefined"
                  ? window.innerWidth < 640
                    ? 300
                    : window.innerWidth < 1024
                      ? 400
                      : 500
                  : 500
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
