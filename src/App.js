import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills"; 
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Skills />
      <Project />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
