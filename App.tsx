import CursorHearts from "./components/CursorHearts";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Facts from "./components/Facts";
import Reasons from "./components/Reasons";
import LoveNotes from "./components/LoveNotes";
import UsSection from "./components/UsSection";
import HeartGame from "./components/HeartGame";
import Timeline from "./components/Timeline";
import Finale from "./components/Finale";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FFF9F3] text-[#6E4A56]">
      <CursorHearts />
      <Hero />
      <Marquee />
      <Facts />
      <Reasons />
      <LoveNotes />
      <UsSection />
      <HeartGame />
      <Timeline />
      <Finale />
      <Footer />
    </div>
  );
}
