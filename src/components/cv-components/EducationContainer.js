import React, { Component } from "react";
import deleteIcon from "../img/delete.svg";

class EducationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-conainer--level">
        <p className="duration">{this.props.duration}</p>
        <div className="school-information">
          <h3 className="school-subtitle">{this.props.subtitle}</h3>
          <h4 className="school-name">{this.props.school}</h4>
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

export default EducationContainer;
