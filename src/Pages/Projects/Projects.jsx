import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import '../Projects/Projects.css'
import design1 from '../../Projects/Project1.svg'
import design2 from '../../Projects/Project2.svg'
import design3 from '../../Projects/project3.svg'
import design4 from '../../Projects/project4.png'
function Projects() {
  var swiper = new Swiper(".mySwiper", {});
  return (
    <div className='design-main' id='design-main'>
      <div className="container">
      <h2 className='title text-5xl text-accent1 font-bold mt-20'>Designs</h2>
        <div className="row grid lg:flex mt-36">
          <div className="col w-full bg-red-100">
            <img src={design1}/>
          </div>
          <div className="col  w-full">
            <img src={design2}/>
          </div>

        </div>
        <div className="row grid lg:flex mt-36">
        <div className="col  w-full">
            <img src={design3}/>
          </div>
          <div className="col  w-full">
            <img src={design4}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects

