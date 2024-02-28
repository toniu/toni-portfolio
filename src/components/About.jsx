import React from 'react'
import avatar from '../assets/avatar.png'

const About = () => {
    return (
        <div className='about bg-white w-full m-auto pt-32 pb-0 px-4' id='about'>
            <div className='container w-[1240px] grid grid-cols-[repeat(2,1fr)] m-auto;'>
                <img src={avatar} alt='neka' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p> Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit ipsum dolor sit amet. Cum sociis natoque penatibus</p>
                    <p>Neka, software engineer, web developer and designer</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About