import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import {motion, useScroll} from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-slate-200 snap-y snap-mandatory h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 to-yellow-300 z-20"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Hero />
      <Portfolio />
      <Experiences />
    </div>
  );
}

export default App;
