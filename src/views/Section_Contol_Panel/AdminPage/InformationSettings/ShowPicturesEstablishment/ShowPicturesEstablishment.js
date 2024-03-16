import React, { useState, useEffect } from "react";
import "./ShowPicturesEstablishment.css";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import {
  DeletePicturesApi,
  DeletePicturesEstablishmentApi,
  ShowPicEstablishmentApi,
} from "../../../../../api/exportApi";
import ModalUploadPictures from "./ModalUploadPictures/ModalUploadPictures";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert/DeleteAlert";

const ShowPicturesEstablishment = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const picturesPerPage = 6;
  const id_establishment = localStorage.getItem("id_establishment");
  const [pictures, setPictures] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [, setConfirmDelete] = useState(false);
  const [urlToDelete, setUrlToDelete] = useState("");

  useEffect(() => {
    async function fetchPictures() {
      const response = await ShowPicEstablishmentApi(id_establishment);
      setPictures(response.result);
    }

    fetchPictures();
  }, [id_establishment]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const displayedPictures = pictures.slice(
    currentPage * picturesPerPage,
    (currentPage + 1) * picturesPerPage
  );

  const handleDelete = (url) => {
    setUrlToDelete(url);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await DeletePicturesApi(urlToDelete);
      await DeletePicturesEstablishmentApi(id_establishment, urlToDelete);
    } catch (error) {
      alert(error);
    }
    setConfirmDelete(false);
    setUrlToDelete(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setUrlToDelete(null);
  };
  return (
    <>
      <h2 className="text-light text-center text-uppercase p-3 m-4">
        {t("info.title2")}
      </h2>
      <div className="row mb-3">
        <div className="col-md-12">
          <Button
            className="btnCardPicInfo btn-sm bg-primary"
            onClick={handleOpenModal}
          >
            {t("button.add") + t("info.text1")}
          </Button>
          <ModalUploadPictures show={showModal} onClose={handleCloseModal} />
        </div>
      </div>
      <div className=" row mb-2">
        {displayedPictures.map((picture) => (
          <div key={picture.id_photo} className="col-md-4">
            <Card className="cardPicInfo shadow">
              <CardImg
                src={picture.url}
                alt="Card image cap"
                className="picsEstablishemt"
              />
              <CardBody>
                <div className="text-center">
                  <DeleteAlert
                    message={t("info.text1")}
                    onClick={() => handleDelete(picture.url)}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <ReactPaginate
        pageCount={Math.ceil(pictures.length / picturesPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item mb-2"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item "
        previousLinkClassName="page-link "
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        disabledClassName="disabled"
        previousLabel={t("info.previous")}
        nextLabel={t("info.next")}
      />
    </>
  );
};

export default ShowPicturesEstablishment;
