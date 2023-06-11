import React, {Component} from "react";
import Summary from "./cv-components/Summary";
import Career from "./cv-components/Career";
import Education from "./cv-components/Education";
import Skills from "./cv-components/Skills";

class Achievements extends Component {
  render() {
    return (
      <div>
        <Summary />
        <Career />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Achievements;
