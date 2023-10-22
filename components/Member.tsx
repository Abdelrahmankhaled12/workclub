import { memberProps } from '@/types'
import React from 'react'

const Member = ({image , name , jobTitle , subtitle}: memberProps) => {
    return (
        <div className="member">
            <img src={image} alt="" className='mx-auto' />
            <h2 className='text-center mt-3 text-[25px] text-blackCustomColor font-semibold'>{name}</h2>
            <span className='text-center block text-blackCustomColor'>{jobTitle}</span>
            <p className='text-center my-3 leading-[27px]'>{subtitle}</p>
        </div>
    )
}

export default Member