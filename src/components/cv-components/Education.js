import React, { Component } from "react";
import Heading from "./Heading";
import EducationContainer from "./EducationContainer";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [
        {
          startingYear: "2010",
          endingYear: "2020",
          subtitle: "Bachelors in Something",
          courseDone: "SOME GOOD COLEGE",
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
    const updatedEducation = [...this.state.education, newEducation];

    this.setState({
      education: updatedEducation,
      isEditable: false,
    });
  };

  handleDelete = (id) => {
    const updatedList = this.state.education.filter(
      (item) => item.id !== id
    );

    this.setState({
      education: updatedList,
    });
  };

  render() {
    return (
      <div className="education">
        <Heading title="Education:" handleEdit={this.handleEdit} />

        <div className="education-container">
          {this.state.isEditable && (
            <form onSubmit={this.handleSubmit} className="form">
              <label htmlFor="starting-year">Starting Year:</label>
              <input id="starting-year" />

              <label htmlFor="ending-year">Ending Year:</label>
              <input id="ending-year" />

              <label htmlFor="school-name">
                College/School Name:
              </label>
              <input id="school-name" />

              <label htmlFor="course-done">Course Done:</label>
              <input id="course-done" />

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          )}

          {this.state.education.map((education) => {
            return (
              <EducationContainer
                key={education.id}
                duration={`${education.startingYear} - ${education.endingYear}`}
                subtitle={education.schoolName}
                school={education.courseDone}
                isEditable={this.state.isEditable}
                handleDelete={() => this.handleDelete(education.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Education;
