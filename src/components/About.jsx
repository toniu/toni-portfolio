import React from 'react'
import john from '../assets/avatar.png'
import './css/About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quam at hic expedita illum fuga consequuntur, modi id maiores sed quos in repellat autem nemo eaque dolor eum adipisci. Eligendi!</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui quas repellendus voluptas officiis, itaque ad magni. Soluta adipisci porro sunt molestiae pariatur, veniam quibusdam, saepe est animi fugiat cupiditate.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About