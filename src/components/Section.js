import React from 'react'
import man from './assets/man.png'
import './styles/Section.css'


const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hello My Name is</h1>
                    <h1 className='h1-big'>Vishal Jaiswal</h1>
                    <p>Compassionate student with curiosity to learn and Entrepreneurial mindset to problem solving</p>
                    <button className='text-button'>My Work</button>
                </div>

                <div className="image">
                    <img src={man} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section
