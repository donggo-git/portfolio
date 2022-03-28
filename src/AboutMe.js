import React, { useState } from 'react'
import './AboutMe.css'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiPython, DiJava, DiReact, DiVisualstudio } from 'react-icons/di'
import { IoLogoFirebase } from 'react-icons/io5'


function AboutMe() {
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
    const tabHandle = (e, index) => {
        //change tab
        let temTabs = tabsIsActive;
        temTabs = temTabs.map(tab => tab = false)
        temTabs[index] = true
        setTabsIsActive(temTabs)

        //change tab content

    }
    return (
        <div className='AboutMe page'>
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
                            <p>LANGUAGE</p>
                            <div className='section__content'>
                                {skills.slice(0, 5).map(skill => (
                                    <div className='skill' key={skill.name}>
                                        {skill.icons}
                                        <p className='skill__name'>{skill.name}</p>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='section'>
                            <p>FRAME WORK & TECHNOLOGY</p>
                            <div className='section__content'>
                                {skills.slice(5).map(skill => (
                                    <div className='skill' key={skill.name}>
                                        {skill.icons}
                                        <div className='skill__name'>{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`tab__content tab__content--2 ${tabsIsActive[1] ? 'tab__content--active' : ''}`}>
                        <p>EDUCATION</p>
                        <div className='section'>
                            <div className='education'>
                                <img src="https://th.bing.com/th/id/OIP.OHErfLyQ6xZB8xhFGAllWgAAAA?w=168&h=169&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                                <div className='education_content'>
                                    <h5>SOUTH SEATTLE COLLEGE</h5>
                                    <p>degree: Associate of Science</p>
                                    <p>from: 01/2020  graduate: 10/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab__content tab__content--2 ${tabsIsActive[2] ? 'tab__content--active' : ''}`}></div>
                </div>
            </div>
        </div >
    )
}

export default AboutMe