import "./ShowOrders.css";
import React, { useState, useEffect } from "react";
import {
  ShowOrderApi,
  UpdateStatusOrderApi,
  UpdateStatusPaymentApi,
} from "../../../../../api/exportApi";
import notificationSound from "../../../../../assets/audio/NewOrderNotification.mp3";
import { Spinner } from "../../../../../components/exportComponents";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useTranslation } from "react-i18next";

const ShowOrders = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const [previousDataLength, setPreviousDataLength] = useState(0);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  const handleUpdateStatus = async (orderId) => {
    try {
      await UpdateStatusOrderApi(orderId);
      setData((prevState) =>
        prevState.map((prevOrder) =>
          prevOrder.id_order === orderId
            ? { ...prevOrder, status: "finished" }
            : prevOrder
        )
      );
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdateStatusPayment = async (orderId) => {
    try {
      await UpdateStatusPaymentApi(orderId);
      setData((prevStatePayment) =>
        prevStatePayment.map((prevOrder) =>
          prevOrder.id_order === orderId
            ? { ...prevOrder, is_paid: "payed" }
            : prevOrder
        )
      );
    } catch (error) {
      alert(error);
    }
  };
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
            <h1 className="text-uppercase">{t("order.manage")}</h1>
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
                  <p
                    className={`text-${
                      order.is_paid === 0 ? "danger" : "success"
                    }`}
                  >
                    <span className="text-white">
                      {t("order.statusPayment")}:
                    </span>{" "}
                    {order.is_paid === 0 ? t("order.unPaid") : t("order.paid")}
                  </p>{" "}
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
                      <OrderDetails details={details[index][index]} />
                    </div>
                  )}
                  <div className="btn-group">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdateStatus(order.id_order)}
                      disabled={order.status === "finished"}
                    >
                      {t("button.edit")}
                      {t("order.statusOrder")}
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdateStatusPayment(order.id_order)}
                      disabled={order.is_paid === 1}
                    >
                      {t("button.edit")}
                      {t("order.statusPayment")}
                    </button>
                  </div>
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
