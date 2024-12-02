import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img4 from '../images/4.jpg';

import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';

const Projects = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        {/* Project Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs md:max-w-md lg:max-w-lg mx-auto transform hover:scale-105">
          <h3 className="text-lg md:text-xl font-semibold mt-2 md:mt-4 text-gray-800 text-center"> Book_Point</h3>
          <p className="text-sm md:text-base text-gray-600 mt-2 mb-4 text-center">
         

          an e-commerce platform for books, stationery, and notebooks, built with Node.js and Express. It offers users an intuitive interface to browse, add items to the cart, and securely checkout. The platform features a robust backend for smooth order processing, real-time updates, and secure data handling.
          </p>
          
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img4} alt="ml Screenshot 1" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
           
            <SwiperSlide>
              <img src={img6} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> 
      <br />
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        {/* Project Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs md:max-w-md lg:max-w-lg mx-auto transform hover:scale-105">
          <h3 className="text-lg md:text-xl font-semibold mt-2 md:mt-4 text-gray-800 text-center">Medical Laboratory</h3>
          <p className="text-sm md:text-base text-gray-600 mt-2 mb-4 text-center">
          MediLab Solutions is a medical laboratory platform focused on providing accurate and efficient diagnostic testing services. The backend infrastructure is designed to manage patient data securely, handle test results, and integrate seamlessly with medical devices and laboratory systems. I specialize in building robust, secure, and scalable APIs to ensure smooth data processing, real-time reporting, and compliance with healthcare regulations
          </p>
          
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="ml Screenshot 1" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="ml Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
