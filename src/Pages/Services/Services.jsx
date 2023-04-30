import React from 'react'
import '../Services/Services.css'
import {MdOutlineFlightLand} from 'react-icons/md'
import {FaOpencart} from 'react-icons/fa'
import {SiBrandfolder} from 'react-icons/si'
import {TbBrandSuperhuman} from 'react-icons/tb'
import {MdOutlineDevices} from 'react-icons/md'
function Services() {
  return (
    <div className='service-main' id='service-main'>
      <div className="service-content">
        <div className="container1">
        <span  className='title text-5xl text-accent1 font-bold'>SERVICES</span>
        <p className='service-p text-accent1 pt-20'>We offer professional web design services at
            affordable rates to help your business attract more visitors and keep them on your site!😁</p>
            <div className="container ">
                <div className="row flex gap-10 justify-center">
                    <div className="col w-72">
                        <div className="servic-item bg-primary1 p-8 rounded-2xl hover:bg-transparent hover:border-2 border-primary1 duration-500 hover:text-primary1">
                          <i className='service-icon'>
                          <MdOutlineFlightLand className=' mb-5'/>
                          </i>
                            <h3 className=' text-accent1  text-3xl font-medium'>Landing Page</h3>
                            <p className='text-accent1 pt-3 font-light text-1xl'>Beatiful and effective landing pages for your goals.🥰</p>
                        </div>
                    </div>
                    <div className="col w-72">
                        <div className="servic-item bg-primary1 hover:border-2 border-primary1 hover:bg-transparent duration-500 hover:text-primary1 cursor-pointer p-8 rounded-2xl">
                          <i className='service-icon'>
                            <FaOpencart className=' mb-5'/>
                          </i>
                            <h3 className=' text-accent1  text-3xl font-medium'>Ecommerce</h3>
                            <p className='text-accent1 pt-3 font-light text-1xl'>We build digital experiences to meet sales goals for your business.😍</p>
                        </div>
                    </div>
                    <div className="col w-72">
                        <div className="servic-item bg-primary1 hover:border-2 border-primary1 hover:bg-transparent duration-500 hover:text-primary1 cursor-pointer p-8 rounded-2xl">
                        <i className='service-icon'>
                            <SiBrandfolder className=' mb-5'/>
                          </i>
                            <h3 className=' text-accent1  text-3xl font-medium'>Branding</h3>
                            <p className='text-accent1 pt-3 font-light text-1xl'>Only best solutions that will make your business unique.🥰</p>
                        </div>
                    </div>

                </div>
                <div className="row flex gap-10 mt-8 justify-center">
                <div className="col w-72">
                    <div className="servic-item bg-primary1 hover:border-2 border-primary1 hover:bg-transparent duration-500 hover:text-primary1 cursor-pointer p-8 rounded-2xl">
                    <i className='service-icon'>
                            <MdOutlineDevices className=' mb-5'/>
                          </i>
                            <h3 className=' text-accent1 text-3xl font-medium'>Responsive Design</h3>
                            <p className='text-accent1 pt-3 font-light text-1xl'>All designs are responsive design.😜</p>
                        </div>
                    </div>
                    <div className="col w-72">
                        <div className="servic-item bg-primary1 hover:border-2 border-primary1 hover:bg-transparent duration-500 hover:text-primary1 cursor-pointer p-8 rounded-2xl">
                        <i className='service-icon'>
                            <TbBrandSuperhuman className=' mb-5'/>
                          </i>
                            <h3 className=' text-accent1  text-3xl font-medium'>Portfolio Design</h3>
                            <p className='text-accent1 pt-3 font-light text-1xl'>I create animated Portfolio Design For YourSelf.😌</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Services
