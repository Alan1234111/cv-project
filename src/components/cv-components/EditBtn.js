import React, {Component} from "react";
import editIcon from "../img/edit.svg";

class EditBtn extends Component {
  render() {
    return (
      <button className="editBtn">
        <img className="editBtnIcon" src={editIcon} alt="edit" />
      </button>
    );
  }
}

export default EditBtn;
