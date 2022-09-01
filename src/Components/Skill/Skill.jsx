import React from 'react'
import './Skill.css'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si'
import { IoLogoFigma } from 'react-icons/io5'

export default function Skill() {

    const skillClose = () => {
        document.querySelector('.skill').style.display = 'none'
    }
    return (
        <div className='skill'>
            <div className='menu-bar'>
                <div className='ctrl-tab'>
                    <div className='red'onClick={() => skillClose()} ></div>
                    <div className='yellow' style={{ backgroundColor: 'rgb(255, 234, 0)' }}></div>
                    <div className='green' style={{ backgroundColor: 'green' }}></div>
                </div>
                <div className='title-bar'>Skill</div>
            </div>
            <div className='skill-wraper'>
                <div className='animate-skill'>
                    <div>
                        <label>HTML</label>
                        <div className='diagram'><div className='skill-html'></div></div>
                    </div>
                    <div>
                        <label>CSS</label>
                        <div className='diagram'><div className='skill-css'></div></div>
                    </div>
                    <div>
                        <label>Java Script</label>
                        <div className='diagram'><div className='skill-js'></div></div>
                    </div>
                    <div>
                        <label>React</label>
                        <div className='diagram'><div className='skill-react'></div></div>
                    </div>
                    <div>
                        <label>Bootstrap</label>
                        <div className='diagram'><div className='skill-bootstrap'></div></div>
                    </div>
                    <div>
                        <label>Adobe Photoshop</label>
                        <div className='diagram'><div className='skill-ps'></div></div>
                    </div>
                    <div>
                        <label>Adobe Ilustrator</label>
                        <div className='diagram'><div className='skill-ai'></div></div>
                    </div>
                    <div>
                        <label>Figma</label>
                        <div className='diagram'><div className='skill-figma'></div></div>
                    </div>
                
                </div>
                <div className='list-skill-wraper'>
                    <div className='list-skill'>
                        <div className='html' ><SiHtml5 /></div>
                        <div className='css' ><SiCss3 /></div>
                        <div className='js' ><SiJavascript /></div>
                        <div className='react' ><SiReact /></div>
                        <div className='bootstrap' ><SiBootstrap /></div>
                        <div className='ps' ><SiAdobephotoshop /></div>
                        <div className='ai' ><SiAdobeillustrator /></div>
                        <div className='figma' ><IoLogoFigma /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
