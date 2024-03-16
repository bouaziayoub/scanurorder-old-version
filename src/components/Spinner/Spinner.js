import React from 'react'
import "./style.css"
import { useTranslation } from "react-i18next";
const Spinner = () => {
  const { t } = useTranslation();
  return (
    <div className='body__spinner'>
      <div className="scan">
      <div className="qrcode"></div>
      <h3>{t("order.spinner")}</h3>
      <div className="border"></div>
    </div>
    </div>
  )
}

export default Spinner
