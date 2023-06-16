import React, {useState} from "react";
import Heading from "./Heading";
import SkillContainer from "./SkillContainer";
import rating1 from "../img/rating1.png";
import rating2 from "../img/rating2.png";
import rating3 from "../img/rating3.png";
import rating4 from "../img/rating4.png";
import rating5 from "../img/rating5.png";

function Skills(props) {
  const [skills, setSkills] = useState([
    {
      id: 1,
      skillName: "Skill 1",
      rating: 1,
    },
  ]);
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable((prevVal) => !prevVal);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const skillName = e.target.elements["skill"].value;
    const rating = e.target.elements["rating"].value;

    const newSkills = {
      id: Date.now(),
      skillName: skillName,
      rating: rating,
    };

    setSkills([...skills, newSkills]);
    setIsEditable((prevVal) => !prevVal);
  }

  function handleDelete(id) {
    const updatedList = skills.filter((item) => item.id !== id);

    setSkills(updatedList);
  }

  const raitings = [rating1, rating2, rating3, rating4, rating5];
  return (
    <div className="skills">
      <Heading title="Skills:" handleEdit={handleEdit} />
      {isEditable && (
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="skill">Add Skill:</label>
          <input id="skill" />

          <label htmlFor="rating">Rating(1-5):</label>
          <input className="input-number" id="rating" type="number" min="1" max="5" />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      )}

      {skills.map((skill) => {
        return <SkillContainer skill={skill.skillName} rating={raitings[skill.rating - 1]} handleDelete={() => handleDelete(skill.id)} isEditable={isEditable} />;
      })}
    </div>
  );
}

export default Skills;
