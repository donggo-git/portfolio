import React from 'react'
import './Contact.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillPhone } from 'react-icons/ai'

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
                <div className='contact__icons'>
                    <div className='contact__icon--container'>
                        <a href="mailto:donggnguyen12@gmail.com">
                            <AiOutlineMail className='contact__icon--black' />
                            <AiOutlineMail className='contact__icon' />
                        </a>
                    </div>
                    <div className='contact__icon--container'>
                        <a href="https://github.com/donggo-git">
                            <AiFillGithub className='contact__icon--black' />
                            <AiFillGithub className='contact__icon' />
                        </a>
                    </div>
                    <div className='contact__icon--container'>
                        <a href='https://www.linkedin.com/in/dong-nguyen-b531a9191/'>
                            <AiFillLinkedin className='contact__icon--black' />
                            <AiFillLinkedin className='contact__icon' />
                        </a>
                    </div>
                    <div className='contact__icon--container'>
                        <a href='tel:206-306-5818'>
                            <AiFillPhone className='contact__icon--black' />
                            <AiFillPhone className='contact__icon' />
                        </a>
                    </div>
                </div>
                <button>submit</button>
            </div>
        </div>
    )
}

export default Contact