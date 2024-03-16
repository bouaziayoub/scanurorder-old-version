import React, { useState, useEffect } from "react";
import "./ShowProducts.css";
import UpdateProduct from "../UpdateProducts/UpdateProduct";
import AddProductMenu from "../AddProductMenu/AddProductMenu";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert//DeleteAlert";
import { useTranslation } from "react-i18next";
import {
  ShowProductsApi,
  DeleteProductApi,
} from "../../../../../api/exportApi";
import AddProductPrictue from "../ModalUploadPictures/AddProductPrictue";
import AddProductCategory from "../AddProductCategory/AddProductCategory";

function ShowProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [, setConfirmDelete] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowProductsApi();
      setProducts(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setProductIdToDelete(id);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    await DeleteProductApi(productIdToDelete);
    setConfirmDelete(false);
    setProductIdToDelete(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setProductIdToDelete(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="text-white text-center">
          <h1>{t("product.products")}</h1>
        </div>
        {products.length === 0 ? (
          <h1 className="text-danger text-center m-5">
            {t("product.noProducts")}
          </h1>
        ) : (
          products.map((product) => (
            <div className="col-md-6" key={product.id_product}>
              <div className="card mb-4 shadow-sm mt-3 text-bg-dark">
                <div className="card-body">
                  <h5 className="card-title">
                    {t("form.name")}: {product.name}
                  </h5>
                  <p className="card-text">
                    {t("form.price")}: {product.price}
                  </p>
                  <p className="card-text">
                    {t("form.description")}: {product.description}
                  </p>
                  <p className="card-text">
                    {t("form.status")}:
                    <span
                      className={`text-${
                        product.is_available ? "success" : "danger"
                      }`}
                    >
                      {product.is_available
                        ? t("form.available")
                        : t("form.notAvailable")}
                    </span>
                  </p>

                  <div className="btn_card justify-content-between align-items-center">
                    <div className="btn-group bttn">
                      <div className="bttn">
                        <UpdateProduct
                          id={product.id_product}
                          name={product.name}
                          price={product.price}
                          description={product.description}
                          isAvailable={product.is_available}
                        />
                      </div>
                      <div className="bttn">
                        <DeleteAlert
                          message={product.name}
                          onClick={() => handleDelete(product.id_product)}
                          onConfirm={handleConfirmDelete}
                          onCancel={handleCancelDelete}
                        />
                      </div>
                      <div className="bttn">
                        <AddProductPrictue id={product.id_product} />
                      </div>
                      <div className="bttn">
                        <AddProductMenu id={product.id_product} />
                      </div>
                      <div className="bttn">
                        <AddProductCategory id={product.id_product} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShowProducts;
