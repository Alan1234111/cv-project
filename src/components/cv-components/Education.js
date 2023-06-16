import React, {useState} from "react";
import Heading from "./Heading";
import EducationContainer from "./EducationContainer";

function Education(props) {
  const [education, setEducation] = useState([
    {
      startingYear: "2010",
      endingYear: "2020",
      subtitle: "Bachelors in Something",
      courseDone: "SOME GOOD COLEGE",
    },
  ]);
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable((prevValue) => !prevValue);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const startingYear = e.target.elements["starting-year"].value;
    const endingYear = e.target.elements["ending-year"].value;
    const schoolName = e.target.elements["school-name"].value;
    const courseDone = e.target.elements["course-done"].value;

    const newEducation = {
      id: Date.now(),
      startingYear: startingYear,
      endingYear: endingYear,
      schoolName: schoolName,
      courseDone: courseDone,
    };

    setEducation((prevEducation) => {
      return [...prevEducation, newEducation];
    });
    setIsEditable((prevValue) => !prevValue);
  }

  function handleDelete(id) {
    const updatedList = education.filter((item) => item.id !== id);

    setEducation(updatedList);
  }

  return (
    <div className="education">
      <Heading title="Education:" handleEdit={handleEdit} />

      <div className="education-container">
        {isEditable && (
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="starting-year">Starting Year:</label>
            <input id="starting-year" />

            <label htmlFor="ending-year">Ending Year:</label>
            <input id="ending-year" />

            <label htmlFor="school-name">College/School Name:</label>
            <input id="school-name" />

            <label htmlFor="course-done">Course Done:</label>
            <input id="course-done" />

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        )}

        {education.map((education) => {
          return <EducationContainer key={education.id} duration={`${education.startingYear} - ${education.endingYear}`} subtitle={education.schoolName} school={education.courseDone} isEditable={isEditable} handleDelete={() => handleDelete(education.id)} />;
        })}
      </div>
    </div>
  );
}

export default Education;
