import React from "react";
import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import {clients} from "./Data";
import "./slider.css";
export default function Testimonials() {
  return(
    <>
        <div className={style.wrapper} id="testimonial">
            <div className={style.heading}>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className={`blur ${style.tBlur1}`} style={{ background: "var(--purple)" }}></div>
            <div className={`blur ${style.tBlur2}`} style={{ background: "skyblue" }}></div>
            </div>
       
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client) => {
          return (
            <SwiperSlide key={client.id}>
              <div className={style.testimonial}>
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </>
  );
}
