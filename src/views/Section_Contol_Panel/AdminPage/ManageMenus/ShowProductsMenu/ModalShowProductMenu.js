import "./ModalShowProducts.css";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import {
  RemoveProductMenuAPI,
  RemoveCategoryMenuApi,
  ShowProductMenuApi,
} from "../../../../../api/exportApi";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert/DeleteAlert";

function ModalShowProductMenu(props) {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idMenu] = useState(props.id);
  const idEstablishment = localStorage.getItem("id_establishment");
  const [, setConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [, setConfirmDeleteProduct] = useState(false);
  const [idToDeleteProduct, setIdToDeleteProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowProductMenuApi(idMenu, idEstablishment);
      setMenu(data.menu.name);
      setCategories(data.category);
      setProducts(data.products);
    }
    fetchData();
  }, [idMenu, idEstablishment]);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  //  ROMOVE PRODUCT FROM MENU
  const handleDeleteProduct = (id, idMenu) => {
    setIdToDeleteProduct(id, idMenu);
    setConfirmDeleteProduct(true);
  };
  const handleConfirmDeleteProduct = async () => {
    await RemoveProductMenuAPI(idMenu, idToDeleteProduct);
    setConfirmDeleteProduct(false);
    setIdToDeleteProduct(null);
    window.location.reload();
  };
  const handleCancelDeleteProduct = () => {
    setConfirmDeleteProduct(false);
    setIdToDeleteProduct(null);
  };

  //  ROMOVE CATEGORY FROM MENU
  const handleDelete = (id, idMenu) => {
    setIdToDelete(id, idMenu);
    setConfirmDelete(true);
  };
  const handleConfirmDelete = async () => {
    await RemoveCategoryMenuApi(idToDelete, idMenu);
    setConfirmDelete(false);
    setIdToDelete(null);
    window.location.reload();
  };
  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setIdToDelete(null);
  };

  return (
    <div className="">
      <button className="btn btn-sm btn-outline-light" onClick={handleShow}>
        {t("button.details")}
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t("menu.menu")}: {menu}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {products.length === 0 && categories.length === 0 ? (
            <div className="text-danger">{t("menu.noProducts")}</div>
          ) : (
            <div>
              {categories.map((category) => (
                <ul key={category.id_category} className="category-list">
                  <li>{category.name}</li>
                  <DeleteAlert
                    message={t("category.category") + " " + category.name}
                    onClick={() => handleDelete(category.id_category)}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                  />
                </ul>
              ))}
              {products.map((product) => (
                <div key={product.id_product} className="product-container">
                  <div className="product-info">
                    <hr />
                    <h5>{t("menu.otherProducts")}:</h5>
                    <div className="product-name">
                      <b>{t("form.name")}: </b> {product.name}
                    </div>
                    <div className="product-description">
                      <b>{t("form.description")}</b> {product.description}
                    </div>
                    <div className="product-price">
                      <b>{t("form.price")}:</b> {product.price}
                    </div>
                  </div>
                  <DeleteAlert
                    message={t("product.product") + " " + product.name}
                    onClick={() => handleDeleteProduct(product.id_product)}
                    onConfirm={handleConfirmDeleteProduct}
                    onCancel={handleCancelDeleteProduct}
                  />
                </div>
              ))}
            </div>
          )}
          {products.length > 0 || categories.length > 0 ? null : (
            <div className="text-danger">{t("menu.noProducts")}</div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalShowProductMenu;
