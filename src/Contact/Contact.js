import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import emailjs from '@emailjs/browser'

import image1 from './image1.svg'
import image2 from './image2.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { sendEmail } from '../ultility/handleAWSData'

function Contact() {

    const [isContactSubmit, setIsContactSubmit] = useState(false)
    const [contactInput, setContactInput] = useState({
        'Name': '',
        'Phone number': '',
        'Email': '',
        'Message': ''
    })
    const formInputs = ['Name', 'Phone number', 'Email']


    const inputHandler = (event) => {
        const eventName = event.target.id;
        const eventValue = event.target.value;
        //change input value
        let updateInput = { ...contactInput }
        updateInput[eventName] = eventValue
        setContactInput(updateInput)
    }
    const emailValidate = (email) => {
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return res.test(email);
    }

    const submitFormHandler = function (event) {
        event.preventDefault();
        //check if anything wrong with user input
        for (let input in contactInput) {
            //if any input field is empty cannot submit
            const inputField = input
            const inputValue = contactInput[input]

            if (inputValue === '') {
                alert('please check your contact form some field is missing')
                return;
            }
            //if phone number input value is not number
            if (inputField === 'Phone number' && isNaN(Number(inputValue.split(' ').join('')))) {
                alert('Please check your phone number again, NOT NUMBER');
                return;
            }
            //if phone number input value is negative cannot submit
            if (inputField === 'Phone number' && Number(inputValue.split(' ').join('')) < 0) {
                alert('Invalid phone number, NEGATIVE NUMBER');
                return;
            }
            //if email input is invalid
            if (inputField === 'Email' && !emailValidate(inputValue)) {
                alert('Invalid email');
                return;
            }
        }

        sendEmail(contactInput);

        //sending message

        emailjs.send("service_ziqugtn", "template_s7xdqys", contactInput, '_YPpfg0vnnjh4LLJJ')
            .then(
                function (response) {
                    console.log('SUCCESS!', response)
                },
                function (error) {
                    console.log('FAILED', error)
                }
            )

        //reset the input
        setIsContactSubmit(true);

        setContactInput({
            'Name': '',
            'Phone number': '',
            'Email': '',
            'Message': ''
        })
    }
    return (
        <div className='page Contact' name="CONTACT">
            {/*form container*/}

            <ContactFormContainer>
                {/*picture container */}
                <ContactPictureContainer
                    style={{
                        left: `${isContactSubmit ? '50%' : '0%'}`
                    }}
                >
                    <img src={image1}
                        alt=""
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
                        alt=""
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
                </ContactPictureContainer>
                { /*done message */}
                <ContactDoneMessageContainer
                    style={
                        isContactSubmit ?
                            {
                                transform: 'translate(0,0)',
                                opacity: 1,
                                transitionDelay: '0.4s',
                            } :
                            {
                                transform: 'translate(0,50%)',
                                opacity: 0,
                            }
                    }
                    isContactSubmit={isContactSubmit}
                >
                    <ContactDoneMessageBtn
                        onClick={() => setIsContactSubmit(false)}
                    >
                        <AiOutlineArrowLeft />

                    </ContactDoneMessageBtn>
                    <ContactDoneMessageTitle>
                        Done!
                    </ContactDoneMessageTitle>
                    <ContactDoneMessage>
                        Thank you for sending me a message, I'll contact you as soon as possible
                    </ContactDoneMessage>
                </ContactDoneMessageContainer>
                {/*form */}
                <ContactForm onSubmit={submitFormHandler}>
                    <ContactFormTitle
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
                    </ContactFormTitle>
                    {formInputs.map((inputItem, index) => (
                        <ContactFormInputLine
                            animationDelay={index}
                            isContactSubmit={isContactSubmit}
                            key={inputItem}
                        >

                            <ContactFormInput
                                type='text'
                                id={inputItem}
                                value={contactInput[inputItem]}
                                onChange={inputHandler}
                                required
                            />
                            <ContactFormInputTitle for={inputItem}>{inputItem}</ContactFormInputTitle>
                        </ContactFormInputLine>
                    ))}
                    <ContactFormMessage
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
                        id='Message'
                        value={contactInput['Message']}
                        onChange={inputHandler}
                    />
                    <ContactFormBtn
                        type='submit'
                    >
                        Submit
                    </ContactFormBtn>
                </ContactForm>
            </ContactFormContainer>
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

//style
const ContactFormContainer = styled.div`
    background-color: #5929F8;
    height: 80vh;
    width:70vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,calc(-50% + 30px));
    display:flex;
    flex-direction: row;
    border-radius: 5px;
    @media(max-width: 1000px){
        flex-direction: column;
        height: fit-content;
        padding: 30px 0;
        overflow: hidden;
    }
    @media(max-width:800px){
        width: 90vw;
        
    }
`
const ContactPictureContainer = styled.div`
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
    @media(max-width:1000px){
        display: none;
        svg{
            display:none;
        }
    }
`
const ContactDoneMessageContainer = styled.div`
    height: 100%;
    width: 50%;
    transition: all 0.4s;
    @media(max-width:1000px){
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index:${({ isContactSubmit }) => isContactSubmit ? 10 : -10};
        background-color: #5929F8
    }
`
const ContactFormMessage = styled.textarea`
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
const ContactForm = styled.form`
    height: 100%;
    width: 50%;
    @media(max-width:1000px){
        width: 100%;
    }
`
const ContactFormInputLine = styled.div`
    opacity: 0;
    position: relative;
    margin: 20px auto;
    width: 60%;
    animation-name: ${({ isContactSubmit }) => !isContactSubmit ? inputAppear : 'none'};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-delay: ${({ animationDelay }) => `${0.2 * (animationDelay + 1)}s`}
`
const ContactFormInputTitle = styled.label`
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
const ContactFormInput = styled.input`
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
    :focus~${ContactFormInputTitle},
    :valid~${ContactFormInputTitle}{
        transform: scale(0.7) translate(-20%, 0%);
        top: -60%;
        left: 0%;
    }
`
const ContactFormTitle = styled.h3`
    font-size: 25px;
    font-weight: 400;
    margin: 30px auto;
    width: fit-content;
    opacity: 0;
    transition: all 0.4s ease-out;
`

const ContactFormBtn = styled.button`
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
const ContactDoneMessageBtn = styled.button`
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
const ContactDoneMessageTitle = styled.h3`
    margin: 0 auto;
    font-size: 30px;
    width: fit-content;
    margin-bottom: 25px;
`
const ContactDoneMessage = styled.p`
    width: 70%;
    margin: 0 auto;
    font-size: 18px;
`

export default Contact