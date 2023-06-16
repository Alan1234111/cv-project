import React, {useState} from "react";
import Heading from "./Heading";

function Summary() {
  const [summary, setSummary] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable((prevVal) => !prevVal);
  }

  function handleChange(e) {
    setSummary(e.target.value);
  }

  return (
    <div className="summary">
      <Heading title="Summary:" handleEdit={handleEdit} />
      <section>{isEditable ? <textarea onChange={handleChange}>{summary}</textarea> : <p>{summary}</p>}</section>
    </div>
  );
}

export default Summary;
