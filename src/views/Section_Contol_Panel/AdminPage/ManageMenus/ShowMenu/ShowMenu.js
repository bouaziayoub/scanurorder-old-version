import React, { useState, useEffect } from "react";
import "./ShowMenu.css"
import { ShowMenuApi, DeleteMenuApi } from "../../../../../api/exportApi";

import UpdateMenu from "../UpdateMenu/UpdateMenu";
import ShowProductMenu from "../ShowProductsMenu/ShowProductsMenu";
import { useTranslation } from "react-i18next";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert/DeleteAlert";

function ShowMenus() {
  const { t } = useTranslation();
  const [menu, setMenu] = useState([]);
  const [, setConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await ShowMenuApi();
      setMenu(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setIdToDelete(id);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    await DeleteMenuApi(idToDelete);
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
          <h1>{t("menu.menus")}</h1>
        </div>
        {menu.length === 0 ? (
          <h1 className="text-danger text-center m-5">{t("menu.noMenu")}</h1>
        ) : (
          menu.map((menu) => (
            <div className="col-md-4" key={menu.id_menu}>
              <div className="card mb-4 shadow-sm mt-3 text-bg-dark">
                <div className="card-body">
                  <h5 className="card-text">
                    {t("form.name")}: {menu.name}
                  </h5>
  
                  <div className="btn_card d-flex justify-content-between align-items-center">
                    <div className="btn-group bttn">
                      <div className="bttn">
                        <UpdateMenu id={menu.id_menu} name={menu.name} />
                      </div>
                      <div className="bttn">
                        <DeleteAlert
                          message={t("menu.menu") + " " + menu.name}
                          onClick={() => handleDelete(menu.id_menu)}
                          onConfirm={handleConfirmDelete}
                          onCancel={handleCancelDelete}
                        />
                      </div>
                      <div className="bttn">
                        <ShowProductMenu id={menu.id_menu} />
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

export default ShowMenus;
