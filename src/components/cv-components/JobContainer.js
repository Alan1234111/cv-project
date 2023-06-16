import React from "react";
import deleteIcon from "../img/delete.svg";

function JobContainer(props) {
  return (
    <div className="career-conainer--job">
      <p className="duration">{props.duration}</p>
      <div className="company-information">
        <h3 className="company-name">{props.company}</h3>
        <h4 className="job-position">{props.position}</h4>
        <p className="job-description">{props.description}</p>
      </div>
      {props.isEditable && (
        <button onClick={props.handleDelete} className="delete-btn-container">
          <img className="delete-icon" src={deleteIcon} alt="Delete" />
        </button>
      )}
    </div>
  );
}

export default JobContainer;
