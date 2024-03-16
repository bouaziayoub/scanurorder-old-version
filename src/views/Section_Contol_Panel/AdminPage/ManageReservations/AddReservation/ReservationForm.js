import React from "react";
import "./ReservationForm.css";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

function ReservationForm(props) {
  const { t } = useTranslation();

  return (
    <form className="reservation-form">
      <label>{t("reservation.day")}:</label>
      <input
        type="date"
        name="date"
        value={props.reservationData.date}
        onChange={props.onChange}
      />

      <label>{t("reservation.hour")}:</label>
      <input
        type="time"
        name="time"
        value={props.reservationData.time}
        onChange={props.onChange}
      />

      <label>{t("reservation.numPeople")}:</label>
      <input
        type="number"
        name="numberOfPeople"
        value={props.reservationData.numberOfPeople}
        onChange={props.onChange}
      />

      <label>{t("login.email")}:</label>
      <input
        type="text"
        name="email"
        value={props.reservationData.email}
        onChange={props.onChange}
      />
      <ErrorMessage error={props.error} />

      <button className="btn btn-primary" onClick={props.onSubmit}>
        {t("reservation.btnAdd")}
      </button>
      <button className="btn btn-danger" onClick={props.onCancel}>
      {t("reservation.btnBack")}
      </button>
    </form>
  );
}

export default ReservationForm;
