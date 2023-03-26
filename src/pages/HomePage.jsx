import React from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "../components/Home/Hero";
import Works from "../components/Home/Works";
import Experiences from "../components/Home/Experiences";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-primary dark:bg-secondary z-20"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <Works />
      <Experiences />
      <div className="mt-[200px]">
      <Contact />
      </div>
      
      <Footer />
    </div>
  );
}
