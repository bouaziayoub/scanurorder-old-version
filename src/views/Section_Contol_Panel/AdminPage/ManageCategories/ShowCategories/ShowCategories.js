import React, { useState, useEffect } from "react";
import "./ShowCategories.css";
import {
  ShowCategoryApi,
  DeleteCategoryApi,
} from "../../../../../api/exportApi";
import { useTranslation } from "react-i18next";

import UpdateCategory from "../UpdateCategory/UpdateCategory";
import ShowDetailsCategory from "../ShowDetailsCategory/ShowDetailsCategory";
import AddCategoryMenu from "../AddCategoryMenu/AddCategoryMenu";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert/DeleteAlert";

function ShowCategory() {
  const { t } = useTranslation();
  const [, setConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowCategoryApi();

      setCategory(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setIdToDelete(id);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    await DeleteCategoryApi(idToDelete);
    setConfirmDelete(false);
    setIdToDelete(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setIdToDelete(null);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="text-white text-center">
          <h1>{t("category.categories")}</h1>
        </div>
        {category.length === 0 ? (
          <h1 className="text-danger text-center m-5">
            {t("table.noProducts")}
          </h1>
        ) : (
          category.map((category) => (
            <div className="col-md-4" key={category.id_category}>
              <div className="card mb-4 shadow-sm mt-3 text-bg-dark">
                <div className="card-body">
                  <h5 className="card-text">
                    {t("form.name")}: {category.name}
                  </h5>

                  <div className="btn_card d-flex justify-content-between align-items-center">
                    <div className="btn-group bttn">
                      <div className="bttn">
                        <UpdateCategory
                          id={category.id_category}
                          name={category.name}
                        />
                      </div>
                      <div className="bttn">
                        <DeleteAlert
                          message={t("category.category") + " " + category.name}
                          onClick={() => handleDelete(category.id_category)}
                          onConfirm={handleConfirmDelete}
                          onCancel={handleCancelDelete}
                        />
                      </div>
                      <div className="bttn">
                        <ShowDetailsCategory id={category.id_category} />
                      </div>
                      <div className="bttn">
                        <AddCategoryMenu id={category.id_category} />
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

export default ShowCategory;
