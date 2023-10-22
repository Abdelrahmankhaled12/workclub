"use client"

import React, { useEffect } from 'react'
import ButtonCustom from './ButtonCustom'
import Aos from "aos";
import "aos/dist/aos.css"

const Subscribers = () => {
  
  useEffect(() => {
    Aos.init({
        once: true,
    });
}, [])


  return (
    <div className='pt-[35px] pb-[35px] bg-greenCustomColor text-white' data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
        <div className="max-width padding-x padding-y">
            <div className="flex-center flex-col">
              <h1 className='text-[25px] sm:text-[35px] font-semibold '>Join 10,000+ subscribers</h1>
              <p className='text-[16px] mt-3 mb-6'>Join our mailing list to get the latest news </p>
              <ButtonCustom />
              <p className='text-[14px] mt-6'>Join our mailing list to get the latest news </p>
            </div>
        </div>
    </div>
  )
}

export default Subscribers