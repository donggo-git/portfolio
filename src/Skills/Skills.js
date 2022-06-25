import React, { useState } from 'react'
import './Skills.css'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiPython, DiJava, DiReact } from 'react-icons/di'
import { AiOutlineClose } from 'react-icons/ai'
import { IoLogoFirebase } from 'react-icons/io5'
import styled from 'styled-components'

function AboutMe() {
    const [isSkillNotice, setIsSkillNotice] = useState(false);
    const skills = [
        {
            name: 'HTML',
            icon: <AiFillHtml5 className='icon' />
        },
        {
            name: "CSS",
            icon: <DiCss3 className='icon' />
        },
        {
            name: 'JAVASCRIPT',
            icon: <DiJavascript1 className='icon' />
        },
        {
            name: 'PYTHON',
            icon: <DiPython className='icon' />
        },
        {
            name: 'JAVA',
            icon: <DiJava className='icon' />
        },
        {
            name: 'REACTJS',
            icon: <DiReact className='icon' />
        },
        {
            name: 'GITHUB',
            icon: <AiFillGithub className='icon' />
        },
        {
            name: 'FIREBASE',
            icon: <IoLogoFirebase className='icon' />
        },]
    const handleSkillNotice = () => {
        console.log('hello')
        setIsSkillNotice(!isSkillNotice)
    }
    return (
        <SkillsContainer className='page' name="ABOUT ME">
            <SkillTitle>My skills and knowledge</SkillTitle>
            <SkillList>
                {skills.map(skill => (
                    <SkillItem
                        key={skill.name}
                        onClick={handleSkillNotice}
                    >
                        {skill.icon}
                        <SkillItemName>{skill.name}</SkillItemName>
                    </SkillItem>
                ))}
            </SkillList>
            <SkillNotice
                isSkillNotice={isSkillNotice}
            >
                <CloseBtn
                    onClick={handleSkillNotice}
                >
                    <AiOutlineClose />
                </CloseBtn>
                <ul>
                    <li>
                        Basic level of HTML, CSS, Javascript, React (learn from Udemy, and Freecodecamp)
                    </li>
                    <li>
                        Basic level of Python and Java (learned from South Seattle College)                    </li>
                    <li>
                        Basic level of github and firebase (learned from Youtube)
                    </li>
                </ul>
            </SkillNotice>
        </SkillsContainer >
    )
}

const SkillsContainer = styled.div`
background: linear-gradient(0deg, rgba(72, 39, 182, 0.63), rgba(72, 39, 182, 0.63)),
linear-gradient(0deg, #5929F8, #5929F8);
position: relative;
`
const SkillTitle = styled.h3`
    padding: 30px 0;
    padding-top: 80px;
    margin: 0 auto;
    width: fit-content;
    font-size: 32px;
    font-weight: 400px;
    @media screen and (max-width:1000px){
        padding-top: 30px
    }
`
const SkillList = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 12vw 12vw 12vw 12vw;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 50vh;
    @media screen and (max-width:1000px){
        width: 80%;
        grid-template-columns: 50% 50%;
    }
`
const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    cursor: pointer;
    transition: color 0.2s;
    svg{
        font-size: 100px;
    }
    :hover{
        color: rgb(255,135,24);
    }
    @media screen and (max-width: 1000px){
        height: 150px;
    }
`
const SkillItemName = styled.p`
    font-size: 20px;
`
const SkillNotice = styled.div`
    width: 60%;
    height: 50vh;
    position: absolute;
    top: 132px;
    left: 50%;
    transform: translate(-50%,0%) scale(${props => props.isSkillNotice && window.innerWidth > 1000 ? '1' : '0'});
    background-color: rgba(175, 125, 255, 1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.4s ease-in-out;
    opacity: ${props => props.isSkillNotice && window.innerWidth > 1000 ? '1' : '0'};
    ul{
        font-size: 20px;
        margin: 20px 30px;
    }
    li{
        margin: 20px 0;
    }
`
const CloseBtn = styled.button`
    font-size: 20px;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    cursor: pointer; 
`
export default AboutMe