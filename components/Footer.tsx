import React from "react";
import style from "../styles/Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <div className={style.container}>Footer Content....</div>;
};

export default Footer;
