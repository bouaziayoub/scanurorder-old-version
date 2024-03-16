import React, { useState, useEffect } from "react";
import "./ShowTable.css";

import { ShowTableApi, DeleteTableApi } from "../../../../../api/exportApi";
import { useTranslation } from "react-i18next";

import UpdateTable from "../UpdateTbale/UpdateTable";
import GenerateQrTable from "../GenerateQrTable/GenerateQrTable";
import DeleteAlert from "../../../../../components/Alerts/DeleteAlert/DeleteAlert";

function ShowTable() {
  const { t } = useTranslation();

  const [tables, setTables] = useState([]);
  const [, setConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowTableApi();
      setTables(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setIdToDelete(id);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    await DeleteTableApi(idToDelete);
    setConfirmDelete(false);
    setIdToDelete(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setIdToDelete(null);
  };
  return (
    <div className="container show-table">
      <div className="row">
        <div className="text-white text-center">
          <h1>{t("table.tables")}</h1>
        </div>
        {tables.length === 0 ? (
          <h1 className="text-danger text-center m-5">
            {t("table.noProducts")}
          </h1>
        ) : (
          tables.map((table) => (
            <div className="col-md-4" key={table.id_table}>
              <div className="card mb-4 shadow-sm mt-3 text-bg-dark">
                <div className="card-body">
                  <h5 className="card-title">
                    Nº {t("table.table")} : {table.table_number}
                  </h5>
                  <p className="card-text">
                    {t("table.capacity")}: {table.capacity}
                  </p>
                  <p className="card-text">
                    {t("form.status")}
                    <span
                      className={`text-${
                        table.is_available ? "success" : "danger"
                      }`}
                    >
                      {table.is_available
                        ? t("form.available")
                        : t("form.notAvailable")}
                    </span>
                  </p>
                  <div className="btn_card d-flex justify-content-between">
                    <div className="btn-group bttn">
                      {" "}
                      <div />
                      <div className="bttn">
                        <UpdateTable
                          id={table.id_table}
                          table_number={table.table_number}
                          capacity={table.capacity}
                        />
                      </div>
                      <div className="bttn">
                        <DeleteAlert
                          message={"Nº" + t("table.table") + table.table_number}
                          onClick={() => handleDelete(table.id_table)}
                          onConfirm={handleConfirmDelete}
                          onCancel={handleCancelDelete}
                        />
                      </div>
                      <div className="bttn">
                        <GenerateQrTable
                          id={table.id_table}
                          table_number={table.table_number}
                          capacity={table.capacity}
                          isAvailable={table.is_available}
                        />
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

export default ShowTable;
