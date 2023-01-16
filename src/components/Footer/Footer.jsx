import React from "react";
import style from  "./style.module.css";
import Wave from "../../assets/img/wave.png";
import {faInstagram , faFacebook , faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={style.footer}>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className={style.content}>
        <span>abosido2@gmail.com</span>
        <div className={style.icons}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGithub}  />
        </div>
      </div>
    </div>
  );
}
