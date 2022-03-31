import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='page'>
            <ul className='contactInfo'>
                <li><a href="tel:+2063065818">Phone number</a>|</li>
                <li><a href="mailto:donggnguyen12@gmail.com">Email</a>|</li>
                <li><a href="https://github.com/donggo-git">Github</a></li>
            </ul>
        </div>
    )
}

export default Contact