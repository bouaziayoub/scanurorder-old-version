import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-element notFound">
      <h1>Look like you're lost 😵‍💫</h1>
      <p class="zoom-area">
         The page you are looking for not avaible!
      </p>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link
          target="_blank"
          to="/"
          class="more-link"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
