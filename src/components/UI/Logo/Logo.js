import React from "react";

import newsLogo from "../../../assets/images/newsLogo.png";
import classes from "./Logo.module.scss";

const logo = () => (
  <a href="/" className={classes.Logo}>
    <img src={newsLogo} alt="newsss" />
  </a>
);

export default logo;
