import React from "react";
import boy from "../../assets/img/boy.png";
import crown from "../../assets/img/crown.png";
import github from "../../assets/img/github.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import instagram from "../../assets/img/instagram.png";
import linkedin from "../../assets/img/linkedin.png";
import thumbup from "../../assets/img/thumbup.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import style from "./style.module.css";

export default function Hero() {
  return (
    <>
      <div className={style.hero}>
        <div className={style.left}>
          <div className={style.name}>
            <span>Hy! I Am</span>
            <span>Andrew Thomas</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <button className={`button ${style.hButton}`}>Hire me</button>
          <div className={style.icons}>
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className={style.right}>
          <img src={vector1} alt="vector1" />
          <img src={vector2} alt="vector2" />
          <img src={boy} alt="boy" />
          <img src={glassesimoji} alt="glassesimoji" />
          <div className={style.div1}>
            <FloatingDiv image={crown} text1="Web" text2="Developer" />
          </div>
          <div className={style.div2}>
            <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
          </div>
        </div>
      </div>
    </>
  );
}
