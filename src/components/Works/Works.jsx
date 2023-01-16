import React from "react";
import style from "./style.module.css";
import upwork from "../../assets/img/Upwork.png";
import fiverr from "../../assets/img/fiverr.png";
import amazon from "../../assets/img/amazon.png";
import shopify from "../../assets/img/Shopify.png";
import facebook from "../../assets/img/Facebook.png";
export default function Works() {
  return (
    <>
      <div className={style.works}>
        {/* Left Side */}
        <div className={style.awesome}>
        <span> Works for All these</span>
        <span>Brands & Clients</span>
        <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
        </span>
        <button className={`button ${style.sButton}`}>Hire Me</button>
        <div className={`blur ${style.sBlur1}`}></div>
        </div>
        {/* right side */}
        <div className={style.right}>
            <div className={style.mainCircle}>
                <div className={style.secondCircle}>
                    <img src={upwork} alt="" />
                </div>
                <div className={style.secondCircle}>
                    <img src={fiverr} alt="" />
                </div>
                <div className={style.secondCircle}>
                    <img src={amazon} alt="" />
                </div>
                <div className={style.secondCircle}>
                    <img src={shopify} alt="" />
                </div>
                <div className={style.secondCircle}>
                    <img src={facebook} alt="" />
                </div>
            </div>
            {/* background Circles */}
            <div className={`${style.backCircle} ${style.blueCircle}`}></div>
            <div className={`${style.backCircle} ${style.yellowCircle}`}></div>
        </div>
      </div>
    </>
  );
}
