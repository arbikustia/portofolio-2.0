import React, { useEffect } from 'react'
import './About.css'
import cv from '../../assets/cv-arbi.pdf'

export default function About() {


    const closeTab = () => {
        document.querySelector('.about').style.display = 'none'
    }

    return (
        <div className='about'>
            <div className='menu-bar'>
                <div className='ctrl-tab'>
                    <div className='red' onClick={() => closeTab()}></div>
                    <div className='yellow' style={{ backgroundColor: 'rgb(255, 234, 0)' }}></div>
                    <div className='green' style={{ backgroundColor: 'green' }}></div>
                </div>
                <div className='title-bar'>About</div>
            </div>
            <div className='container'>
                <div className='photo'>
                </div>
                <div className='biodata'>
                    <h2>My name is arbi kustia & I am a font-end developer</h2>
                    <p>I'm A Design Technologist In Indonesia. I Like Working On The Front-End Of The Web.
                        This Is My Site, Where I Blog And Share Whatever Side Projects I've Been Working On.</p>
                    <div className='data'>
                        <div>
                            <p><span>Age :</span> 18</p>
                            <p><span>Gender :</span> Male</p>
                            <p><span>Language :</span> Indonesia</p>
                            <p><span>Work :</span> Front-End Developer</p>
                        </div>
                        <div>
                            <p><span>Freelance :</span> Available</p>
                            <p><span>Phone :</span> +62895605293775</p>
                            <p><span>Email :</span> arbikustia14@Gmail.Com</p>
                            <p><span>Country :</span> Indonesia</p>
                        </div>
                    </div>
                    <a href={cv} target="_blank"> <button className='download-cv'>Download CV</button> </a>
                </div>
            </div>
        </div>
    )
}
