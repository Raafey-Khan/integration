"use client";
import Image from "next/image";
import Head from "next/head";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
export default function Home() {
  return (
  <>


  <title>Hvs Frontend</title>
  <main className="bg-custom ">
  <div className="Banner overflow-hidden relative bg-[url('../public/images/Main-Banner.png')] h-screen w-full bg-cover bg-center">
    <div className="container Bannner-txt mx-auto px-4 pt-24 ">
      <h3 className="text-gray-900 text-6xl font-bold mb-6">Comprehensive </h3>
      <h3 className="text-gray-900 text-6xl font-bold mb-6">Vascular center in</h3>
      <h3 className="text-gray-900 text-6xl font-bold mb-8">Mumbai</h3>

      <p className="text-2xl w-2/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facere aliquam aut laudantium!</p>

    </div>
  </div>
  
  <div className="Speciality-section container mx-auto px-4 mt-10 h-full">
    <div className="speciality-header-txt text-center mt-9">
      <h3 className=" font-[600] text-[24px]">Heart Superspecialty Hospitals</h3>
      <p className=" w-full pt-0 px-24 mt-7 text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
    </div>

    <div class="flex justify-center flex-wrap  gap-8 mt-9">
 
  <div class="w-full md:w-1/5 flex justify-center items-center">
  
    <a href="#" class="block max-w-sm p-6 bg-white border  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img class="mb-2" src="images/heart-pulse-solid-red.png" alt="" />
      <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
      <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
    </a>
  </div>
  <div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-blue.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>

<div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-red.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>  
<div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-blue.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>

<div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-red.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>

<div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-blue.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>

<div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-red.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>

<div class="w-full md:w-1/5 flex justify-center items-center">
  
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img class="mb-2" src="images/heart-pulse-solid-blue.png" alt="" />
    <h4 className="font-semibold text-lg text-[#5B5B5B]">Heart Care</h4>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
  </a>
</div>

<div className="btn-container mt-3  h-full w-full mb-7 flex justify-center items-center">
<button type="button" class="w-[183px] h-[49px] me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-2xl border border-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase">view all</button>
</div>
  
</div>

  </div>

  <div className="Doctor-section container mx-auto px-4 mt-12 h-full w-full ">
    <div className="Doctor-header-txt flex flex-col justify-center items-center mt-3  h-full w-full ">
        <h3 className=" font-semibold text-[24px]">Meet Our Consaltant</h3>
        <p className=" px-24 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div className="slider-container mt-5  h-full p-3 w-full flex justify-center items-center gap-36">
     <div className="solid-play-btn">
      <img src="images/left-up.png" alt="" />
     </div>
     <div className="doctor-1 flex flex-col justify-center items-center mt-9 ">
       <img src="images/Doctor-1.png" alt="" />
       <div className="name-1 flex flex-col items-center">
        <p className=" mt-5 font-bold text-[26px] text-gray-700">Dr Raj Kadam</p>
        <p className="text-[16px] mt-3 mb-3 font-medium">Consultant cardiologist</p>
        <a href="" className="text-blue-400 border-0 border-b-2  border-blue-400 font-bold text-[14px] mt-3">View profile</a>
       </div>
     </div>

     <div className="doctor-2 flex flex-col justify-center items-center mt-9">
       <img src="images/Doctor-2.png" alt="" />
       <div className="name-2 flex flex-col items-center">
        <p className=" mt-5 font-bold text-[26px] text-gray-700">Dr Raj Kadam</p>
        <p className="text-[16px] mt-3 mb-3 font-medium">Consultant cardiologist</p>
        <a href="" className="text-blue-400 border-0 border-b-2 border-blue-400 font-bold text-[14px] mt-3">View profile</a>
       </div>
     </div>

     <div className="doctor-3 flex flex-col justify-center items-center">
       <img src="images/Doctor-3.png" alt="" />
       <div className="name-3 flex flex-col items-center">
        <p className=" mt-5 font-bold text-[26px] text-gray-700">Dr Raj Kadam</p>
        <p className="text-[16px] mt-3 mb-3 font-medium">Consultant cardiologist</p>
        <a href="" className="text-blue-400 border-0 border-b-2 border-blue-400 font-bold text-[14px] mt-3">View profile</a>
       </div>
     </div>

     <div className="solid-play-btn">
      <img src="images/right-up.png" alt="" />
     </div>

    </div>
  </div>

  <div className="Technology-slider-section rounded-3xl bg-raimbow container mx-auto px-4 h-full mt-40 pb-12">
  <div className="Techcnology-header-txt flex flex-col  items-center mt-9 h-fit w-full ">
        <h3 className=" font-semibold text-[24px] mt-5">Technology</h3>
        <p className="  px-32 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="Technologies-card-container flex justify-center items-center gap-11">
      <div className="left-soliddd">
        <img src="images/circle-arrow-up-left.png" alt="" />
      </div>
    <div className="tecnology-sliders flex justify-center mt-8 mb-8">
    <div className="technology-1 bg-white [border-bottom-left-radius:1rem] [border-top-right-radius:2rem] [border-top-left-radius:2rem] h-72 ">
      <img className="" src="images/Technology-img-1.png" alt="" />
      <p className="text-center w-full mt-2 font-semibold">NMC Health</p>
     </div>
    </div>

    <div className="tecnology-sliders flex justify-center mt-8 mb-8">
    <div className="technology-1 bg-white [border-bottom-left-radius:1rem] [border-top-right-radius:2rem] [border-top-left-radius:2rem] h-72 ">
      <img className="" src="images/Technology-img-1.png" alt="" />
      <p className="text-center w-full mt-2 font-semibold">NMC Health</p>
     </div>
    </div>
    <div className="tecnology-sliders flex justify-center mt-8 mb-8">
    <div className="technology-1 bg-white [border-bottom-left-radius:1rem] [border-top-right-radius:2rem] [border-top-left-radius:2rem]  h-72 ">
      <img className="" src="images/Technology-img-1.png" alt="" />
      <p className="text-center w-full mt-2 font-semibold">NMC Health</p>
     </div>
    </div>

    <div className="right-soliddd">
        <img src="images/circle-arrow-up-right.png" alt="" />
      </div>
    </div>
  </div>



  <div className="testimonials-container h-full mt-10 w-full mx-auto px-4 container">

  <div className="header-text-testimonials">
      <p className="text-center text-[#F05F6E]">Testimonials</p>
      <div className="flex justify-center items-center  gap-3">
      <h4 className="text-center text-[24px] font-bold text-[#363636]">Our Happy Patients Say it Best</h4>
      <br />
      <br />
      <img className=" object-contain" src="images/testimonial-google-logo.png" alt="" />
      <br />
       <img src="images/star.png" alt="" />
       <br />
       <p>5.0</p>
       <br />
       <p className=" font-bold  text-2xl text-[#737373]">224 + Review</p>
      </div>
  </div>
  <div className="h-screen items-center justify-center">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap '>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap'>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap '>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap '>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap '>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap '>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center flex-wrap'>
          <img className='object-contain' src="images/Testimonial-img-1.png" alt="" />
          <img className='object-contain' src="images/Testimonial-img-2.png" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>


  <div className="locations-container pb-52  h-[550px] w-full mt-16 mx-auto px-4 container flex flex-col  ">

    <div className="location-header-txt w-full text-center mb-8">
      <p className="text-[#F05F6E] mb-2">Locations</p>

      <h3 className=" font-bold text-[24px] mb-2 text-[#363636]">Make an Appointment</h3>


      <p className="px-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
    </div>

    <div className="location-flex-container h-full flex justify-center items-center gap-12 flex-wrap">
      <div className="h-full ">
      <div class="h-[286px]  mt-[3.2rem] overflow-hidden w-[600px]  rounded-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.7805937076932!2d-0.903048924336784!3d52.24736875637985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770eea1465e283%3A0x42da424253c69848!2s42%20Semilong%20Rd%2C%20Semilong%2C%20Northampton%20NN2%206BU%2C%20UK!5e0!3m2!1sen!2sin!4v1712657999732!5m2!1sen!2sin"
    class="w-full h-[350px] border-0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

      </div>

      <div className="flex flex-col ">
        <div className="janco hospital-1 bg-white mb-10 rounded-xl h-[123px] border-[#21BDCA] border  p-9 flex justify-center items-center gap-10">

        <div className="hospital-name-address">
          <p className=" font-semibold mb-2 text-[15px]">Janco Hospital</p>
           <p className="text-[14px]">164-178 Cromwell Road London <span className="block"> SWS OTU United Kingdom  </span> </p>
        </div>

        <div className="contact-detail-book  h-full w-[200px]  flex flex-col justify-center items-center ">
          <div className="contact-details rounded-lg mb-4 h-[70px] p-1 w-[200px] border border-[#21BDCA] flex justify-center items-center">
            <img src="images/address-logo.png" alt="" />

            <p>contact details</p>
          </div>
          <div className="contact-details rounded-lg mb-2 h-[70px] p-1 w-[200px] border border-[#F05F6E] flex justify-center items-center">
            <img src="images/calender-logo.png" alt="" />

            <p>contact details</p>
          </div>
        </div>
        </div>

        <div className="janco hospital-2 bg-white rounded-xl h-[123px] border  mb-3 p-9 flex justify-center items-center gap-10">

<div className="hospital-name-address">
  <p className=" font-semibold mb-2 text-[15px]">Janco Hospital</p>
   <p className="text-[14px]">164-178 Cromwell Road London <span className=" block"> SWS OTU United Kingdom</span></p>
</div>

<div className="contact-detail-book  h-full w-[200px] bg-white flex flex-col justify-center items-center ">
  <div className="contact-details rounded-lg mb-4 h-[70px] p-1 w-[200px] border border-[#21BDCA] flex justify-center items-center">
    <img src="images/address-logo.png" alt="" />

    <p>contact details</p>
  </div>
  <div className="contact-details rounded-lg mb-2 h-[70px] p-1 w-[200px] border border-[#F05F6E] flex justify-center items-center">
    <img src="images/calender-logo.png" alt="" />

    <p>contact details</p>
  </div>
</div>
</div>


      </div>
    </div>

  </div>

  

  </main>
  </>
  );
}
