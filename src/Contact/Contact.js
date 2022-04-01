import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='page Contact' name="CONTACT">
            <h2>Get in touch!</h2>
            <div className='form'>
                <div className='form__input'>
                    <div className='form__textField'>
                        <input type='text' placeholder='name' />
                        <span className='form__textField--border'></span>
                    </div>
                    <div className='form__textField'>
                        <input type='number' placeholder='Phone number' />
                        <span className='form__textField--border'></span>
                    </div>
                    <div className='form__textField'>
                        <input type='email' placeholder='email' />
                        <span className='form__textField--border'></span>
                    </div>
                    <textarea type='message' height="500px" placeholder='message' className='form__input--message' />
                </div>
                <button>submit</button>
            </div>
        </div>
    )
}

export default Contact