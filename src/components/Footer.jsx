import React from 'react'
import { Images } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-[#f1f1f1] py-4 px-4 text-center sm:text-left">
      <div className=" mx-auto flex flex-col items-center sm:items-start gap-4">

        {/* Logo and Email */}
        <div className="flex flex-col w-full items-center">
          <div className="flex items-center space-x-1 cursor-pointer">
            <p className="text-3xl font-bold">Uzair</p>
            <span className="h-2 w-2 rounded-full bg-red-600 mt-[15px]"></span>
          </div>
          <div className="flex items-center text-gray-800 mt-1">
            <img src={Images.mail} className='w-5 mr-3' alt="" />
            <span className="text-sm">uzairali89347@gmail.com</span>
          </div>
        </div>

        {/* Bottom Border */}
        <hr className="w-full border-t border-gray-400 my-4" />

        {/* Footer Bottom Row */}
        <div className="w-full flex flex-col sm:flex-row justify-between gap-5 items-center text-xs text-gray-700">
          <p>© 2025 <span className='font-semibold'>Syed Uzair Ali</span>, All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <a href="https://github.com/UzairAlii" target="_blank" rel="noopener noreferrer">
              <img src={Images.github} alt='GitHub' className='w-5' />
            </a>
            <a href="https://www.linkedin.com/in/syed-uzair-ali-5ab504294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={Images.linkedIn} alt='LinkedIn' className='w-6' />
            </a>
            
            <a href="https://www.facebook.com/share/1ELT9FvjCf/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <img src={Images.fb} alt='Facebook' className='w-5' />
            </a>
            <a href="https://www.instagram.com/syed.uzair.ali01?igsh=MWludGh0dmN3a2dzOA==" target="_blank" rel="noopener noreferrer">
              <img src={Images.insta} alt='Instagram' className='w-4' />
            </a>
            
            
          </div>
          <div className="flex gap-4">
            <Link to="/terms-of-services" className="hover:underline">Terms of Services</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
