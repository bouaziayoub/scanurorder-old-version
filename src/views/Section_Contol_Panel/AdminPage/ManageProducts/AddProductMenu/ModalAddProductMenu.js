import "./ModalAddProduct.css";

import { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  AddProductMenuApi,
  ShowMenuApi,
  ShowProductMenuApi,
} from "../../../../../api/exportApi";

function ModalAddProductMenu(props) {
  const { t } = useTranslation();
  const [menu, setMenu] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState();
  const [idProduct, setIdProduct] = useState(props.id);
  const idEstablishment = localStorage.getItem("id_establishment");

  useEffect(() => {
    async function fetchData() {
      const data = await ShowMenuApi();
      setMenu(data);
    }
    fetchData();
  }, []);

  async function handleSave(e) {
    e.preventDefault();

    const products = await ShowProductMenuApi(selectedMenuId, idEstablishment);

    const idProductExists = products.products.some(
      (product) => product.id_product === idProduct
    );
    if (idProductExists) {
      alert("The Product Is already existe in the menu!");
    } else {
      await AddProductMenuApi(selectedMenuId, idProduct);

      alert("The Product Added Correctely to the menu.");
      window.location.reload();
    }
  }

  const handleClose = () => {
    setShowModal(false);
    setIdProduct("");
  };
  const handleShow = () => setShowModal(true);
  const handleMenuSelect = (e) => setSelectedMenuId(parseInt(e.target.value));

  return (
    <div className="">
      <button className="btn btn-sm btn-outline-light" onClick={handleShow}>
        {t("button.add")} {t("menu.toMenu")}
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("product.titleList2")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("product.selectMenu")}</p>
          <Form onSubmit={handleSave}>
            {menu.map((menu) => (
              <Form.Check
                className=" text-uppercase"
                key={menu.id_menu}
                type="radio"
                id={`menu-${menu.id_menu}`}
                label={menu.name}
                value={menu.id_menu}
                onChange={handleMenuSelect}
                name="selectedMenu"
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

export default ModalAddProductMenu;
