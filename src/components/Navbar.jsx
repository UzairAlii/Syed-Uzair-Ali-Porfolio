import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { Images } from '../assets/assets'
import { motion } from "motion/react";

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)



    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (id) => {
        // Close menu if it's open (for mobile)
        if (menuOpen) setMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/", { replace: true });

            // Wait for home to load before scrolling
            setTimeout(() => {
                scrollToSection(id);
            }, 100);
        } else {
            scrollToSection(id);
        }
    };




    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            {/* Background Image + Gradient */}
            <div className={` fixed top-0 right-0 w-full -z-10 translate-y-[-30%] md:translate-y-[-80%]`}>
                <img className='w-full bg-cover' src={Images.navbarBG} alt='' />
                <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white backdrop-blur-sm'></div>
            </div>

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 flex items-center justify-between px-5 lg:px-8 xl:px-[6%] py-5 transition-all duration-1000 ease-in-out ${isScroll ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
                {/* Logo */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => handleNavClick('top')} className='logo flex items-center cursor-pointer'>
                    <p className='text-3xl font-bold'>Uzair</p>
                    <span className='h-2 w-2 rounded-full bg-red-600 mt-[15px]'></span>
                </motion.div>



                {/* Desktop Nav Links */}
                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`ul hidden md:flex items-center gap-5 lg:gap-10 px-5 py-3 md:ml-16 rounded-full ${isScroll ? "" : " bg-white/60 shadow-md shadow-black/30"}`}>
                    <li><button onClick={() => handleNavClick('top')} className='ovo text-md text-black'>Home</button></li>
                    <li><button onClick={() => handleNavClick('about')} className='ovo text-md text-black'>About</button></li>
                    <li><button onClick={() => handleNavClick('services')} className='ovo text-md text-black'>Services</button></li>
                    <li><button onClick={() => handleNavClick('portfolio')} className='ovo text-md text-black'>Portfolio</button></li>
                    <li><button onClick={() => handleNavClick('contact')} className='ovo text-md text-black'>Contact</button></li>

                </motion.ul>


                {/* Social Icons */}
                <motion.div
                initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                className='hidden md:flex items-center gap-5'>

                    <a href="https://www.instagram.com/syed.uzair.ali01?igsh=MWludGh0dmN3a2dzOA==" target="_blank" rel="noopener noreferrer">
                        <img src={Images.insta} alt='Instagram' className='w-4' />
                    </a>
                    <a href="https://www.facebook.com/share/1ELT9FvjCf/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                        <img src={Images.fb} alt='Facebook' className='w-5' />
                    </a>
                    <a href="https://www.linkedin.com/in/syed-uzair-ali-5ab504294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <img src={Images.linkedIn} alt='LinkedIn' className='w-6' />
                    </a>
                    <a href="https://github.com/UzairAlii" target="_blank" rel="noopener noreferrer">
                        <img src={Images.github} alt='GitHub' className='w-5' />
                    </a>
                </motion.div>

                {/* FOR MOBILE SCREENS  */}
                {/* Hamburger Button  */}
                <motion.div
                initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                className='flex md:hidden z-[999]'>

                    <img onClick={toggleMenu} src={menuOpen ? Images.cancel : Images.hamburger} alt='menu' className='w-5 transition-transform duration-300' />
                </motion.div>

            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div
                    onClick={toggleMenu}
                    className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-51 transition-opacity duration-300'
                />
            )}

            {/* Sliding Menu */}
            <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-52 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='p-6 flex flex-col gap-6'>
                    {/* Close button inside (optional) */}
                    <button className='self-end md:hidden' onClick={toggleMenu}>
                        <img src={Images.cancel} alt='close' className='w-5' />
                    </button>

                    {/* Mobile Nav Links */}
                    <ul className="flex flex-col">
                        <li className="flex items-center justify-between pb-3 border-b border-[#00000041]">
                            <button className="ovo text-md text-black w-full text-left" onClick={() => handleNavClick('top')}>
                                Home
                            </button>
                            <img className="w-3" src={Images.rightChevron} alt="" />
                        </li>
                        <li className="flex items-center justify-between py-3 border-b border-[#00000041]">
                            <button className="ovo text-md text-black w-full text-left" onClick={() => handleNavClick('about')}>
                                About
                            </button>
                            <img className="w-3" src={Images.rightChevron} alt="" />
                        </li>
                        <li className="flex items-center justify-between py-3 border-b border-[#00000041]">
                            <button className="ovo text-md text-black w-full text-left" onClick={() => handleNavClick('services')}>
                                Services
                            </button>
                            <img className="w-3" src={Images.rightChevron} alt="" />
                        </li>
                        <li className="flex items-center justify-between py-3 border-b border-[#00000041]">
                            <button className="ovo text-md text-black w-full text-left" onClick={() => handleNavClick('portfolio')}>
                                Portfolio
                            </button>
                            <img className="w-3" src={Images.rightChevron} alt="" />
                        </li>
                        <li className="flex items-center justify-between py-3 border-b border-[#00000041]">
                            <button className="ovo text-md text-black w-full text-left" onClick={() => handleNavClick('contact')}>
                                Contact
                            </button>
                            <img className="w-3" src={Images.rightChevron} alt="" />
                        </li>
                    </ul>



                    {/* Social Icons */}
                    <div className='flex flex-col mt-6'>
                        <h3 className='text-lg'>My Social Handles</h3>
                        <div className='flex items-center gap-4 mt-2'>
                            <a href="https://www.instagram.com/syed.uzair.ali01?igsh=MWludGh0dmN3a2dzOA==" target="_blank" rel="noopener noreferrer">
                                <img src={Images.insta} alt='Instagram' className='w-5' />
                            </a>
                            <a href="https://www.facebook.com/share/1ELT9FvjCf/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                                <img src={Images.fb} alt='Facebook' className='w-5' />
                            </a>
                            <a href="https://www.linkedin.com/in/syed-uzair-ali-5ab504294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <img src={Images.linkedIn} alt='LinkedIn' className='w-6' />
                            </a>
                            <a href="https://github.com/UzairAlii" target="_blank" rel="noopener noreferrer">
                                <img src={Images.github} alt='GitHub' className='w-5' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
