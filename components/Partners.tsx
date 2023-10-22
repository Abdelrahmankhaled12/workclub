"use client"

import { partners } from '@/constants'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
const Partners = () => {


    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])


    return (
        <div className='partner' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <div className="max-width padding-x padding-y">
                <h2 className='text-center text-blueCustomColor font-semibold text-[20px] mb-5'>Our partners</h2>
                <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-5 items-center md:w-[80%] mx-auto">
                    {partners.map((partner) => (
                        <img
                            src={partner}
                            alt="partner"
                            key={partner}
                            className='mx-auto w-[90px] sm:w-[150px]'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners 