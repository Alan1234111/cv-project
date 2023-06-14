import React, { Component } from "react";
import deleteIcon from "../img/delete.svg";

class SkillContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill">
        <p className="skill-name">{this.props.skill}</p>
        <img className="rating-img" src={this.props.rating} alt="" />
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

export default SkillContainer;
