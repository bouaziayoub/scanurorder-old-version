import React, { useState } from "react";

import {
  CreateReservationApi,
  DeleteReservationApi,
} from "../../../../api/exportApi";
import AddReservationButton from "./AddReservation/AddReservationButton";
import ReservationForm from "./AddReservation/ReservationForm";
import { useTranslation } from "react-i18next";
import DeleteAlert from "../../../../components/Alerts/DeleteAlert/DeleteAlert";

function ManageReservations(props) {
  const { t } = useTranslation();

  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [, setConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    numberOfPeople: "",
    email: "",
  });

  const handleCancel = () => {
    setShowForm(false);
  };
  const handleAddReservation = async () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      reservationData.date.trim() === "" ||
      reservationData.time.trim() === "" ||
      reservationData.numberOfPeople.trim() === "" ||
      reservationData.email.trim() === ""
    ) {
      setError(t("errors.emptyFields"));
      return;
    } else {
      await CreateReservationApi(
        reservationData.date,
        reservationData.time,
        reservationData.numberOfPeople,
        reservationData.email
      );
      setShowForm(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (id) => {
    setIdToDelete(id);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    await DeleteReservationApi(idToDelete);
    setConfirmDelete(false);
    setIdToDelete(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setIdToDelete(null);
  };
  return (
    <div className="reservation-manager">
      <h3 className="text-uppercase text-center">{t("reservation.title")}</h3>
      <hr />
      {showForm ? null : (
        <>
          {props.reservations.map((reservation) => (
            <div
              key={reservation.id_reservation}
              className="showReservations_container"
            >
              <p>
                <b>{t("reservation.completeName")}: </b>
                {reservation.user && reservation.user.length > 0
                  ? reservation.user[0].email.split("@")[0] ||
                    reservation.user[0].last_name +
                      " " +
                      reservation.user[0].first_name
                  : ""}
              </p>
              <p>
                <b>{t("login.email")}: </b>
                {reservation.user && reservation.user.length > 0
                  ? reservation.user[0].email
                  : ""}
              </p>
              <p>
                <b>{t("reservation.numPeople")}: </b>{" "}
                {reservation.number_of_people}
              </p>
              <p>
                <b>{t("reservation.day")}: </b> {reservation.date}
              </p>
              <p>
                <b>{t("reservation.hour")}: </b> {reservation.time}
              </p>
              <DeleteAlert
                message={"Id " + t("reserva..") + reservation.id_reservation}
                onClick={() => handleDelete(reservation.id_reservation)}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
              />
              <hr />
            </div>
          ))}
          <AddReservationButton onClick={handleAddReservation} />
        </>
      )}
      {showForm && (
        <>
          <ReservationForm
            error={error}
            reservationData={reservationData}
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        </>
      )}
    </div>
  );
}

export default ManageReservations;
