import React, {Component} from "react";
import Heading from "./Heading";
import EducationContainer from "./EducationContainer";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <Heading title="Education:" />

        <div className="education-container">
          <EducationContainer duration="2010 - 2020" subtitle="Bachelors in Something" school="SOME GOOD COLLEGE" />
        </div>
      </div>
    );
  }
}

export default Education;
