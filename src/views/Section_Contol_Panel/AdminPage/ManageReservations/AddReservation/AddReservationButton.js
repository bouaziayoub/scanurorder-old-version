import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddReservationButton.css";

function AddReservationButton(props) {
  return (
    <button className="add-reservation-button" onClick={props.onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddReservationButton;
