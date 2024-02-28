import React from 'react'
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Technologies/>
      <Footer/>
    </div>
  );
}

export default App;
