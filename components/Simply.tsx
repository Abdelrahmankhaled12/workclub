"use client"

import React, { useEffect } from 'react'
import ButtonCustom from './ButtonCustom'
import Aos from "aos";
import "aos/dist/aos.css"

const Simply = () => {

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, [])


  return (
    <div className='pt-[50px] pb-[50px]'>
      <div className="max-width padding-x padding-y">
        <div className="grid grid-cols-1 lg:grid-cols-2  justify-center mt-5">
          <div className="text order-2 lg:order-1" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
            <h1 className='text-[30px] text-blueCustomColor font-semibold'>Simply dummy text of the printing and typesetting industry.</h1>
            <div className="box mt-5"> 
              <div className="flex justify-evenly items-center bg-[#38761D] w-[100%] sm:w-[450px] sm:mx-auto lg:ms-0 h-[150px] rounded-[8px] text-white">
                <img src="/self-service.png" alt="" className='w-[40px] h-[40px]' />
                <div className="text">
                  <h3 className='text-[25px] font-semibold'>HR</h3> 
                  <ul className='list-disc pl-[22px] space-y-1'>
                    <li className='text-[14px]'>Connect your apps with our plugin </li>
                    <li className='text-[14px]'>Find the workspace that suit you</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box mt-5"> 
              <div className="flex justify-evenly items-center bg-[#F4F7F6] w-[100%] sm:w-[450px] sm:mx-auto lg:ms-0 h-[150px] rounded-[8px] text-blueCustomColor">
                <img src="/manager.png" alt="" className='w-[40px] h-[40px]' />
                <div className="text">
                  <h3 className='text-[25px] font-semibold'>Managers</h3> 
                  <ul className='list-disc pl-[22px] space-y-1'>
                    <li className='text-[14px]'>Connect your apps with our plugin </li>
                    <li className='text-[14px]'>Find the workspace that suit you</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box mt-5"> 
              <div className="flex justify-evenly items-center bg-[#F4F7F6] w-[100%] sm:w-[450px] sm:mx-auto lg:ms-0 h-[150px] rounded-[8px] text-blueCustomColor">
                <img src="/employee.png" alt="" className='w-[40px] h-[40px]' />
                <div className="text">
                  <h3 className='text-[25px] font-semibold'>Employers</h3> 
                  <ul className='list-disc pl-[22px] space-y-1'>
                    <li className='text-[14px]'>Connect your apps with our plugin </li>
                    <li className='text-[14px]'>Find the workspace that suit you</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img src="/simply.png" alt="" className='mx-auto  order-1 lg:order-2' data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000"/>
        </div>
      </div>
    </div>
  )
}

export default Simply;