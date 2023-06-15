import React, { Component } from "react";
import editIcon from "../img/edit.svg";

function EditBtn(props) {
  return (
    <button onClick={props.handleEdit} className="editBtn">
      <img className="editBtnIcon" src={editIcon} alt="edit" />
    </button>
  );
}

export default EditBtn;
