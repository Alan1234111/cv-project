import React, { Component } from "react";
import EditBtn from "./EditBtn";

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="heading">
        <h3>{this.props.title}</h3>
        <EditBtn handleEdit={this.props.handleEdit} />
      </div>
    );
  }
}

export default Heading;
