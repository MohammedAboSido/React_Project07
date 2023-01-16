import React from 'react';
import style from './style.module.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import sidebar from '../../assets/img/sidebar.png';
import ecommerce from '../../assets/img/ecommerce.png';
import hoc from '../../assets/img/hoc.png';
import musicApp from '../../assets/img/musicapp.png';
export default function Protfolio () {
  return (
    <>
      <div className={style.portfolio}>
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className={style.portfolioSlider}
        >
          <SwiperSlide>
            <img src={sidebar} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ecommerce} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={musicApp} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hoc} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
