import React from 'react'
import project from './assets/project.jpg'
import './styles/Second.css'

const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>About Me</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={project} alt="" />
                </div>

                <div className="text-2">
                    <p>~CSE Student in IIIT Bhopal-2nd Year</p>
                    <p>~Learning MERN Stack</p>
                    <p>~Interest in Cybersecurity</p>
                    <p>~Entrepreneurial Mindset</p>
                    <p>~Volunteer in Pehchan YUI(NGO)</p>
                    <p>~Leadership Qualities with Management skills</p>
                </div>
            </div>
        </section>
    )
}

export default Second
