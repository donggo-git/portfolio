import React, { useState } from 'react'
import './AboutMe.css'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiPython, DiJava, DiReact, DiVisualstudio } from 'react-icons/di'
import { IoLogoFirebase } from 'react-icons/io5'


function AboutMe({ scrollPosition }) {
    const tabs = ['Skill', 'Education', 'Addition']
    const [tabsIsActive, setTabsIsActive] = useState([true, false, false])
    const skills = [
        {
            name: 'HTML',
            icons: <AiFillHtml5 className='icon' />
        },
        {
            name: "CSS",
            icons: <DiCss3 className='icon' />
        },
        {
            name: 'JAVASCRIPT',
            icons: <DiJavascript1 className='icon' />
        },
        {
            name: 'PYTHON',
            icons: <DiPython className='icon' />
        },
        {
            name: 'JAVA',
            icons: <DiJava className='icon' />
        },
        {
            name: 'REACTJS',
            icons: <DiReact className='icon' />
        },
        {
            name: 'GITHUB',
            icons: <AiFillGithub className='icon' />
        },
        {
            name: 'FIREBASE',
            icons: <IoLogoFirebase className='icon' />
        },
        {
            name: 'VISUAL STUDIO CODE',
            icons: <DiVisualstudio className='icon' />
        }
    ]
    const skillApears = {
        opacity: 1,
        transitionDelay: 0.2
    }
    const tabHandle = (e, index) => {
        //change tab
        let temTabs = tabsIsActive;
        temTabs = temTabs.map(tab => tab = false)
        temTabs[index] = true
        setTabsIsActive(temTabs)
    }
    const windowHeight = window.innerHeight
    return (
        <div className='AboutMe page' name="ABOUT ME">
            <div className='tab_container'>
                <div className='tabs'>
                    {tabs.map((tab, index) => (
                        <div
                            className={`tab ${tabsIsActive[index] ? 'tab_active' : ''}`}
                            onClick={(e) => tabHandle(e, index)}
                            key={tab}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className='tabs__content__container'>
                    <div className={`tab__content tab__content--1 ${tabsIsActive[0] ? 'tab__content--active' : ''}`}>

                        <div className='section'>
                            <p>
                                LANGUAGE
                                <span
                                    className='section__p--bottom'
                                    style={scrollPosition >= windowHeight - 10 ? { width: '100%' } : {}}
                                ></span>
                            </p>

                            <div className='section__content'>
                                {skills.slice(0, 5).map((skill, index) => (
                                    <div
                                        className='skill' key={skill.name}
                                        style={
                                            scrollPosition >= windowHeight - 10 ?
                                                {
                                                    opacity: skillApears.opacity,
                                                    transitionDelay: `${skillApears.transitionDelay * index}s`
                                                } :
                                                {}
                                        }
                                    >
                                        {skill.icons}
                                        <p className='skill__name'>{skill.name}</p>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='section'>
                            <p>
                                FRAME WORK & TECHNOLOGY
                                <div
                                    className='section__p--bottom'
                                    style={scrollPosition >= windowHeight - 10 ? { width: '100%' } : {}}
                                ></div>
                            </p>

                            <div className='section__content'>
                                {skills.slice(5).map((skill, index) => (
                                    <div
                                        className='skill' key={skill.name}
                                        style={
                                            scrollPosition >= windowHeight - 10 ?
                                                {
                                                    opacity: skillApears.opacity,
                                                    transitionDelay: `${skillApears.transitionDelay * index}s`
                                                } :
                                                {}
                                        }
                                    >
                                        {skill.icons}
                                        <div className='skill__name'>{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`tab__content tab__content--2 ${tabsIsActive[1] ? 'tab__content--active' : ''}`}>
                        <div className='section'>
                            <p>
                                EDUCATION
                                <div
                                    className='section__p--bottom'
                                    style={scrollPosition >= windowHeight - 10 ? { width: '100%' } : {}}
                                />
                            </p>
                            <div
                                className='skill skill--education'
                                style={
                                    scrollPosition >= windowHeight - 10 ?
                                        {
                                            opacity: skillApears.opacity,
                                            transitionDelay: `${skillApears.transitionDelay}s`
                                        } :
                                        {}
                                }
                            >
                                <img src="https://th.bing.com/th/id/OIP.OHErfLyQ6xZB8xhFGAllWgAAAA?w=168&h=169&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                                <div className='skill--education_content'>
                                    <h5>SOUTH SEATTLE COLLEGE</h5>
                                    <p>degree: Associate of Science</p>
                                    <p>from: 01/2020  graduate: 10/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab__content tab__content--3 ${tabsIsActive[2] ? 'tab__content--active' : ''}`}>
                        <div className='section'>
                            <p>
                                ADDITION
                                <div
                                    className='section__p--bottom'
                                    style={scrollPosition >= windowHeight - 10 ? { width: '100%' } : {}}
                                />
                            </p>
                            <div
                                className='skill skill-addition'
                                style={
                                    scrollPosition >= windowHeight - 10 ?
                                        {
                                            opacity: skillApears.opacity,
                                            transitionDelay: `${skillApears.transitionDelay}s`
                                        } :
                                        {}
                                }
                            >
                                <p>
                                    These are the things I don't put in my resume, but it's a part that define my personality.
                                    Hope that it can match with your company environment by some how:
                                </p>
                                <ol>
                                    <li>I'm a Vietnamese, so I can speak Vietnamese very well</li>
                                    <li>I'm very good at communication since I used to work at a restaurant as a food server</li>
                                    <li>I'm pretty confident with my Math since I used to participate and got certificate in a Math competition in Vietnam</li>
                                    <li>I like to play soccer and video game</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutMe