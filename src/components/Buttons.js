import React from "react";
import "../styles/Buttons.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <a href="mailto:tyler.lam1@ucalgary.ca">
        <button type="button">
          <i className="fas fa-2x fa-envelope"></i>
        </button>
      </a>
      &nbsp;
      <a href="https://github.com/tylerlam1" target="_blank">
        <button type="button">
          <i className="fab fa-2x fa-github"></i>
        </button>
      </a>
      &nbsp;
      <a
        href="https://www.linkedin.com/in/tyler-lam-877a24168/"
        target="_blank"
      >
        <button type="button">
          <i className="fab fa-2x fa-linkedin"></i>
        </button>
      </a>
    </div>
  );
};

export default Buttons;
