import React from 'react'
import '../Footer/Footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {RiFacebookFill} from 'react-icons/ri'
import {FiGithub} from 'react-icons/fi';
import {MdWhatsapp} from 'react-icons/md';
function Footer() {
  return (
    <div className='footer-main'>
        <footer className='bg-primary1'>
            <h2 className='text-center text-accent1'>Sarvind Up</h2>
            <p className='mt-5 text-center'>
            Design is not a single object or dimension. Design is messy and complex
            </p>
            <div className="social-links">
            <ul className='flex justify-center gap-10 pb-24'>
      <i>
        <a href="https://twitter.com/XxxTentecion16?t=JywrduAD5GN6DThjfZW0pA&s=08 ">
        <FiTwitter   className='footer-icon text-accent1 text-4xl hover:text-primaryblack1 duration-500 cursor-pointer' />
        </a>
      </i>
      <i>
        <a href="https://instagram.com/trez_yn?igshid=ZDdkNTZiNTM=">
        <FaInstagram  className='footer-icon text-accent1 text-4xl hover:text-primaryblack1 duration-500 cursor-pointer'/>
        </a>
      </i>
      <i>
        <a href="https://www.facebook.com/sarvind.up">
        <RiFacebookFill   className='footer-icon text-accent1 text-4xl hover:text-primaryblack1 duration-500 cursor-pointer'/>
        </a>
      </i>
      <i>
        <a href="https://github.com/settings/profile">
        <FiGithub  className='footer-icon text-accent1 text-4xl hover:text-primaryblack1 duration-500 cursor-pointer'/>
        </a>
      </i>
      <i>
        <a href="https://wa.me/qr/554UZ3BWZX6DO1">
        <MdWhatsapp   className='footer-icon text-accent1 text-4xl hover:text-primaryblack1 duration-500 cursor-pointer' />
        </a>
      </i>
    </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer
