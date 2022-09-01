import React, { Component } from 'react'
import './Home.css'
import anime from 'animejs'
import { gsap, TextPlugin } from "gsap/all";



import atom from '../../assets/atom.png'
import matrix from '../../assets/matrix.png'
import megamingx from '../../assets/megamingx.png'
import segitiga from '../../assets/segitiga.png'
import slash from '../../assets/slash.png'
import lebihdari from '../../assets/lebihdari.png'
import kurangdari from '../../assets/kurangdari.png'
import camera from '../../assets/camera.png'
import arbi from '../../assets/pp-arbi.png'
import roket from '../../assets/roket.png'
import About from '../About/About';



class Home extends Component {
    animation() {
        let path = anime.path('#demo-svg path')

        anime({
            targets: '#emoji',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 10000,
            loop: true,
        });
        anime({
            targets: '#atom',
            translateX: 250,
            translateY: 450,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });
        anime({
            targets: '#matrix',
            translateX: 250,
            translateY: -100,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });
        anime({
            targets: '#megamingx',
            translateX: 250,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
        });
        anime({
            targets: '#segitiga',
            translateX: -350,
            translateY: 150,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });
        anime({
            targets: '#kurangdari',
            translateX: -350,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });
        anime({
            targets: '#slash',
            translateY: -150,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });
        anime({
            targets: '#lebihdari',
            translateX: 250,
            translateY: -150,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });
        anime({
            targets: '#camera',
            translateX: 250,
            translateY: 150,
            duration: 13000,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true,
            rotate: '1turn'
        });

        gsap.registerPlugin(TextPlugin);
        gsap.to('.text-write', { duration: 1, delay: 1, loop: true, text: 'I am a Front-End Developer.' })

        anime({
            targets: '.cls-1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 4000,
            delay: function (el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
        });
    }

    // hoverBtn = () => {
    //     anime({
    //         targets: '.content-1 button',
    //         width: '12rem',
    //         easing: 'easeInOutQuad',
    //         direction: 'alternate',
    //         duration: '300'
    //     });
    // }

    componentDidMount() {
        this.animation()
    }


    render() {
        return (
            <div>
                <div className='bg-home'>
                    <img id='atom' src={atom} width={150} alt="atom" />
                    <img id='matrix' src={matrix} width={100} alt="matrix" />
                    <img id='megamingx' src={megamingx} width={50} alt="megaminx" />
                    <img id='segitiga' src={segitiga} width={80} alt="segitiga" />
                    <img id='kurangdari' src={kurangdari} width={50} alt="kurangdari" />
                    <img id='slash' src={slash} width={60} alt="slash" />
                    <img id='lebihdari' src={lebihdari} width={50} alt="lebihdari" />
                    <img id='camera' src={camera} width={150} alt="camera" />
                </div>
                <div className='home-content-wraper'>
                    <div className='content-1'>
                        <div className='wraper-text'>
                            <div className='animate-text'>
                                <svg viewBox="0 0 800 800" >
                                    <path id="Color_Fill_1" stroke='black' data-name="Color Fill 1" className="cls-1" d="M222.749,256.229a7.8,7.8,0,0,1-5.841-2.361,8.684,8.684,0,0,1,6.254-14.582,7.482,7.482,0,0,1,6.106,2.775,11.39,11.39,0,0,1,2.272,7.438v27.275h22.066V247.905q0-14.463-8.23-22.817t-22.509-8.353a30.479,30.479,0,0,0-30.681,30.639q0,13.166,8.85,21.9t22.126,8.737a29.1,29.1,0,0,0,4.956-.472V254.694a10,10,0,0,1-5.369,1.535h0Zm69.267-39.553q-11.624,0-18.585,7.586T266.469,244.6v32.175h22.066V248.85q0-9.21,6.018-9.21a8.683,8.683,0,0,1,4.189,1.3V217.325a45.16,45.16,0,0,0-6.726-.649h0Zm11.919-20.486v49.059q0,13.52,7.08,22.02a28.956,28.956,0,0,0,10.355,7.793,31.485,31.485,0,0,0,35.076-5.963,30.763,30.763,0,0,0,.147-43.391,28.936,28.936,0,0,0-21.329-8.973q-2.005,0-5.9.354v24.322a10.271,10.271,0,0,1,5.546-2.125,7.719,7.719,0,0,1,5.782,2.45,8.389,8.389,0,0,1,2.361,6.051,7.988,7.988,0,0,1-2.508,5.933,8.41,8.41,0,0,1-6.107,2.45q-8.437,0-8.437-11.748V196.19H303.935Zm71.214,21.725v58.859h22.067V217.915H375.149Zm3.334-23.112a10.448,10.448,0,0,0-.177,15.024,12.142,12.142,0,0,0,15.871,0A10.448,10.448,0,0,0,394,194.8,11.107,11.107,0,0,0,378.483,194.8Zm61.922,1.387v80.584h22.066V196.19H440.405Zm32.923,21.725L463.3,238.342,477.1,276.774H501.53l-16.048-37.429,10.8-21.43H473.328Zm32.214,31.879q0,12.694,5.959,19.836,7.67,9.151,20.238,9.151a24.918,24.918,0,0,0,18.644-7.881,26.773,26.773,0,0,0,7.611-19.334V218.742H535.928v33.237q0,5.018-4.13,5.018-4.189,0-4.189-5.018V218.742H505.542v31.052Zm95.523-31.052q-11.505,0-18,6.317a18.419,18.419,0,0,0-4.927,7.261q-1.209,3.661-1.681,12.693-0.354,5.548-2.626,7.763t-7.581,2.214h-1v23.378h3.068q11.386,0,17.582-3.661,11.682-7.024,13.216-24.086,0.472-5.136,2.213-6.878t6.4-1.741v-23.26h-6.668Zm11.447-22.552v48.35q0,12.575,5.074,20.19a28.593,28.593,0,0,0,10.65,9.446,29.963,29.963,0,0,0,14.13,3.483q0.827,0,2.537-.059V254.4q-5.9,0-8.112-2.656t-2.213-9.682h9.912V218.742h-9.912V196.19H612.512Zm42.835,21.725v58.859h22.066V217.915H655.347ZM658.68,194.8a10.451,10.451,0,0,0-.177,15.024,12.143,12.143,0,0,0,15.872,0A10.451,10.451,0,0,0,674.2,194.8,11.108,11.108,0,0,0,658.68,194.8Zm59.031,61.426a7.8,7.8,0,0,1-5.841-2.361,8.684,8.684,0,0,1,6.254-14.582,7.484,7.484,0,0,1,6.107,2.775A11.39,11.39,0,0,1,726.5,249.5v27.275h22.067V247.905q0-14.463-8.231-22.817t-22.509-8.353a30.479,30.479,0,0,0-30.681,30.639q0,13.166,8.851,21.9t22.125,8.737a29.1,29.1,0,0,0,4.956-.472V254.694a10,10,0,0,1-5.369,1.535h0Z" />
                                </svg>
                            </div>
                            <h1>I Like To Craft Solid And Scalable Frontend Products With Great User Experiences</h1>
                            <div className='text-effect'>
                                <h2 className='text-write'></h2>
                            </div>
                        </div>
                    </div>
                    <div className='content-2'>
                        <div className='animate'>
                            <img id='emoji' src={roket} alt="roket" />
                            <svg id='demo-svg' >
                                <path fill='none' d='M 1200 600 L 1200 400 L 1200 300 C 1200 200 1150 200 1050 150 C 900 100 750 100 650 150 C 550 200 500 250 450 350 C 400 450 450 550 550 550 C 700 550 750 400 650 350 C 550 300 450 300 350 350 L 150 450 Q 50 500 0 400 L 0 0 C 150 0 200 0 200 100 L 200 300 L 200 600 Z' ></path>
                            </svg>
                        </div>
                    </div>
                    <div className='content-3'>
                        <img src={arbi} alt="arbi" />
                    </div>
                </div>
            </div >
        )
    }
}


export default Home

