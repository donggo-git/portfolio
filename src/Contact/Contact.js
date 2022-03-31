import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='page Contact'>
            <div className='contactInfo__container'>
                <p>You can contact me by </p>
                <ul className='contactInfo'>
                    <li><a href="tel:+2063065818">Phone number</a>|</li>
                    <li><a href="mailto:donggnguyen12@gmail.com">Email</a>|</li>
                    <li><a href="https://github.com/donggo-git">Github</a></li>
                </ul>
                <p>or leave me a message below</p>
            </div>
            <div className='form'>
                <div className='form__input'>
                    <input type='text' placeholder='name' />
                    <input type='number' placeholder='Phone number' />
                    <input type='email' placeholder='email' />
                    <textarea type='message' height="500px" placeholder='message' className='form__input--message' />
                </div>
                <button>submit</button>
            </div>
        </div>
    )
}

export default Contact