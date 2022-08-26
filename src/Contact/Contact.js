import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import emailjs from '@emailjs/browser'

import image1 from './image1.svg'
import image2 from './image2.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'


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
            if (inputField == 'Phone number' && isNaN(Number(inputValue.split(' ').join('')))) {
                alert('Please check your phone number again, NOT NUMBER');
                return;
            }
            //if phone number input value is negative cannot submit
            if (inputField == 'Phone number' && Number(inputValue.split(' ').join('')) < 0) {
                alert('Invalid phone number, NEGATIVE NUMBER');
                return;
            }
            //if email input is invalid
            if (inputField == 'Email' && !emailValidate(inputValue)) {
                alert('Invalid email');
                return;
            }
        }
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
                                transitionDelay: '0.4s',
                            } :
                            {
                                transform: 'translate(0,50%)',
                                opacity: 0,
                            }
                    }
                    isContactSubmit={isContactSubmit}
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
                            key={inputItem}
                        >

                            <Contact__Form_input
                                type='text'
                                id={inputItem}
                                value={contactInput[inputItem]}
                                onChange={inputHandler}
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
                        id='Message'
                        value={contactInput['Message']}
                        onChange={inputHandler}
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
    @media(max-width:1000px){
        display: none;
        svg{
            display:none;
        }
    }
`
const Contact__DoneMessage_Container = styled.div`
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
    @media(max-width:1000px){
        width: 100%;
    }
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