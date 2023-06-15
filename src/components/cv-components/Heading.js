import React from "react";
import EditBtn from "./EditBtn";

function Heading(props) {
  return (
    <div className="heading">
      <h3>{props.title}</h3>
      <EditBtn handleEdit={props.handleEdit} />
    </div>
  );
}

export default Heading;
