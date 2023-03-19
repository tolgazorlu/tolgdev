import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="bg-slate-200 snap-y snap-mandatory h-screen overflow-scroll">
      <Navbar />
      <Hero />
      <Portfolio />
      <Experiences />
    </div>
  );
}

export default App;
