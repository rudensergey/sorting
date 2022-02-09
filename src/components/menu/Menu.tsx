// Absolute imports
import React from "react";

// Components
import { Dropdown } from "../dropdown/Dropdown";

// Types
import { TMenu } from "../main/types";

// Utils

// Style
import "./style.css";

export const Menu: TMenu = ({ menuSections, setSection, defaultSection }) => {
  return (
    <div className="menu">
      <p className="menu__section">Section:</p>
      <Dropdown
        classNames="menu__dropdown"
        defaultValue={defaultSection}
        list={menuSections}
        onChange={setSection}
      ></Dropdown>
    </div>
  );
};
