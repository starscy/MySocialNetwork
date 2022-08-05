import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import classes from "./MyLink.module.css";

const MyLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <NavLink
      to={to}
      {...props}
      className={match ? classes.active : classes.link}
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
