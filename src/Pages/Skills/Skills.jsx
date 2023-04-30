import React from 'react'
import '../Skills/Skills.css'

function Skills() {
  return (
    <div className='skills-main' id='skills-main'>
        <h1 className='title text-5xl text-accent1 font-bold mt-20'>Skills</h1>
      <div className="container">
        <div className="row mt-36 ">
            <div className="col flex gap-5 justify-center">
                <div className="skills-items w-44 h-52 border-2 relative border-primary1 rounded-full">
                    <div className="item-txt">
                    <h1 className='font-bold text-center text-accent1'>100%</h1>
                    <p className='text-center text-primary1'>HTML</p>
                    </div>
                </div>
                <div className="skills-items  w-44 h-52 border-2 relative border-primary1 rounded-full ">
                    <div className="item-txt">
                    <h1 className='font-bold text-center text-accent1'>95%</h1>
                    <p className='text-center text-primary1'>Css</p>
                    </div>
                </div>
                <div className="skills-items  w-44 h-52 border-2 relative border-primary1 rounded-full">
                    <div className="item-txt">
                    <h1 className='font-bold text-center text-accent1'>35%</h1>
                    <p className='text-center text-primary1'>Javascript</p>
                    </div>
                </div>
                <div className="skills-items  w-44 h-52 border-2 relative border-primary1 rounded-full">
                    <div className="item-txt">
                    <h1 className='font-bold text-center text-accent1'>92%</h1>
                    <p className='text-center text-primary1'>Bootstrap</p>
                    </div>
                </div>
                <div className="skills-items  w-44 h-52 border-2 relative border-primary1 rounded-full">
                    <div className="item-txt">
                    <h1 className='font-bold text-center text-accent1'>30%</h1>
                    <p className='text-center text-primary1'>TailwindCss</p>
                    </div>
                </div>
                <div className="skills-items  w-44 h-52 border-2 relative border-primary1 rounded-full">
                    <div className="item-txt">
                    <h1 className='font-bold text-center text-accent1'>75%</h1>
                    <p className='text-center text-primary1'>Figma</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
