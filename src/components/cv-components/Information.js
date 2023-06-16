import React from "react";
import deleteIcon from "../img/delete.svg";

const InformationItem = ({information, text, isRemovable, handleDelete, id}) => (
  <li>
    <span>{`${information}: ${text ? `${text}` : ""}`}</span>
    {isRemovable && (
      <button onClick={() => handleDelete(id)} className="delete-btn">
        <img className="delete-icon" src={deleteIcon} alt="Delete" />
      </button>
    )}
  </li>
);

function Information(props) {
  const {listInformations, isRemovable, handleDelete} = props;

  return (
    <ul>
      {listInformations.map((info) => (
        <InformationItem key={info.id} information={info.information} text={info.text} isRemovable={isRemovable} handleDelete={handleDelete} id={info.id} />
      ))}
    </ul>
  );
}

export default Information;
