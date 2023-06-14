import React, { Component } from "react";
import deleteIcon from "../img/delete.svg";

class JobContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="career-conainer--job">
        <p className="duration">{this.props.duration}</p>
        <div className="company-information">
          <h3 className="company-name">{this.props.company}</h3>
          <h4 className="job-position">{this.props.position}</h4>
          <p className="job-description">{this.props.description}</p>
        </div>
        {this.props.isEditable && (
          <button
            onClick={this.props.handleDelete}
            className="delete-btn-container"
          >
            <img
              className="delete-icon"
              src={deleteIcon}
              alt="Delete"
            />
          </button>
        )}
      </div>
    );
  }
}

export default JobContainer;
