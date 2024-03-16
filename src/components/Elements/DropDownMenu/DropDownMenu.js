import React from "react";

const DropDownMenu = (props) => {
  return <ul className="dropdown-menu">{props.children}</ul>;
};

const DropdownItem = ({ href, click, children }) => {
  return (
    <li>
      <a href={href} className="dropdown-item" onClick={click}>
        {children}
      </a>
    </li>
  );
};

export { DropdownItem, DropDownMenu };
