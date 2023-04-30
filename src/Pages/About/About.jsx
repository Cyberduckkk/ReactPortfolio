import React from 'react'
import aboutimg from '../../../src/Saly-12.png'
import '../About/About.css'

function About() {
  return (
    <div className='about-main' id='about-main'>
      <div className="container">
      <span className='title text-5xl text-accent1 font-bold'>About</span>
        <div className="row mt-10">
          <div className="col">
            <img src={aboutimg} className='about-img' width={350}/>
          </div>
          <div className="col">
          <p>Hi! My Name is Sarvind Up.Iam a Web Designer, and i'm very passionate and dedicated to my work.I have acquired the skills and knowledge neccessary to make your project a success</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
