import React, {Component} from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";

class App extends Component {
  render() {
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
}

export default App;
