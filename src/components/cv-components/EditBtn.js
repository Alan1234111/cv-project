import React, { Component } from "react";
import editIcon from "../img/edit.svg";

class EditBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.handleEdit} className="editBtn">
        <img className="editBtnIcon" src={editIcon} alt="edit" />
      </button>
    );
  }
}

export default EditBtn;
