import React, { useState } from 'react'
import './Contact.css'
import styled from 'styled-components'
import image1 from './image1.svg'
import image2 from './image2.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function Contact() {
    const [isContactSubmit, setIsContactSubmit] = useState(false)
    return (
        <div className='page Contact' name="CONTACT">
            {/* 
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
    </div>*/}
            {/*form container*/}

            <Contact__FormContainer>
                {/*picture container */}
                <Contact__PictureContainer
                    style={{
                        left: `${isContactSubmit ? '50%' : '0%'}`
                    }}
                >
                    <img src={image1}
                        height='100%'
                        width='100%'
                        style={
                            !isContactSubmit ?
                                {
                                    top: 0,
                                    opacity: 1,
                                    transitionDelay: '0.4s'
                                } :
                                {
                                    top: '50%',
                                    opacity: 0
                                }
                        }
                    />
                    <img src={image2}
                        height='100%'
                        width='100%'
                        style={
                            isContactSubmit ?
                                {
                                    top: 0,
                                    opacity: 1,
                                    transitionDelay: '0.4s'
                                } :
                                {
                                    top: '50%',
                                    opacity: 0
                                }
                        }
                    />
                </Contact__PictureContainer>
                { /*done message */}
                <Contact__DoneMessage_Container
                    style={
                        isContactSubmit ?
                            {
                                transform: 'translate(0,0)',
                                opacity: 1,
                                transitionDelay: '0.4s'
                            } :
                            {
                                transform: 'translate(0,50%)',
                                opacity: 0
                            }
                    }
                >
                    <Contact__DoneMessage_btn
                        onClick={() => setIsContactSubmit(false)}
                    >
                        <AiOutlineArrowLeft />

                    </Contact__DoneMessage_btn>
                    <Contact__DoneMessage_Title>
                        Done!
                    </Contact__DoneMessage_Title>
                    <Contact__DoneMessage>
                        Thank you for sending me a message, I'll contact you as soon as possible
                    </Contact__DoneMessage>
                </Contact__DoneMessage_Container>
                {/*form */}
                <Contact__Form>
                    <Contact__Form_title>Get in touch!</Contact__Form_title>
                    <div className='Contact__Form_inputLine'>

                        <input type='text' className='Contact__Form_input' required />
                        <span className='Contact__Form_inputTitle'>Name</span>
                    </div>
                    <div className='Contact__Form_inputLine'>

                        <input type='text' className='Contact__Form_input' required />
                        <span className='Contact__Form_inputTitle'>Phone number</span>
                    </div>
                    <div className='Contact__Form_inputLine'>

                        <input type='text' className='Contact__Form_input' required />
                        <span className='Contact__Form_inputTitle'>Email</span>
                    </div>
                    <Contact__Form_message></Contact__Form_message>
                    <Contact__Form_btn
                        onClick={() => setIsContactSubmit(true)}
                    >
                        Submit
                    </Contact__Form_btn>
                </Contact__Form>
            </Contact__FormContainer>
        </div>
    )
}
const Contact__FormContainer = styled.div`
    background-color: #5929F8;
    height: 80vh;
    width:70vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,calc(-50% + 30px));
    display:flex;
    border-radius: 5px;
`
const Contact__PictureContainer = styled.div`
    height: 100%;
    width: 50%;
    background-color: white;
    position: absolute;
    top: 0;
    z-index: 5;
    transition: left 0.4s;
    background-image: url("image1.svg");
    overflow: hidden;
    img{
        position: absolute;
        left: 0;
        transition: all 0.4s;
    }
`
const Contact__DoneMessage_Container = styled.div`
    height: 100%;
    width: 50%;
    transition: all 0.4s;
`
const Contact__Form = styled.div`
    height: 100%;
    width: 50%;
`
const Contact__Form_title = styled.h3`
    font-size: 25px;
    font-weight: 400;
    margin: 30px auto;
    width: fit-content;
`
const Contact__Form_message = styled.textarea`
    background: none;
    border: 1px solid white;
    width: 60%;
    margin: 0 auto;
    margin: 30px auto;
    display: block;
    height: 100px;
    color: white;
    padding: 5px;
    font-size: 18px;
`
const Contact__Form_btn = styled.button`
    width: 60%;
    margin: 0 auto;
    padding: 10px 0;
    display: block;
    border: none;
    color:  #5929F8;
    background-color: white;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.4s;
    :hover{
        background-color: #e7e7e7
    }
`
const Contact__DoneMessage_btn = styled.button`
    background: none;
    border: 1.1px solid white;
    color: white;
    padding: 10px 12px;
    margin: 20px;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.2s;
    :hover{
        background-color: #ffffff26;
    }
    margin-bottom: 0;
`
const Contact__DoneMessage_Title = styled.h3`
    margin: 0 auto;
    font-size: 30px;
    width: fit-content;
    margin-bottom: 25px;
`
const Contact__DoneMessage = styled.p`
    width: 70%;
    margin: 0 auto;
    font-size: 18px;
`
export default Contact