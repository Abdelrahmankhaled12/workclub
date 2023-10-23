
import React from 'react'
import ButtonCustom from './ButtonCustom'
import Aos from "aos";
import "aos/dist/aos.css"

const Features = () => {

  if (typeof document !== 'undefined') {
    Aos.init({
      once: true,
    });
  }


  return (
    <div className='pt-5 pb-5'>
      <div className="max-width padding-x padding-y">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-5">
          <img src="/culture.png" alt="" className='mx-auto' data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" />
          <div className="text" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h1 className='text-[40px] md:text-[50px] text-blueCustomColor font-semibold'>Culture</h1>
            <p className='my-[16px] text-blackCustomColor leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <ButtonCustom />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-5" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
          <div className="text order-2 lg:order-1" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h1 className='text-[40px] md:text-[50px] text-greenCustomColor font-semibold'>Collaboration</h1>
            <p className='my-[16px] text-blackCustomColor leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <ButtonCustom />
          </div>
          <img src="/collaboration.png" alt="" className='mx-auto  order-1 lg:order-2' />
        </div>
      </div>
    </div>
  )
}

export default Features