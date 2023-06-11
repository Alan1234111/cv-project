import React, {Component} from "react";
import editIcon from "../img/edit.svg";

class EditBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="editBtn" onClick={this.props.handleEdit}>
        <img className="editBtnIcon" src={editIcon} alt="edit" />
      </button>
    );
  }
}

export default EditBtn;
