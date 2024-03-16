import React from 'react';
import "./about.css";
import img from "./prof.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


export const About = () => {
  return (
    <div className='about'>
      <hr className="separator" />
      <div className='clints'>
        <h1>Clients I Have Worked With</h1>
      </div>
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
      <div className='aboutme'>
        <div className='text'>
          Muhammad Almasri is an artistic and Commercial Architectural Photographer
          based in Jordan. <br />
          He is the first Arab to win the first place Award 
          in the Architecture & Urban Space category for  <br />the <span style={{color:"red"}}> Siena International Photo Awards</span> 2022 , Golden Pangea Prize Winner , And winner of more than 30+  Int Awerds .
        </div>
        <div className='image'>
          <img src={img} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};
