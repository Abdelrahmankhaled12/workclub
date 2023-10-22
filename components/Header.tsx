"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { header_links } from '@/constants'
import ButtonCustom from './ButtonCustom'

const Header = () => {
    const [show, setShow] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(true);


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow("header")
        } else {
            setShow("")
        }
        setLastScrollY(window.scrollY)
    }

    const mobileMenuFunction = () => {
        setMobileMenu(!mobileMenu)
    }


    return (
        <>
            <header className={`${show}`}>
                <div className="max-width padding-x padding-y">
                    <div className="flex-between">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                        <div className="flex items-center">
                            <ul className='hidden space-x-[35px] me-8  md:flex'>
                                {header_links.map((link) => (
                                    <li className='text-[#000000] text-[16px] duration-300 hover:tracking-[1.4px]' key={link.title}>
                                        <Link href={link.href}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="hidden md:block">
                                <ButtonCustom />
                            </div>
                            <button className='block md:hidden' onClick={() => mobileMenuFunction()}>
                                <img src='/menu.png' alt='menu' width={50} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`fixed h-[100vh] bg-white z-[1000000] w-[100%] top-0 duration-300 ${mobileMenu ? "translate-x-[-100%]" : "translate-x-[0%]"}`}>
                <div className="p-5 cursor-pointer" onClick={() => mobileMenuFunction()}>
                    <img src="/close.png" alt="" className='ml-auto' />
                </div>
                <ul className='flex-center flex-col space-y-5 relative'>
                    {header_links.map((link) => (
                        <li className='text-[#000000] text-[16px] duration-300 hover:tracking-[1.4px]' key={link.title}>
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <ButtonCustom />
                </ul>
            </div>
        </>

    )
}

export default Header