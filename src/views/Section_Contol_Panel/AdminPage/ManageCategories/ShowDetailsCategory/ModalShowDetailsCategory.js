import "./ShowDetailsCategory.css";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  RemoveProductCategoryApi,
  ShowProductsCategoryApi,
} from "../../../../../api/exportApi";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert/DeleteAlert";

function ModalShowDetailsCategory(props) {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idCategory] = useState(props.id);
  const [, setConfirmDeleteProduct] = useState(false);
  const [idToDeleteProduct, setIdToDeleteProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowProductsCategoryApi(idCategory);
      setCategory(data.category[0].name);
      setProducts(data.products);
    }
    fetchData();
  }, [idCategory]);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const handleDeleteProduct = (id, idCategory) => {
    setIdToDeleteProduct(id, idCategory);
    setConfirmDeleteProduct(true);
  };

  const handleConfirmDeleteProduct = async () => {
    await RemoveProductCategoryApi(idCategory, idToDeleteProduct);
    setConfirmDeleteProduct(false);
    setIdToDeleteProduct(null);
    window.location.reload();
  };

  const handleCancelDeleteProduct = () => {
    setConfirmDeleteProduct(false);
    setIdToDeleteProduct(null);
  };
  return (
    <div className="">
      <button className="btn btn-sm btn-outline-light" onClick={handleShow}>
        {t("button.details")}
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t("category.category")}: {category}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {products.length === 0 ? (
            <div className="text-danger">{t("category.noProducts")}</div>
          ) : (
            products.map((product) => (
              <div key={product.id_product} className="product-container">
                <div className="product-info">
                  <h5 className="product-name">
                    {t("form.name")}: {product.name}
                  </h5>
                  <div className="product-description">
                    <b>{t("form.description")}:</b> {product.description}
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
                <hr />
              </div>
            ))
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalShowDetailsCategory;
