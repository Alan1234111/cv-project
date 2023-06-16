import React, {useState} from "react";
import deleteIcon from "../img/delete.svg";

function EducationContainer(props) {
  return (
    <div className="education-conainer--level">
      <p className="duration">{props.duration}</p>
      <div className="school-information">
        <h3 className="school-subtitle">{props.subtitle}</h3>
        <h4 className="school-name">{props.school}</h4>
      </div>

      {props.isEditable && (
        <button onClick={props.handleDelete} className="delete-btn-container">
          <img className="delete-icon" src={deleteIcon} alt="Delete" />
        </button>
      )}
    </div>
  );
}

export default EducationContainer;
