import React, { Component } from "react";
import Heading from "./Heading";
import SkillContainer from "./SkillContainer";
import rating1 from "../img/rating1.png";
import rating2 from "../img/rating2.png";
import rating3 from "../img/rating3.png";
import rating4 from "../img/rating4.png";
import rating5 from "../img/rating5.png";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skills: [
        {
          id: 1,
          skillName: "Skill 1",
          rating: 1,
        },
      ],
      isEditable: false,
    };
  }

  handleEdit = () => {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const skillName = e.target.elements["skill"].value;
    const rating = e.target.elements["rating"].value;

    const newSkills = {
      id: Date.now(),
      skillName: skillName,
      rating: rating,
    };
    const updatedSkills = [...this.state.skills, newSkills];

    this.setState({
      skills: updatedSkills,
      isEditable: false,
    });
  };

  handleDelete = (id) => {
    const updatedList = this.state.skills.filter(
      (item) => item.id !== id
    );

    this.setState({
      skills: updatedList,
    });
  };

  render() {
    const raitings = [rating1, rating2, rating3, rating4, rating5];
    return (
      <div className="skills">
        <Heading title="Skills:" handleEdit={this.handleEdit} />
        {this.state.isEditable && (
          <form onSubmit={this.handleSubmit} className="form">
            <label htmlFor="skill">Add Skill:</label>
            <input id="skill" />

            <label htmlFor="rating">Rating(1-5):</label>
            <input
              className="input-number"
              id="rating"
              type="number"
              min="1"
              max="5"
            />

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        )}

        {this.state.skills.map((skill) => {
          return (
            <SkillContainer
              skill={skill.skillName}
              rating={raitings[skill.rating - 1]}
              handleDelete={() => this.handleDelete(skill.id)}
              isEditable={this.state.isEditable}
            />
          );
        })}
      </div>
    );
  }
}

export default Skills;
