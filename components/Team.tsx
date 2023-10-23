import Member from './Member'
import React from 'react'

const Team = () => {

    return (
        <div className='team padding-section'>
            <div className="max-width padding-x padding-y">
                <div className="title" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <h1 className='text-[35px] font-semibold text-center text-blackCustomColor'>Our Team</h1>
                    <p className='w-full md:w-[600px] text-center mx-auto text-[16px] my-2 text-blackCustomColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <Member
                        name='Full name'
                        image='/member.png'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                        jobTitle='Job title'
                    />
                    <Member
                        name='Full name'
                        image='/member.png'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                        jobTitle='Job title'
                    />
                </div>
            </div>
        </div>
    )
}

export default Team