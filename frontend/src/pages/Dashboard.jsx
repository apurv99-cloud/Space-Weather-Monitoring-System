import { useEffect, useState } from "react";

import { getLatestWeather } from "../Service/weatherApi";

import { connectWebSocket, disconnectWebSocket } from "../Service/websocket";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

import {
  FiActivity,
  FiAlertTriangle,
  FiWind,
  FiCpu,
  FiClock,
  FiDatabase,
} from "react-icons/fi";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);

  const [history, setHistory] = useState([]);

  const [liveAlert, setLiveAlert] = useState(null);

  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLatestWeather();

        setHistory(data);

        setWeather(data[0]);

        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 60000);

    connectWebSocket((alertData) => {
      console.log("Live Alert:", alertData);

      setLiveAlert(alertData);

      setWeather(alertData);

      setHistory((prev) => [alertData, ...prev]);

      setLastUpdated(new Date().toLocaleTimeString());

      setTimeout(() => {
        setLiveAlert(null);
      }, 6000);
    });

    return () => {
      clearInterval(interval);

      disconnectWebSocket();
    };
  }, []);

  if (!weather) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

          <h2 className="text-2xl font-bold">Initializing Space Systems...</h2>
        </div>
      </div>
    );
  }

  const chartData = history
    .slice()
    .reverse()
    .map((item, index) => ({
      name: index + 1,
      kp: item.kpindex,
      wind: item.solarSpeedOfWind,
      radiation: item.levelOfRadiation,
    }));

  const pieData = [
    {
      name: "Normal",
      value: history.filter((i) => i.alertLevel === "NORMAL").length,
    },
    {
      name: "Warning",
      value: history.filter((i) => i.alertLevel === "WARNING").length,
    },
    {
      name: "Severe",
      value: history.filter((i) => i.alertLevel === "SEVERE").length,
    },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444"];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* LIVE ALERT */}
      {liveAlert && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="
            fixed top-6 right-6 z-50
            bg-red-500/20
            border border-red-500/40
            backdrop-blur-2xl
            px-8 py-5
            rounded-3xl
            shadow-[0_0_50px_rgba(239,68,68,0.25)]
          "
        >
          <h2 className="text-red-400 text-2xl font-black mb-3">
            🚨 SEVERE ALERT
          </h2>

          <p className="text-slate-200 text-lg">
            Kp Index: {liveAlert.kpindex}
          </p>

          <p className="text-slate-200 text-lg">
            Solar Wind: {liveAlert.solarSpeedOfWind}
          </p>
        </motion.div>
      )}

      {/* HEADER */}
      <div className="relative z-10 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <p className="uppercase tracking-[0.3em] text-green-400 text-sm font-semibold">
            NOAA Connected • WebSocket Active
          </p>
        </div>

        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
          Space Weather
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Monitoring System
          </span>
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl">
          Real-time solar storm intelligence platform powered by Spring Boot,
          NOAA APIs, WebSockets, and live event-driven systems.
        </p>
      </div>

      {/* MINI STATS */}
      <div className="grid md:grid-cols-4 gap-5 mb-10">
        {[
          {
            title: "Records",
            value: history.length,
            icon: <FiDatabase />,
          },
          {
            title: "WebSocket",
            value: "LIVE",
            icon: <FiCpu />,
          },
          {
            title: "Last Update",
            value: lastUpdated,
            icon: <FiClock />,
          },
          {
            title: "Radiation",
            value: weather.levelOfRadiation?.toFixed(2),
            icon: <FiActivity />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-5
            "
          >
            <div className="text-cyan-400 text-2xl mb-3">{item.icon}</div>

            <p className="text-slate-400 text-sm">{item.title}</p>

            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* TOP CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* KP CARD */}
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          className="
            relative overflow-hidden
            bg-gradient-to-br
            from-slate-900/90
            to-slate-950/90
            border border-cyan-500/20
            rounded-[32px]
            p-8
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(6,182,212,0.08)]
          "
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

          <FiActivity className="text-cyan-400 text-4xl mb-6" />

          <p className="text-slate-400 text-lg mb-4">Kp Index</p>

          <h2 className="text-6xl font-black text-cyan-400 tracking-tight">
            {weather.kpindex?.toFixed(1)}
          </h2>

          <p className="text-cyan-300 mt-4 text-sm">Geomagnetic Activity</p>
        </motion.div>

        {/* SOLAR WIND */}
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          className="
            relative overflow-hidden
            bg-gradient-to-br
            from-slate-900/90
            to-slate-950/90
            border border-blue-500/20
            rounded-[32px]
            p-8
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(59,130,246,0.08)]
          "
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

          <FiWind className="text-blue-400 text-4xl mb-6" />

          <p className="text-slate-400 text-lg mb-4">Solar Wind</p>

          <h2 className="text-6xl font-black text-blue-400 tracking-tight">
            {weather.solarSpeedOfWind?.toFixed(1)}

            <span className="text-2xl"> km/s</span>
          </h2>

          <p className="text-blue-300 mt-4 text-sm">NOAA Plasma Stream</p>
        </motion.div>

        {/* ALERT */}
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          className={`
            relative overflow-hidden
            rounded-[32px]
            p-8
            backdrop-blur-2xl
            border

            ${
              weather.alertLevel === "SEVERE"
                ? "bg-red-500/10 border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.18)]"
                : weather.alertLevel === "WARNING"
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-green-500/10 border-green-500/20"
            }
          `}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-3xl rounded-full" />

          <FiAlertTriangle className="text-red-400 text-4xl mb-6" />

          <p className="text-slate-300 text-lg mb-4">Alert Level</p>

          <h2
            className={`
              text-6xl font-black tracking-tight

              ${
                weather.alertLevel === "SEVERE"
                  ? "text-red-500 animate-pulse"
                  : weather.alertLevel === "WARNING"
                    ? "text-yellow-400"
                    : "text-green-400"
              }
            `}
          >
            {weather.alertLevel}
          </h2>

          <p className="text-slate-400 mt-4 text-sm">
            Real-Time Event Classification
          </p>
        </motion.div>
      </div>

      {/* CHARTS */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* KP GRAPH */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-slate-900/70
            border border-cyan-500/10
            rounded-[32px]
            p-8
            backdrop-blur-xl
          "
        >
          <h2 className="text-3xl font-bold mb-8">Kp Index Trend</h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="kpGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#1e293b"
                vertical={false}
              />

              <XAxis
                dataKey="name"
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                domain={[0, "auto"]}
              />

              <Tooltip
                contentStyle={{
                  background: "#020617",
                  border: "1px solid #0f172a",
                  borderRadius: "16px",
                  color: "#fff",
                }}
              />

              {/* Glow Area */}
              <Area
                type="monotone"
                dataKey="kp"
                stroke="none"
                fill="url(#kpGlow)"
                fillOpacity={1}
              />

              {/* Main Line */}
              <Line
                type="monotone"
                dataKey="kp"
                stroke="#22d3ee"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  stroke: "#22d3ee",
                  strokeWidth: 2,
                  fill: "#0f172a",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* SOLAR GRAPH */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-slate-900/70
            border border-blue-500/10
            rounded-[32px]
            p-8
            backdrop-blur-xl
          "
        >
          <h2 className="text-3xl font-bold mb-8">Solar Wind Activity</h2>

          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorWind" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />

                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

              <XAxis dataKey="name" stroke="#94a3b8" />

              <YAxis stroke="#94a3b8" />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="wind"
                stroke="#3b82f6"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorWind)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* PIE + FEED */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* PIE */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-slate-900/70
            border border-white/10
            rounded-[32px]
            p-8
            backdrop-blur-xl
          "
        >
          <h2 className="text-3xl font-bold mb-8">Alert Distribution</h2>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={130}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* FEED */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-slate-900/70
            border border-white/10
            rounded-[32px]
            p-8
            backdrop-blur-xl
          "
        >
          <h2 className="text-3xl font-bold mb-8">Live Activity Feed</h2>

          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  border border-white/10
                  rounded-2xl
                  p-5
                  bg-white/[0.03]
                "
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg">Alert Status</p>

                  <span
                    className={`
                      px-4 py-1 rounded-full text-sm font-semibold

                      ${
                        item.alertLevel === "SEVERE"
                          ? "bg-red-500/20 text-red-400"
                          : item.alertLevel === "WARNING"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      }
                    `}
                  >
                    {item.alertLevel}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Kp Index</p>

                    <p className="text-cyan-400 text-lg font-bold">
                      {item.kpindex}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Solar Wind</p>

                    <p className="text-blue-400 text-lg font-bold">
                      {item.solarSpeedOfWind}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
