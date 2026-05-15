import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statscard from "../components/Statscard";
import EarthVisulise from "../components/EarthVisulise";
import AlertPanel from "../components/AlertPanel";
import Features from "../components/Features";
import Architecture from "../components/Architecture";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Statscard />
      <EarthVisulise />
      <AlertPanel />
      <Features />
      <Architecture />
      <Footer />
    </div>
  );
}
