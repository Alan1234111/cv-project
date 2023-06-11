import React, {Component} from "react";
import Heading from "./Heading";
import SkillContainer from "./SkillContainer";
import rating1 from "../img/rating1.png";
import rating2 from "../img/rating2.png";
import rating3 from "../img/rating3.png";
import rating4 from "../img/rating4.png";
import rating5 from "../img/rating5.png";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Heading title="Skills:" />
        <SkillContainer skill="Skill 1" rating={rating1} />
      </div>
    );
  }
}

export default Skills;
