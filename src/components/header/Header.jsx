import React from "react";
import NavBarContainer from "../navbar/NavBarContainer";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.logo}>
        <img src="./img/logo.png" />
      </div>
      <NavBarContainer />
    </div>
  );
};

export default Header;
