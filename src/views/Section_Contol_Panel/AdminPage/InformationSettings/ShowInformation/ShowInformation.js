import "./ShowInformation.css";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShowEstablishmentApi } from "../../../../../api/exportApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faCheck,
  faGlobe,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ShowIsOpen from "./ShowIsOpen/ShowIsOpen";
import ShowReseravation from "../../ManageReservations/ShowReservations/ShowReseravation";

const ShowInformation = ({ authorized }) => {
  const { t } = useTranslation();

  authorized = sessionStorage.getItem("admin");

  const [establishment, setEstablishment] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("id_establishment");
    const fetchEstablishment = async () => {
      const response = await ShowEstablishmentApi(id);
      setEstablishment(response);
    };

    fetchEstablishment();
  }, []);

  const establishmentDetails = [
    {
      label: "Allows Reservations",
      value: establishment?.allows_reservations
        ? t("info.allowReser")
        : t("info.noAllowReser"),
      icon: establishment?.allows_reservations ? faCheck : faTimes,
    },
    {
      label: "Phone",
      value: establishment?.phone ? establishment.phone : "Ex: +34 XXX XXX XXX",
      icon: faPhone,
    },
    {
      label: "Address",
      value: establishment?.address
        ? establishment.address
        : "Ex: Street, number, CP, city",
      icon: faMapMarkerAlt,
    },
    {
      label: "Email",
      value: establishment?.email
        ? establishment.email
        : "Ex: scanurorder@establishment.cat",
      icon: faEnvelope,
    },
    {
      label: "Website",
      value: establishment?.website ? (
        <span href={establishment.website}>{establishment.website}</span>
      ) : (
        "N/A"
      ),
      icon: faGlobe,
    },
    {
      label: "WhatsApp",
      value: establishment?.whatsapp ? establishment.whatsapp : "N/A",
      icon: faWhatsapp,
    },
    {
      label: "Instagram",
      value: establishment?.instagram ? (
        <span href={establishment.instagram}>{establishment.instagram}</span>
      ) : null,
      icon: faInstagram,
    },
    {
      label: "Facebook",
      value: establishment?.facebook ? (
        <span href={establishment.facebook}>{establishment.facebook}</span>
      ) : null,
      icon: faFacebook,
    },
    {
      label: "Twitter",
      value: establishment?.twitter ? (
        <span href={establishment.twitter}>{establishment.twitter}</span>
      ) : null,
      icon: faTwitter,
    },
    {
      label: "YouTube",
      value: establishment?.youtube ? (
        <span href={establishment.youtube}>{establishment.youtube}</span>
      ) : null,
      icon: faYoutube,
    },
    {
      label: "LinkedIn",
      value: establishment?.linkedin ? (
        <span href={establishment.linkedin}>{establishment.linkedin}</span>
      ) : null,
      icon: faLinkedin,
    },
  ];

  return (
    <>
      {authorized ? (
        <>
          <div className="my-element containerInfo">
            <img className="imgShowInfo" src={establishment?.logo_url} alt=""/>

            <div className="top-left-info container">
              <h1>
                {establishment?.name
                  ? establishment.name
                  : "Establishment Name"}
              </h1>
              <p>
                {establishment?.description
                  ? establishment.description
                  : "Description..."}
              </p>
              <ShowIsOpen />
              <div className="row">
                <div className="col-md-6">
                  <h4>{t("button.details")}</h4>
                  <ul className="list-unstyled">
                    {establishmentDetails.map(
                      (detail) =>
                        detail.value && (
                          <li className="" key={detail.label}>
                            <strong>
                              <FontAwesomeIcon
                                icon={detail.icon}
                                className="mx-3"
                              />
                            </strong>
                            {detail.value}
                          </li>
                        )
                    )}
                  </ul>
                </div>

                <div className="col-md-6 ">
                  <h5 className=""> {t("info.logo")}</h5>
                  <img
                    src={establishment?.logo_url}
                    alt="Establishment logo"
                    className=" img-thumbnail"
                  />
                </div>
              </div>
              <Link to="/infoSetting" className="">
                {t("info.updateInfo")}
              </Link>
            </div>
          </div>
          <div>
            <div>
              <ShowReseravation />
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ShowInformation;
