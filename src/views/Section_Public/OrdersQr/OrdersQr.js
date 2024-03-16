import React from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

const OrderQr = () => {
  // Obtener el valor después del '#/'
  const { ruta } = useParams();

  return (
    <div>
      <h1 style={{color: "red"}}>HEY IM WORKING ON IT... 🛠️</h1>
      <p>Ruta escaneada: {ruta}</p>
    </div>
  );
};

export default OrderQr;

