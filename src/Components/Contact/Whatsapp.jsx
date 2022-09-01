import React, { useState } from 'react'
import './Contact.css'
import { BsCameraVideo } from 'react-icons/bs'
import { IoCallOutline, IoPaperPlane } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import { GrEmoji } from 'react-icons/gr'
import { ImAttachment } from 'react-icons/im'

export default function Whatsapp() {
    const [chatWa, setChahtWa] = useState()

    const msgWa = (e) => {
        setChahtWa(e.target.value)
    }

    let link = `whatsapp://send?text=${chatWa}&phone=+62895605293775`

    return (
        <div className='whatsapp'>
            <div className='head-wa'>
                <div className='left-head-wa'>
                    <div className='pp'><FaUserCircle /></div>
                    <div className='name'>Arbi</div>
                </div>
                <div className='right-head-wa'>
                    <div className='vc'><BsCameraVideo /></div>
                    <div className='call'><IoCallOutline /></div>
                </div>
            </div>
            <div className='content-wa'>
                <div className='emoji-wa'><GrEmoji /></div>
                <div className='send-file-wa'><ImAttachment /></div>
                <input type='text' onChange={(e) => msgWa(e)} className='input-wa' placeholder='Ketik pesan' required ></input>
                <a href={link} disabled className='btn-send-wa'><IoPaperPlane /></a>
            </div>
        </div>
    )
}
