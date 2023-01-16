import React from "react";
import style from "./style.module.css"
export default function Experience() {
  return (
    <>
        <div className={style.experience} >
            <div className={style.achievement}>
                <div className={style.circle}>8+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className={style.achievement}>
                <div className={style.circle}>20+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className={style.achievement}>
                <div className={style.circle}>5+</div>
                <span>companies</span>
                <span>Work</span>
            </div>
        </div>
    </>
  );
}
