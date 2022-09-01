import React, { useState } from 'react'
import './Navigator.css'

export default function Navigator(props) {
    const {pageOn} = props

    const mouseOver = (e) => {
        let card = e.target
        card.style.transform = 'scale(120%)'
        card.style.margin = '0 .5rem'
    }

    const mouseOut = (e) => {
        let card = e.target;
        card.style.transform = 'scale(100%)'
        card.style.margin = '0 0rem'
    }


    

    return (
        <div className='navigator'>
            <div className='nav-wrap'>
                <div to="/about" className='card' id='about' onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} onClick={(e) => pageOn(e)} ></div>
                <div className='card' id='portofolio' onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} onClick={(e) => pageOn(e)} ></div>
                <div className='card' id='skill' onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} onClick={(e) => pageOn(e)} ></div>
                <div className='card' id='contact' onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} onClick={(e) => pageOn(e)} ></div>
            </div>
        </div>
    )
}
