import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './Contact.css'
import Whatsapp from './Whatsapp'
import Email from './Email'
import Instagram from './Instagram'
import Github from './Github'
import {IoLogoWhatsapp} from 'react-icons/io'
import {RiInstagramFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'

export default function Contact() {

    const contactClose = () => {
        document.querySelector('.contact').style.display = 'none'
    }

    return (
        <div className='contact'>
            <div className='menu-bar'>
                <div className='ctrl-tab'>
                    <div className='red' onClick={() => contactClose()}></div>
                    <div className='yellow' style={{ backgroundColor: 'rgb(255, 234, 0)' }}></div>
                    <div className='green' style={{ backgroundColor: 'green' }}></div>
                </div>
                <div className='title-bar'>Contact</div>
            </div>
            <div className='contact-wraper'>
                <div className='info-contact'>
                    <Link  to='/' className='card-contact' id='wa' ><IoLogoWhatsapp />{window.innerWidth > 884 ? 'Whatsapp'  : ''} </Link>
                    <Link to='/Instagram' className='card-contact' id='ig' ><RiInstagramFill /> {window.innerWidth > 884 ? 'Instagram'  : ''} </Link>
                    <Link to='/Email' className='card-contact' id='email' ><MdEmail /> {window.innerWidth > 884 ? 'Email'  : ''} </Link>
                    <Link to='/Github' className='card-contact' id='git' ><FaGithub /> {window.innerWidth > 884 ? 'Github'  : ''} </Link>
                </div>
                <div className='chat-me'>
                    <Routes>
                        <Route path='/' element={<Whatsapp />} ></Route>
                        <Route path='/Instagram' element={<Instagram />} ></Route>
                        <Route path='/Email' element={<Email />} ></Route>
                        <Route path='/Github' element={<Github />} ></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
