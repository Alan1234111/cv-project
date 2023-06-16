import React from "react";
import Summary from "./cv-components/Summary";
import Career from "./cv-components/Career";
import Education from "./cv-components/Education";
import Skills from "./cv-components/Skills";

function Achievements() {
  return (
    <div>
      <Summary />
      <Career />
      <Education />
      <Skills />
    </div>
  );
}

export default Achievements;
