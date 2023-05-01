import React, { useState } from 'react'
import profile from '../../img/profile.jpg'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    const [openProfile, setOpenProfile ,handler] = useState(false);
  return (
    <div className='flex justify-between nav'>
        <div className='logo'>
            <h2 className=' font-logo uppercase'>Sarvind Up</h2>
        </div>
    <div>
        <img src={profile} onClick={() => setOpenProfile ((prev) => !prev)} className='w-20 h-20 object-cover rounded-full profile-pic'/>
    </div>
    {
        openProfile&&    
        <div className='flex flex-col dropdownProfile'>
        <ul className='flex flex-col gap-4'>
            <li>
                <Link to='/'>Home</Link>
            </li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/designs'>Designs</Link></li>
          <li><Link to='/contact'>Contact Me</Link></li>
        </ul>
      </div>
    }
    </div>
  )
}

export default Nav
