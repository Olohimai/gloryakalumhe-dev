import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills"; 
import About from "./components/About";

function App() {
  return (
    <div className="">
      <Header id="home" />
      <Skills />
      <Project />
      <About />
    </div>
  );
}

export default App;
