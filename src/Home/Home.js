import React, { useState, useEffect } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { Link } from 'react-scroll'
import styled, { keyframes } from 'styled-components'


function Home() {
    //typing effect
    const fullName = 'Dong Giang Nguyen'
    const [typedName, setTypedName] = useState('')
    let wordIndex = 0;
    const typingName = () => {
        if (wordIndex < fullName.length) {
            setTypedName((preTypedName) => preTypedName + fullName[wordIndex]);
            wordIndex++;
            setTimeout(() => typingName(), 50)
        }
        return
    }
    useEffect(() => {
        setTimeout(() => typingName(), 50)
    }, [])
    return (
        <HomePage className='page' name="HOME">
            <HomePageContainer>
                {/*Home content */}
                < HomePageContent >
                    {/*Hello banner */}
                    <HelloBanner HelloBanner > Hello</HelloBanner >
                    {/*full name */}
                    < FullName >
                        {typedName}
                        <TypingPointer TypingPointer >|</TypingPointer >
                    </FullName >
                    {/*ContactList */}
                    <ContactList ContactList >
                        <li><a href='tel:206-306-5818'>Phone</a><span>|</span></li>
                        <li><a href="mailto:donggnguyen12@gmail.com">Email</a><span>|</span></li>
                        <li><a href="https://github.com/donggo-git" target='blank'>Github</a></li>
                    </ContactList >
                    {/*description */}
                    <Description Description >
                        Hi there. I’m Dong, a CSC student from UWB who passionate with building website, who's looking for new opportunity in software engineer position.
                    </Description >
                    {/*Resume Button */}
                    <ResumeBtn ResumeBtn
                        href="https://scedu-my.sharepoint.com/:w:/g/personal/dong_g_nguyen_seattlecolleges_edu/EVnGwpxdc8xAvB6ziInlD4QBVfxuY-gGDvSMvt0LOkV4mg?e=kSt9z3"
                        target='blank'
                    >
                        Resume
                    </ResumeBtn >
                </HomePageContent >
                {/*Home images */}
                < HomePageImages >
                    {/*Avatar */}
                    <Avatar Avatar src="https://github.com/donggo-git/portfolio/blob/main/src/Home/avatar.jpg?raw=true" ></Avatar >
                    <AvatarShadow></AvatarShadow>
                </HomePageImages >
            </HomePageContainer>
            {/*Home scroll down btn */}
            <ScrollDownBtn>
                <Link Link
                    className='scrollDown_btn'
                    to="SKILLS"
                    duration={400}
                    smooth={true}
                >
                    <BsChevronDoubleDown className='scrollDown_icon scrollDown_iconDouble' />

                </Link >
            </ScrollDownBtn>
        </HomePage >
    )
}
//animation
const rotatePopUp = keyframes`
    to{
        opacity: 1;
        transform: rotate(0deg) translate(0,0);
    }
`
//style
const HomePage = styled.div`
    height: 100vh;
    margin: 0;
    position:relative;
    background-color:white;
    
    color:black;
    width: 100%;
    font-size: 17px;
    
`
const HomePageContainer = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 80%;
    height: 100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    color:black;
    @media(max-width:1000px){
        flex-direction: column;
    }
`
const HomePageContent = styled.div`
    width:50%;
    @media(max-width:1000px){
        order:2;
        width: 100%;
        height: 50%;
    }
`
const HelloBanner = styled.p`
    background-color: rgb(89, 41, 248);
    border-radius: 10rem 10rem 10rem 5px;
    width: fit-content;
    padding: 5px 20px;
    color:white;
    font-size: 20px;
    opacity: 0;
    transform: rotate(-90deg) translate(-50%,50%);
    animation:${rotatePopUp} 0.4s linear forwards;
    animation-delay: 1s;
`
const FullName = styled.h1`
    font-weight: light;
    font-size: 40px;
    @media(max-width:1000px){
        font-size: 30px;
    }
`
const TypingPointer = styled.span`
    color: rgb(89, 41, 248);
`
const ContactList = styled.ul`
    display:flex;
    list-style: none;
    transform: translateX(-10px);
    margin-top: 0;
    margin-bottom: 20px;
    a{
        color:black;
        text-decoration: none;
        margin: 0 10px;
        transition: color 0.2s
    }
    a:hover{
        color: rgb(89, 41, 248);
    }
`
const Description = styled.p`
    width: 500px;
    margin-bottom: 30px;
    opacity:0;
    transform: translate(0,50%);
    animation:${rotatePopUp} 0.2s linear forwards;
    animation-delay: 1.4s;
    @media(max-width:1000px){
        width: 100%;
    }

`
const ResumeBtn = styled.a`
    text-decoration: none;
    color: rgb(89, 41, 248);
    border: 1px solid rgb(89, 41, 248);
    border-radius: 10px;
    padding: 10px 20px;
    transition: background-color 0.2s;
    :hover{
        background-color: rgba(89, 41, 248,0.2)
    }
`
const HomePageImages = styled.div`
    position: relative;
    width: 50%;
    height:100%;
    @media(max-width:1000px){
        order:1;
        width:100%;
        height: 430px;
    }
    @media(max-height:800px){
        height: 350px;
    }
`
const Avatar = styled.img`
    width: 260px;
    border-radius: 100px 200px 200px 200px;
    position: absolute;
    top:15%;
    left:25%;
    z-index: 2;
    opacity: 0;
    transform: rotate(-90deg) translate(-50%,-50%);
    animation:${rotatePopUp} 0.4s linear forwards;
    animation-delay: 1s;
    @media(max-width:360px){
        width: 80%;
        left: 6.25%;
    }
`
const AvatarShadow = styled.div`
    content: '';
    height: 200px;
    width: 400px;
    position: absolute;
    top:25%;
    left:12.5%;
    background-color: rgb(89, 41, 248);
    border-radius: 100px 100px 50px 200px;
    opacity: 0;
    transform: rotate(90deg) translate(50%,50%);
    animation:${rotatePopUp} 0.4s linear forwards;
    animation-delay: 1.4s;
    @media(max-width:600px){
        width:100%;
        left: 6.25%;
    }
`
const ScrollDownBtn = styled.div`
    height: fit-content;
    width: fit-content;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 25px;
    color: rgb(0, 0, 0);
    transition: all 0.4s;
    cursor: pointer;
    :hover {
        color: rgb(89, 41, 248);
        transform: translate(-50%,10px);
    }
`

export default Home