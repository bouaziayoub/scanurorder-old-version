import "./ModalAddProduct.css";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";

import {
  AddProductCategoryApi,
  ShowCategoryApi
} from "../../../../../api/exportApi";

function ModalAddProductCategory(props) {
  const { t } = useTranslation();

  const [category, setCategory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [idProduct, setIdProduct] = useState(props.id);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowCategoryApi();

      setCategory(data);
    }
    fetchData();
  }, []);

  async function handleSave(e) {
    e.preventDefault();

    await AddProductCategoryApi(selectedCategoryId, idProduct);

    alert("The Product Added Correctely to caterogy.");

    window.location.reload();
    // handleClose();
  }

  const handleClose = () => {
    setShowModal(false);
    setIdProduct("");
  };
  const handleShow = () => setShowModal(true);
  const handleCategorySelect = (e) =>
    setSelectedCategoryId(parseInt(e.target.value));

  return (
    <div className="">
      <button className="btn btn-sm btn-outline-light" onClick={handleShow}>
        {t("button.add")} {t("category.toCat")}
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("product.titleList")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("product.selectCategory")}</p>
          <Form onSubmit={handleSave}>
            {category.map((category) => (
              <Form.Check
                className=" text-uppercase"
                key={category.id_category}
                type="radio"
                id={`category-${category.id_category}`}
                label={category.name}
                value={category.id_category}
                onChange={handleCategorySelect}
                name="selectedCategory"
              />
            ))}
            <button type="submit" className="btn btn-primary mt-3">
              {t("button.save")}
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalAddProductCategory;
