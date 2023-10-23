
import React from 'react'
import ButtonCustom from './ButtonCustom'
import Aos from "aos";
import "aos/dist/aos.css"


const Hero = () => {

    if (typeof document !== 'undefined') {
        Aos.init({
            once: true,
        });
    }


    return (
        <div className="hero pt-5 pb-5" id='top'>
            <div className='max-width padding-x padding-y' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <h1 className='text-[30px] md:text-[50px] text-center font-semibold'>
                    Increase Hybrid Team Engagement to <br className='hidden md:block' /> Create a More <span className='text-greenCustomColor'>Positive Work <br className='hidden lg:block' /> Environment</span>
                </h1>
                <p className='text-[#212121] text-center my-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex-center">
                    <ButtonCustom />
                </div>
            </div>
        </div>
    )
}

export default Hero