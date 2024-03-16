import React from "react";

const Form = ({ children }) => {
  return (
    <form className="my-element">
      <div className="containerLogin">
        <section className="gradient-custom vh-70 ">
          <div className="container h-70 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ border: "2px solid white" }}
              >
                <div className="card-body p-5 text-center">{children}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default Form;
