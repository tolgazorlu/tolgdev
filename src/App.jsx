import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Blog from "./pages/BlogPage";

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/blog" Component={Blog} />
        </Routes>
      </Router>
    </div>
  );
}
