import React from 'react'

export default function Email() {
    return (
        <div className='email'>
                <input type="text" placeholder='Your name' className='your-email' required />
                <input type="email" placeholder='Your email' className='your-email'  required/>
                <textarea rows="" cols="" placeholder='Message' className='message-email' required ></textarea>
                <button type='submit'>Send message</button>
        </div>
    )
}
