import React from "react";
import deleteIcon from "../img/delete.svg";

function SkillContainer(props) {
  return (
    <div className="skill">
      <p className="skill-name">{props.skill}</p>
      <img className="rating-img" src={props.rating} alt="" />
      {props.isEditable && (
        <button onClick={props.handleDelete} className="delete-btn-container">
          <img className="delete-icon" src={deleteIcon} alt="Delete" />
        </button>
      )}
    </div>
  );
}

export default SkillContainer;
