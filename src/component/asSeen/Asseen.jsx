import React from 'react'
import "./asseen.css"
import { Swiper, SwiperSlide } from 'swiper/react';

export const Asseen = () => {
  return (
    <div className='as'>
        <h1>As Seen in </h1>
        <br />
        <div className="swiper-container black-border">
      <Swiper
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  className="mySwiper"
  autoplay={{ delay: 5000 }} // Set autoplay delay to 5000 milliseconds (5 seconds)
  loop={true} // Enable looping
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
</Swiper>
</div>

      </div>
  )
}
