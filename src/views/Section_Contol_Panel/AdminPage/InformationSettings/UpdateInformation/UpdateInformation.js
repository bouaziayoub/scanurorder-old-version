import React, { useState, useEffect } from "react";
import { Button, FormGroup, Label, Form, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  ShowEstablishmentApi,
  UpdateEstablishmentApi,
  UploadImageApi,
} from "../../../../../api/exportApi";

import "./UpdateInformation.css";
import {
  validateDescription,
  validateEmail,
  validateName,
  validatePhone,
} from "../../../../../utils/exportUtils";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

const UpdateInformation = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptsReservations, setAcceptsReservations] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [website, setWebsite] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [error, setError] = useState("");

  // I'm using the showEstablishment to fill the fields of the form the make it easier to use
  useEffect(() => {
    async function fetchData() {
      const establishmentData = await ShowEstablishmentApi();

      setName(establishmentData.name);
      setAddress(establishmentData.address);
      setPhone(establishmentData.phone);
      setEmail(establishmentData.email);
      setDescription(establishmentData.description);
      setWebsite(establishmentData.website);
      setWhatsapp(establishmentData.whatsapp);
      setInstagram(establishmentData.instagram);
      setTwitter(establishmentData.twitter);
      setYoutube(establishmentData.youtube);
      setFacebook(establishmentData.facebook);
      setLinkedin(establishmentData.linkedin);
    }
    fetchData();
  }, []);

  const idEstablishment = localStorage.getItem("id_establishment");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageURL(file);
  };

  function handleRadioChange(event) {
    if (event.target.id === "reservations-yes") {
      setAcceptsReservations("true");
    } else {
      setAcceptsReservations("false");
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateName(name)) {
      setError(t("errors.name"));
    } else if (!validateEmail(email)) {
      setError(t("errors.email"));
    } else if (!validateDescription(description)) {
      setError(t("errors.description"));
    } else if (!validatePhone(phone)) {
      setError(t("errors.phone"));
    } else {
      const response = await UploadImageApi(imageURL);

      const responseBody = await response.json();
      const url_logo = responseBody.url;

      await UpdateEstablishmentApi(
        idEstablishment,
        name,
        description,
        acceptsReservations,
        phone,
        address,
        email,
        website,
        url_logo,
        whatsapp,
        instagram,
        twitter,
        youtube,
        facebook,
        linkedin
      );
    }
    alert("Perfect! The changes have been saved correctly|");
    window.location.reload();
  }
  const [showSocialMediaInputs, setShowSocialMediaInputs] = useState(false);

  return (
    <>
      {" "}
      <h2 className=" text-light text-center text-uppercase p-3 m-4">
        {t("info.title1")}
      </h2>
      <div id="" className="divColumnForm_container">
        <div className="card bg-dark text-white mx-auto">
          <div className="formInfromationBasic card-body">
            <Form className="">
              {!showSocialMediaInputs ? (
                <>
                  <h4 className="text-center p-3">{t("info.subTitle1")}</h4>
                  <div className="row">
                    <FormGroup className="col-6">
                      <Input
                        placeholder={
                          t("form.input") +
                          t("form.name") +
                          t("info.establishment")
                        }
                        value={"" || name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="col-6">
                      <Input
                        className=""
                        type="file"
                        name="logo"
                        id="logo"
                        onChange={handleImageChange}
                      />
                    </FormGroup>
                  </div>

                  <FormGroup>
                    <Input
                      type="address"
                      name="address"
                      id="address"
                      placeholder={
                        t("form.input") +
                        t("form.address") +
                        t("info.establishment")
                      }
                      value={address || ""}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder={t("form.input") + t("form.tel")}
                      value={phone || ""}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormGroup>
                  <Label>{t("form.reservasQs")}</Label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="reservations"
                        id="reservations-yes"
                        value="Yes"
                        onChange={handleRadioChange}
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="reservations-yes"
                      >
                        {t("form.yes")}
                      </Label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="reservations"
                        id="reservations-no"
                        value="No"
                        onChange={handleRadioChange}
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="reservations-no"
                      >
                        No
                      </Label>
                    </div>
                  </div>

                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("form.input") + t("login.email")}
                      value={email || ""}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder={t("form.input") + t("form.description")}
                      value={description || ""}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormGroup>
                </>
              ) : null}

              {showSocialMediaInputs ? (
                <>
                  <h4 className="text-center p-3">{t("info.subTitle2")}</h4>
                  <FormGroup>
                    <Input
                      type="text"
                      name="website"
                      id="website"
                      placeholder={t("form.input") + t("form.web")}
                      value={website || ""}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="whatsapp"
                      id="whatsapp"
                      placeholder={
                        t("form.input") + t("form.number") + "whatsapp"
                      }
                      value={whatsapp || ""}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="instagram"
                      id="instagram"
                      placeholder={t("form.input") + "Instagram"}
                      value={instagram || ""}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder={t("form.input") + "Twitter"}
                      value={twitter || ""}
                      onChange={(e) => setTwitter(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="youtube"
                      id="youtube"
                      placeholder={t("form.input") + "Youtube"}
                      value={youtube || ""}
                      onChange={(e) => setYoutube(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="facebook"
                      id="facebook"
                      placeholder={t("form.input") + "Facebook"}
                      value={facebook || ""}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      placeholder={t("form.input") + "Linkedin"}
                      value={"" || linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </FormGroup>
                </>
              ) : null}
              <FormGroup className="text-center">
                {showSocialMediaInputs ? (
                  <Button
                    onClick={() =>
                      setShowSocialMediaInputs(!showSocialMediaInputs)
                    }
                    className="text-start"
                    color="light"
                  >
                    {showSocialMediaInputs ? (
                      <>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        <span className="btn_icon_left">
                          {t("button.edit") + t("info.subTitle1")}
                        </span>
                      </>
                    ) : null}
                  </Button>
                ) : null}
                <Button className="mx-4" color="primary" onClick={handleSubmit}>
                  {t("button.save")}
                </Button>
                {!showSocialMediaInputs ? (
                  <Button
                    onClick={() =>
                      setShowSocialMediaInputs(!showSocialMediaInputs)
                    }
                    className="text-start"
                    color="light"
                  >
                    {!showSocialMediaInputs ? (
                      <>
                        <span className="btn_icon_right">
                          {t("button.edit") + t("info.subTitle2")}
                        </span>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </>
                    ) : null}
                  </Button>
                ) : null}
              </FormGroup>

              <ErrorMessage error={error} />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateInformation;
