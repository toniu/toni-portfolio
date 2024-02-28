import React from 'react'
import './css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>LinkedIn</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>GitHub</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2024 toni., inc. all rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer