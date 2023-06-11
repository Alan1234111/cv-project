import React, {Component} from "react";
import Heading from "./Heading";
import EditBtn from "./EditBtn";

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isEditable: false,
    };
  }

  handleEdit = () => {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };

  handleChange = (e) => {
    this.setState({
      summary: e.target.value,
    });
  };

  render() {
    return (
      <div className="summary">
        <Heading title="Summary:" handleEdit={this.handleEdit} />
        <section>{this.state.isEditable ? <textarea onChange={this.handleChange}>{this.state.summary}</textarea> : <p>{this.state.summary}</p>}</section>
      </div>
    );
  }
}

export default Summary;
