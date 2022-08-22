import React, { useState } from 'react'
import './Contact.css'
import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'
import image1 from './image1.svg'
import image2 from './image2.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function Contact() {
    const [isContactSubmit, setIsContactSubmit] = useState(false)
    const formInputs = ['Name', 'Phone number', 'Email']

    const submitFormHandler = function (event) {
        event.preventDefault();
        setIsContactSubmit(true);
    }
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
                <Contact__Form onSubmit={submitFormHandler}>
                    <Contact__Form_title
                        style={
                            !isContactSubmit ?
                                {
                                    opacity: 1,
                                    transitionDelay: '0.8s'
                                } :
                                {
                                    opacity: 0
                                }
                        }
                    >Get in touch!
                    </Contact__Form_title>
                    {formInputs.map((inputItem, index) => (
                        <Contact__Form_inputLine
                            animationDelay={index}
                            isContactSubmit={isContactSubmit}
                        >

                            <Contact__Form_input
                                type='text'
                                id={inputItem}
                                required
                            />
                            <Contact__Form_inputTitle for={inputItem}>{inputItem}</Contact__Form_inputTitle>
                        </Contact__Form_inputLine>
                    ))}
                    <Contact__Form_message
                        style={
                            !isContactSubmit ?
                                {
                                    opacity: 1,
                                    transitionDelay: '0.8s'
                                } :
                                {
                                    opacity: 0
                                }
                        }
                    />
                    <Contact__Form_btn
                        type='submit'
                    >
                        Submit
                    </Contact__Form_btn>
                </Contact__Form>
            </Contact__FormContainer>
        </div >
    )
}
//animation
const inputAppear = keyframes`
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`
const inputFormAppear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
//style
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
    opacity: 0;
`
const Contact__Form = styled.form`
    height: 100%;
    width: 50%;
`
const Contact__Form_inputLine = styled.div`
    opacity: 0;
    position: relative;
    margin: 20px auto;
    width: 60%;
    animation-name: ${({ isContactSubmit }) => !isContactSubmit ? inputAppear : 'none'};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-delay: ${({ animationDelay }) => `${0.2 * (animationDelay + 1)}s`}
`
const Contact__Form_inputTitle = styled.label`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    z-index: -1;
    color: white;
    transition: all 0.4s ease-out;
`
const Contact__Form_input = styled.input`
    border: none;
    background: none;
    color: white;
    padding: 3px 5px;
    border-bottom: solid white 1px;
    width: 100%;
    font-size: 18px;
    :focus{
        outline: none;
    }
    :focus~${Contact__Form_inputTitle},
    :valid~${Contact__Form_inputTitle}{
        transform: scale(0.7) translate(-20%, 0%);
        top: -60%;
        left: 0%;
    }
`
const Contact__Form_title = styled.h3`
    font-size: 25px;
    font-weight: 400;
    margin: 30px auto;
    width: fit-content;
    opacity: 0;
    transition: all 0.4s ease-out;
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
    opacity: ${({ isContactSubmit }) => !isContactSubmit ? 1 : 0};
    transition-delay: 0.6s;
    transition: all 0.3s
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