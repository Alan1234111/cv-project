import React, { Component } from "react";
import Heading from "./Heading";
import JobContainer from "./JobContainer";

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {
      career: [
        {
          id: 1,
          startingYear: "2010",
          endingYear: "2020",
          companyName: "Company 1",
          position: "Position 1",
          workDescription: "Lorem ipsum dolor sit amet",
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
    const companyName = e.target.elements["company"].value;
    const position = e.target.elements["position"].value;
    const wordDescription =
      e.target.elements["work-description"].value;

    const newCareer = {
      id: Date.now(),
      startingYear: startingYear,
      endingYear: endingYear,
      companyName: companyName,
      position: position,
      workDescription: wordDescription,
    };
    const updatedCareer = [...this.state.career, newCareer];

    this.setState({
      career: updatedCareer,
      isEditable: false,
    });
  };

  handleDelete = (id) => {
    const updatedList = this.state.career.filter(
      (item) => item.id !== id
    );

    this.setState({
      career: updatedList,
    });
  };

  render() {
    return (
      <div className="career">
        <Heading title="Career:" handleEdit={this.handleEdit} />
        <div className="career-container">
          {this.state.isEditable && (
            <div>
              <h3>Add Career Details:</h3>
              <form onSubmit={this.handleSubmit} className="form">
                <label htmlFor="starting-year">Starting Year:</label>
                <input id="starting-year" />

                <label htmlFor="ending-year">Ending Year:</label>
                <input id="ending-year" />

                <label htmlFor="company">Company Name:</label>
                <input id="company" />

                <label htmlFor="position">Position:</label>
                <input id="position" />

                <label htmlFor="work-description">
                  Work Done/Handled
                </label>
                <input id="work-description" />

                <button className="btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
          {this.state.career.map((job) => {
            return (
              <JobContainer
                key={job.id}
                duration={`${job.startingYear} - ${job.endingYear}`}
                company={job.companyName}
                position={job.position}
                description={job.workDescription}
                isEditable={this.state.isEditable}
                handleDelete={() => this.handleDelete(job.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Career;
