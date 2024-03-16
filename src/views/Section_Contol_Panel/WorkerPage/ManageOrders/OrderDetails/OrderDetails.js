import React from "react";
import { useTranslation } from "react-i18next";

const OrderDetails = ({ details }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <hr />
        <h5 className="text-uppercase">Nº {t("table.table")}</h5>
        {/* <hr /> */}
        {details.map((d) =>
          d.id_table !== undefined ? (
            <div key={d.id_table}>
              <p>{d.table_number}</p>
            </div>
          ) : null
        )}
      </div>
      <div>
        <hr />
        <h5 className="text-uppercase">{t("product.products")}</h5>
        {/* <hr /> */}
        {details.map((d) =>
          d.id_product !== undefined ? (
            <div key={d.id_product}>
              <p>{d.name}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
