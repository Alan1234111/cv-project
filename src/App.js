import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";

function App() {
  return (
    <main className="main">
      <Header />
      <div className="personal-information">
        <AboutMe />
        <Achievements />
      </div>
    </main>
  );
}

export default App;
