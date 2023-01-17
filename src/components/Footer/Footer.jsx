import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Wave from "../../assets/img/wave.png";
import style from "./style.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className={style.content}>
        <span>abosido2@gmail.com</span>
        <div className={style.icons}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </div>
  );
}
