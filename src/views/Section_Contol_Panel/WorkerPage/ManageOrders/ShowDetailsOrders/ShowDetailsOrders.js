import React, { useState, useEffect } from "react";
import { ShowOrderApi } from "../../../../../api/exportApi";
import notificationSound from "../../../../../assets/audio/NewOrderNotification.mp3";
import { Spinner } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

const ShowOrders = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const [previousDataLength, setPreviousDataLength] = useState(0);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const id_establishment = localStorage.getItem("id_establishment");
      async function fetchData() {
        try {
          const data = await ShowOrderApi(id_establishment);
          if (data && data.orders && data.response) {
            const ordersWithData = data.orders.map((order) => {
              const details = data.response;
              return { ...order, details };
            });
            setData(ordersWithData);
            const details = ordersWithData.map((d) => d.details);
            setDetails(details);
          }
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Play a VIP sound if a new order arrives
    data.map((order) => order.id_order);
    if (data.length > previousDataLength) {
      const audio = new Audio(notificationSound);
      audio.play();
    }

    setPreviousDataLength(data.length);
  }, [data, previousDataLength]);

  return (
    <>
      <div className="showOrders">
        {data.length > 0 ? (
          <>
            <div className="mx-auto">
              <h1 className="text-uppercase">{t("order.toMake")}</h1>
            </div>
            <ul>
              {data.map((order, index) => (
                <li key={order.id_order}>
                  <span style={{ fontWeight: "bold" }}>
                    {t("order.id")}: {order.id_order}
                  </span>
                  <p
                    className={`text-${
                      order.status === "finished" ? "danger" : "warning"
                    }`}
                  >
                    <span className="text-white">
                      {t("order.statusOrder")}:
                    </span>{" "}
                    {order.status}
                  </p>

                  <button
                    className="btn btn-info"
                    onClick={() =>
                      setSelectedOrderIndex(
                        selectedOrderIndex === index ? null : index
                      )
                    }
                    disabled={order.status === "finished"}
                  >
                    {t("button.details")}
                  </button>
                  {selectedOrderIndex === index && (
                    <div>
                      <div>
                        <hr />
                        <h5 className="text-uppercase">{t("product.products")}</h5>
                        {details[index][index].map((d) =>
                          d.id_product !== undefined ? (
                            <div key={d.id_product}>
                              <p>{d.name}</p>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <Spinner />
          </>
        )}
      </div>
    </>
  );
};

export default ShowOrders;
