"use client"

import React, { useEffect, useState } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonTop = () => {
    const [show, setShow] = useState("opacity-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

    const controlNavbar = () => {
        if (window.scrollY > 350) {
            setShow("opacity-100")
        } else {
            setShow("opacity-0")
        }
        setLastScrollY(window.scrollY)
    }

    const handleButtonClick = () => {
        const section = document.getElementById("top");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <button aria-label="top scroll" onClick={handleButtonClick} className={`${show} text-white w-[35px] h-[35px] fixed right-[30px] bottom-[20px] border-[1px] border-solid border-blueCustomColor bg-blueCustomColor p-[5px] rounded-[5px] duration-300 hover:bg-white hover:text-blueCustomColor`}>
            <FontAwesomeIcon icon={faArrowUp} className='absolute w-[15px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
        </button>
    )
}

export default ButtonTop