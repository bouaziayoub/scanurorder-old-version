import React, { useState, useEffect } from "react";
import "./ShowReseravation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import ManageReservations from "../ManageReservations";
import ShowReservationApi from "../../../../../api/ReservationsAPI/ShowReservationApi";

function ShowReseravation(props) {
  // Reservations
  const [showReservations, setShowReservations] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowReservationApi();
      setReservations(data.reservations);
    }
    fetchData();
  }, []);

  function handleNotificationClick() {
    setShowReservations(!showReservations);
  }

  return (
    <div className="notification-icon-container" style={{ right: props.right }}>
      <div onClick={handleNotificationClick}>
        <FontAwesomeIcon className="iconShow" icon={faCalendarAlt} size="3x" />
      </div>
      <div
        className="content_resevations"
        style={{
          right: showReservations ? 0 : "-300px",
        }}
      >
        {showReservations && <ManageReservations reservations={reservations} />}
      </div>
    </div>
  );
}

export default ShowReseravation;
