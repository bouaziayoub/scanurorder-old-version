// function to show the error message
import React from 'react';
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  return (
    <>
      {props.error ? (
        <div className="error_message">
        {props.error}
        </div>
        ) : null}
    </>
  )
}

export default ErrorMessage
